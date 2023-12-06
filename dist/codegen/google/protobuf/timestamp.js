"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "google.protobuf";
function createBaseTimestamp() {
    return {
        seconds: BigInt(0),
        nanos: 0
    };
}
exports.Timestamp = {
    typeUrl: "/google.protobuf.Timestamp",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.seconds !== BigInt(0)) {
            writer.uint32(8).int64(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimestamp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seconds = reader.int64();
                    break;
                case 2:
                    message.nanos = reader.int32();
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
            seconds: (0, helpers_1.isSet)(object.seconds) ? BigInt(object.seconds.toString()) : BigInt(0),
            nanos: (0, helpers_1.isSet)(object.nanos) ? Number(object.nanos) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.seconds !== undefined && (obj.seconds = (message.seconds || BigInt(0)).toString());
        message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTimestamp();
        message.seconds = object.seconds !== undefined && object.seconds !== null ? BigInt(object.seconds.toString()) : BigInt(0);
        message.nanos = object.nanos ?? 0;
        return message;
    },
    fromAmino(object) {
        return (0, helpers_1.fromJsonTimestamp)(object);
    },
    toAmino(message) {
        return (0, helpers_1.fromTimestamp)(message).toISOString().replace(/\.\d+Z$/, "Z");
    },
    fromAminoMsg(object) {
        return exports.Timestamp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Timestamp.decode(message.value);
    },
    toProto(message) {
        return exports.Timestamp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Timestamp",
            value: exports.Timestamp.encode(message).finish()
        };
    }
};
//# sourceMappingURL=timestamp.js.map