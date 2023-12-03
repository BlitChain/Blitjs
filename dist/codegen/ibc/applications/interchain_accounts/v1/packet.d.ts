import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export declare const protobufPackage = "ibc.applications.interchain_accounts.v1";
/**
 * Type defines a classification of message issued from a controller chain to its associated interchain accounts
 * host
 */
export declare enum Type {
    /** TYPE_UNSPECIFIED - Default zero value enumeration */
    TYPE_UNSPECIFIED = 0,
    /** TYPE_EXECUTE_TX - Execute a transaction on an interchain accounts host chain */
    TYPE_EXECUTE_TX = 1,
    UNRECOGNIZED = -1
}
export declare const TypeSDKType: typeof Type;
export declare const TypeAmino: typeof Type;
export declare function typeFromJSON(object: any): Type;
export declare function typeToJSON(object: Type): string;
/** InterchainAccountPacketData is comprised of a raw transaction, type of transaction and optional memo field. */
export interface InterchainAccountPacketData {
    type: Type;
    data: Uint8Array;
    memo: string;
}
export interface InterchainAccountPacketDataProtoMsg {
    type_url: "/ibc.applications.interchain_accounts.v1.InterchainAccountPacketData";
    value: Uint8Array;
}
/** InterchainAccountPacketData is comprised of a raw transaction, type of transaction and optional memo field. */
export interface InterchainAccountPacketDataAmino {
    type: Type;
    data: Uint8Array;
    memo: string;
}
export interface InterchainAccountPacketDataAminoMsg {
    type: "cosmos-sdk/InterchainAccountPacketData";
    value: InterchainAccountPacketDataAmino;
}
/** InterchainAccountPacketData is comprised of a raw transaction, type of transaction and optional memo field. */
export interface InterchainAccountPacketDataSDKType {
    type: Type;
    data: Uint8Array;
    memo: string;
}
/** CosmosTx contains a list of sdk.Msg's. It should be used when sending transactions to an SDK host chain. */
export interface CosmosTx {
    messages: Any[];
}
export interface CosmosTxProtoMsg {
    type_url: "/ibc.applications.interchain_accounts.v1.CosmosTx";
    value: Uint8Array;
}
/** CosmosTx contains a list of sdk.Msg's. It should be used when sending transactions to an SDK host chain. */
export interface CosmosTxAmino {
    messages: AnyAmino[];
}
export interface CosmosTxAminoMsg {
    type: "cosmos-sdk/CosmosTx";
    value: CosmosTxAmino;
}
/** CosmosTx contains a list of sdk.Msg's. It should be used when sending transactions to an SDK host chain. */
export interface CosmosTxSDKType {
    messages: AnySDKType[];
}
export declare const InterchainAccountPacketData: {
    typeUrl: string;
    encode(message: InterchainAccountPacketData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InterchainAccountPacketData;
    fromJSON(object: any): InterchainAccountPacketData;
    toJSON(message: InterchainAccountPacketData): unknown;
    fromPartial(object: Partial<InterchainAccountPacketData>): InterchainAccountPacketData;
    fromSDK(object: InterchainAccountPacketDataSDKType): InterchainAccountPacketData;
    toSDK(message: InterchainAccountPacketData): InterchainAccountPacketDataSDKType;
    fromAmino(object: InterchainAccountPacketDataAmino): InterchainAccountPacketData;
    toAmino(message: InterchainAccountPacketData): InterchainAccountPacketDataAmino;
    fromAminoMsg(object: InterchainAccountPacketDataAminoMsg): InterchainAccountPacketData;
    toAminoMsg(message: InterchainAccountPacketData): InterchainAccountPacketDataAminoMsg;
    fromProtoMsg(message: InterchainAccountPacketDataProtoMsg): InterchainAccountPacketData;
    toProto(message: InterchainAccountPacketData): Uint8Array;
    toProtoMsg(message: InterchainAccountPacketData): InterchainAccountPacketDataProtoMsg;
};
export declare const CosmosTx: {
    typeUrl: string;
    encode(message: CosmosTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CosmosTx;
    fromJSON(object: any): CosmosTx;
    toJSON(message: CosmosTx): unknown;
    fromPartial(object: Partial<CosmosTx>): CosmosTx;
    fromSDK(object: CosmosTxSDKType): CosmosTx;
    toSDK(message: CosmosTx): CosmosTxSDKType;
    fromAmino(object: CosmosTxAmino): CosmosTx;
    toAmino(message: CosmosTx): CosmosTxAmino;
    fromAminoMsg(object: CosmosTxAminoMsg): CosmosTx;
    toAminoMsg(message: CosmosTx): CosmosTxAminoMsg;
    fromProtoMsg(message: CosmosTxProtoMsg): CosmosTx;
    toProto(message: CosmosTx): Uint8Array;
    toProtoMsg(message: CosmosTx): CosmosTxProtoMsg;
};
