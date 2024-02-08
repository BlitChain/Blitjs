//@ts-nocheck
import { FileDescriptorProto } from "../../../google/protobuf/descriptor";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "cosmos.reflection.v1";
function createBaseFileDescriptorsRequest() {
    return {};
}
export const FileDescriptorsRequest = {
    typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorsRequest();
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
        const message = createBaseFileDescriptorsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseFileDescriptorsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return FileDescriptorsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/FileDescriptorsRequest",
            value: FileDescriptorsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return FileDescriptorsRequest.decode(message.value);
    },
    toProto(message) {
        return FileDescriptorsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest",
            value: FileDescriptorsRequest.encode(message).finish()
        };
    }
};
function createBaseFileDescriptorsResponse() {
    return {
        files: []
    };
}
export const FileDescriptorsResponse = {
    typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.files) {
            FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.files.push(FileDescriptorProto.decode(reader, reader.uint32()));
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
            files: Array.isArray(object?.files) ? object.files.map((e) => FileDescriptorProto.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.files) {
            obj.files = message.files.map(e => e ? FileDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.files = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFileDescriptorsResponse();
        message.files = object.files?.map(e => FileDescriptorProto.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseFileDescriptorsResponse();
        message.files = object.files?.map(e => FileDescriptorProto.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.files) {
            obj.files = message.files.map(e => e ? FileDescriptorProto.toAmino(e) : undefined);
        }
        else {
            obj.files = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return FileDescriptorsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/FileDescriptorsResponse",
            value: FileDescriptorsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return FileDescriptorsResponse.decode(message.value);
    },
    toProto(message) {
        return FileDescriptorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse",
            value: FileDescriptorsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=reflection.js.map