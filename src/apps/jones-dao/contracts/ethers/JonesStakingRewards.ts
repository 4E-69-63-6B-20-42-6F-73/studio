/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface JonesStakingRewardsInterface extends utils.Interface {
  functions: {
    'addToContractWhitelist(address)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'boost()': FunctionFragment;
    'boostedFinish()': FunctionFragment;
    'boostedTimePeriod()': FunctionFragment;
    'compound()': FunctionFragment;
    'earned(address)': FunctionFragment;
    'exit()': FunctionFragment;
    'getReward()': FunctionFragment;
    'id()': FunctionFragment;
    'isContract(address)': FunctionFragment;
    'lastTimeRewardApplicable()': FunctionFragment;
    'lastUpdateTime()': FunctionFragment;
    'notifyRewardAmount(uint256)': FunctionFragment;
    'periodFinish()': FunctionFragment;
    'removeFromContractWhitelist(address)': FunctionFragment;
    'rewardPerToken()': FunctionFragment;
    'rewardPerTokenStoredJONES()': FunctionFragment;
    'rewardRateJONES()': FunctionFragment;
    'rewardsDuration()': FunctionFragment;
    'rewardsJONES(address)': FunctionFragment;
    'rewardsTokenJONES()': FunctionFragment;
    'stake(uint256)': FunctionFragment;
    'stakingToken()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'userJONESRewardPerTokenPaid(address)': FunctionFragment;
    'whitelistedContracts(address)': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
    'withdrawRewardTokens(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'addToContractWhitelist'
      | 'balanceOf'
      | 'boost'
      | 'boostedFinish'
      | 'boostedTimePeriod'
      | 'compound'
      | 'earned'
      | 'exit'
      | 'getReward'
      | 'id'
      | 'isContract'
      | 'lastTimeRewardApplicable'
      | 'lastUpdateTime'
      | 'notifyRewardAmount'
      | 'periodFinish'
      | 'removeFromContractWhitelist'
      | 'rewardPerToken'
      | 'rewardPerTokenStoredJONES'
      | 'rewardRateJONES'
      | 'rewardsDuration'
      | 'rewardsJONES'
      | 'rewardsTokenJONES'
      | 'stake'
      | 'stakingToken'
      | 'totalSupply'
      | 'userJONESRewardPerTokenPaid'
      | 'whitelistedContracts'
      | 'withdraw'
      | 'withdrawRewardTokens',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'addToContractWhitelist', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'boost', values?: undefined): string;
  encodeFunctionData(functionFragment: 'boostedFinish', values?: undefined): string;
  encodeFunctionData(functionFragment: 'boostedTimePeriod', values?: undefined): string;
  encodeFunctionData(functionFragment: 'compound', values?: undefined): string;
  encodeFunctionData(functionFragment: 'earned', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'exit', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getReward', values?: undefined): string;
  encodeFunctionData(functionFragment: 'id', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isContract', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'lastTimeRewardApplicable', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastUpdateTime', values?: undefined): string;
  encodeFunctionData(functionFragment: 'notifyRewardAmount', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'periodFinish', values?: undefined): string;
  encodeFunctionData(functionFragment: 'removeFromContractWhitelist', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'rewardPerToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardPerTokenStoredJONES', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardRateJONES', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardsDuration', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardsJONES', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'rewardsTokenJONES', values?: undefined): string;
  encodeFunctionData(functionFragment: 'stake', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'stakingToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'userJONESRewardPerTokenPaid', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'whitelistedContracts', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'withdrawRewardTokens', values: [PromiseOrValue<BigNumberish>]): string;

  decodeFunctionResult(functionFragment: 'addToContractWhitelist', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'boost', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'boostedFinish', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'boostedTimePeriod', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'compound', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'earned', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'id', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastTimeRewardApplicable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastUpdateTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'notifyRewardAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'periodFinish', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeFromContractWhitelist', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerTokenStoredJONES', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardRateJONES', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardsDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardsJONES', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardsTokenJONES', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakingToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userJONESRewardPerTokenPaid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'whitelistedContracts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawRewardTokens', data: BytesLike): Result;

  events: {
    'AddToContractWhitelist(address)': EventFragment;
    'RemoveFromContractWhitelist(address)': EventFragment;
    'RewardAdded(uint256)': EventFragment;
    'RewardCompounded(address,uint256)': EventFragment;
    'RewardPaid(address,uint256)': EventFragment;
    'RewardUpdated(uint256)': EventFragment;
    'Staked(address,uint256)': EventFragment;
    'Withdrawn(address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AddToContractWhitelist'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RemoveFromContractWhitelist'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardCompounded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardPaid'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Staked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdrawn'): EventFragment;
}

export interface AddToContractWhitelistEventObject {
  _contract: string;
}
export type AddToContractWhitelistEvent = TypedEvent<[string], AddToContractWhitelistEventObject>;

export type AddToContractWhitelistEventFilter = TypedEventFilter<AddToContractWhitelistEvent>;

export interface RemoveFromContractWhitelistEventObject {
  _contract: string;
}
export type RemoveFromContractWhitelistEvent = TypedEvent<[string], RemoveFromContractWhitelistEventObject>;

export type RemoveFromContractWhitelistEventFilter = TypedEventFilter<RemoveFromContractWhitelistEvent>;

export interface RewardAddedEventObject {
  rewardJONES: BigNumber;
}
export type RewardAddedEvent = TypedEvent<[BigNumber], RewardAddedEventObject>;

export type RewardAddedEventFilter = TypedEventFilter<RewardAddedEvent>;

export interface RewardCompoundedEventObject {
  user: string;
  rewardJONES: BigNumber;
}
export type RewardCompoundedEvent = TypedEvent<[string, BigNumber], RewardCompoundedEventObject>;

export type RewardCompoundedEventFilter = TypedEventFilter<RewardCompoundedEvent>;

export interface RewardPaidEventObject {
  user: string;
  reward: BigNumber;
}
export type RewardPaidEvent = TypedEvent<[string, BigNumber], RewardPaidEventObject>;

export type RewardPaidEventFilter = TypedEventFilter<RewardPaidEvent>;

export interface RewardUpdatedEventObject {
  rewardJONES: BigNumber;
}
export type RewardUpdatedEvent = TypedEvent<[BigNumber], RewardUpdatedEventObject>;

export type RewardUpdatedEventFilter = TypedEventFilter<RewardUpdatedEvent>;

export interface StakedEventObject {
  user: string;
  amount: BigNumber;
}
export type StakedEvent = TypedEvent<[string, BigNumber], StakedEventObject>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export interface WithdrawnEventObject {
  user: string;
  amount: BigNumber;
}
export type WithdrawnEvent = TypedEvent<[string, BigNumber], WithdrawnEventObject>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface JonesStakingRewards extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JonesStakingRewardsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addToContractWhitelist(
      _contract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    balanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    boost(overrides?: CallOverrides): Promise<[BigNumber]>;

    boostedFinish(overrides?: CallOverrides): Promise<[BigNumber]>;

    boostedTimePeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    compound(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    earned(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { JONEStokensEarned: BigNumber }>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    id(overrides?: CallOverrides): Promise<[BigNumber]>;

    isContract(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    notifyRewardAmount(
      _rewardJONES: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    periodFinish(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeFromContractWhitelist(
      _contract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    rewardPerToken(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerTokenStoredJONES(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardRateJONES(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardsDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardsJONES(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardsTokenJONES(overrides?: CallOverrides): Promise<[string]>;

    stake(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    userJONESRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    whitelistedContracts(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    withdrawRewardTokens(
      _amountJONES: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  addToContractWhitelist(
    _contract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  balanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  boost(overrides?: CallOverrides): Promise<BigNumber>;

  boostedFinish(overrides?: CallOverrides): Promise<BigNumber>;

  boostedTimePeriod(overrides?: CallOverrides): Promise<BigNumber>;

  compound(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  earned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  id(overrides?: CallOverrides): Promise<BigNumber>;

  isContract(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

  lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  notifyRewardAmount(
    _rewardJONES: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

  removeFromContractWhitelist(
    _contract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerTokenStoredJONES(overrides?: CallOverrides): Promise<BigNumber>;

  rewardRateJONES(overrides?: CallOverrides): Promise<BigNumber>;

  rewardsDuration(overrides?: CallOverrides): Promise<BigNumber>;

  rewardsJONES(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  rewardsTokenJONES(overrides?: CallOverrides): Promise<string>;

  stake(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  stakingToken(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  userJONESRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  whitelistedContracts(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  withdraw(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  withdrawRewardTokens(
    _amountJONES: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    addToContractWhitelist(_contract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    balanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    boost(overrides?: CallOverrides): Promise<BigNumber>;

    boostedFinish(overrides?: CallOverrides): Promise<BigNumber>;

    boostedTimePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    compound(overrides?: CallOverrides): Promise<void>;

    earned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    exit(overrides?: CallOverrides): Promise<void>;

    getReward(overrides?: CallOverrides): Promise<void>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    isContract(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(_rewardJONES: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    removeFromContractWhitelist(_contract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStoredJONES(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRateJONES(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsDuration(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsJONES(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    rewardsTokenJONES(overrides?: CallOverrides): Promise<string>;

    stake(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    stakingToken(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    userJONESRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    whitelistedContracts(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    withdraw(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    withdrawRewardTokens(_amountJONES: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'AddToContractWhitelist(address)'(_contract?: PromiseOrValue<string> | null): AddToContractWhitelistEventFilter;
    AddToContractWhitelist(_contract?: PromiseOrValue<string> | null): AddToContractWhitelistEventFilter;

    'RemoveFromContractWhitelist(address)'(
      _contract?: PromiseOrValue<string> | null,
    ): RemoveFromContractWhitelistEventFilter;
    RemoveFromContractWhitelist(_contract?: PromiseOrValue<string> | null): RemoveFromContractWhitelistEventFilter;

    'RewardAdded(uint256)'(rewardJONES?: null): RewardAddedEventFilter;
    RewardAdded(rewardJONES?: null): RewardAddedEventFilter;

    'RewardCompounded(address,uint256)'(
      user?: PromiseOrValue<string> | null,
      rewardJONES?: null,
    ): RewardCompoundedEventFilter;
    RewardCompounded(user?: PromiseOrValue<string> | null, rewardJONES?: null): RewardCompoundedEventFilter;

    'RewardPaid(address,uint256)'(user?: PromiseOrValue<string> | null, reward?: null): RewardPaidEventFilter;
    RewardPaid(user?: PromiseOrValue<string> | null, reward?: null): RewardPaidEventFilter;

    'RewardUpdated(uint256)'(rewardJONES?: null): RewardUpdatedEventFilter;
    RewardUpdated(rewardJONES?: null): RewardUpdatedEventFilter;

    'Staked(address,uint256)'(user?: PromiseOrValue<string> | null, amount?: null): StakedEventFilter;
    Staked(user?: PromiseOrValue<string> | null, amount?: null): StakedEventFilter;

    'Withdrawn(address,uint256)'(user?: PromiseOrValue<string> | null, amount?: null): WithdrawnEventFilter;
    Withdrawn(user?: PromiseOrValue<string> | null, amount?: null): WithdrawnEventFilter;
  };

  estimateGas: {
    addToContractWhitelist(
      _contract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    balanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    boost(overrides?: CallOverrides): Promise<BigNumber>;

    boostedFinish(overrides?: CallOverrides): Promise<BigNumber>;

    boostedTimePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    compound(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    earned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    isContract(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      _rewardJONES: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    removeFromContractWhitelist(
      _contract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStoredJONES(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRateJONES(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsDuration(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsJONES(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    rewardsTokenJONES(overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    stakingToken(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    userJONESRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    whitelistedContracts(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    withdrawRewardTokens(
      _amountJONES: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addToContractWhitelist(
      _contract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    boost(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    boostedFinish(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    boostedTimePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    compound(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    earned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isContract(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      _rewardJONES: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    periodFinish(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeFromContractWhitelist(
      _contract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    rewardPerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerTokenStoredJONES(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardRateJONES(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsJONES(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsTokenJONES(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stake(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userJONESRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    whitelistedContracts(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    withdrawRewardTokens(
      _amountJONES: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
