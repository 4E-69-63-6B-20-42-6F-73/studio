import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';

import { MuxMlpTokenFetcher } from '../common/mux.mlp.token-fetcher';

@PositionTemplate()
export class FantomMuxMlpTokenFetcher extends MuxMlpTokenFetcher {
  groupLabel = 'MUX LP';
  mlpAddress = '0xddade9a8da4851960dfcff1ae4a18ee75c39edd2';
  poolAddress = '0x2e81f443a11a943196c88afcb5a0d807721a88e6';
  subgraphUrl = 'https://api.thegraph.com/subgraphs/name/mux-world/mux-ftm';
}
