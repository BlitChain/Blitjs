"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProofOps = exports.ProofOp = exports.ABCIQueryResponse = exports.ABCIQueryRequest = exports.Module = exports.VersionInfo = exports.GetNodeInfoResponse = exports.GetNodeInfoRequest = exports.GetSyncingResponse = exports.GetSyncingRequest = exports.GetLatestBlockResponse = exports.GetLatestBlockRequest = exports.GetBlockByHeightResponse = exports.GetBlockByHeightRequest = exports.Validator = exports.GetLatestValidatorSetResponse = exports.GetLatestValidatorSetRequest = exports.GetValidatorSetByHeightResponse = exports.GetValidatorSetByHeightRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const pagination_1 = require("../../query/v1beta1/pagination");
const any_1 = require("../../../../google/protobuf/any");
const types_1 = require("../../../../tendermint/types/types");
const block_1 = require("../../../../tendermint/types/block");
const types_2 = require("./types");
const types_3 = require("../../../../tendermint/p2p/types");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "cosmos.base.tendermint.v1beta1";
function createBaseGetValidatorSetByHeightRequest() {
    return {
        height: BigInt(0),
        pagination: undefined
    };
}
exports.GetValidatorSetByHeightRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorSetByHeightRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetValidatorSetByHeightRequest();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            height: BigInt(object.height),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetValidatorSetByHeightRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetValidatorSetByHeightRequest",
            value: exports.GetValidatorSetByHeightRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetValidatorSetByHeightRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetValidatorSetByHeightRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
            value: exports.GetValidatorSetByHeightRequest.encode(message).finish()
        };
    }
};
function createBaseGetValidatorSetByHeightResponse() {
    return {
        block_height: BigInt(0),
        validators: [],
        pagination: undefined
    };
}
exports.GetValidatorSetByHeightResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block_height !== BigInt(0)) {
            writer.uint32(8).int64(message.block_height);
        }
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorSetByHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_height = reader.int64();
                    break;
                case 2:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
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
            block_height: (0, helpers_1.isSet)(object.block_height) ? BigInt(object.block_height.toString()) : BigInt(0),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_height !== undefined && (obj.block_height = (message.block_height || BigInt(0)).toString());
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetValidatorSetByHeightResponse();
        message.block_height = object.block_height !== undefined && object.block_height !== null ? BigInt(object.block_height.toString()) : BigInt(0);
        message.validators = object.validators?.map(e => exports.Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            block_height: BigInt(object.block_height),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.block_height ? message.block_height.toString() : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetValidatorSetByHeightResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetValidatorSetByHeightResponse",
            value: exports.GetValidatorSetByHeightResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetValidatorSetByHeightResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetValidatorSetByHeightResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
            value: exports.GetValidatorSetByHeightResponse.encode(message).finish()
        };
    }
};
function createBaseGetLatestValidatorSetRequest() {
    return {
        pagination: undefined
    };
}
exports.GetLatestValidatorSetRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestValidatorSetRequest();
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
        const message = createBaseGetLatestValidatorSetRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
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
        return exports.GetLatestValidatorSetRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestValidatorSetRequest",
            value: exports.GetLatestValidatorSetRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetLatestValidatorSetRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetLatestValidatorSetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
            value: exports.GetLatestValidatorSetRequest.encode(message).finish()
        };
    }
};
function createBaseGetLatestValidatorSetResponse() {
    return {
        block_height: BigInt(0),
        validators: [],
        pagination: undefined
    };
}
exports.GetLatestValidatorSetResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block_height !== BigInt(0)) {
            writer.uint32(8).int64(message.block_height);
        }
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestValidatorSetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_height = reader.int64();
                    break;
                case 2:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
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
            block_height: (0, helpers_1.isSet)(object.block_height) ? BigInt(object.block_height.toString()) : BigInt(0),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_height !== undefined && (obj.block_height = (message.block_height || BigInt(0)).toString());
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetLatestValidatorSetResponse();
        message.block_height = object.block_height !== undefined && object.block_height !== null ? BigInt(object.block_height.toString()) : BigInt(0);
        message.validators = object.validators?.map(e => exports.Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            block_height: BigInt(object.block_height),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.block_height ? message.block_height.toString() : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetLatestValidatorSetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestValidatorSetResponse",
            value: exports.GetLatestValidatorSetResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetLatestValidatorSetResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetLatestValidatorSetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
            value: exports.GetLatestValidatorSetResponse.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        address: "",
        pub_key: undefined,
        voting_power: BigInt(0),
        proposer_priority: BigInt(0)
    };
}
exports.Validator = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pub_key !== undefined) {
            any_1.Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.voting_power !== BigInt(0)) {
            writer.uint32(24).int64(message.voting_power);
        }
        if (message.proposer_priority !== BigInt(0)) {
            writer.uint32(32).int64(message.proposer_priority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pub_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.voting_power = reader.int64();
                    break;
                case 4:
                    message.proposer_priority = reader.int64();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            pub_key: (0, helpers_1.isSet)(object.pub_key) ? any_1.Any.fromJSON(object.pub_key) : undefined,
            voting_power: (0, helpers_1.isSet)(object.voting_power) ? BigInt(object.voting_power.toString()) : BigInt(0),
            proposer_priority: (0, helpers_1.isSet)(object.proposer_priority) ? BigInt(object.proposer_priority.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? any_1.Any.toJSON(message.pub_key) : undefined);
        message.voting_power !== undefined && (obj.voting_power = (message.voting_power || BigInt(0)).toString());
        message.proposer_priority !== undefined && (obj.proposer_priority = (message.proposer_priority || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? "";
        message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? any_1.Any.fromPartial(object.pub_key) : undefined;
        message.voting_power = object.voting_power !== undefined && object.voting_power !== null ? BigInt(object.voting_power.toString()) : BigInt(0);
        message.proposer_priority = object.proposer_priority !== undefined && object.proposer_priority !== null ? BigInt(object.proposer_priority.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pub_key: object?.pub_key ? any_1.Any.fromAmino(object.pub_key) : undefined,
            voting_power: BigInt(object.voting_power),
            proposer_priority: BigInt(object.proposer_priority)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pub_key = message.pub_key ? any_1.Any.toAmino(message.pub_key) : undefined;
        obj.voting_power = message.voting_power ? message.voting_power.toString() : undefined;
        obj.proposer_priority = message.proposer_priority ? message.proposer_priority.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Validator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validator",
            value: exports.Validator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Validator.decode(message.value);
    },
    toProto(message) {
        return exports.Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
            value: exports.Validator.encode(message).finish()
        };
    }
};
function createBaseGetBlockByHeightRequest() {
    return {
        height: BigInt(0)
    };
}
exports.GetBlockByHeightRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockByHeightRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightRequest();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            height: BigInt(object.height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetBlockByHeightRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockByHeightRequest",
            value: exports.GetBlockByHeightRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetBlockByHeightRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetBlockByHeightRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
            value: exports.GetBlockByHeightRequest.encode(message).finish()
        };
    }
};
function createBaseGetBlockByHeightResponse() {
    return {
        block_id: undefined,
        block: undefined,
        sdk_block: undefined
    };
}
exports.GetBlockByHeightResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block_id !== undefined) {
            types_1.BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.sdk_block !== undefined) {
            types_2.Block.encode(message.sdk_block, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockByHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = types_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sdk_block = types_2.Block.decode(reader, reader.uint32());
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
            block_id: (0, helpers_1.isSet)(object.block_id) ? types_1.BlockID.fromJSON(object.block_id) : undefined,
            block: (0, helpers_1.isSet)(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
            sdk_block: (0, helpers_1.isSet)(object.sdk_block) ? types_2.Block.fromJSON(object.sdk_block) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id !== undefined && (obj.block_id = message.block_id ? types_1.BlockID.toJSON(message.block_id) : undefined);
        message.block !== undefined && (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        message.sdk_block !== undefined && (obj.sdk_block = message.sdk_block ? types_2.Block.toJSON(message.sdk_block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightResponse();
        message.block_id = object.block_id !== undefined && object.block_id !== null ? types_1.BlockID.fromPartial(object.block_id) : undefined;
        message.block = object.block !== undefined && object.block !== null ? block_1.Block.fromPartial(object.block) : undefined;
        message.sdk_block = object.sdk_block !== undefined && object.sdk_block !== null ? types_2.Block.fromPartial(object.sdk_block) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            block_id: object?.block_id ? types_1.BlockID.fromAmino(object.block_id) : undefined,
            block: object?.block ? block_1.Block.fromAmino(object.block) : undefined,
            sdk_block: object?.sdk_block ? types_2.Block.fromAmino(object.sdk_block) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.block_id ? types_1.BlockID.toAmino(message.block_id) : undefined;
        obj.block = message.block ? block_1.Block.toAmino(message.block) : undefined;
        obj.sdk_block = message.sdk_block ? types_2.Block.toAmino(message.sdk_block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetBlockByHeightResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockByHeightResponse",
            value: exports.GetBlockByHeightResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetBlockByHeightResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetBlockByHeightResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
            value: exports.GetBlockByHeightResponse.encode(message).finish()
        };
    }
};
function createBaseGetLatestBlockRequest() {
    return {};
}
exports.GetLatestBlockRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestBlockRequest();
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
        const message = createBaseGetLatestBlockRequest();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetLatestBlockRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestBlockRequest",
            value: exports.GetLatestBlockRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetLatestBlockRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetLatestBlockRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
            value: exports.GetLatestBlockRequest.encode(message).finish()
        };
    }
};
function createBaseGetLatestBlockResponse() {
    return {
        block_id: undefined,
        block: undefined,
        sdk_block: undefined
    };
}
exports.GetLatestBlockResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block_id !== undefined) {
            types_1.BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.sdk_block !== undefined) {
            types_2.Block.encode(message.sdk_block, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = types_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sdk_block = types_2.Block.decode(reader, reader.uint32());
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
            block_id: (0, helpers_1.isSet)(object.block_id) ? types_1.BlockID.fromJSON(object.block_id) : undefined,
            block: (0, helpers_1.isSet)(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
            sdk_block: (0, helpers_1.isSet)(object.sdk_block) ? types_2.Block.fromJSON(object.sdk_block) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id !== undefined && (obj.block_id = message.block_id ? types_1.BlockID.toJSON(message.block_id) : undefined);
        message.block !== undefined && (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        message.sdk_block !== undefined && (obj.sdk_block = message.sdk_block ? types_2.Block.toJSON(message.sdk_block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetLatestBlockResponse();
        message.block_id = object.block_id !== undefined && object.block_id !== null ? types_1.BlockID.fromPartial(object.block_id) : undefined;
        message.block = object.block !== undefined && object.block !== null ? block_1.Block.fromPartial(object.block) : undefined;
        message.sdk_block = object.sdk_block !== undefined && object.sdk_block !== null ? types_2.Block.fromPartial(object.sdk_block) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            block_id: object?.block_id ? types_1.BlockID.fromAmino(object.block_id) : undefined,
            block: object?.block ? block_1.Block.fromAmino(object.block) : undefined,
            sdk_block: object?.sdk_block ? types_2.Block.fromAmino(object.sdk_block) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.block_id ? types_1.BlockID.toAmino(message.block_id) : undefined;
        obj.block = message.block ? block_1.Block.toAmino(message.block) : undefined;
        obj.sdk_block = message.sdk_block ? types_2.Block.toAmino(message.sdk_block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetLatestBlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestBlockResponse",
            value: exports.GetLatestBlockResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetLatestBlockResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetLatestBlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
            value: exports.GetLatestBlockResponse.encode(message).finish()
        };
    }
};
function createBaseGetSyncingRequest() {
    return {};
}
exports.GetSyncingRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSyncingRequest();
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
        const message = createBaseGetSyncingRequest();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetSyncingRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetSyncingRequest",
            value: exports.GetSyncingRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetSyncingRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetSyncingRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
            value: exports.GetSyncingRequest.encode(message).finish()
        };
    }
};
function createBaseGetSyncingResponse() {
    return {
        syncing: false
    };
}
exports.GetSyncingResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.syncing === true) {
            writer.uint32(8).bool(message.syncing);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSyncingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.syncing = reader.bool();
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
            syncing: (0, helpers_1.isSet)(object.syncing) ? Boolean(object.syncing) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.syncing !== undefined && (obj.syncing = message.syncing);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetSyncingResponse();
        message.syncing = object.syncing ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            syncing: object.syncing
        };
    },
    toAmino(message) {
        const obj = {};
        obj.syncing = message.syncing;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetSyncingResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetSyncingResponse",
            value: exports.GetSyncingResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetSyncingResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetSyncingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
            value: exports.GetSyncingResponse.encode(message).finish()
        };
    }
};
function createBaseGetNodeInfoRequest() {
    return {};
}
exports.GetNodeInfoRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNodeInfoRequest();
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
        const message = createBaseGetNodeInfoRequest();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetNodeInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetNodeInfoRequest",
            value: exports.GetNodeInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetNodeInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetNodeInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
            value: exports.GetNodeInfoRequest.encode(message).finish()
        };
    }
};
function createBaseGetNodeInfoResponse() {
    return {
        default_node_info: undefined,
        application_version: undefined
    };
}
exports.GetNodeInfoResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.default_node_info !== undefined) {
            types_3.DefaultNodeInfo.encode(message.default_node_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.application_version !== undefined) {
            exports.VersionInfo.encode(message.application_version, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNodeInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.default_node_info = types_3.DefaultNodeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.application_version = exports.VersionInfo.decode(reader, reader.uint32());
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
            default_node_info: (0, helpers_1.isSet)(object.default_node_info) ? types_3.DefaultNodeInfo.fromJSON(object.default_node_info) : undefined,
            application_version: (0, helpers_1.isSet)(object.application_version) ? exports.VersionInfo.fromJSON(object.application_version) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.default_node_info !== undefined && (obj.default_node_info = message.default_node_info ? types_3.DefaultNodeInfo.toJSON(message.default_node_info) : undefined);
        message.application_version !== undefined && (obj.application_version = message.application_version ? exports.VersionInfo.toJSON(message.application_version) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetNodeInfoResponse();
        message.default_node_info = object.default_node_info !== undefined && object.default_node_info !== null ? types_3.DefaultNodeInfo.fromPartial(object.default_node_info) : undefined;
        message.application_version = object.application_version !== undefined && object.application_version !== null ? exports.VersionInfo.fromPartial(object.application_version) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            default_node_info: object?.default_node_info ? types_3.DefaultNodeInfo.fromAmino(object.default_node_info) : undefined,
            application_version: object?.application_version ? exports.VersionInfo.fromAmino(object.application_version) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.default_node_info = message.default_node_info ? types_3.DefaultNodeInfo.toAmino(message.default_node_info) : undefined;
        obj.application_version = message.application_version ? exports.VersionInfo.toAmino(message.application_version) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetNodeInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetNodeInfoResponse",
            value: exports.GetNodeInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetNodeInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetNodeInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
            value: exports.GetNodeInfoResponse.encode(message).finish()
        };
    }
};
function createBaseVersionInfo() {
    return {
        name: "",
        app_name: "",
        version: "",
        git_commit: "",
        build_tags: "",
        go_version: "",
        build_deps: [],
        cosmos_sdk_version: ""
    };
}
exports.VersionInfo = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.app_name !== "") {
            writer.uint32(18).string(message.app_name);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        if (message.git_commit !== "") {
            writer.uint32(34).string(message.git_commit);
        }
        if (message.build_tags !== "") {
            writer.uint32(42).string(message.build_tags);
        }
        if (message.go_version !== "") {
            writer.uint32(50).string(message.go_version);
        }
        for (const v of message.build_deps) {
            exports.Module.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.cosmos_sdk_version !== "") {
            writer.uint32(66).string(message.cosmos_sdk_version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.app_name = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.git_commit = reader.string();
                    break;
                case 5:
                    message.build_tags = reader.string();
                    break;
                case 6:
                    message.go_version = reader.string();
                    break;
                case 7:
                    message.build_deps.push(exports.Module.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.cosmos_sdk_version = reader.string();
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            app_name: (0, helpers_1.isSet)(object.app_name) ? String(object.app_name) : "",
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            git_commit: (0, helpers_1.isSet)(object.git_commit) ? String(object.git_commit) : "",
            build_tags: (0, helpers_1.isSet)(object.build_tags) ? String(object.build_tags) : "",
            go_version: (0, helpers_1.isSet)(object.go_version) ? String(object.go_version) : "",
            build_deps: Array.isArray(object?.build_deps) ? object.build_deps.map((e) => exports.Module.fromJSON(e)) : [],
            cosmos_sdk_version: (0, helpers_1.isSet)(object.cosmos_sdk_version) ? String(object.cosmos_sdk_version) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.app_name !== undefined && (obj.app_name = message.app_name);
        message.version !== undefined && (obj.version = message.version);
        message.git_commit !== undefined && (obj.git_commit = message.git_commit);
        message.build_tags !== undefined && (obj.build_tags = message.build_tags);
        message.go_version !== undefined && (obj.go_version = message.go_version);
        if (message.build_deps) {
            obj.build_deps = message.build_deps.map(e => e ? exports.Module.toJSON(e) : undefined);
        }
        else {
            obj.build_deps = [];
        }
        message.cosmos_sdk_version !== undefined && (obj.cosmos_sdk_version = message.cosmos_sdk_version);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVersionInfo();
        message.name = object.name ?? "";
        message.app_name = object.app_name ?? "";
        message.version = object.version ?? "";
        message.git_commit = object.git_commit ?? "";
        message.build_tags = object.build_tags ?? "";
        message.go_version = object.go_version ?? "";
        message.build_deps = object.build_deps?.map(e => exports.Module.fromPartial(e)) || [];
        message.cosmos_sdk_version = object.cosmos_sdk_version ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            app_name: object.app_name,
            version: object.version,
            git_commit: object.git_commit,
            build_tags: object.build_tags,
            go_version: object.go_version,
            build_deps: Array.isArray(object?.build_deps) ? object.build_deps.map((e) => exports.Module.fromAmino(e)) : [],
            cosmos_sdk_version: object.cosmos_sdk_version
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.app_name = message.app_name;
        obj.version = message.version;
        obj.git_commit = message.git_commit;
        obj.build_tags = message.build_tags;
        obj.go_version = message.go_version;
        if (message.build_deps) {
            obj.build_deps = message.build_deps.map(e => e ? exports.Module.toAmino(e) : undefined);
        }
        else {
            obj.build_deps = [];
        }
        obj.cosmos_sdk_version = message.cosmos_sdk_version;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VersionInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/VersionInfo",
            value: exports.VersionInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.VersionInfo.decode(message.value);
    },
    toProto(message) {
        return exports.VersionInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
            value: exports.VersionInfo.encode(message).finish()
        };
    }
};
function createBaseModule() {
    return {
        path: "",
        version: "",
        sum: ""
    };
}
exports.Module = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.sum !== "") {
            writer.uint32(26).string(message.sum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.sum = reader.string();
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
            path: (0, helpers_1.isSet)(object.path) ? String(object.path) : "",
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            sum: (0, helpers_1.isSet)(object.sum) ? String(object.sum) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.version !== undefined && (obj.version = message.version);
        message.sum !== undefined && (obj.sum = message.sum);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.path = object.path ?? "";
        message.version = object.version ?? "";
        message.sum = object.sum ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            version: object.version,
            sum: object.sum
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.version = message.version;
        obj.sum = message.sum;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Module.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Module",
            value: exports.Module.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Module.decode(message.value);
    },
    toProto(message) {
        return exports.Module.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
            value: exports.Module.encode(message).finish()
        };
    }
};
function createBaseABCIQueryRequest() {
    return {
        data: new Uint8Array(),
        path: "",
        height: BigInt(0),
        prove: false
    };
}
exports.ABCIQueryRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.prove === true) {
            writer.uint32(32).bool(message.prove);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIQueryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.prove = reader.bool();
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
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            path: (0, helpers_1.isSet)(object.path) ? String(object.path) : "",
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            prove: (0, helpers_1.isSet)(object.prove) ? Boolean(object.prove) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.path !== undefined && (obj.path = message.path);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.prove !== undefined && (obj.prove = message.prove);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseABCIQueryRequest();
        message.data = object.data ?? new Uint8Array();
        message.path = object.path ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.prove = object.prove ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            data: object.data,
            path: object.path,
            height: BigInt(object.height),
            prove: object.prove
        };
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data;
        obj.path = message.path;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.prove = message.prove;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ABCIQueryRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ABCIQueryRequest",
            value: exports.ABCIQueryRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ABCIQueryRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ABCIQueryRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryRequest",
            value: exports.ABCIQueryRequest.encode(message).finish()
        };
    }
};
function createBaseABCIQueryResponse() {
    return {
        code: 0,
        log: "",
        info: "",
        index: BigInt(0),
        key: new Uint8Array(),
        value: new Uint8Array(),
        proof_ops: undefined,
        height: BigInt(0),
        codespace: ""
    };
}
exports.ABCIQueryResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.index !== BigInt(0)) {
            writer.uint32(40).int64(message.index);
        }
        if (message.key.length !== 0) {
            writer.uint32(50).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.proof_ops !== undefined) {
            exports.ProofOps.encode(message.proof_ops, writer.uint32(66).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(72).int64(message.height);
        }
        if (message.codespace !== "") {
            writer.uint32(82).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIQueryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.index = reader.int64();
                    break;
                case 6:
                    message.key = reader.bytes();
                    break;
                case 7:
                    message.value = reader.bytes();
                    break;
                case 8:
                    message.proof_ops = exports.ProofOps.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.height = reader.int64();
                    break;
                case 10:
                    message.codespace = reader.string();
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
            code: (0, helpers_1.isSet)(object.code) ? Number(object.code) : 0,
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : "",
            index: (0, helpers_1.isSet)(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array(),
            proof_ops: (0, helpers_1.isSet)(object.proof_ops) ? exports.ProofOps.fromJSON(object.proof_ops) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            codespace: (0, helpers_1.isSet)(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        message.proof_ops !== undefined && (obj.proof_ops = message.proof_ops ? exports.ProofOps.toJSON(message.proof_ops) : undefined);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseABCIQueryResponse();
        message.code = object.code ?? 0;
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? exports.ProofOps.fromPartial(object.proof_ops) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            code: object.code,
            log: object.log,
            info: object.info,
            index: BigInt(object.index),
            key: object.key,
            value: object.value,
            proof_ops: object?.proof_ops ? exports.ProofOps.fromAmino(object.proof_ops) : undefined,
            height: BigInt(object.height),
            codespace: object.codespace
        };
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.log = message.log;
        obj.info = message.info;
        obj.index = message.index ? message.index.toString() : undefined;
        obj.key = message.key;
        obj.value = message.value;
        obj.proof_ops = message.proof_ops ? exports.ProofOps.toAmino(message.proof_ops) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ABCIQueryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ABCIQueryResponse",
            value: exports.ABCIQueryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ABCIQueryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ABCIQueryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryResponse",
            value: exports.ABCIQueryResponse.encode(message).finish()
        };
    }
};
function createBaseProofOp() {
    return {
        type: "",
        key: new Uint8Array(),
        data: new Uint8Array()
    };
}
exports.ProofOp = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOp",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.key = reader.bytes();
                    break;
                case 3:
                    message.data = reader.bytes();
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
            type: (0, helpers_1.isSet)(object.type) ? String(object.type) : "",
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProofOp();
        message.type = object.type ?? "";
        message.key = object.key ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            type: object.type,
            key: object.key,
            data: object.data
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.key = message.key;
        obj.data = message.data;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProofOp.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ProofOp",
            value: exports.ProofOp.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ProofOp.decode(message.value);
    },
    toProto(message) {
        return exports.ProofOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOp",
            value: exports.ProofOp.encode(message).finish()
        };
    }
};
function createBaseProofOps() {
    return {
        ops: []
    };
}
exports.ProofOps = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOps",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.ops) {
            exports.ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOps();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ops.push(exports.ProofOp.decode(reader, reader.uint32()));
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
            ops: Array.isArray(object?.ops) ? object.ops.map((e) => exports.ProofOp.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ops) {
            obj.ops = message.ops.map(e => e ? exports.ProofOp.toJSON(e) : undefined);
        }
        else {
            obj.ops = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProofOps();
        message.ops = object.ops?.map(e => exports.ProofOp.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            ops: Array.isArray(object?.ops) ? object.ops.map((e) => exports.ProofOp.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.ops) {
            obj.ops = message.ops.map(e => e ? exports.ProofOp.toAmino(e) : undefined);
        }
        else {
            obj.ops = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProofOps.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ProofOps",
            value: exports.ProofOps.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ProofOps.decode(message.value);
    },
    toProto(message) {
        return exports.ProofOps.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOps",
            value: exports.ProofOps.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map