import { IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType, ClientConsensusStates, ClientConsensusStatesAmino, ClientConsensusStatesSDKType, Params, ParamsAmino, ParamsSDKType } from "./client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export declare const protobufPackage = "ibc.core.client.v1";
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisState {
    /** client states with their corresponding identifiers */
    clients: IdentifiedClientState[];
    /** consensus states from each client */
    clients_consensus: ClientConsensusStates[];
    /** metadata from each client */
    clients_metadata: IdentifiedGenesisMetadata[];
    params: Params;
    /**
     * Deprecated: create_localhost has been deprecated.
     * The localhost client is automatically created at genesis.
     */
    /** @deprecated */
    create_localhost: boolean;
    /** the sequence for the next generated client identifier */
    next_client_sequence: bigint;
}
export interface GenesisStateProtoMsg {
    type_url: "/ibc.core.client.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisStateAmino {
    /** client states with their corresponding identifiers */
    clients: IdentifiedClientStateAmino[];
    /** consensus states from each client */
    clients_consensus: ClientConsensusStatesAmino[];
    /** metadata from each client */
    clients_metadata: IdentifiedGenesisMetadataAmino[];
    params?: ParamsAmino;
    /**
     * Deprecated: create_localhost has been deprecated.
     * The localhost client is automatically created at genesis.
     */
    /** @deprecated */
    create_localhost: boolean;
    /** the sequence for the next generated client identifier */
    next_client_sequence: string;
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisStateSDKType {
    clients: IdentifiedClientStateSDKType[];
    clients_consensus: ClientConsensusStatesSDKType[];
    clients_metadata: IdentifiedGenesisMetadataSDKType[];
    params: ParamsSDKType;
    /** @deprecated */
    create_localhost: boolean;
    next_client_sequence: bigint;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadata {
    /** store key of metadata without clientID-prefix */
    key: Uint8Array;
    /** metadata value */
    value: Uint8Array;
}
export interface GenesisMetadataProtoMsg {
    type_url: "/ibc.core.client.v1.GenesisMetadata";
    value: Uint8Array;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadataAmino {
    /** store key of metadata without clientID-prefix */
    key: Uint8Array;
    /** metadata value */
    value: Uint8Array;
}
export interface GenesisMetadataAminoMsg {
    type: "cosmos-sdk/GenesisMetadata";
    value: GenesisMetadataAmino;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadataSDKType {
    key: Uint8Array;
    value: Uint8Array;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadata {
    client_id: string;
    client_metadata: GenesisMetadata[];
}
export interface IdentifiedGenesisMetadataProtoMsg {
    type_url: "/ibc.core.client.v1.IdentifiedGenesisMetadata";
    value: Uint8Array;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadataAmino {
    client_id: string;
    client_metadata: GenesisMetadataAmino[];
}
export interface IdentifiedGenesisMetadataAminoMsg {
    type: "cosmos-sdk/IdentifiedGenesisMetadata";
    value: IdentifiedGenesisMetadataAmino;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadataSDKType {
    client_id: string;
    client_metadata: GenesisMetadataSDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const GenesisMetadata: {
    typeUrl: string;
    encode(message: GenesisMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisMetadata;
    fromJSON(object: any): GenesisMetadata;
    toJSON(message: GenesisMetadata): unknown;
    fromPartial(object: Partial<GenesisMetadata>): GenesisMetadata;
    fromAmino(object: GenesisMetadataAmino): GenesisMetadata;
    toAmino(message: GenesisMetadata): GenesisMetadataAmino;
    fromAminoMsg(object: GenesisMetadataAminoMsg): GenesisMetadata;
    toAminoMsg(message: GenesisMetadata): GenesisMetadataAminoMsg;
    fromProtoMsg(message: GenesisMetadataProtoMsg): GenesisMetadata;
    toProto(message: GenesisMetadata): Uint8Array;
    toProtoMsg(message: GenesisMetadata): GenesisMetadataProtoMsg;
};
export declare const IdentifiedGenesisMetadata: {
    typeUrl: string;
    encode(message: IdentifiedGenesisMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IdentifiedGenesisMetadata;
    fromJSON(object: any): IdentifiedGenesisMetadata;
    toJSON(message: IdentifiedGenesisMetadata): unknown;
    fromPartial(object: Partial<IdentifiedGenesisMetadata>): IdentifiedGenesisMetadata;
    fromAmino(object: IdentifiedGenesisMetadataAmino): IdentifiedGenesisMetadata;
    toAmino(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataAmino;
    fromAminoMsg(object: IdentifiedGenesisMetadataAminoMsg): IdentifiedGenesisMetadata;
    toAminoMsg(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataAminoMsg;
    fromProtoMsg(message: IdentifiedGenesisMetadataProtoMsg): IdentifiedGenesisMetadata;
    toProto(message: IdentifiedGenesisMetadata): Uint8Array;
    toProtoMsg(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataProtoMsg;
};
