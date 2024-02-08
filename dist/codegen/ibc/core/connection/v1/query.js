"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryConnectionParamsResponse = exports.QueryConnectionParamsRequest = exports.QueryConnectionConsensusStateResponse = exports.QueryConnectionConsensusStateRequest = exports.QueryConnectionClientStateResponse = exports.QueryConnectionClientStateRequest = exports.QueryClientConnectionsResponse = exports.QueryClientConnectionsRequest = exports.QueryConnectionsResponse = exports.QueryConnectionsRequest = exports.QueryConnectionResponse = exports.QueryConnectionRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const connection_1 = require("./connection");
const client_1 = require("../../client/v1/client");
const any_1 = require("../../../../google/protobuf/any");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "ibc.core.connection.v1";
function createBaseQueryConnectionRequest() {
    return {
        connection_id: ""
    };
}
exports.QueryConnectionRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
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
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionRequest();
        message.connection_id = object.connection_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionRequest();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionRequest",
            value: exports.QueryConnectionRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
            value: exports.QueryConnectionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionResponse() {
    return {
        connection: undefined,
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connection !== undefined) {
            connection_1.ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = connection_1.ConnectionEnd.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            connection: (0, helpers_1.isSet)(object.connection) ? connection_1.ConnectionEnd.fromJSON(object.connection) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined && (obj.connection = message.connection ? connection_1.ConnectionEnd.toJSON(message.connection) : undefined);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionResponse();
        message.connection = object.connection !== undefined && object.connection !== null ? connection_1.ConnectionEnd.fromPartial(object.connection) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionResponse();
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = connection_1.ConnectionEnd.fromAmino(object.connection);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = (0, helpers_1.bytesFromBase64)(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection = message.connection ? connection_1.ConnectionEnd.toAmino(message.connection) : undefined;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionResponse",
            value: exports.QueryConnectionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
            value: exports.QueryConnectionResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryConnectionsRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionsRequest();
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
        const message = createBaseQueryConnectionsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionsRequest",
            value: exports.QueryConnectionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
            value: exports.QueryConnectionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionsResponse() {
    return {
        connections: [],
        pagination: undefined,
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionsResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.connections) {
            connection_1.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connections.push(connection_1.IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            connections: Array.isArray(object?.connections) ? object.connections.map((e) => connection_1.IdentifiedConnection.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map(e => e ? connection_1.IdentifiedConnection.toJSON(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionsResponse();
        message.connections = object.connections?.map(e => connection_1.IdentifiedConnection.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionsResponse();
        message.connections = object.connections?.map(e => connection_1.IdentifiedConnection.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = client_1.Height.fromAmino(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map(e => e ? connection_1.IdentifiedConnection.toAmino(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionsResponse",
            value: exports.QueryConnectionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
            value: exports.QueryConnectionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientConnectionsRequest() {
    return {
        client_id: ""
    };
}
exports.QueryClientConnectionsRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientConnectionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientConnectionsRequest();
        message.client_id = object.client_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientConnectionsRequest();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientConnectionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientConnectionsRequest",
            value: exports.QueryClientConnectionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientConnectionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientConnectionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
            value: exports.QueryClientConnectionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientConnectionsResponse() {
    return {
        connection_paths: [],
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryClientConnectionsResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.connection_paths) {
            writer.uint32(10).string(v);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientConnectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_paths.push(reader.string());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            connection_paths: Array.isArray(object?.connection_paths) ? object.connection_paths.map((e) => String(e)) : [],
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connection_paths) {
            obj.connection_paths = message.connection_paths.map(e => e);
        }
        else {
            obj.connection_paths = [];
        }
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientConnectionsResponse();
        message.connection_paths = object.connection_paths?.map(e => e) || [];
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientConnectionsResponse();
        message.connection_paths = object.connection_paths?.map(e => e) || [];
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = (0, helpers_1.bytesFromBase64)(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.connection_paths) {
            obj.connection_paths = message.connection_paths.map(e => e);
        }
        else {
            obj.connection_paths = [];
        }
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientConnectionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientConnectionsResponse",
            value: exports.QueryClientConnectionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientConnectionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientConnectionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
            value: exports.QueryClientConnectionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionClientStateRequest() {
    return {
        connection_id: ""
    };
}
exports.QueryConnectionClientStateRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
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
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionClientStateRequest();
        message.connection_id = object.connection_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionClientStateRequest();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionClientStateRequest",
            value: exports.QueryConnectionClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
            value: exports.QueryConnectionClientStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionClientStateResponse() {
    return {
        identified_client_state: undefined,
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionClientStateResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.identified_client_state !== undefined) {
            client_1.IdentifiedClientState.encode(message.identified_client_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identified_client_state = client_1.IdentifiedClientState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            identified_client_state: (0, helpers_1.isSet)(object.identified_client_state) ? client_1.IdentifiedClientState.fromJSON(object.identified_client_state) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.identified_client_state !== undefined && (obj.identified_client_state = message.identified_client_state ? client_1.IdentifiedClientState.toJSON(message.identified_client_state) : undefined);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionClientStateResponse();
        message.identified_client_state = object.identified_client_state !== undefined && object.identified_client_state !== null ? client_1.IdentifiedClientState.fromPartial(object.identified_client_state) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionClientStateResponse();
        if (object.identified_client_state !== undefined && object.identified_client_state !== null) {
            message.identified_client_state = client_1.IdentifiedClientState.fromAmino(object.identified_client_state);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = (0, helpers_1.bytesFromBase64)(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.identified_client_state = message.identified_client_state ? client_1.IdentifiedClientState.toAmino(message.identified_client_state) : undefined;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionClientStateResponse",
            value: exports.QueryConnectionClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
            value: exports.QueryConnectionClientStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionConsensusStateRequest() {
    return {
        connection_id: "",
        revision_number: BigInt(0),
        revision_height: BigInt(0)
    };
}
exports.QueryConnectionConsensusStateRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.revision_number !== BigInt(0)) {
            writer.uint32(16).uint64(message.revision_number);
        }
        if (message.revision_height !== BigInt(0)) {
            writer.uint32(24).uint64(message.revision_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.revision_number = reader.uint64();
                    break;
                case 3:
                    message.revision_height = reader.uint64();
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
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            revision_number: (0, helpers_1.isSet)(object.revision_number) ? BigInt(object.revision_number.toString()) : BigInt(0),
            revision_height: (0, helpers_1.isSet)(object.revision_height) ? BigInt(object.revision_height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.revision_number !== undefined && (obj.revision_number = (message.revision_number || BigInt(0)).toString());
        message.revision_height !== undefined && (obj.revision_height = (message.revision_height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionConsensusStateRequest();
        message.connection_id = object.connection_id ?? "";
        message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? BigInt(object.revision_number.toString()) : BigInt(0);
        message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? BigInt(object.revision_height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionConsensusStateRequest();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        if (object.revision_number !== undefined && object.revision_number !== null) {
            message.revision_number = BigInt(object.revision_number);
        }
        if (object.revision_height !== undefined && object.revision_height !== null) {
            message.revision_height = BigInt(object.revision_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        obj.revision_number = message.revision_number ? message.revision_number.toString() : undefined;
        obj.revision_height = message.revision_height ? message.revision_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionConsensusStateRequest",
            value: exports.QueryConnectionConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
            value: exports.QueryConnectionConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionConsensusStateResponse() {
    return {
        consensus_state: undefined,
        client_id: "",
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionConsensusStateResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.client_id !== "") {
            writer.uint32(18).string(message.client_id);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.client_id = reader.string();
                    break;
                case 3:
                    message.proof = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            consensus_state: (0, helpers_1.isSet)(object.consensus_state) ? any_1.Any.fromJSON(object.consensus_state) : undefined,
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? any_1.Any.toJSON(message.consensus_state) : undefined);
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionConsensusStateResponse();
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? any_1.Any.fromPartial(object.consensus_state) : undefined;
        message.client_id = object.client_id ?? "";
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionConsensusStateResponse();
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensus_state = any_1.Any.fromAmino(object.consensus_state);
        }
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = (0, helpers_1.bytesFromBase64)(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_state = message.consensus_state ? any_1.Any.toAmino(message.consensus_state) : undefined;
        obj.client_id = message.client_id;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionConsensusStateResponse",
            value: exports.QueryConnectionConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
            value: exports.QueryConnectionConsensusStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionParamsRequest() {
    return {};
}
exports.QueryConnectionParamsRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionParamsRequest();
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
        const message = createBaseQueryConnectionParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryConnectionParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionParamsRequest",
            value: exports.QueryConnectionParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsRequest",
            value: exports.QueryConnectionParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionParamsResponse() {
    return {
        params: undefined
    };
}
exports.QueryConnectionParamsResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = client_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? client_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? client_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? client_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = client_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? client_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionParamsResponse",
            value: exports.QueryConnectionParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsResponse",
            value: exports.QueryConnectionParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map