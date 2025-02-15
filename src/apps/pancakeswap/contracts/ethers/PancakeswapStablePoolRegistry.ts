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

export declare namespace PancakeStableSwapFactory {
  export type StableSwapPairInfoStruct = {
    swapContract: PromiseOrValue<string>;
    token0: PromiseOrValue<string>;
    token1: PromiseOrValue<string>;
    LPContract: PromiseOrValue<string>;
  };

  export type StableSwapPairInfoStructOutput = [string, string, string, string] & {
    swapContract: string;
    token0: string;
    token1: string;
    LPContract: string;
  };
}

export interface PancakeswapStablePoolRegistryInterface extends utils.Interface {
  functions: {
    'N_COINS()': FunctionFragment;
    'createSwapPair(address,address,uint256,uint256,uint256)': FunctionFragment;
    'getPairInfo(address,address)': FunctionFragment;
    'owner()': FunctionFragment;
    'pairLength()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'swapPairContract(uint256)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'N_COINS'
      | 'createSwapPair'
      | 'getPairInfo'
      | 'owner'
      | 'pairLength'
      | 'renounceOwnership'
      | 'swapPairContract'
      | 'transferOwnership',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'N_COINS', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'createSwapPair',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'getPairInfo', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pairLength', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'swapPairContract', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'N_COINS', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'createSwapPair', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPairInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pairLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swapPairContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;

  events: {
    'NewStableSwapPair(address,address,address)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'NewStableSwapPair'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export interface NewStableSwapPairEventObject {
  swapContract: string;
  tokenA: string;
  tokenB: string;
}
export type NewStableSwapPairEvent = TypedEvent<[string, string, string], NewStableSwapPairEventObject>;

export type NewStableSwapPairEventFilter = TypedEventFilter<NewStableSwapPairEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface PancakeswapStablePoolRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PancakeswapStablePoolRegistryInterface;

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
    N_COINS(overrides?: CallOverrides): Promise<[BigNumber]>;

    createSwapPair(
      _tokenA: PromiseOrValue<string>,
      _tokenB: PromiseOrValue<string>,
      _A: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _admin_fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getPairInfo(
      _tokenA: PromiseOrValue<string>,
      _tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [PancakeStableSwapFactory.StableSwapPairInfoStructOutput] & {
        info: PancakeStableSwapFactory.StableSwapPairInfoStructOutput;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pairLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    swapPairContract(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  N_COINS(overrides?: CallOverrides): Promise<BigNumber>;

  createSwapPair(
    _tokenA: PromiseOrValue<string>,
    _tokenB: PromiseOrValue<string>,
    _A: PromiseOrValue<BigNumberish>,
    _fee: PromiseOrValue<BigNumberish>,
    _admin_fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getPairInfo(
    _tokenA: PromiseOrValue<string>,
    _tokenB: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<PancakeStableSwapFactory.StableSwapPairInfoStructOutput>;

  owner(overrides?: CallOverrides): Promise<string>;

  pairLength(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  swapPairContract(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    N_COINS(overrides?: CallOverrides): Promise<BigNumber>;

    createSwapPair(
      _tokenA: PromiseOrValue<string>,
      _tokenB: PromiseOrValue<string>,
      _A: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _admin_fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    getPairInfo(
      _tokenA: PromiseOrValue<string>,
      _tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PancakeStableSwapFactory.StableSwapPairInfoStructOutput>;

    owner(overrides?: CallOverrides): Promise<string>;

    pairLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    swapPairContract(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'NewStableSwapPair(address,address,address)'(
      swapContract?: PromiseOrValue<string> | null,
      tokenA?: PromiseOrValue<string> | null,
      tokenB?: PromiseOrValue<string> | null,
    ): NewStableSwapPairEventFilter;
    NewStableSwapPair(
      swapContract?: PromiseOrValue<string> | null,
      tokenA?: PromiseOrValue<string> | null,
      tokenB?: PromiseOrValue<string> | null,
    ): NewStableSwapPairEventFilter;

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
    N_COINS(overrides?: CallOverrides): Promise<BigNumber>;

    createSwapPair(
      _tokenA: PromiseOrValue<string>,
      _tokenB: PromiseOrValue<string>,
      _A: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _admin_fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getPairInfo(
      _tokenA: PromiseOrValue<string>,
      _tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pairLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    swapPairContract(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    N_COINS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createSwapPair(
      _tokenA: PromiseOrValue<string>,
      _tokenB: PromiseOrValue<string>,
      _A: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _admin_fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getPairInfo(
      _tokenA: PromiseOrValue<string>,
      _tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pairLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    swapPairContract(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
