"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = exports.protobufPackage = void 0;
//@ts-nocheck
const types_1 = require("./types");
const evidence_1 = require("./evidence");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "tendermint.types";
function createBaseBlock() {
    return {
        header: types_1.Header.fromPartial({}),
        data: types_1.Data.fromPartial({}),
        evidence: evidence_1.EvidenceList.fromPartial({}),
        last_commit: undefined
    };
}
exports.Block = {
    typeUrl: "/tendermint.types.Block",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            types_1.Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            evidence_1.EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.last_commit !== undefined) {
            types_1.Commit.encode(message.last_commit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = types_1.Data.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.evidence = evidence_1.EvidenceList.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.last_commit = types_1.Commit.decode(reader, reader.uint32());
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
            header: (0, helpers_1.isSet)(object.header) ? types_1.Header.fromJSON(object.header) : undefined,
            data: (0, helpers_1.isSet)(object.data) ? types_1.Data.fromJSON(object.data) : undefined,
            evidence: (0, helpers_1.isSet)(object.evidence) ? evidence_1.EvidenceList.fromJSON(object.evidence) : undefined,
            last_commit: (0, helpers_1.isSet)(object.last_commit) ? types_1.Commit.fromJSON(object.last_commit) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? types_1.Header.toJSON(message.header) : undefined);
        message.data !== undefined && (obj.data = message.data ? types_1.Data.toJSON(message.data) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? evidence_1.EvidenceList.toJSON(message.evidence) : undefined);
        message.last_commit !== undefined && (obj.last_commit = message.last_commit ? types_1.Commit.toJSON(message.last_commit) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlock();
        message.header = object.header !== undefined && object.header !== null ? types_1.Header.fromPartial(object.header) : undefined;
        message.data = object.data !== undefined && object.data !== null ? types_1.Data.fromPartial(object.data) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? evidence_1.EvidenceList.fromPartial(object.evidence) : undefined;
        message.last_commit = object.last_commit !== undefined && object.last_commit !== null ? types_1.Commit.fromPartial(object.last_commit) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            header: object?.header ? types_1.Header.fromAmino(object.header) : undefined,
            data: object?.data ? types_1.Data.fromAmino(object.data) : undefined,
            evidence: object?.evidence ? evidence_1.EvidenceList.fromAmino(object.evidence) : undefined,
            last_commit: object?.last_commit ? types_1.Commit.fromAmino(object.last_commit) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? types_1.Header.toAmino(message.header) : undefined;
        obj.data = message.data ? types_1.Data.toAmino(message.data) : undefined;
        obj.evidence = message.evidence ? evidence_1.EvidenceList.toAmino(message.evidence) : undefined;
        obj.last_commit = message.last_commit ? types_1.Commit.toAmino(message.last_commit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Block.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Block.decode(message.value);
    },
    toProto(message) {
        return exports.Block.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Block",
            value: exports.Block.encode(message).finish()
        };
    }
};
//# sourceMappingURL=block.js.map