import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { GetTokenBalancesParams, GetTokenDefinitionsParams } from '~position/template/contract-position.template.types';
import { VotingEscrowTemplateContractPositionFetcher } from '~position/template/voting-escrow.template.contract-position-fetcher';

import { PendleV2ContractFactory, PendleVotingEscrow } from '../contracts';

@PositionTemplate()
export class EthereumPendleV2VotingEscrowContractPositionFetcher extends VotingEscrowTemplateContractPositionFetcher<PendleVotingEscrow> {
  groupLabel = 'Voting Escrow';
  veTokenAddress = '0x4f30a9d41b80ecc5b94306ab4364951ae3170210';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(PendleV2ContractFactory) protected readonly pendleV2ContractFactory: PendleV2ContractFactory,
  ) {
    super(appToolkit);
  }

  getEscrowContract(address: string) {
    return this.pendleV2ContractFactory.pendleVotingEscrow({ address, network: this.network });
  }

  getEscrowedTokenAddress({ contract }: GetTokenDefinitionsParams<PendleVotingEscrow>) {
    return contract.pendle();
  }

  async getEscrowedTokenBalance({ contract, address }: GetTokenBalancesParams<PendleVotingEscrow>) {
    return contract.positionData(address).then(data => data.amount);
  }
}
