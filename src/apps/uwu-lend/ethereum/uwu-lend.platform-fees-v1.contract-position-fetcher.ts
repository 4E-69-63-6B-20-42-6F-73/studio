import { Inject } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { ZERO_ADDRESS } from '~app-toolkit/constants/address';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { buildDollarDisplayItem } from '~app-toolkit/helpers/presentation/display-item.present';
import { getTokenImg } from '~app-toolkit/helpers/presentation/image.present';
import { DisplayProps } from '~position/display.interface';
import { MetaType } from '~position/position.interface';
import { ContractPositionTemplatePositionFetcher } from '~position/template/contract-position.template.position-fetcher';
import {
  GetDisplayPropsParams,
  GetTokenBalancesParams,
  GetTokenDefinitionsParams,
} from '~position/template/contract-position.template.types';

import { UwuLendContractFactory, UwuLendStakingV1 } from '../contracts';

@PositionTemplate()
export class EthereumUwuLendPlatformFeesV1PositionFetcher extends ContractPositionTemplatePositionFetcher<UwuLendStakingV1> {
  groupLabel = 'Platform Fees V1';

  uwuLendLpTokenAddress = '0x3e04863dba602713bb5d0edbf7db7c3a9a2b6027';
  // Temporary removed from rewards until CG support SIFUM
  NotSupportedToken = '0x8028ea7da2ea9bcb9288c1f6f603169b8aea90a6';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(UwuLendContractFactory) private readonly contractFactory: UwuLendContractFactory,
  ) {
    super(appToolkit);
  }

  async getDefinitions() {
    const uwuLendStakingV1Address = '0x7c0bf1108935e7105e218bbb4f670e5942c5e237';
    return [{ address: uwuLendStakingV1Address }];
  }

  getContract(address: string) {
    return this.contractFactory.uwuLendStakingV1({ address, network: this.network });
  }

  async getTokenDefinitions({ contract }: GetTokenDefinitionsParams<UwuLendStakingV1>) {
    const [rewards, uwuTokenAddressRaw] = await Promise.all([
      contract.claimableRewards(ZERO_ADDRESS),
      contract.rewardToken(),
    ]);
    const rewardTokenAddressesRaw = rewards.map(x => x.token.toLowerCase()).filter(x => x !== this.NotSupportedToken);

    return [
      {
        metaType: MetaType.LOCKED,
        address: this.uwuLendLpTokenAddress, // Locked UWU/WETH LP
        network: this.network,
      },
      {
        metaType: MetaType.CLAIMABLE,
        address: uwuTokenAddressRaw.toLowerCase(), // Vested/Unlocked UWU
        network: this.network,
      },
      ...rewardTokenAddressesRaw
        .map(address => ({
          metaType: MetaType.CLAIMABLE,
          address: address.toLowerCase(),
          network: this.network,
        }))
        .filter(({ address }) => address !== uwuTokenAddressRaw.toLowerCase()),
    ];
  }

  async getLabel(): Promise<string> {
    return 'UWU Locking';
  }

  async getSecondaryLabel(params: GetDisplayPropsParams<UwuLendStakingV1>): Promise<DisplayProps['secondaryLabel']> {
    const rewardToken = params.contractPosition.tokens[0];
    return buildDollarDisplayItem(rewardToken.price);
  }

  async getImages({ contractPosition }: GetDisplayPropsParams<UwuLendStakingV1>): Promise<string[]> {
    return [getTokenImg(contractPosition.tokens[1].address, this.network)];
  }

  async getTokenBalancesPerPosition({ address, contract, contractPosition }: GetTokenBalancesParams<UwuLendStakingV1>) {
    const [lockedBalancesData, withdrawableDataRaw, platformFeesPlatformFees] = await Promise.all([
      contract.lockedBalances(address),
      contract.withdrawableBalance(address),
      contract.claimableRewards(address),
    ]);

    const withdrawableBalanceRaw = withdrawableDataRaw.amount.sub(withdrawableDataRaw.penaltyAmount).toString();

    return contractPosition.tokens.map((token, idx) => {
      if (idx === 0) return lockedBalancesData.total; // Locked UWU/WETH LP
      if (idx === 1) return withdrawableBalanceRaw; // Vested/Unlocked UWU

      const rewardTokenMatch = platformFeesPlatformFees.find(
        ([tokenAddressRaw]) => tokenAddressRaw.toLowerCase() === token.address,
      );

      return rewardTokenMatch?.amount ?? 0;
    });
  }
}
