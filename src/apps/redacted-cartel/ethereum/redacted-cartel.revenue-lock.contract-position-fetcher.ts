import { Inject } from '@nestjs/common';
import { BigNumberish, Contract } from 'ethers';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { ZERO_ADDRESS } from '~app-toolkit/constants/address';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { getLabelFromToken } from '~app-toolkit/helpers/presentation/image.present';
import { DefaultDataProps } from '~position/display.interface';
import { MetaType } from '~position/position.interface';
import { isSupplied } from '~position/position.utils';
import { ContractPositionTemplatePositionFetcher } from '~position/template/contract-position.template.position-fetcher';
import {
  GetDefinitionsParams,
  DefaultContractPositionDefinition,
  GetTokenDefinitionsParams,
  UnderlyingTokenDefinition,
  GetDisplayPropsParams,
  GetTokenBalancesParams,
} from '~position/template/contract-position.template.types';

import { RedactedEarningsResolver } from '../common/redacted.earnings-resolver';
import { RedactedCartelContractFactory, RedactedRevenueLock } from '../contracts';

@PositionTemplate()
export class EthereumRedactedCartelRevenueLockContractPositionFetcher extends ContractPositionTemplatePositionFetcher<RedactedRevenueLock> {
  groupLabel = 'Revenue Lock';
  rlBTRFLY = '0x742b70151cd3bc7ab598aaff1d54b90c3ebc6027';
  BTRFLYv2 = '0xc55126051b22ebb829d00368f4b12bde432de5da';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(RedactedCartelContractFactory) protected readonly contractFactory: RedactedCartelContractFactory,
    @Inject(RedactedEarningsResolver) protected readonly earningsResolver: RedactedEarningsResolver,
  ) {
    super(appToolkit);
  }

  getContract(address: string): RedactedRevenueLock {
    return this.contractFactory.redactedRevenueLock({ address, network: this.network });
  }

  async getDefinitions(_params: GetDefinitionsParams): Promise<DefaultContractPositionDefinition[]> {
    return [{ address: this.rlBTRFLY }];
  }

  async getTokenDefinitions(
    _params: GetTokenDefinitionsParams<Contract, DefaultContractPositionDefinition>,
  ): Promise<UnderlyingTokenDefinition[] | null> {
    return [
      {
        metaType: MetaType.SUPPLIED,
        address: this.BTRFLYv2,
        network: this.network,
      },
      {
        metaType: MetaType.CLAIMABLE,
        address: this.BTRFLYv2,
        network: this.network,
      },
      {
        metaType: MetaType.CLAIMABLE,
        address: ZERO_ADDRESS,
        network: this.network,
      },
    ];
  }

  async getLabel({
    contractPosition,
  }: GetDisplayPropsParams<Contract, DefaultDataProps, DefaultContractPositionDefinition>): Promise<string> {
    const suppliedToken = contractPosition.tokens.find(isSupplied)!;
    return `Voting Escrow ${getLabelFromToken(suppliedToken)}`;
  }

  async getTokenBalancesPerPosition({
    address,
    contract,
  }: GetTokenBalancesParams<Contract, DefaultDataProps>): Promise<BigNumberish[]> {
    const { total } = await contract.lockedBalances(address);

    const [claimableBTRFLY, claimableETH] = await this.earningsResolver.getClaimableAmount(address, this.network);
    return [total, claimableBTRFLY, claimableETH];
  }
}
