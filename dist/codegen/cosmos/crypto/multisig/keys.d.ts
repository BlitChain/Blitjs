import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "cosmos.crypto.multisig";
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */
export interface LegacyAminoPubKey {
    threshold: number;
    public_keys: Any[];
}
export interface LegacyAminoPubKeyProtoMsg {
    type_url: "/cosmos.crypto.multisig.LegacyAminoPubKey";
    value: Uint8Array;
}
export interface LegacyAminoPubKeyProtoMsg {
    type_url: "/cosmos.crypto.multisig.LegacyAminoPubKey";
    value: Uint8Array;
}
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */
export interface LegacyAminoPubKeyAmino {
    threshold: number;
    public_keys: AnyAmino[];
}
export interface LegacyAminoPubKeyAminoMsg {
    type: "cosmos-sdk/LegacyAminoPubKey";
    value: LegacyAminoPubKeyAmino;
}
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */
export interface LegacyAminoPubKeySDKType {
    threshold: number;
    public_keys: AnySDKType[];
}
export declare const LegacyAminoPubKey: {
    typeUrl: string;
    encode(message: LegacyAminoPubKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LegacyAminoPubKey;
    fromJSON(object: any): LegacyAminoPubKey;
    toJSON(message: LegacyAminoPubKey): unknown;
    fromPartial(object: Partial<LegacyAminoPubKey>): LegacyAminoPubKey;
    fromSDK(object: LegacyAminoPubKeySDKType): LegacyAminoPubKey;
    toSDK(message: LegacyAminoPubKey): LegacyAminoPubKeySDKType;
    fromAmino(object: LegacyAminoPubKeyAmino): LegacyAminoPubKey;
    toAmino(message: LegacyAminoPubKey): LegacyAminoPubKeyAmino;
    fromAminoMsg(object: LegacyAminoPubKeyAminoMsg): LegacyAminoPubKey;
    toAminoMsg(message: LegacyAminoPubKey): LegacyAminoPubKeyAminoMsg;
    fromProtoMsg(message: LegacyAminoPubKeyProtoMsg): LegacyAminoPubKey;
    toProto(message: LegacyAminoPubKey): Uint8Array;
    toProtoMsg(message: LegacyAminoPubKey): LegacyAminoPubKeyProtoMsg;
};
