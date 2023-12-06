//@ts-nocheck
import { ResponseCommit, RequestFinalizeBlock, ResponseFinalizeBlock } from "../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmos.store.v1beta1";
function createBaseStoreKVPair() {
    return {
        store_key: "",
        delete: false,
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
export const StoreKVPair = {
    typeUrl: "/cosmos.store.v1beta1.StoreKVPair",
    encode(message, writer = BinaryWriter.create()) {
        if (message.store_key !== "") {
            writer.uint32(10).string(message.store_key);
        }
        if (message.delete === true) {
            writer.uint32(16).bool(message.delete);
        }
        if (message.key.length !== 0) {
            writer.uint32(26).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(34).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreKVPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.store_key = reader.string();
                    break;
                case 2:
                    message.delete = reader.bool();
                    break;
                case 3:
                    message.key = reader.bytes();
                    break;
                case 4:
                    message.value = reader.bytes();
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
            store_key: isSet(object.store_key) ? String(object.store_key) : "",
            delete: isSet(object.delete) ? Boolean(object.delete) : false,
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.store_key !== undefined && (obj.store_key = message.store_key);
        message.delete !== undefined && (obj.delete = message.delete);
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStoreKVPair();
        message.store_key = object.store_key ?? "";
        message.delete = object.delete ?? false;
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            store_key: object.store_key,
            delete: object.delete,
            key: object.key,
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.store_key = message.store_key;
        obj.delete = message.delete;
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return StoreKVPair.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StoreKVPair",
            value: StoreKVPair.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StoreKVPair.decode(message.value);
    },
    toProto(message) {
        return StoreKVPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.v1beta1.StoreKVPair",
            value: StoreKVPair.encode(message).finish()
        };
    }
};
function createBaseBlockMetadata() {
    return {
        response_commit: undefined,
        request_finalize_block: undefined,
        response_finalize_block: undefined
    };
}
export const BlockMetadata = {
    typeUrl: "/cosmos.store.v1beta1.BlockMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.response_commit !== undefined) {
            ResponseCommit.encode(message.response_commit, writer.uint32(50).fork()).ldelim();
        }
        if (message.request_finalize_block !== undefined) {
            RequestFinalizeBlock.encode(message.request_finalize_block, writer.uint32(58).fork()).ldelim();
        }
        if (message.response_finalize_block !== undefined) {
            ResponseFinalizeBlock.encode(message.response_finalize_block, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    message.response_commit = ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.request_finalize_block = RequestFinalizeBlock.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.response_finalize_block = ResponseFinalizeBlock.decode(reader, reader.uint32());
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
            response_commit: isSet(object.response_commit) ? ResponseCommit.fromJSON(object.response_commit) : undefined,
            request_finalize_block: isSet(object.request_finalize_block) ? RequestFinalizeBlock.fromJSON(object.request_finalize_block) : undefined,
            response_finalize_block: isSet(object.response_finalize_block) ? ResponseFinalizeBlock.fromJSON(object.response_finalize_block) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.response_commit !== undefined && (obj.response_commit = message.response_commit ? ResponseCommit.toJSON(message.response_commit) : undefined);
        message.request_finalize_block !== undefined && (obj.request_finalize_block = message.request_finalize_block ? RequestFinalizeBlock.toJSON(message.request_finalize_block) : undefined);
        message.response_finalize_block !== undefined && (obj.response_finalize_block = message.response_finalize_block ? ResponseFinalizeBlock.toJSON(message.response_finalize_block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockMetadata();
        message.response_commit = object.response_commit !== undefined && object.response_commit !== null ? ResponseCommit.fromPartial(object.response_commit) : undefined;
        message.request_finalize_block = object.request_finalize_block !== undefined && object.request_finalize_block !== null ? RequestFinalizeBlock.fromPartial(object.request_finalize_block) : undefined;
        message.response_finalize_block = object.response_finalize_block !== undefined && object.response_finalize_block !== null ? ResponseFinalizeBlock.fromPartial(object.response_finalize_block) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            response_commit: object?.response_commit ? ResponseCommit.fromAmino(object.response_commit) : undefined,
            request_finalize_block: object?.request_finalize_block ? RequestFinalizeBlock.fromAmino(object.request_finalize_block) : undefined,
            response_finalize_block: object?.response_finalize_block ? ResponseFinalizeBlock.fromAmino(object.response_finalize_block) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.response_commit = message.response_commit ? ResponseCommit.toAmino(message.response_commit) : undefined;
        obj.request_finalize_block = message.request_finalize_block ? RequestFinalizeBlock.toAmino(message.request_finalize_block) : undefined;
        obj.response_finalize_block = message.response_finalize_block ? ResponseFinalizeBlock.toAmino(message.response_finalize_block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BlockMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BlockMetadata",
            value: BlockMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return BlockMetadata.decode(message.value);
    },
    toProto(message) {
        return BlockMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.v1beta1.BlockMetadata",
            value: BlockMetadata.encode(message).finish()
        };
    }
};
//# sourceMappingURL=listening.js.map