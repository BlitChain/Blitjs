import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "tendermint.types";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
    block: BlockParams;
    evidence: EvidenceParams;
    validator: ValidatorParams;
    version: VersionParams;
}
export interface ConsensusParamsProtoMsg {
    type_url: "/tendermint.types.ConsensusParams";
    value: Uint8Array;
}
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParamsAmino {
    block?: BlockParamsAmino;
    evidence?: EvidenceParamsAmino;
    validator?: ValidatorParamsAmino;
    version?: VersionParamsAmino;
}
export interface ConsensusParamsAminoMsg {
    type: "/tendermint.types.ConsensusParams";
    value: ConsensusParamsAmino;
}
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParamsSDKType {
    block: BlockParamsSDKType;
    evidence: EvidenceParamsSDKType;
    validator: ValidatorParamsSDKType;
    version: VersionParamsSDKType;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /**
     * Max block size, in bytes.
     * Note: must be greater than 0
     */
    max_bytes: bigint;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     */
    max_gas: bigint;
    /**
     * Minimum time increment between consecutive blocks (in milliseconds) If the
     * block header timestamp is ahead of the system clock, decrease this value.
     *
     * Not exposed to the application.
     */
    time_iota_ms: bigint;
}
export interface BlockParamsProtoMsg {
    type_url: "/tendermint.types.BlockParams";
    value: Uint8Array;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsAmino {
    /**
     * Max block size, in bytes.
     * Note: must be greater than 0
     */
    max_bytes: string;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     */
    max_gas: string;
    /**
     * Minimum time increment between consecutive blocks (in milliseconds) If the
     * block header timestamp is ahead of the system clock, decrease this value.
     *
     * Not exposed to the application.
     */
    time_iota_ms: string;
}
export interface BlockParamsAminoMsg {
    type: "/tendermint.types.BlockParams";
    value: BlockParamsAmino;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsSDKType {
    max_bytes: bigint;
    max_gas: bigint;
    time_iota_ms: bigint;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     */
    max_age_num_blocks: bigint;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     */
    max_age_duration: Duration;
    /**
     * This sets the maximum size of total evidence in bytes that can be committed in a single block.
     * and should fall comfortably under the max block bytes.
     * Default is 1048576 or 1MB
     */
    max_bytes: bigint;
}
export interface EvidenceParamsProtoMsg {
    type_url: "/tendermint.types.EvidenceParams";
    value: Uint8Array;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParamsAmino {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     */
    max_age_num_blocks: string;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     */
    max_age_duration?: DurationAmino;
    /**
     * This sets the maximum size of total evidence in bytes that can be committed in a single block.
     * and should fall comfortably under the max block bytes.
     * Default is 1048576 or 1MB
     */
    max_bytes: string;
}
export interface EvidenceParamsAminoMsg {
    type: "/tendermint.types.EvidenceParams";
    value: EvidenceParamsAmino;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParamsSDKType {
    max_age_num_blocks: bigint;
    max_age_duration: DurationSDKType;
    max_bytes: bigint;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
    pub_key_types: string[];
}
export interface ValidatorParamsProtoMsg {
    type_url: "/tendermint.types.ValidatorParams";
    value: Uint8Array;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParamsAmino {
    pub_key_types: string[];
}
export interface ValidatorParamsAminoMsg {
    type: "/tendermint.types.ValidatorParams";
    value: ValidatorParamsAmino;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParamsSDKType {
    pub_key_types: string[];
}
/** VersionParams contains the ABCI application version. */
export interface VersionParams {
    app_version: bigint;
}
export interface VersionParamsProtoMsg {
    type_url: "/tendermint.types.VersionParams";
    value: Uint8Array;
}
/** VersionParams contains the ABCI application version. */
export interface VersionParamsAmino {
    app_version: string;
}
export interface VersionParamsAminoMsg {
    type: "/tendermint.types.VersionParams";
    value: VersionParamsAmino;
}
/** VersionParams contains the ABCI application version. */
export interface VersionParamsSDKType {
    app_version: bigint;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
    block_max_bytes: bigint;
    block_max_gas: bigint;
}
export interface HashedParamsProtoMsg {
    type_url: "/tendermint.types.HashedParams";
    value: Uint8Array;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParamsAmino {
    block_max_bytes: string;
    block_max_gas: string;
}
export interface HashedParamsAminoMsg {
    type: "/tendermint.types.HashedParams";
    value: HashedParamsAmino;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParamsSDKType {
    block_max_bytes: bigint;
    block_max_gas: bigint;
}
export declare const ConsensusParams: {
    typeUrl: string;
    encode(message: ConsensusParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConsensusParams;
    fromJSON(object: any): ConsensusParams;
    toJSON(message: ConsensusParams): unknown;
    fromPartial(object: Partial<ConsensusParams>): ConsensusParams;
    fromSDK(object: ConsensusParamsSDKType): ConsensusParams;
    toSDK(message: ConsensusParams): ConsensusParamsSDKType;
    fromAmino(object: ConsensusParamsAmino): ConsensusParams;
    toAmino(message: ConsensusParams): ConsensusParamsAmino;
    fromAminoMsg(object: ConsensusParamsAminoMsg): ConsensusParams;
    fromProtoMsg(message: ConsensusParamsProtoMsg): ConsensusParams;
    toProto(message: ConsensusParams): Uint8Array;
    toProtoMsg(message: ConsensusParams): ConsensusParamsProtoMsg;
};
export declare const BlockParams: {
    typeUrl: string;
    encode(message: BlockParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockParams;
    fromJSON(object: any): BlockParams;
    toJSON(message: BlockParams): unknown;
    fromPartial(object: Partial<BlockParams>): BlockParams;
    fromSDK(object: BlockParamsSDKType): BlockParams;
    toSDK(message: BlockParams): BlockParamsSDKType;
    fromAmino(object: BlockParamsAmino): BlockParams;
    toAmino(message: BlockParams): BlockParamsAmino;
    fromAminoMsg(object: BlockParamsAminoMsg): BlockParams;
    fromProtoMsg(message: BlockParamsProtoMsg): BlockParams;
    toProto(message: BlockParams): Uint8Array;
    toProtoMsg(message: BlockParams): BlockParamsProtoMsg;
};
export declare const EvidenceParams: {
    typeUrl: string;
    encode(message: EvidenceParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EvidenceParams;
    fromJSON(object: any): EvidenceParams;
    toJSON(message: EvidenceParams): unknown;
    fromPartial(object: Partial<EvidenceParams>): EvidenceParams;
    fromSDK(object: EvidenceParamsSDKType): EvidenceParams;
    toSDK(message: EvidenceParams): EvidenceParamsSDKType;
    fromAmino(object: EvidenceParamsAmino): EvidenceParams;
    toAmino(message: EvidenceParams): EvidenceParamsAmino;
    fromAminoMsg(object: EvidenceParamsAminoMsg): EvidenceParams;
    fromProtoMsg(message: EvidenceParamsProtoMsg): EvidenceParams;
    toProto(message: EvidenceParams): Uint8Array;
    toProtoMsg(message: EvidenceParams): EvidenceParamsProtoMsg;
};
export declare const ValidatorParams: {
    typeUrl: string;
    encode(message: ValidatorParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorParams;
    fromJSON(object: any): ValidatorParams;
    toJSON(message: ValidatorParams): unknown;
    fromPartial(object: Partial<ValidatorParams>): ValidatorParams;
    fromSDK(object: ValidatorParamsSDKType): ValidatorParams;
    toSDK(message: ValidatorParams): ValidatorParamsSDKType;
    fromAmino(object: ValidatorParamsAmino): ValidatorParams;
    toAmino(message: ValidatorParams): ValidatorParamsAmino;
    fromAminoMsg(object: ValidatorParamsAminoMsg): ValidatorParams;
    fromProtoMsg(message: ValidatorParamsProtoMsg): ValidatorParams;
    toProto(message: ValidatorParams): Uint8Array;
    toProtoMsg(message: ValidatorParams): ValidatorParamsProtoMsg;
};
export declare const VersionParams: {
    typeUrl: string;
    encode(message: VersionParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): VersionParams;
    fromJSON(object: any): VersionParams;
    toJSON(message: VersionParams): unknown;
    fromPartial(object: Partial<VersionParams>): VersionParams;
    fromSDK(object: VersionParamsSDKType): VersionParams;
    toSDK(message: VersionParams): VersionParamsSDKType;
    fromAmino(object: VersionParamsAmino): VersionParams;
    toAmino(message: VersionParams): VersionParamsAmino;
    fromAminoMsg(object: VersionParamsAminoMsg): VersionParams;
    fromProtoMsg(message: VersionParamsProtoMsg): VersionParams;
    toProto(message: VersionParams): Uint8Array;
    toProtoMsg(message: VersionParams): VersionParamsProtoMsg;
};
export declare const HashedParams: {
    typeUrl: string;
    encode(message: HashedParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): HashedParams;
    fromJSON(object: any): HashedParams;
    toJSON(message: HashedParams): unknown;
    fromPartial(object: Partial<HashedParams>): HashedParams;
    fromSDK(object: HashedParamsSDKType): HashedParams;
    toSDK(message: HashedParams): HashedParamsSDKType;
    fromAmino(object: HashedParamsAmino): HashedParams;
    toAmino(message: HashedParams): HashedParamsAmino;
    fromAminoMsg(object: HashedParamsAminoMsg): HashedParams;
    fromProtoMsg(message: HashedParamsProtoMsg): HashedParams;
    toProto(message: HashedParams): Uint8Array;
    toProtoMsg(message: HashedParams): HashedParamsProtoMsg;
};
