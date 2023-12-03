import { Grant, GrantAmino, GrantSDKType, GenericAuthorization } from "./authz";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { SendAuthorization } from "../../bank/v1beta1/authz";
import { StakeAuthorization } from "../../staking/v1beta1/authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "cosmos.authz.v1beta1";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrant {
    granter: string;
    grantee: string;
    grant: Grant;
}
export interface MsgGrantProtoMsg {
    type_url: "/cosmos.authz.v1beta1.MsgGrant";
    value: Uint8Array;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrantAmino {
    granter: string;
    grantee: string;
    grant?: GrantAmino;
}
export interface MsgGrantAminoMsg {
    type: "cosmos-sdk/MsgGrant";
    value: MsgGrantAmino;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrantSDKType {
    granter: string;
    grantee: string;
    grant: GrantSDKType;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponse {
    results: Uint8Array[];
}
export interface MsgExecResponseProtoMsg {
    type_url: "/cosmos.authz.v1beta1.MsgExecResponse";
    value: Uint8Array;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponseAmino {
    results: Uint8Array[];
}
export interface MsgExecResponseAminoMsg {
    type: "cosmos-sdk/MsgExecResponse";
    value: MsgExecResponseAmino;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponseSDKType {
    results: Uint8Array[];
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExec {
    grantee: string;
    /**
     * Authorization Msg requests to execute. Each msg must implement Authorization interface
     * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
     * triple and validate it.
     */
    msgs: (Any)[] | Any[];
}
export interface MsgExecProtoMsg {
    type_url: "/cosmos.authz.v1beta1.MsgExec";
    value: Uint8Array;
}
export type MsgExecEncoded = Omit<MsgExec, "msgs"> & {
    /**
     * Authorization Msg requests to execute. Each msg must implement Authorization interface
     * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
     * triple and validate it.
     */
    msgs: (AnyProtoMsg)[];
};
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExecAmino {
    grantee: string;
    /**
     * Authorization Msg requests to execute. Each msg must implement Authorization interface
     * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
     * triple and validate it.
     */
    msgs: AnyAmino[];
}
export interface MsgExecAminoMsg {
    type: "cosmos-sdk/MsgExec";
    value: MsgExecAmino;
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExecSDKType {
    grantee: string;
    msgs: (AnySDKType)[];
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponse {
}
export interface MsgGrantResponseProtoMsg {
    type_url: "/cosmos.authz.v1beta1.MsgGrantResponse";
    value: Uint8Array;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponseAmino {
}
export interface MsgGrantResponseAminoMsg {
    type: "cosmos-sdk/MsgGrantResponse";
    value: MsgGrantResponseAmino;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponseSDKType {
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevoke {
    granter: string;
    grantee: string;
    msg_type_url: string;
}
export interface MsgRevokeProtoMsg {
    type_url: "/cosmos.authz.v1beta1.MsgRevoke";
    value: Uint8Array;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevokeAmino {
    granter: string;
    grantee: string;
    msg_type_url: string;
}
export interface MsgRevokeAminoMsg {
    type: "cosmos-sdk/MsgRevoke";
    value: MsgRevokeAmino;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevokeSDKType {
    granter: string;
    grantee: string;
    msg_type_url: string;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponse {
}
export interface MsgRevokeResponseProtoMsg {
    type_url: "/cosmos.authz.v1beta1.MsgRevokeResponse";
    value: Uint8Array;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponseAmino {
}
export interface MsgRevokeResponseAminoMsg {
    type: "cosmos-sdk/MsgRevokeResponse";
    value: MsgRevokeResponseAmino;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponseSDKType {
}
export declare const MsgGrant: {
    typeUrl: string;
    encode(message: MsgGrant, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgGrant;
    fromJSON(object: any): MsgGrant;
    toJSON(message: MsgGrant): unknown;
    fromPartial(object: Partial<MsgGrant>): MsgGrant;
    fromSDK(object: MsgGrantSDKType): MsgGrant;
    toSDK(message: MsgGrant): MsgGrantSDKType;
    fromAmino(object: MsgGrantAmino): MsgGrant;
    toAmino(message: MsgGrant): MsgGrantAmino;
    fromAminoMsg(object: MsgGrantAminoMsg): MsgGrant;
    toAminoMsg(message: MsgGrant): MsgGrantAminoMsg;
    fromProtoMsg(message: MsgGrantProtoMsg): MsgGrant;
    toProto(message: MsgGrant): Uint8Array;
    toProtoMsg(message: MsgGrant): MsgGrantProtoMsg;
};
export declare const MsgExecResponse: {
    typeUrl: string;
    encode(message: MsgExecResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExecResponse;
    fromJSON(object: any): MsgExecResponse;
    toJSON(message: MsgExecResponse): unknown;
    fromPartial(object: Partial<MsgExecResponse>): MsgExecResponse;
    fromSDK(object: MsgExecResponseSDKType): MsgExecResponse;
    toSDK(message: MsgExecResponse): MsgExecResponseSDKType;
    fromAmino(object: MsgExecResponseAmino): MsgExecResponse;
    toAmino(message: MsgExecResponse): MsgExecResponseAmino;
    fromAminoMsg(object: MsgExecResponseAminoMsg): MsgExecResponse;
    toAminoMsg(message: MsgExecResponse): MsgExecResponseAminoMsg;
    fromProtoMsg(message: MsgExecResponseProtoMsg): MsgExecResponse;
    toProto(message: MsgExecResponse): Uint8Array;
    toProtoMsg(message: MsgExecResponse): MsgExecResponseProtoMsg;
};
export declare const MsgExec: {
    typeUrl: string;
    encode(message: MsgExec, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExec;
    fromJSON(object: any): MsgExec;
    toJSON(message: MsgExec): unknown;
    fromPartial(object: Partial<MsgExec>): MsgExec;
    fromSDK(object: MsgExecSDKType): MsgExec;
    toSDK(message: MsgExec): MsgExecSDKType;
    fromAmino(object: MsgExecAmino): MsgExec;
    toAmino(message: MsgExec): MsgExecAmino;
    fromAminoMsg(object: MsgExecAminoMsg): MsgExec;
    toAminoMsg(message: MsgExec): MsgExecAminoMsg;
    fromProtoMsg(message: MsgExecProtoMsg): MsgExec;
    toProto(message: MsgExec): Uint8Array;
    toProtoMsg(message: MsgExec): MsgExecProtoMsg;
};
export declare const MsgGrantResponse: {
    typeUrl: string;
    encode(_: MsgGrantResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantResponse;
    fromJSON(_: any): MsgGrantResponse;
    toJSON(_: MsgGrantResponse): unknown;
    fromPartial(_: Partial<MsgGrantResponse>): MsgGrantResponse;
    fromSDK(_: MsgGrantResponseSDKType): MsgGrantResponse;
    toSDK(_: MsgGrantResponse): MsgGrantResponseSDKType;
    fromAmino(_: MsgGrantResponseAmino): MsgGrantResponse;
    toAmino(_: MsgGrantResponse): MsgGrantResponseAmino;
    fromAminoMsg(object: MsgGrantResponseAminoMsg): MsgGrantResponse;
    toAminoMsg(message: MsgGrantResponse): MsgGrantResponseAminoMsg;
    fromProtoMsg(message: MsgGrantResponseProtoMsg): MsgGrantResponse;
    toProto(message: MsgGrantResponse): Uint8Array;
    toProtoMsg(message: MsgGrantResponse): MsgGrantResponseProtoMsg;
};
export declare const MsgRevoke: {
    typeUrl: string;
    encode(message: MsgRevoke, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevoke;
    fromJSON(object: any): MsgRevoke;
    toJSON(message: MsgRevoke): unknown;
    fromPartial(object: Partial<MsgRevoke>): MsgRevoke;
    fromSDK(object: MsgRevokeSDKType): MsgRevoke;
    toSDK(message: MsgRevoke): MsgRevokeSDKType;
    fromAmino(object: MsgRevokeAmino): MsgRevoke;
    toAmino(message: MsgRevoke): MsgRevokeAmino;
    fromAminoMsg(object: MsgRevokeAminoMsg): MsgRevoke;
    toAminoMsg(message: MsgRevoke): MsgRevokeAminoMsg;
    fromProtoMsg(message: MsgRevokeProtoMsg): MsgRevoke;
    toProto(message: MsgRevoke): Uint8Array;
    toProtoMsg(message: MsgRevoke): MsgRevokeProtoMsg;
};
export declare const MsgRevokeResponse: {
    typeUrl: string;
    encode(_: MsgRevokeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeResponse;
    fromJSON(_: any): MsgRevokeResponse;
    toJSON(_: MsgRevokeResponse): unknown;
    fromPartial(_: Partial<MsgRevokeResponse>): MsgRevokeResponse;
    fromSDK(_: MsgRevokeResponseSDKType): MsgRevokeResponse;
    toSDK(_: MsgRevokeResponse): MsgRevokeResponseSDKType;
    fromAmino(_: MsgRevokeResponseAmino): MsgRevokeResponse;
    toAmino(_: MsgRevokeResponse): MsgRevokeResponseAmino;
    fromAminoMsg(object: MsgRevokeResponseAminoMsg): MsgRevokeResponse;
    toAminoMsg(message: MsgRevokeResponse): MsgRevokeResponseAminoMsg;
    fromProtoMsg(message: MsgRevokeResponseProtoMsg): MsgRevokeResponse;
    toProto(message: MsgRevokeResponse): Uint8Array;
    toProtoMsg(message: MsgRevokeResponse): MsgRevokeResponseProtoMsg;
};
export declare const Sdk_Msg_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Sdk_Msg_FromAmino: (content: AnyAmino) => Any;
export declare const Sdk_Msg_ToAmino: (content: Any) => AnyAmino;
export declare const Cosmos_authzAuthorization_InterfaceDecoder: (input: BinaryReader | Uint8Array) => GenericAuthorization | SendAuthorization | StakeAuthorization | Any;
export declare const Cosmos_authzAuthorization_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_authzAuthorization_ToAmino: (content: Any) => AnyAmino;
