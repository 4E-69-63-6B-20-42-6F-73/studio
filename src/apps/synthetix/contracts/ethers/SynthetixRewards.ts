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
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface SynthetixRewardsInterface extends utils.Interface {
  functions: {
    'earned(address)': FunctionFragment;
    'rewards(address)': FunctionFragment;
    'setRewardDistribution(address)': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'DURATION()': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
    'notifyRewardAmount(uint256)': FunctionFragment;
    'getReward()': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'rewardRate()': FunctionFragment;
    'lastTimeRewardApplicable()': FunctionFragment;
    'userRewardPerTokenPaid(address)': FunctionFragment;
    'owner()': FunctionFragment;
    'isOwner()': FunctionFragment;
    'stake(uint256)': FunctionFragment;
    'lastUpdateTime()': FunctionFragment;
    'rewardPerToken()': FunctionFragment;
    'rewardPerTokenStored()': FunctionFragment;
    'snx()': FunctionFragment;
    'exit()': FunctionFragment;
    'periodFinish()': FunctionFragment;
    'uni()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'earned'
      | 'rewards'
      | 'setRewardDistribution'
      | 'totalSupply'
      | 'DURATION'
      | 'withdraw'
      | 'notifyRewardAmount'
      | 'getReward'
      | 'balanceOf'
      | 'renounceOwnership'
      | 'rewardRate'
      | 'lastTimeRewardApplicable'
      | 'userRewardPerTokenPaid'
      | 'owner'
      | 'isOwner'
      | 'stake'
      | 'lastUpdateTime'
      | 'rewardPerToken'
      | 'rewardPerTokenStored'
      | 'snx'
      | 'exit'
      | 'periodFinish'
      | 'uni'
      | 'transferOwnership',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'earned', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'rewards', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setRewardDistribution', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'DURATION', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'notifyRewardAmount', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'getReward', values?: undefined): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardRate', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastTimeRewardApplicable', values?: undefined): string;
  encodeFunctionData(functionFragment: 'userRewardPerTokenPaid', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'stake', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'lastUpdateTime', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardPerToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardPerTokenStored', values?: undefined): string;
  encodeFunctionData(functionFragment: 'snx', values?: undefined): string;
  encodeFunctionData(functionFragment: 'exit', values?: undefined): string;
  encodeFunctionData(functionFragment: 'periodFinish', values?: undefined): string;
  encodeFunctionData(functionFragment: 'uni', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'earned', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setRewardDistribution', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'DURATION', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'notifyRewardAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastTimeRewardApplicable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userRewardPerTokenPaid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastUpdateTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerTokenStored', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'snx', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'periodFinish', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'uni', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;

  events: {
    'RewardAdded(uint256)': EventFragment;
    'Staked(address,uint256)': EventFragment;
    'Withdrawn(address,uint256)': EventFragment;
    'RewardPaid(address,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'RewardAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Staked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdrawn'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardPaid'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export interface RewardAddedEventObject {
  reward: BigNumber;
}
export type RewardAddedEvent = TypedEvent<[BigNumber], RewardAddedEventObject>;

export type RewardAddedEventFilter = TypedEventFilter<RewardAddedEvent>;

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

export interface RewardPaidEventObject {
  user: string;
  reward: BigNumber;
}
export type RewardPaidEvent = TypedEvent<[string, BigNumber], RewardPaidEventObject>;

export type RewardPaidEventFilter = TypedEventFilter<RewardPaidEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface SynthetixRewards extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SynthetixRewardsInterface;

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
    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    setRewardDistribution(
      _rewardDistribution: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    rewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<[BigNumber]>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    stake(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerToken(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    snx(overrides?: CallOverrides): Promise<[string]>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    periodFinish(overrides?: CallOverrides): Promise<[BigNumber]>;

    uni(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  setRewardDistribution(
    _rewardDistribution: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  notifyRewardAmount(
    reward: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

  lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

  userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  stake(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

  snx(overrides?: CallOverrides): Promise<string>;

  exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

  uni(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    setRewardDistribution(_rewardDistribution: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    notifyRewardAmount(reward: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    getReward(overrides?: CallOverrides): Promise<void>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    stake(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    snx(overrides?: CallOverrides): Promise<string>;

    exit(overrides?: CallOverrides): Promise<void>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    uni(overrides?: CallOverrides): Promise<string>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'RewardAdded(uint256)'(reward?: null): RewardAddedEventFilter;
    RewardAdded(reward?: null): RewardAddedEventFilter;

    'Staked(address,uint256)'(user?: PromiseOrValue<string> | null, amount?: null): StakedEventFilter;
    Staked(user?: PromiseOrValue<string> | null, amount?: null): StakedEventFilter;

    'Withdrawn(address,uint256)'(user?: PromiseOrValue<string> | null, amount?: null): WithdrawnEventFilter;
    Withdrawn(user?: PromiseOrValue<string> | null, amount?: null): WithdrawnEventFilter;

    'RewardPaid(address,uint256)'(user?: PromiseOrValue<string> | null, reward?: null): RewardPaidEventFilter;
    RewardPaid(user?: PromiseOrValue<string> | null, reward?: null): RewardPaidEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    setRewardDistribution(
      _rewardDistribution: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    snx(overrides?: CallOverrides): Promise<BigNumber>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    uni(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRewardDistribution(
      _rewardDistribution: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    rewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stake(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    snx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    periodFinish(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uni(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
