"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAllowancesByGranterResponse = exports.QueryAllowancesByGranterRequest = exports.QueryAllowancesResponse = exports.QueryAllowancesRequest = exports.QueryAllowanceResponse = exports.QueryAllowanceRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const pagination_1 = require("../../base/query/v1beta1/pagination");
const feegrant_1 = require("./feegrant");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.feegrant.v1beta1";
function createBaseQueryAllowanceRequest() {
    return {
        granter: "",
        grantee: ""
    };
}
exports.QueryAllowanceRequest = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
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
            granter: (0, helpers_1.isSet)(object.granter) ? String(object.granter) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowanceRequest();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            granter: object.granter,
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllowanceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowanceRequest",
            value: exports.QueryAllowanceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllowanceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest",
            value: exports.QueryAllowanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllowanceResponse() {
    return {
        allowance: undefined
    };
}
exports.QueryAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.allowance !== undefined) {
            feegrant_1.Grant.encode(message.allowance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowance = feegrant_1.Grant.decode(reader, reader.uint32());
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
            allowance: (0, helpers_1.isSet)(object.allowance) ? feegrant_1.Grant.fromJSON(object.allowance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.allowance !== undefined && (obj.allowance = message.allowance ? feegrant_1.Grant.toJSON(message.allowance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowanceResponse();
        message.allowance = object.allowance !== undefined && object.allowance !== null ? feegrant_1.Grant.fromPartial(object.allowance) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            allowance: object?.allowance ? feegrant_1.Grant.fromAmino(object.allowance) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.allowance = message.allowance ? feegrant_1.Grant.toAmino(message.allowance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllowanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowanceResponse",
            value: exports.QueryAllowanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllowanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse",
            value: exports.QueryAllowanceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllowancesRequest() {
    return {
        grantee: "",
        pagination: undefined
    };
}
exports.QueryAllowancesRequest = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.grantee !== "") {
            writer.uint32(10).string(message.grantee);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grantee = reader.string();
                    break;
                case 2:
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
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesRequest();
        message.grantee = object.grantee ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            grantee: object.grantee,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.grantee = message.grantee;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllowancesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowancesRequest",
            value: exports.QueryAllowancesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllowancesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowancesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest",
            value: exports.QueryAllowancesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllowancesResponse() {
    return {
        allowances: [],
        pagination: undefined
    };
}
exports.QueryAllowancesResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.allowances) {
            feegrant_1.Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowances.push(feegrant_1.Grant.decode(reader, reader.uint32()));
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
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => feegrant_1.Grant.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toJSON(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesResponse();
        message.allowances = object.allowances?.map(e => feegrant_1.Grant.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => feegrant_1.Grant.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toAmino(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllowancesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowancesResponse",
            value: exports.QueryAllowancesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllowancesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse",
            value: exports.QueryAllowancesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllowancesByGranterRequest() {
    return {
        granter: "",
        pagination: undefined
    };
}
exports.QueryAllowancesByGranterRequest = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesByGranterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
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
            granter: (0, helpers_1.isSet)(object.granter) ? String(object.granter) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesByGranterRequest();
        message.granter = object.granter ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            granter: object.granter,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllowancesByGranterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowancesByGranterRequest",
            value: exports.QueryAllowancesByGranterRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllowancesByGranterRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowancesByGranterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest",
            value: exports.QueryAllowancesByGranterRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllowancesByGranterResponse() {
    return {
        allowances: [],
        pagination: undefined
    };
}
exports.QueryAllowancesByGranterResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.allowances) {
            feegrant_1.Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesByGranterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowances.push(feegrant_1.Grant.decode(reader, reader.uint32()));
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
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => feegrant_1.Grant.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toJSON(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesByGranterResponse();
        message.allowances = object.allowances?.map(e => feegrant_1.Grant.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => feegrant_1.Grant.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toAmino(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllowancesByGranterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowancesByGranterResponse",
            value: exports.QueryAllowancesByGranterResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllowancesByGranterResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowancesByGranterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse",
            value: exports.QueryAllowancesByGranterResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map