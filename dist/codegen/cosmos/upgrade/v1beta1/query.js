"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAuthorityResponse = exports.QueryAuthorityRequest = exports.QueryModuleVersionsResponse = exports.QueryModuleVersionsRequest = exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryAppliedPlanResponse = exports.QueryAppliedPlanRequest = exports.QueryCurrentPlanResponse = exports.QueryCurrentPlanRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const upgrade_1 = require("./upgrade");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.upgrade.v1beta1";
function createBaseQueryCurrentPlanRequest() {
    return {};
}
exports.QueryCurrentPlanRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanRequest();
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
        const message = createBaseQueryCurrentPlanRequest();
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
        return exports.QueryCurrentPlanRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCurrentPlanRequest",
            value: exports.QueryCurrentPlanRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentPlanRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentPlanRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest",
            value: exports.QueryCurrentPlanRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentPlanResponse() {
    return {
        plan: undefined
    };
}
exports.QueryCurrentPlanResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plan = upgrade_1.Plan.decode(reader, reader.uint32());
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
            plan: (0, helpers_1.isSet)(object.plan) ? upgrade_1.Plan.fromJSON(object.plan) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.plan !== undefined && (obj.plan = message.plan ? upgrade_1.Plan.toJSON(message.plan) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentPlanResponse();
        message.plan = object.plan !== undefined && object.plan !== null ? upgrade_1.Plan.fromPartial(object.plan) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            plan: object.plan ? upgrade_1.Plan.fromSDK(object.plan) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.plan !== undefined && (obj.plan = message.plan ? upgrade_1.Plan.toSDK(message.plan) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            plan: object?.plan ? upgrade_1.Plan.fromAmino(object.plan) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.plan = message.plan ? upgrade_1.Plan.toAmino(message.plan) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCurrentPlanResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCurrentPlanResponse",
            value: exports.QueryCurrentPlanResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentPlanResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentPlanResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse",
            value: exports.QueryCurrentPlanResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAppliedPlanRequest() {
    return {
        name: ""
    };
}
exports.QueryAppliedPlanRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAppliedPlanRequest();
        message.name = object.name ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            name: object?.name
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        return obj;
    },
    fromAmino(object) {
        return {
            name: object.name
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAppliedPlanRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAppliedPlanRequest",
            value: exports.QueryAppliedPlanRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAppliedPlanRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAppliedPlanRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest",
            value: exports.QueryAppliedPlanRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAppliedPlanResponse() {
    return {
        height: BigInt(0)
    };
}
exports.QueryAppliedPlanResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanResponse();
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
        const message = createBaseQueryAppliedPlanResponse();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        return obj;
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
        return exports.QueryAppliedPlanResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAppliedPlanResponse",
            value: exports.QueryAppliedPlanResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAppliedPlanResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAppliedPlanResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse",
            value: exports.QueryAppliedPlanResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return {
        last_height: BigInt(0)
    };
}
exports.QueryUpgradedConsensusStateRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.last_height !== BigInt(0)) {
            writer.uint32(8).int64(message.last_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.last_height = reader.int64();
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
            last_height: (0, helpers_1.isSet)(object.last_height) ? BigInt(object.last_height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.last_height !== undefined && (obj.last_height = (message.last_height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        message.last_height = object.last_height !== undefined && object.last_height !== null ? BigInt(object.last_height.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            last_height: object?.last_height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.last_height = message.last_height;
        return obj;
    },
    fromAmino(object) {
        return {
            last_height: BigInt(object.last_height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.last_height = message.last_height ? message.last_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
            value: exports.QueryUpgradedConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest",
            value: exports.QueryUpgradedConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return {
        upgraded_consensus_state: new Uint8Array()
    };
}
exports.QueryUpgradedConsensusStateResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.upgraded_consensus_state.length !== 0) {
            writer.uint32(18).bytes(message.upgraded_consensus_state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.upgraded_consensus_state = reader.bytes();
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
            upgraded_consensus_state: (0, helpers_1.isSet)(object.upgraded_consensus_state) ? (0, helpers_1.bytesFromBase64)(object.upgraded_consensus_state) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.upgraded_consensus_state !== undefined && (obj.upgraded_consensus_state = (0, helpers_1.base64FromBytes)(message.upgraded_consensus_state !== undefined ? message.upgraded_consensus_state : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgraded_consensus_state = object.upgraded_consensus_state ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            upgraded_consensus_state: object?.upgraded_consensus_state
        };
    },
    toSDK(message) {
        const obj = {};
        obj.upgraded_consensus_state = message.upgraded_consensus_state;
        return obj;
    },
    fromAmino(object) {
        return {
            upgraded_consensus_state: object.upgraded_consensus_state
        };
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_consensus_state = message.upgraded_consensus_state;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
            value: exports.QueryUpgradedConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse",
            value: exports.QueryUpgradedConsensusStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleVersionsRequest() {
    return {
        module_name: ""
    };
}
exports.QueryModuleVersionsRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.module_name !== "") {
            writer.uint32(10).string(message.module_name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module_name = reader.string();
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
            module_name: (0, helpers_1.isSet)(object.module_name) ? String(object.module_name) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.module_name !== undefined && (obj.module_name = message.module_name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleVersionsRequest();
        message.module_name = object.module_name ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            module_name: object?.module_name
        };
    },
    toSDK(message) {
        const obj = {};
        obj.module_name = message.module_name;
        return obj;
    },
    fromAmino(object) {
        return {
            module_name: object.module_name
        };
    },
    toAmino(message) {
        const obj = {};
        obj.module_name = message.module_name;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleVersionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleVersionsRequest",
            value: exports.QueryModuleVersionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleVersionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleVersionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest",
            value: exports.QueryModuleVersionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleVersionsResponse() {
    return {
        module_versions: []
    };
}
exports.QueryModuleVersionsResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.module_versions) {
            upgrade_1.ModuleVersion.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module_versions.push(upgrade_1.ModuleVersion.decode(reader, reader.uint32()));
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
            module_versions: Array.isArray(object?.module_versions) ? object.module_versions.map((e) => upgrade_1.ModuleVersion.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.module_versions) {
            obj.module_versions = message.module_versions.map(e => e ? upgrade_1.ModuleVersion.toJSON(e) : undefined);
        }
        else {
            obj.module_versions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleVersionsResponse();
        message.module_versions = object.module_versions?.map(e => upgrade_1.ModuleVersion.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            module_versions: Array.isArray(object?.module_versions) ? object.module_versions.map((e) => upgrade_1.ModuleVersion.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.module_versions) {
            obj.module_versions = message.module_versions.map(e => e ? upgrade_1.ModuleVersion.toSDK(e) : undefined);
        }
        else {
            obj.module_versions = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            module_versions: Array.isArray(object?.module_versions) ? object.module_versions.map((e) => upgrade_1.ModuleVersion.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.module_versions) {
            obj.module_versions = message.module_versions.map(e => e ? upgrade_1.ModuleVersion.toAmino(e) : undefined);
        }
        else {
            obj.module_versions = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleVersionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleVersionsResponse",
            value: exports.QueryModuleVersionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleVersionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleVersionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse",
            value: exports.QueryModuleVersionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAuthorityRequest() {
    return {};
}
exports.QueryAuthorityRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuthorityRequest();
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
        const message = createBaseQueryAuthorityRequest();
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
        return exports.QueryAuthorityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAuthorityRequest",
            value: exports.QueryAuthorityRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAuthorityRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAuthorityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityRequest",
            value: exports.QueryAuthorityRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAuthorityResponse() {
    return {
        address: ""
    };
}
exports.QueryAuthorityResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuthorityResponse();
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
        const message = createBaseQueryAuthorityResponse();
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
        return exports.QueryAuthorityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAuthorityResponse",
            value: exports.QueryAuthorityResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAuthorityResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAuthorityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityResponse",
            value: exports.QueryAuthorityResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map