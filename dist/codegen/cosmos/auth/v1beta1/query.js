"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosmos_authModuleAccountI_ToAmino = exports.Cosmos_authModuleAccountI_FromAmino = exports.Cosmos_authModuleAccountI_InterfaceDecoder = exports.Cosmos_authAccountI_ToAmino = exports.Cosmos_authAccountI_FromAmino = exports.Cosmos_authAccountI_InterfaceDecoder = exports.AddressStringToBytesResponse = exports.AddressStringToBytesRequest = exports.AddressBytesToStringResponse = exports.AddressBytesToStringRequest = exports.Bech32PrefixResponse = exports.Bech32PrefixRequest = exports.QueryModuleAccountsResponse = exports.QueryParamsRequest = exports.QueryAccountResponse = exports.QueryParamsResponse = exports.QueryModuleAccountsRequest = exports.QueryAccountRequest = exports.QueryAccountsResponse = exports.QueryAccountsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const pagination_1 = require("../../base/query/v1beta1/pagination");
const any_1 = require("../../../google/protobuf/any");
const auth_1 = require("./auth");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.auth.v1beta1";
function createBaseQueryAccountsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAccountsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountsRequest",
            value: exports.QueryAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
            value: exports.QueryAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountsResponse() {
    return {
        accounts: [],
        pagination: undefined
    };
}
exports.QueryAccountsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accounts) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push((0, exports.Cosmos_authAccountI_InterfaceDecoder)(reader));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => any_1.Any.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountsResponse();
        message.accounts = object.accounts?.map(e => any_1.Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => any_1.Any.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? any_1.Any.toSDK(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => (0, exports.Cosmos_authAccountI_FromAmino)(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? (0, exports.Cosmos_authAccountI_ToAmino)(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountsResponse",
            value: exports.QueryAccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
            value: exports.QueryAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAccountRequest() {
    return {
        address: ""
    };
}
exports.QueryAccountRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountRequest",
            value: exports.QueryAccountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
            value: exports.QueryAccountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountsRequest() {
    return {};
}
exports.QueryModuleAccountsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryModuleAccountsRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountsRequest",
            value: exports.QueryModuleAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
            value: exports.QueryModuleAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: auth_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            auth_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = auth_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            params: (0, helpers_1.isSet)(object.params) ? auth_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? auth_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? auth_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? auth_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? auth_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? auth_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? auth_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAccountResponse() {
    return {
        account: undefined
    };
}
exports.QueryAccountResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== undefined) {
            any_1.Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = (0, exports.Cosmos_authAccountI_InterfaceDecoder)(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            account: (0, helpers_1.isSet)(object.account) ? any_1.Any.fromJSON(object.account) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account ? any_1.Any.toJSON(message.account) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountResponse();
        message.account = object.account !== undefined && object.account !== null ? any_1.Any.fromPartial(object.account) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            account: object.account ? any_1.Any.fromSDK(object.account) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account ? any_1.Any.toSDK(message.account) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            account: object?.account ? (0, exports.Cosmos_authAccountI_FromAmino)(object.account) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account ? (0, exports.Cosmos_authAccountI_ToAmino)(message.account) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountResponse",
            value: exports.QueryAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
            value: exports.QueryAccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountsResponse() {
    return {
        accounts: []
    };
}
exports.QueryModuleAccountsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accounts) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push((0, exports.Cosmos_authModuleAccountI_InterfaceDecoder)(reader));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => any_1.Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountsResponse();
        message.accounts = object.accounts?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => any_1.Any.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? any_1.Any.toSDK(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => (0, exports.Cosmos_authModuleAccountI_FromAmino)(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? (0, exports.Cosmos_authModuleAccountI_ToAmino)(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleAccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountsResponse",
            value: exports.QueryModuleAccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
            value: exports.QueryModuleAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseBech32PrefixRequest() {
    return {};
}
exports.Bech32PrefixRequest = {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBech32PrefixRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseBech32PrefixRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Bech32PrefixRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Bech32PrefixRequest",
            value: exports.Bech32PrefixRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Bech32PrefixRequest.decode(message.value);
    },
    toProto(message) {
        return exports.Bech32PrefixRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
            value: exports.Bech32PrefixRequest.encode(message).finish()
        };
    }
};
function createBaseBech32PrefixResponse() {
    return {
        bech32_prefix: ""
    };
}
exports.Bech32PrefixResponse = {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bech32_prefix !== "") {
            writer.uint32(10).string(message.bech32_prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBech32PrefixResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bech32_prefix = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            bech32_prefix: (0, helpers_1.isSet)(object.bech32_prefix) ? String(object.bech32_prefix) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.bech32_prefix !== undefined && (obj.bech32_prefix = message.bech32_prefix);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBech32PrefixResponse();
        message.bech32_prefix = object.bech32_prefix ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            bech32_prefix: object?.bech32_prefix
        };
    },
    toSDK(message) {
        const obj = {};
        obj.bech32_prefix = message.bech32_prefix;
        return obj;
    },
    fromAmino(object) {
        return {
            bech32_prefix: object.bech32_prefix
        };
    },
    toAmino(message) {
        const obj = {};
        obj.bech32_prefix = message.bech32_prefix;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Bech32PrefixResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Bech32PrefixResponse",
            value: exports.Bech32PrefixResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Bech32PrefixResponse.decode(message.value);
    },
    toProto(message) {
        return exports.Bech32PrefixResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
            value: exports.Bech32PrefixResponse.encode(message).finish()
        };
    }
};
function createBaseAddressBytesToStringRequest() {
    return {
        address_bytes: new Uint8Array()
    };
}
exports.AddressBytesToStringRequest = {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address_bytes.length !== 0) {
            writer.uint32(10).bytes(message.address_bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressBytesToStringRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address_bytes = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address_bytes: (0, helpers_1.isSet)(object.address_bytes) ? (0, helpers_1.bytesFromBase64)(object.address_bytes) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.address_bytes !== undefined && (obj.address_bytes = (0, helpers_1.base64FromBytes)(message.address_bytes !== undefined ? message.address_bytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddressBytesToStringRequest();
        message.address_bytes = object.address_bytes ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            address_bytes: object?.address_bytes
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address_bytes = message.address_bytes;
        return obj;
    },
    fromAmino(object) {
        return {
            address_bytes: object.address_bytes
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address_bytes = message.address_bytes;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AddressBytesToStringRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressBytesToStringRequest",
            value: exports.AddressBytesToStringRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AddressBytesToStringRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AddressBytesToStringRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
            value: exports.AddressBytesToStringRequest.encode(message).finish()
        };
    }
};
function createBaseAddressBytesToStringResponse() {
    return {
        address_string: ""
    };
}
exports.AddressBytesToStringResponse = {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address_string !== "") {
            writer.uint32(10).string(message.address_string);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressBytesToStringResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address_string = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address_string: (0, helpers_1.isSet)(object.address_string) ? String(object.address_string) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address_string !== undefined && (obj.address_string = message.address_string);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddressBytesToStringResponse();
        message.address_string = object.address_string ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address_string: object?.address_string
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address_string = message.address_string;
        return obj;
    },
    fromAmino(object) {
        return {
            address_string: object.address_string
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address_string = message.address_string;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AddressBytesToStringResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressBytesToStringResponse",
            value: exports.AddressBytesToStringResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AddressBytesToStringResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AddressBytesToStringResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
            value: exports.AddressBytesToStringResponse.encode(message).finish()
        };
    }
};
function createBaseAddressStringToBytesRequest() {
    return {
        address_string: ""
    };
}
exports.AddressStringToBytesRequest = {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address_string !== "") {
            writer.uint32(10).string(message.address_string);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressStringToBytesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address_string = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address_string: (0, helpers_1.isSet)(object.address_string) ? String(object.address_string) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address_string !== undefined && (obj.address_string = message.address_string);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddressStringToBytesRequest();
        message.address_string = object.address_string ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address_string: object?.address_string
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address_string = message.address_string;
        return obj;
    },
    fromAmino(object) {
        return {
            address_string: object.address_string
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address_string = message.address_string;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AddressStringToBytesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressStringToBytesRequest",
            value: exports.AddressStringToBytesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AddressStringToBytesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AddressStringToBytesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
            value: exports.AddressStringToBytesRequest.encode(message).finish()
        };
    }
};
function createBaseAddressStringToBytesResponse() {
    return {
        address_bytes: new Uint8Array()
    };
}
exports.AddressStringToBytesResponse = {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address_bytes.length !== 0) {
            writer.uint32(10).bytes(message.address_bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressStringToBytesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address_bytes = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address_bytes: (0, helpers_1.isSet)(object.address_bytes) ? (0, helpers_1.bytesFromBase64)(object.address_bytes) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.address_bytes !== undefined && (obj.address_bytes = (0, helpers_1.base64FromBytes)(message.address_bytes !== undefined ? message.address_bytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddressStringToBytesResponse();
        message.address_bytes = object.address_bytes ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            address_bytes: object?.address_bytes
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address_bytes = message.address_bytes;
        return obj;
    },
    fromAmino(object) {
        return {
            address_bytes: object.address_bytes
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address_bytes = message.address_bytes;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AddressStringToBytesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressStringToBytesResponse",
            value: exports.AddressStringToBytesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AddressStringToBytesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AddressStringToBytesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
            value: exports.AddressStringToBytesResponse.encode(message).finish()
        };
    }
};
const Cosmos_authAccountI_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.auth.v1beta1.BaseAccount":
            return auth_1.BaseAccount.decode(data.value);
        default:
            return data;
    }
};
exports.Cosmos_authAccountI_InterfaceDecoder = Cosmos_authAccountI_InterfaceDecoder;
const Cosmos_authAccountI_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/BaseAccount":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
                value: auth_1.BaseAccount.encode(auth_1.BaseAccount.fromPartial(auth_1.BaseAccount.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.Cosmos_authAccountI_FromAmino = Cosmos_authAccountI_FromAmino;
const Cosmos_authAccountI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.auth.v1beta1.BaseAccount":
            return {
                type: "cosmos-sdk/BaseAccount",
                value: auth_1.BaseAccount.toAmino(auth_1.BaseAccount.decode(content.value))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.Cosmos_authAccountI_ToAmino = Cosmos_authAccountI_ToAmino;
const Cosmos_authModuleAccountI_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.auth.v1beta1.ModuleAccount":
            return auth_1.ModuleAccount.decode(data.value);
        default:
            return data;
    }
};
exports.Cosmos_authModuleAccountI_InterfaceDecoder = Cosmos_authModuleAccountI_InterfaceDecoder;
const Cosmos_authModuleAccountI_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/ModuleAccount":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
                value: auth_1.ModuleAccount.encode(auth_1.ModuleAccount.fromPartial(auth_1.ModuleAccount.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.Cosmos_authModuleAccountI_FromAmino = Cosmos_authModuleAccountI_FromAmino;
const Cosmos_authModuleAccountI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.auth.v1beta1.ModuleAccount":
            return {
                type: "cosmos-sdk/ModuleAccount",
                value: auth_1.ModuleAccount.toAmino(auth_1.ModuleAccount.decode(content.value))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.Cosmos_authModuleAccountI_ToAmino = Cosmos_authModuleAccountI_ToAmino;
//# sourceMappingURL=query.js.map