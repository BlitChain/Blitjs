"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressedNonExistenceProof = exports.CompressedExistenceProof = exports.CompressedBatchEntry = exports.CompressedBatchProof = exports.BatchEntry = exports.BatchProof = exports.InnerSpec = exports.ProofSpec = exports.InnerOp = exports.LeafOp = exports.CommitmentProof = exports.NonExistenceProof = exports.ExistenceProof = exports.lengthOpToJSON = exports.lengthOpFromJSON = exports.LengthOpAmino = exports.LengthOpSDKType = exports.LengthOp = exports.hashOpToJSON = exports.hashOpFromJSON = exports.HashOpAmino = exports.HashOpSDKType = exports.HashOp = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.ics23.v1";
var HashOp;
(function (HashOp) {
    /** NO_HASH - NO_HASH is the default if no data passed. Note this is an illegal argument some places. */
    HashOp[HashOp["NO_HASH"] = 0] = "NO_HASH";
    HashOp[HashOp["SHA256"] = 1] = "SHA256";
    HashOp[HashOp["SHA512"] = 2] = "SHA512";
    HashOp[HashOp["KECCAK"] = 3] = "KECCAK";
    HashOp[HashOp["RIPEMD160"] = 4] = "RIPEMD160";
    /** BITCOIN - ripemd160(sha256(x)) */
    HashOp[HashOp["BITCOIN"] = 5] = "BITCOIN";
    HashOp[HashOp["SHA512_256"] = 6] = "SHA512_256";
    HashOp[HashOp["BLAKE2B_512"] = 7] = "BLAKE2B_512";
    HashOp[HashOp["BLAKE2S_256"] = 8] = "BLAKE2S_256";
    HashOp[HashOp["BLAKE3"] = 9] = "BLAKE3";
    HashOp[HashOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HashOp || (exports.HashOp = HashOp = {}));
exports.HashOpSDKType = HashOp;
exports.HashOpAmino = HashOp;
function hashOpFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_HASH":
            return HashOp.NO_HASH;
        case 1:
        case "SHA256":
            return HashOp.SHA256;
        case 2:
        case "SHA512":
            return HashOp.SHA512;
        case 3:
        case "KECCAK":
            return HashOp.KECCAK;
        case 4:
        case "RIPEMD160":
            return HashOp.RIPEMD160;
        case 5:
        case "BITCOIN":
            return HashOp.BITCOIN;
        case 6:
        case "SHA512_256":
            return HashOp.SHA512_256;
        case 7:
        case "BLAKE2B_512":
            return HashOp.BLAKE2B_512;
        case 8:
        case "BLAKE2S_256":
            return HashOp.BLAKE2S_256;
        case 9:
        case "BLAKE3":
            return HashOp.BLAKE3;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HashOp.UNRECOGNIZED;
    }
}
exports.hashOpFromJSON = hashOpFromJSON;
function hashOpToJSON(object) {
    switch (object) {
        case HashOp.NO_HASH:
            return "NO_HASH";
        case HashOp.SHA256:
            return "SHA256";
        case HashOp.SHA512:
            return "SHA512";
        case HashOp.KECCAK:
            return "KECCAK";
        case HashOp.RIPEMD160:
            return "RIPEMD160";
        case HashOp.BITCOIN:
            return "BITCOIN";
        case HashOp.SHA512_256:
            return "SHA512_256";
        case HashOp.BLAKE2B_512:
            return "BLAKE2B_512";
        case HashOp.BLAKE2S_256:
            return "BLAKE2S_256";
        case HashOp.BLAKE3:
            return "BLAKE3";
        case HashOp.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.hashOpToJSON = hashOpToJSON;
/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */
var LengthOp;
(function (LengthOp) {
    /** NO_PREFIX - NO_PREFIX don't include any length info */
    LengthOp[LengthOp["NO_PREFIX"] = 0] = "NO_PREFIX";
    /** VAR_PROTO - VAR_PROTO uses protobuf (and go-amino) varint encoding of the length */
    LengthOp[LengthOp["VAR_PROTO"] = 1] = "VAR_PROTO";
    /** VAR_RLP - VAR_RLP uses rlp int encoding of the length */
    LengthOp[LengthOp["VAR_RLP"] = 2] = "VAR_RLP";
    /** FIXED32_BIG - FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer */
    LengthOp[LengthOp["FIXED32_BIG"] = 3] = "FIXED32_BIG";
    /** FIXED32_LITTLE - FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer */
    LengthOp[LengthOp["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
    /** FIXED64_BIG - FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer */
    LengthOp[LengthOp["FIXED64_BIG"] = 5] = "FIXED64_BIG";
    /** FIXED64_LITTLE - FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer */
    LengthOp[LengthOp["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
    /** REQUIRE_32_BYTES - REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output) */
    LengthOp[LengthOp["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
    /** REQUIRE_64_BYTES - REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output) */
    LengthOp[LengthOp["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
    LengthOp[LengthOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LengthOp || (exports.LengthOp = LengthOp = {}));
exports.LengthOpSDKType = LengthOp;
exports.LengthOpAmino = LengthOp;
function lengthOpFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_PREFIX":
            return LengthOp.NO_PREFIX;
        case 1:
        case "VAR_PROTO":
            return LengthOp.VAR_PROTO;
        case 2:
        case "VAR_RLP":
            return LengthOp.VAR_RLP;
        case 3:
        case "FIXED32_BIG":
            return LengthOp.FIXED32_BIG;
        case 4:
        case "FIXED32_LITTLE":
            return LengthOp.FIXED32_LITTLE;
        case 5:
        case "FIXED64_BIG":
            return LengthOp.FIXED64_BIG;
        case 6:
        case "FIXED64_LITTLE":
            return LengthOp.FIXED64_LITTLE;
        case 7:
        case "REQUIRE_32_BYTES":
            return LengthOp.REQUIRE_32_BYTES;
        case 8:
        case "REQUIRE_64_BYTES":
            return LengthOp.REQUIRE_64_BYTES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LengthOp.UNRECOGNIZED;
    }
}
exports.lengthOpFromJSON = lengthOpFromJSON;
function lengthOpToJSON(object) {
    switch (object) {
        case LengthOp.NO_PREFIX:
            return "NO_PREFIX";
        case LengthOp.VAR_PROTO:
            return "VAR_PROTO";
        case LengthOp.VAR_RLP:
            return "VAR_RLP";
        case LengthOp.FIXED32_BIG:
            return "FIXED32_BIG";
        case LengthOp.FIXED32_LITTLE:
            return "FIXED32_LITTLE";
        case LengthOp.FIXED64_BIG:
            return "FIXED64_BIG";
        case LengthOp.FIXED64_LITTLE:
            return "FIXED64_LITTLE";
        case LengthOp.REQUIRE_32_BYTES:
            return "REQUIRE_32_BYTES";
        case LengthOp.REQUIRE_64_BYTES:
            return "REQUIRE_64_BYTES";
        case LengthOp.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.lengthOpToJSON = lengthOpToJSON;
function createBaseExistenceProof() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        leaf: undefined,
        path: []
    };
}
exports.ExistenceProof = {
    typeUrl: "/cosmos.ics23.v1.ExistenceProof",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            exports.LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.path) {
            exports.InnerOp.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.leaf = exports.LeafOp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.path.push(exports.InnerOp.decode(reader, reader.uint32()));
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
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array(),
            leaf: (0, helpers_1.isSet)(object.leaf) ? exports.LeafOp.fromJSON(object.leaf) : undefined,
            path: Array.isArray(object?.path) ? object.path.map((e) => exports.InnerOp.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        message.leaf !== undefined && (obj.leaf = message.leaf ? exports.LeafOp.toJSON(message.leaf) : undefined);
        if (message.path) {
            obj.path = message.path.map(e => e ? exports.InnerOp.toJSON(e) : undefined);
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExistenceProof();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.leaf = object.leaf !== undefined && object.leaf !== null ? exports.LeafOp.fromPartial(object.leaf) : undefined;
        message.path = object.path?.map(e => exports.InnerOp.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            key: object?.key,
            value: object?.value,
            leaf: object.leaf ? exports.LeafOp.fromSDK(object.leaf) : undefined,
            path: Array.isArray(object?.path) ? object.path.map((e) => exports.InnerOp.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        message.leaf !== undefined && (obj.leaf = message.leaf ? exports.LeafOp.toSDK(message.leaf) : undefined);
        if (message.path) {
            obj.path = message.path.map(e => e ? exports.InnerOp.toSDK(e) : undefined);
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value,
            leaf: object?.leaf ? exports.LeafOp.fromAmino(object.leaf) : undefined,
            path: Array.isArray(object?.path) ? object.path.map((e) => exports.InnerOp.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.leaf = message.leaf ? exports.LeafOp.toAmino(message.leaf) : undefined;
        if (message.path) {
            obj.path = message.path.map(e => e ? exports.InnerOp.toAmino(e) : undefined);
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExistenceProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ExistenceProof",
            value: exports.ExistenceProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ExistenceProof.decode(message.value);
    },
    toProto(message) {
        return exports.ExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.ExistenceProof",
            value: exports.ExistenceProof.encode(message).finish()
        };
    }
};
function createBaseNonExistenceProof() {
    return {
        key: new Uint8Array(),
        left: undefined,
        right: undefined
    };
}
exports.NonExistenceProof = {
    typeUrl: "/cosmos.ics23.v1.NonExistenceProof",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            exports.ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            exports.ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNonExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.left = exports.ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.right = exports.ExistenceProof.decode(reader, reader.uint32());
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
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            left: (0, helpers_1.isSet)(object.left) ? exports.ExistenceProof.fromJSON(object.left) : undefined,
            right: (0, helpers_1.isSet)(object.right) ? exports.ExistenceProof.fromJSON(object.right) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.left !== undefined && (obj.left = message.left ? exports.ExistenceProof.toJSON(message.left) : undefined);
        message.right !== undefined && (obj.right = message.right ? exports.ExistenceProof.toJSON(message.right) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNonExistenceProof();
        message.key = object.key ?? new Uint8Array();
        message.left = object.left !== undefined && object.left !== null ? exports.ExistenceProof.fromPartial(object.left) : undefined;
        message.right = object.right !== undefined && object.right !== null ? exports.ExistenceProof.fromPartial(object.right) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            key: object?.key,
            left: object.left ? exports.ExistenceProof.fromSDK(object.left) : undefined,
            right: object.right ? exports.ExistenceProof.fromSDK(object.right) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        message.left !== undefined && (obj.left = message.left ? exports.ExistenceProof.toSDK(message.left) : undefined);
        message.right !== undefined && (obj.right = message.right ? exports.ExistenceProof.toSDK(message.right) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            key: object.key,
            left: object?.left ? exports.ExistenceProof.fromAmino(object.left) : undefined,
            right: object?.right ? exports.ExistenceProof.fromAmino(object.right) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.left = message.left ? exports.ExistenceProof.toAmino(message.left) : undefined;
        obj.right = message.right ? exports.ExistenceProof.toAmino(message.right) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NonExistenceProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/NonExistenceProof",
            value: exports.NonExistenceProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.NonExistenceProof.decode(message.value);
    },
    toProto(message) {
        return exports.NonExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.NonExistenceProof",
            value: exports.NonExistenceProof.encode(message).finish()
        };
    }
};
function createBaseCommitmentProof() {
    return {
        exist: undefined,
        nonexist: undefined,
        batch: undefined,
        compressed: undefined
    };
}
exports.CommitmentProof = {
    typeUrl: "/cosmos.ics23.v1.CommitmentProof",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.exist !== undefined) {
            exports.ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            exports.NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        if (message.batch !== undefined) {
            exports.BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
        }
        if (message.compressed !== undefined) {
            exports.CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitmentProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exist = exports.ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = exports.NonExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.batch = exports.BatchProof.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.compressed = exports.CompressedBatchProof.decode(reader, reader.uint32());
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
            exist: (0, helpers_1.isSet)(object.exist) ? exports.ExistenceProof.fromJSON(object.exist) : undefined,
            nonexist: (0, helpers_1.isSet)(object.nonexist) ? exports.NonExistenceProof.fromJSON(object.nonexist) : undefined,
            batch: (0, helpers_1.isSet)(object.batch) ? exports.BatchProof.fromJSON(object.batch) : undefined,
            compressed: (0, helpers_1.isSet)(object.compressed) ? exports.CompressedBatchProof.fromJSON(object.compressed) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.exist !== undefined && (obj.exist = message.exist ? exports.ExistenceProof.toJSON(message.exist) : undefined);
        message.nonexist !== undefined && (obj.nonexist = message.nonexist ? exports.NonExistenceProof.toJSON(message.nonexist) : undefined);
        message.batch !== undefined && (obj.batch = message.batch ? exports.BatchProof.toJSON(message.batch) : undefined);
        message.compressed !== undefined && (obj.compressed = message.compressed ? exports.CompressedBatchProof.toJSON(message.compressed) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommitmentProof();
        message.exist = object.exist !== undefined && object.exist !== null ? exports.ExistenceProof.fromPartial(object.exist) : undefined;
        message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? exports.NonExistenceProof.fromPartial(object.nonexist) : undefined;
        message.batch = object.batch !== undefined && object.batch !== null ? exports.BatchProof.fromPartial(object.batch) : undefined;
        message.compressed = object.compressed !== undefined && object.compressed !== null ? exports.CompressedBatchProof.fromPartial(object.compressed) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            exist: object.exist ? exports.ExistenceProof.fromSDK(object.exist) : undefined,
            nonexist: object.nonexist ? exports.NonExistenceProof.fromSDK(object.nonexist) : undefined,
            batch: object.batch ? exports.BatchProof.fromSDK(object.batch) : undefined,
            compressed: object.compressed ? exports.CompressedBatchProof.fromSDK(object.compressed) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.exist !== undefined && (obj.exist = message.exist ? exports.ExistenceProof.toSDK(message.exist) : undefined);
        message.nonexist !== undefined && (obj.nonexist = message.nonexist ? exports.NonExistenceProof.toSDK(message.nonexist) : undefined);
        message.batch !== undefined && (obj.batch = message.batch ? exports.BatchProof.toSDK(message.batch) : undefined);
        message.compressed !== undefined && (obj.compressed = message.compressed ? exports.CompressedBatchProof.toSDK(message.compressed) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            exist: object?.exist ? exports.ExistenceProof.fromAmino(object.exist) : undefined,
            nonexist: object?.nonexist ? exports.NonExistenceProof.fromAmino(object.nonexist) : undefined,
            batch: object?.batch ? exports.BatchProof.fromAmino(object.batch) : undefined,
            compressed: object?.compressed ? exports.CompressedBatchProof.fromAmino(object.compressed) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.exist = message.exist ? exports.ExistenceProof.toAmino(message.exist) : undefined;
        obj.nonexist = message.nonexist ? exports.NonExistenceProof.toAmino(message.nonexist) : undefined;
        obj.batch = message.batch ? exports.BatchProof.toAmino(message.batch) : undefined;
        obj.compressed = message.compressed ? exports.CompressedBatchProof.toAmino(message.compressed) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommitmentProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommitmentProof",
            value: exports.CommitmentProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommitmentProof.decode(message.value);
    },
    toProto(message) {
        return exports.CommitmentProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.CommitmentProof",
            value: exports.CommitmentProof.encode(message).finish()
        };
    }
};
function createBaseLeafOp() {
    return {
        hash: 0,
        prehash_key: 0,
        prehash_value: 0,
        length: 0,
        prefix: new Uint8Array()
    };
}
exports.LeafOp = {
    typeUrl: "/cosmos.ics23.v1.LeafOp",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== 0) {
            writer.uint32(8).int32(message.hash);
        }
        if (message.prehash_key !== 0) {
            writer.uint32(16).int32(message.prehash_key);
        }
        if (message.prehash_value !== 0) {
            writer.uint32(24).int32(message.prehash_value);
        }
        if (message.length !== 0) {
            writer.uint32(32).int32(message.length);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(42).bytes(message.prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeafOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.int32();
                    break;
                case 2:
                    message.prehash_key = reader.int32();
                    break;
                case 3:
                    message.prehash_value = reader.int32();
                    break;
                case 4:
                    message.length = reader.int32();
                    break;
                case 5:
                    message.prefix = reader.bytes();
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
            hash: (0, helpers_1.isSet)(object.hash) ? hashOpFromJSON(object.hash) : -1,
            prehash_key: (0, helpers_1.isSet)(object.prehash_key) ? hashOpFromJSON(object.prehash_key) : -1,
            prehash_value: (0, helpers_1.isSet)(object.prehash_value) ? hashOpFromJSON(object.prehash_value) : -1,
            length: (0, helpers_1.isSet)(object.length) ? lengthOpFromJSON(object.length) : -1,
            prefix: (0, helpers_1.isSet)(object.prefix) ? (0, helpers_1.bytesFromBase64)(object.prefix) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
        message.prehash_key !== undefined && (obj.prehash_key = hashOpToJSON(message.prehash_key));
        message.prehash_value !== undefined && (obj.prehash_value = hashOpToJSON(message.prehash_value));
        message.length !== undefined && (obj.length = lengthOpToJSON(message.length));
        message.prefix !== undefined && (obj.prefix = (0, helpers_1.base64FromBytes)(message.prefix !== undefined ? message.prefix : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLeafOp();
        message.hash = object.hash ?? 0;
        message.prehash_key = object.prehash_key ?? 0;
        message.prehash_value = object.prehash_value ?? 0;
        message.length = object.length ?? 0;
        message.prefix = object.prefix ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            hash: (0, helpers_1.isSet)(object.hash) ? hashOpFromJSON(object.hash) : -1,
            prehash_key: (0, helpers_1.isSet)(object.prehash_key) ? hashOpFromJSON(object.prehash_key) : -1,
            prehash_value: (0, helpers_1.isSet)(object.prehash_value) ? hashOpFromJSON(object.prehash_value) : -1,
            length: (0, helpers_1.isSet)(object.length) ? lengthOpFromJSON(object.length) : -1,
            prefix: object?.prefix
        };
    },
    toSDK(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
        message.prehash_key !== undefined && (obj.prehash_key = hashOpToJSON(message.prehash_key));
        message.prehash_value !== undefined && (obj.prehash_value = hashOpToJSON(message.prehash_value));
        message.length !== undefined && (obj.length = lengthOpToJSON(message.length));
        obj.prefix = message.prefix;
        return obj;
    },
    fromAmino(object) {
        return {
            hash: (0, helpers_1.isSet)(object.hash) ? hashOpFromJSON(object.hash) : -1,
            prehash_key: (0, helpers_1.isSet)(object.prehash_key) ? hashOpFromJSON(object.prehash_key) : -1,
            prehash_value: (0, helpers_1.isSet)(object.prehash_value) ? hashOpFromJSON(object.prehash_value) : -1,
            length: (0, helpers_1.isSet)(object.length) ? lengthOpFromJSON(object.length) : -1,
            prefix: object.prefix
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        obj.prehash_key = message.prehash_key;
        obj.prehash_value = message.prehash_value;
        obj.length = message.length;
        obj.prefix = message.prefix;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LeafOp.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/LeafOp",
            value: exports.LeafOp.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LeafOp.decode(message.value);
    },
    toProto(message) {
        return exports.LeafOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.LeafOp",
            value: exports.LeafOp.encode(message).finish()
        };
    }
};
function createBaseInnerOp() {
    return {
        hash: 0,
        prefix: new Uint8Array(),
        suffix: new Uint8Array()
    };
}
exports.InnerOp = {
    typeUrl: "/cosmos.ics23.v1.InnerOp",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== 0) {
            writer.uint32(8).int32(message.hash);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(18).bytes(message.prefix);
        }
        if (message.suffix.length !== 0) {
            writer.uint32(26).bytes(message.suffix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInnerOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.int32();
                    break;
                case 2:
                    message.prefix = reader.bytes();
                    break;
                case 3:
                    message.suffix = reader.bytes();
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
            hash: (0, helpers_1.isSet)(object.hash) ? hashOpFromJSON(object.hash) : -1,
            prefix: (0, helpers_1.isSet)(object.prefix) ? (0, helpers_1.bytesFromBase64)(object.prefix) : new Uint8Array(),
            suffix: (0, helpers_1.isSet)(object.suffix) ? (0, helpers_1.bytesFromBase64)(object.suffix) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
        message.prefix !== undefined && (obj.prefix = (0, helpers_1.base64FromBytes)(message.prefix !== undefined ? message.prefix : new Uint8Array()));
        message.suffix !== undefined && (obj.suffix = (0, helpers_1.base64FromBytes)(message.suffix !== undefined ? message.suffix : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInnerOp();
        message.hash = object.hash ?? 0;
        message.prefix = object.prefix ?? new Uint8Array();
        message.suffix = object.suffix ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            hash: (0, helpers_1.isSet)(object.hash) ? hashOpFromJSON(object.hash) : -1,
            prefix: object?.prefix,
            suffix: object?.suffix
        };
    },
    toSDK(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
        obj.prefix = message.prefix;
        obj.suffix = message.suffix;
        return obj;
    },
    fromAmino(object) {
        return {
            hash: (0, helpers_1.isSet)(object.hash) ? hashOpFromJSON(object.hash) : -1,
            prefix: object.prefix,
            suffix: object.suffix
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        obj.prefix = message.prefix;
        obj.suffix = message.suffix;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InnerOp.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InnerOp",
            value: exports.InnerOp.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.InnerOp.decode(message.value);
    },
    toProto(message) {
        return exports.InnerOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.InnerOp",
            value: exports.InnerOp.encode(message).finish()
        };
    }
};
function createBaseProofSpec() {
    return {
        leaf_spec: undefined,
        inner_spec: undefined,
        max_depth: 0,
        min_depth: 0,
        prehash_key_before_comparison: false
    };
}
exports.ProofSpec = {
    typeUrl: "/cosmos.ics23.v1.ProofSpec",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.leaf_spec !== undefined) {
            exports.LeafOp.encode(message.leaf_spec, writer.uint32(10).fork()).ldelim();
        }
        if (message.inner_spec !== undefined) {
            exports.InnerSpec.encode(message.inner_spec, writer.uint32(18).fork()).ldelim();
        }
        if (message.max_depth !== 0) {
            writer.uint32(24).int32(message.max_depth);
        }
        if (message.min_depth !== 0) {
            writer.uint32(32).int32(message.min_depth);
        }
        if (message.prehash_key_before_comparison === true) {
            writer.uint32(40).bool(message.prehash_key_before_comparison);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leaf_spec = exports.LeafOp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.inner_spec = exports.InnerSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.max_depth = reader.int32();
                    break;
                case 4:
                    message.min_depth = reader.int32();
                    break;
                case 5:
                    message.prehash_key_before_comparison = reader.bool();
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
            leaf_spec: (0, helpers_1.isSet)(object.leaf_spec) ? exports.LeafOp.fromJSON(object.leaf_spec) : undefined,
            inner_spec: (0, helpers_1.isSet)(object.inner_spec) ? exports.InnerSpec.fromJSON(object.inner_spec) : undefined,
            max_depth: (0, helpers_1.isSet)(object.max_depth) ? Number(object.max_depth) : 0,
            min_depth: (0, helpers_1.isSet)(object.min_depth) ? Number(object.min_depth) : 0,
            prehash_key_before_comparison: (0, helpers_1.isSet)(object.prehash_key_before_comparison) ? Boolean(object.prehash_key_before_comparison) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.leaf_spec !== undefined && (obj.leaf_spec = message.leaf_spec ? exports.LeafOp.toJSON(message.leaf_spec) : undefined);
        message.inner_spec !== undefined && (obj.inner_spec = message.inner_spec ? exports.InnerSpec.toJSON(message.inner_spec) : undefined);
        message.max_depth !== undefined && (obj.max_depth = Math.round(message.max_depth));
        message.min_depth !== undefined && (obj.min_depth = Math.round(message.min_depth));
        message.prehash_key_before_comparison !== undefined && (obj.prehash_key_before_comparison = message.prehash_key_before_comparison);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProofSpec();
        message.leaf_spec = object.leaf_spec !== undefined && object.leaf_spec !== null ? exports.LeafOp.fromPartial(object.leaf_spec) : undefined;
        message.inner_spec = object.inner_spec !== undefined && object.inner_spec !== null ? exports.InnerSpec.fromPartial(object.inner_spec) : undefined;
        message.max_depth = object.max_depth ?? 0;
        message.min_depth = object.min_depth ?? 0;
        message.prehash_key_before_comparison = object.prehash_key_before_comparison ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            leaf_spec: object.leaf_spec ? exports.LeafOp.fromSDK(object.leaf_spec) : undefined,
            inner_spec: object.inner_spec ? exports.InnerSpec.fromSDK(object.inner_spec) : undefined,
            max_depth: object?.max_depth,
            min_depth: object?.min_depth,
            prehash_key_before_comparison: object?.prehash_key_before_comparison
        };
    },
    toSDK(message) {
        const obj = {};
        message.leaf_spec !== undefined && (obj.leaf_spec = message.leaf_spec ? exports.LeafOp.toSDK(message.leaf_spec) : undefined);
        message.inner_spec !== undefined && (obj.inner_spec = message.inner_spec ? exports.InnerSpec.toSDK(message.inner_spec) : undefined);
        obj.max_depth = message.max_depth;
        obj.min_depth = message.min_depth;
        obj.prehash_key_before_comparison = message.prehash_key_before_comparison;
        return obj;
    },
    fromAmino(object) {
        return {
            leaf_spec: object?.leaf_spec ? exports.LeafOp.fromAmino(object.leaf_spec) : undefined,
            inner_spec: object?.inner_spec ? exports.InnerSpec.fromAmino(object.inner_spec) : undefined,
            max_depth: object.max_depth,
            min_depth: object.min_depth,
            prehash_key_before_comparison: object.prehash_key_before_comparison
        };
    },
    toAmino(message) {
        const obj = {};
        obj.leaf_spec = message.leaf_spec ? exports.LeafOp.toAmino(message.leaf_spec) : undefined;
        obj.inner_spec = message.inner_spec ? exports.InnerSpec.toAmino(message.inner_spec) : undefined;
        obj.max_depth = message.max_depth;
        obj.min_depth = message.min_depth;
        obj.prehash_key_before_comparison = message.prehash_key_before_comparison;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProofSpec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ProofSpec",
            value: exports.ProofSpec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ProofSpec.decode(message.value);
    },
    toProto(message) {
        return exports.ProofSpec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.ProofSpec",
            value: exports.ProofSpec.encode(message).finish()
        };
    }
};
function createBaseInnerSpec() {
    return {
        child_order: [],
        child_size: 0,
        min_prefix_length: 0,
        max_prefix_length: 0,
        empty_child: new Uint8Array(),
        hash: 0
    };
}
exports.InnerSpec = {
    typeUrl: "/cosmos.ics23.v1.InnerSpec",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.child_order) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.child_size !== 0) {
            writer.uint32(16).int32(message.child_size);
        }
        if (message.min_prefix_length !== 0) {
            writer.uint32(24).int32(message.min_prefix_length);
        }
        if (message.max_prefix_length !== 0) {
            writer.uint32(32).int32(message.max_prefix_length);
        }
        if (message.empty_child.length !== 0) {
            writer.uint32(42).bytes(message.empty_child);
        }
        if (message.hash !== 0) {
            writer.uint32(48).int32(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInnerSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.child_order.push(reader.int32());
                        }
                    }
                    else {
                        message.child_order.push(reader.int32());
                    }
                    break;
                case 2:
                    message.child_size = reader.int32();
                    break;
                case 3:
                    message.min_prefix_length = reader.int32();
                    break;
                case 4:
                    message.max_prefix_length = reader.int32();
                    break;
                case 5:
                    message.empty_child = reader.bytes();
                    break;
                case 6:
                    message.hash = reader.int32();
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
            child_order: Array.isArray(object?.child_order) ? object.child_order.map((e) => Number(e)) : [],
            child_size: (0, helpers_1.isSet)(object.child_size) ? Number(object.child_size) : 0,
            min_prefix_length: (0, helpers_1.isSet)(object.min_prefix_length) ? Number(object.min_prefix_length) : 0,
            max_prefix_length: (0, helpers_1.isSet)(object.max_prefix_length) ? Number(object.max_prefix_length) : 0,
            empty_child: (0, helpers_1.isSet)(object.empty_child) ? (0, helpers_1.bytesFromBase64)(object.empty_child) : new Uint8Array(),
            hash: (0, helpers_1.isSet)(object.hash) ? hashOpFromJSON(object.hash) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.child_order) {
            obj.child_order = message.child_order.map(e => Math.round(e));
        }
        else {
            obj.child_order = [];
        }
        message.child_size !== undefined && (obj.child_size = Math.round(message.child_size));
        message.min_prefix_length !== undefined && (obj.min_prefix_length = Math.round(message.min_prefix_length));
        message.max_prefix_length !== undefined && (obj.max_prefix_length = Math.round(message.max_prefix_length));
        message.empty_child !== undefined && (obj.empty_child = (0, helpers_1.base64FromBytes)(message.empty_child !== undefined ? message.empty_child : new Uint8Array()));
        message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInnerSpec();
        message.child_order = object.child_order?.map(e => e) || [];
        message.child_size = object.child_size ?? 0;
        message.min_prefix_length = object.min_prefix_length ?? 0;
        message.max_prefix_length = object.max_prefix_length ?? 0;
        message.empty_child = object.empty_child ?? new Uint8Array();
        message.hash = object.hash ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            child_order: Array.isArray(object?.child_order) ? object.child_order.map((e) => e) : [],
            child_size: object?.child_size,
            min_prefix_length: object?.min_prefix_length,
            max_prefix_length: object?.max_prefix_length,
            empty_child: object?.empty_child,
            hash: (0, helpers_1.isSet)(object.hash) ? hashOpFromJSON(object.hash) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.child_order) {
            obj.child_order = message.child_order.map(e => e);
        }
        else {
            obj.child_order = [];
        }
        obj.child_size = message.child_size;
        obj.min_prefix_length = message.min_prefix_length;
        obj.max_prefix_length = message.max_prefix_length;
        obj.empty_child = message.empty_child;
        message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
        return obj;
    },
    fromAmino(object) {
        return {
            child_order: Array.isArray(object?.child_order) ? object.child_order.map((e) => e) : [],
            child_size: object.child_size,
            min_prefix_length: object.min_prefix_length,
            max_prefix_length: object.max_prefix_length,
            empty_child: object.empty_child,
            hash: (0, helpers_1.isSet)(object.hash) ? hashOpFromJSON(object.hash) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.child_order) {
            obj.child_order = message.child_order.map(e => e);
        }
        else {
            obj.child_order = [];
        }
        obj.child_size = message.child_size;
        obj.min_prefix_length = message.min_prefix_length;
        obj.max_prefix_length = message.max_prefix_length;
        obj.empty_child = message.empty_child;
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InnerSpec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InnerSpec",
            value: exports.InnerSpec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.InnerSpec.decode(message.value);
    },
    toProto(message) {
        return exports.InnerSpec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.InnerSpec",
            value: exports.InnerSpec.encode(message).finish()
        };
    }
};
function createBaseBatchProof() {
    return {
        entries: []
    };
}
exports.BatchProof = {
    typeUrl: "/cosmos.ics23.v1.BatchProof",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.entries) {
            exports.BatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(exports.BatchEntry.decode(reader, reader.uint32()));
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
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.BatchEntry.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.BatchEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBatchProof();
        message.entries = object.entries?.map(e => exports.BatchEntry.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.BatchEntry.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.BatchEntry.toSDK(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.BatchEntry.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.BatchEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BatchProof",
            value: exports.BatchProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BatchProof.decode(message.value);
    },
    toProto(message) {
        return exports.BatchProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.BatchProof",
            value: exports.BatchProof.encode(message).finish()
        };
    }
};
function createBaseBatchEntry() {
    return {
        exist: undefined,
        nonexist: undefined
    };
}
exports.BatchEntry = {
    typeUrl: "/cosmos.ics23.v1.BatchEntry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.exist !== undefined) {
            exports.ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            exports.NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exist = exports.ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = exports.NonExistenceProof.decode(reader, reader.uint32());
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
            exist: (0, helpers_1.isSet)(object.exist) ? exports.ExistenceProof.fromJSON(object.exist) : undefined,
            nonexist: (0, helpers_1.isSet)(object.nonexist) ? exports.NonExistenceProof.fromJSON(object.nonexist) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.exist !== undefined && (obj.exist = message.exist ? exports.ExistenceProof.toJSON(message.exist) : undefined);
        message.nonexist !== undefined && (obj.nonexist = message.nonexist ? exports.NonExistenceProof.toJSON(message.nonexist) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBatchEntry();
        message.exist = object.exist !== undefined && object.exist !== null ? exports.ExistenceProof.fromPartial(object.exist) : undefined;
        message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? exports.NonExistenceProof.fromPartial(object.nonexist) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            exist: object.exist ? exports.ExistenceProof.fromSDK(object.exist) : undefined,
            nonexist: object.nonexist ? exports.NonExistenceProof.fromSDK(object.nonexist) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.exist !== undefined && (obj.exist = message.exist ? exports.ExistenceProof.toSDK(message.exist) : undefined);
        message.nonexist !== undefined && (obj.nonexist = message.nonexist ? exports.NonExistenceProof.toSDK(message.nonexist) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            exist: object?.exist ? exports.ExistenceProof.fromAmino(object.exist) : undefined,
            nonexist: object?.nonexist ? exports.NonExistenceProof.fromAmino(object.nonexist) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.exist = message.exist ? exports.ExistenceProof.toAmino(message.exist) : undefined;
        obj.nonexist = message.nonexist ? exports.NonExistenceProof.toAmino(message.nonexist) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BatchEntry",
            value: exports.BatchEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BatchEntry.decode(message.value);
    },
    toProto(message) {
        return exports.BatchEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.BatchEntry",
            value: exports.BatchEntry.encode(message).finish()
        };
    }
};
function createBaseCompressedBatchProof() {
    return {
        entries: [],
        lookup_inners: []
    };
}
exports.CompressedBatchProof = {
    typeUrl: "/cosmos.ics23.v1.CompressedBatchProof",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.entries) {
            exports.CompressedBatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lookup_inners) {
            exports.InnerOp.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedBatchProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(exports.CompressedBatchEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.lookup_inners.push(exports.InnerOp.decode(reader, reader.uint32()));
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
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.CompressedBatchEntry.fromJSON(e)) : [],
            lookup_inners: Array.isArray(object?.lookup_inners) ? object.lookup_inners.map((e) => exports.InnerOp.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.CompressedBatchEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        if (message.lookup_inners) {
            obj.lookup_inners = message.lookup_inners.map(e => e ? exports.InnerOp.toJSON(e) : undefined);
        }
        else {
            obj.lookup_inners = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCompressedBatchProof();
        message.entries = object.entries?.map(e => exports.CompressedBatchEntry.fromPartial(e)) || [];
        message.lookup_inners = object.lookup_inners?.map(e => exports.InnerOp.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.CompressedBatchEntry.fromSDK(e)) : [],
            lookup_inners: Array.isArray(object?.lookup_inners) ? object.lookup_inners.map((e) => exports.InnerOp.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.CompressedBatchEntry.toSDK(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        if (message.lookup_inners) {
            obj.lookup_inners = message.lookup_inners.map(e => e ? exports.InnerOp.toSDK(e) : undefined);
        }
        else {
            obj.lookup_inners = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.CompressedBatchEntry.fromAmino(e)) : [],
            lookup_inners: Array.isArray(object?.lookup_inners) ? object.lookup_inners.map((e) => exports.InnerOp.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.CompressedBatchEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        if (message.lookup_inners) {
            obj.lookup_inners = message.lookup_inners.map(e => e ? exports.InnerOp.toAmino(e) : undefined);
        }
        else {
            obj.lookup_inners = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompressedBatchProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CompressedBatchProof",
            value: exports.CompressedBatchProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CompressedBatchProof.decode(message.value);
    },
    toProto(message) {
        return exports.CompressedBatchProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.CompressedBatchProof",
            value: exports.CompressedBatchProof.encode(message).finish()
        };
    }
};
function createBaseCompressedBatchEntry() {
    return {
        exist: undefined,
        nonexist: undefined
    };
}
exports.CompressedBatchEntry = {
    typeUrl: "/cosmos.ics23.v1.CompressedBatchEntry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.exist !== undefined) {
            exports.CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            exports.CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedBatchEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exist = exports.CompressedExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = exports.CompressedNonExistenceProof.decode(reader, reader.uint32());
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
            exist: (0, helpers_1.isSet)(object.exist) ? exports.CompressedExistenceProof.fromJSON(object.exist) : undefined,
            nonexist: (0, helpers_1.isSet)(object.nonexist) ? exports.CompressedNonExistenceProof.fromJSON(object.nonexist) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.exist !== undefined && (obj.exist = message.exist ? exports.CompressedExistenceProof.toJSON(message.exist) : undefined);
        message.nonexist !== undefined && (obj.nonexist = message.nonexist ? exports.CompressedNonExistenceProof.toJSON(message.nonexist) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCompressedBatchEntry();
        message.exist = object.exist !== undefined && object.exist !== null ? exports.CompressedExistenceProof.fromPartial(object.exist) : undefined;
        message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? exports.CompressedNonExistenceProof.fromPartial(object.nonexist) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            exist: object.exist ? exports.CompressedExistenceProof.fromSDK(object.exist) : undefined,
            nonexist: object.nonexist ? exports.CompressedNonExistenceProof.fromSDK(object.nonexist) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.exist !== undefined && (obj.exist = message.exist ? exports.CompressedExistenceProof.toSDK(message.exist) : undefined);
        message.nonexist !== undefined && (obj.nonexist = message.nonexist ? exports.CompressedNonExistenceProof.toSDK(message.nonexist) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            exist: object?.exist ? exports.CompressedExistenceProof.fromAmino(object.exist) : undefined,
            nonexist: object?.nonexist ? exports.CompressedNonExistenceProof.fromAmino(object.nonexist) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.exist = message.exist ? exports.CompressedExistenceProof.toAmino(message.exist) : undefined;
        obj.nonexist = message.nonexist ? exports.CompressedNonExistenceProof.toAmino(message.nonexist) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompressedBatchEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CompressedBatchEntry",
            value: exports.CompressedBatchEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CompressedBatchEntry.decode(message.value);
    },
    toProto(message) {
        return exports.CompressedBatchEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.CompressedBatchEntry",
            value: exports.CompressedBatchEntry.encode(message).finish()
        };
    }
};
function createBaseCompressedExistenceProof() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        leaf: undefined,
        path: []
    };
}
exports.CompressedExistenceProof = {
    typeUrl: "/cosmos.ics23.v1.CompressedExistenceProof",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            exports.LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.leaf = exports.LeafOp.decode(reader, reader.uint32());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
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
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array(),
            leaf: (0, helpers_1.isSet)(object.leaf) ? exports.LeafOp.fromJSON(object.leaf) : undefined,
            path: Array.isArray(object?.path) ? object.path.map((e) => Number(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        message.leaf !== undefined && (obj.leaf = message.leaf ? exports.LeafOp.toJSON(message.leaf) : undefined);
        if (message.path) {
            obj.path = message.path.map(e => Math.round(e));
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCompressedExistenceProof();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.leaf = object.leaf !== undefined && object.leaf !== null ? exports.LeafOp.fromPartial(object.leaf) : undefined;
        message.path = object.path?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            key: object?.key,
            value: object?.value,
            leaf: object.leaf ? exports.LeafOp.fromSDK(object.leaf) : undefined,
            path: Array.isArray(object?.path) ? object.path.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        message.leaf !== undefined && (obj.leaf = message.leaf ? exports.LeafOp.toSDK(message.leaf) : undefined);
        if (message.path) {
            obj.path = message.path.map(e => e);
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value,
            leaf: object?.leaf ? exports.LeafOp.fromAmino(object.leaf) : undefined,
            path: Array.isArray(object?.path) ? object.path.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.leaf = message.leaf ? exports.LeafOp.toAmino(message.leaf) : undefined;
        if (message.path) {
            obj.path = message.path.map(e => e);
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompressedExistenceProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CompressedExistenceProof",
            value: exports.CompressedExistenceProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CompressedExistenceProof.decode(message.value);
    },
    toProto(message) {
        return exports.CompressedExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.CompressedExistenceProof",
            value: exports.CompressedExistenceProof.encode(message).finish()
        };
    }
};
function createBaseCompressedNonExistenceProof() {
    return {
        key: new Uint8Array(),
        left: undefined,
        right: undefined
    };
}
exports.CompressedNonExistenceProof = {
    typeUrl: "/cosmos.ics23.v1.CompressedNonExistenceProof",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            exports.CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            exports.CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedNonExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.left = exports.CompressedExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.right = exports.CompressedExistenceProof.decode(reader, reader.uint32());
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
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            left: (0, helpers_1.isSet)(object.left) ? exports.CompressedExistenceProof.fromJSON(object.left) : undefined,
            right: (0, helpers_1.isSet)(object.right) ? exports.CompressedExistenceProof.fromJSON(object.right) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.left !== undefined && (obj.left = message.left ? exports.CompressedExistenceProof.toJSON(message.left) : undefined);
        message.right !== undefined && (obj.right = message.right ? exports.CompressedExistenceProof.toJSON(message.right) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCompressedNonExistenceProof();
        message.key = object.key ?? new Uint8Array();
        message.left = object.left !== undefined && object.left !== null ? exports.CompressedExistenceProof.fromPartial(object.left) : undefined;
        message.right = object.right !== undefined && object.right !== null ? exports.CompressedExistenceProof.fromPartial(object.right) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            key: object?.key,
            left: object.left ? exports.CompressedExistenceProof.fromSDK(object.left) : undefined,
            right: object.right ? exports.CompressedExistenceProof.fromSDK(object.right) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        message.left !== undefined && (obj.left = message.left ? exports.CompressedExistenceProof.toSDK(message.left) : undefined);
        message.right !== undefined && (obj.right = message.right ? exports.CompressedExistenceProof.toSDK(message.right) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            key: object.key,
            left: object?.left ? exports.CompressedExistenceProof.fromAmino(object.left) : undefined,
            right: object?.right ? exports.CompressedExistenceProof.fromAmino(object.right) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.left = message.left ? exports.CompressedExistenceProof.toAmino(message.left) : undefined;
        obj.right = message.right ? exports.CompressedExistenceProof.toAmino(message.right) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompressedNonExistenceProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CompressedNonExistenceProof",
            value: exports.CompressedNonExistenceProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CompressedNonExistenceProof.decode(message.value);
    },
    toProto(message) {
        return exports.CompressedNonExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.CompressedNonExistenceProof",
            value: exports.CompressedNonExistenceProof.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proofs.js.map