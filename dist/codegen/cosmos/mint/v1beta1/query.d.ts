import { Params, ParamsAmino, ParamsSDKType } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "cosmos.mint.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    type_url: "/cosmos.mint.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    type_url: "/cosmos.mint.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequest {
}
export interface QueryInflationRequestProtoMsg {
    type_url: "/cosmos.mint.v1beta1.QueryInflationRequest";
    value: Uint8Array;
}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequestAmino {
}
export interface QueryInflationRequestAminoMsg {
    type: "cosmos-sdk/QueryInflationRequest";
    value: QueryInflationRequestAmino;
}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequestSDKType {
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponse {
    /** inflation is the current minting inflation value. */
    inflation: Uint8Array;
}
export interface QueryInflationResponseProtoMsg {
    type_url: "/cosmos.mint.v1beta1.QueryInflationResponse";
    value: Uint8Array;
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponseAmino {
    /** inflation is the current minting inflation value. */
    inflation: Uint8Array;
}
export interface QueryInflationResponseAminoMsg {
    type: "cosmos-sdk/QueryInflationResponse";
    value: QueryInflationResponseAmino;
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponseSDKType {
    inflation: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequest {
}
export interface QueryAnnualProvisionsRequestProtoMsg {
    type_url: "/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest";
    value: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestAmino {
}
export interface QueryAnnualProvisionsRequestAminoMsg {
    type: "cosmos-sdk/QueryAnnualProvisionsRequest";
    value: QueryAnnualProvisionsRequestAmino;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestSDKType {
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponse {
    /** annual_provisions is the current minting annual provisions value. */
    annual_provisions: Uint8Array;
}
export interface QueryAnnualProvisionsResponseProtoMsg {
    type_url: "/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse";
    value: Uint8Array;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseAmino {
    /** annual_provisions is the current minting annual provisions value. */
    annual_provisions: Uint8Array;
}
export interface QueryAnnualProvisionsResponseAminoMsg {
    type: "cosmos-sdk/QueryAnnualProvisionsResponse";
    value: QueryAnnualProvisionsResponseAmino;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseSDKType {
    annual_provisions: Uint8Array;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest;
    toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse;
    toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryInflationRequest: {
    typeUrl: string;
    encode(_: QueryInflationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationRequest;
    fromJSON(_: any): QueryInflationRequest;
    toJSON(_: QueryInflationRequest): unknown;
    fromPartial(_: Partial<QueryInflationRequest>): QueryInflationRequest;
    fromSDK(_: QueryInflationRequestSDKType): QueryInflationRequest;
    toSDK(_: QueryInflationRequest): QueryInflationRequestSDKType;
    fromAmino(_: QueryInflationRequestAmino): QueryInflationRequest;
    toAmino(_: QueryInflationRequest): QueryInflationRequestAmino;
    fromAminoMsg(object: QueryInflationRequestAminoMsg): QueryInflationRequest;
    toAminoMsg(message: QueryInflationRequest): QueryInflationRequestAminoMsg;
    fromProtoMsg(message: QueryInflationRequestProtoMsg): QueryInflationRequest;
    toProto(message: QueryInflationRequest): Uint8Array;
    toProtoMsg(message: QueryInflationRequest): QueryInflationRequestProtoMsg;
};
export declare const QueryInflationResponse: {
    typeUrl: string;
    encode(message: QueryInflationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationResponse;
    fromJSON(object: any): QueryInflationResponse;
    toJSON(message: QueryInflationResponse): unknown;
    fromPartial(object: Partial<QueryInflationResponse>): QueryInflationResponse;
    fromSDK(object: QueryInflationResponseSDKType): QueryInflationResponse;
    toSDK(message: QueryInflationResponse): QueryInflationResponseSDKType;
    fromAmino(object: QueryInflationResponseAmino): QueryInflationResponse;
    toAmino(message: QueryInflationResponse): QueryInflationResponseAmino;
    fromAminoMsg(object: QueryInflationResponseAminoMsg): QueryInflationResponse;
    toAminoMsg(message: QueryInflationResponse): QueryInflationResponseAminoMsg;
    fromProtoMsg(message: QueryInflationResponseProtoMsg): QueryInflationResponse;
    toProto(message: QueryInflationResponse): Uint8Array;
    toProtoMsg(message: QueryInflationResponse): QueryInflationResponseProtoMsg;
};
export declare const QueryAnnualProvisionsRequest: {
    typeUrl: string;
    encode(_: QueryAnnualProvisionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAnnualProvisionsRequest;
    fromJSON(_: any): QueryAnnualProvisionsRequest;
    toJSON(_: QueryAnnualProvisionsRequest): unknown;
    fromPartial(_: Partial<QueryAnnualProvisionsRequest>): QueryAnnualProvisionsRequest;
    fromSDK(_: QueryAnnualProvisionsRequestSDKType): QueryAnnualProvisionsRequest;
    toSDK(_: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestSDKType;
    fromAmino(_: QueryAnnualProvisionsRequestAmino): QueryAnnualProvisionsRequest;
    toAmino(_: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestAmino;
    fromAminoMsg(object: QueryAnnualProvisionsRequestAminoMsg): QueryAnnualProvisionsRequest;
    toAminoMsg(message: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestAminoMsg;
    fromProtoMsg(message: QueryAnnualProvisionsRequestProtoMsg): QueryAnnualProvisionsRequest;
    toProto(message: QueryAnnualProvisionsRequest): Uint8Array;
    toProtoMsg(message: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestProtoMsg;
};
export declare const QueryAnnualProvisionsResponse: {
    typeUrl: string;
    encode(message: QueryAnnualProvisionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAnnualProvisionsResponse;
    fromJSON(object: any): QueryAnnualProvisionsResponse;
    toJSON(message: QueryAnnualProvisionsResponse): unknown;
    fromPartial(object: Partial<QueryAnnualProvisionsResponse>): QueryAnnualProvisionsResponse;
    fromSDK(object: QueryAnnualProvisionsResponseSDKType): QueryAnnualProvisionsResponse;
    toSDK(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseSDKType;
    fromAmino(object: QueryAnnualProvisionsResponseAmino): QueryAnnualProvisionsResponse;
    toAmino(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseAmino;
    fromAminoMsg(object: QueryAnnualProvisionsResponseAminoMsg): QueryAnnualProvisionsResponse;
    toAminoMsg(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseAminoMsg;
    fromProtoMsg(message: QueryAnnualProvisionsResponseProtoMsg): QueryAnnualProvisionsResponse;
    toProto(message: QueryAnnualProvisionsResponse): Uint8Array;
    toProtoMsg(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseProtoMsg;
};
