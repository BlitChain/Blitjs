"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosmos_basev1beta1Msg_ToAmino = exports.Cosmos_basev1beta1Msg_FromAmino = exports.Cosmos_basev1beta1Msg_InterfaceDecoder = exports.MsgRunResponse = exports.MsgRun = exports.protobufPackage = void 0;
//@ts-nocheck
const any_1 = require("../../google/protobuf/any");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "blit.script";
function createBaseMsgRun() {
    return {
        msgs: [],
        caller_address: "",
        script_address: "",
        extra_code: "",
        function_name: "",
        kwargs: "",
        grantee: ""
    };
}
exports.MsgRun = {
    typeUrl: "/blit.script.MsgRun",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.msgs) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.caller_address !== "") {
            writer.uint32(18).string(message.caller_address);
        }
        if (message.script_address !== "") {
            writer.uint32(26).string(message.script_address);
        }
        if (message.extra_code !== "") {
            writer.uint32(34).string(message.extra_code);
        }
        if (message.function_name !== "") {
            writer.uint32(42).string(message.function_name);
        }
        if (message.kwargs !== "") {
            writer.uint32(50).string(message.kwargs);
        }
        if (message.grantee !== "") {
            writer.uint32(58).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRun();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgs.push((0, exports.Cosmos_basev1beta1Msg_InterfaceDecoder)(reader));
                    break;
                case 2:
                    message.caller_address = reader.string();
                    break;
                case 3:
                    message.script_address = reader.string();
                    break;
                case 4:
                    message.extra_code = reader.string();
                    break;
                case 5:
                    message.function_name = reader.string();
                    break;
                case 6:
                    message.kwargs = reader.string();
                    break;
                case 7:
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
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => any_1.Any.fromJSON(e)) : [],
            caller_address: (0, helpers_1.isSet)(object.caller_address) ? String(object.caller_address) : "",
            script_address: (0, helpers_1.isSet)(object.script_address) ? String(object.script_address) : "",
            extra_code: (0, helpers_1.isSet)(object.extra_code) ? String(object.extra_code) : "",
            function_name: (0, helpers_1.isSet)(object.function_name) ? String(object.function_name) : "",
            kwargs: (0, helpers_1.isSet)(object.kwargs) ? String(object.kwargs) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        message.caller_address !== undefined && (obj.caller_address = message.caller_address);
        message.script_address !== undefined && (obj.script_address = message.script_address);
        message.extra_code !== undefined && (obj.extra_code = message.extra_code);
        message.function_name !== undefined && (obj.function_name = message.function_name);
        message.kwargs !== undefined && (obj.kwargs = message.kwargs);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRun();
        message.msgs = object.msgs?.map(e => any_1.Any.fromPartial(e)) || [];
        message.caller_address = object.caller_address ?? "";
        message.script_address = object.script_address ?? "";
        message.extra_code = object.extra_code ?? "";
        message.function_name = object.function_name ?? "";
        message.kwargs = object.kwargs ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => any_1.Any.fromSDK(e)) : [],
            caller_address: object?.caller_address,
            script_address: object?.script_address,
            extra_code: object?.extra_code,
            function_name: object?.function_name,
            kwargs: object?.kwargs,
            grantee: object?.grantee
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? any_1.Any.toSDK(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        obj.caller_address = message.caller_address;
        obj.script_address = message.script_address;
        obj.extra_code = message.extra_code;
        obj.function_name = message.function_name;
        obj.kwargs = message.kwargs;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAmino(object) {
        return {
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => (0, exports.Cosmos_basev1beta1Msg_FromAmino)(e)) : [],
            caller_address: object.caller_address,
            script_address: object.script_address,
            extra_code: object.extra_code,
            function_name: object.function_name,
            kwargs: object.kwargs,
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? (0, exports.Cosmos_basev1beta1Msg_ToAmino)(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        obj.caller_address = message.caller_address;
        obj.script_address = message.script_address;
        obj.extra_code = message.extra_code;
        obj.function_name = message.function_name;
        obj.kwargs = message.kwargs;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRun.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRun.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRun.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgRun",
            value: exports.MsgRun.encode(message).finish()
        };
    }
};
function createBaseMsgRunResponse() {
    return {
        response: ""
    };
}
exports.MsgRunResponse = {
    typeUrl: "/blit.script.MsgRunResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.response !== "") {
            writer.uint32(10).string(message.response);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRunResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = reader.string();
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
            response: (0, helpers_1.isSet)(object.response) ? String(object.response) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.response !== undefined && (obj.response = message.response);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRunResponse();
        message.response = object.response ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            response: object?.response
        };
    },
    toSDK(message) {
        const obj = {};
        obj.response = message.response;
        return obj;
    },
    fromAmino(object) {
        return {
            response: object.response
        };
    },
    toAmino(message) {
        const obj = {};
        obj.response = message.response;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRunResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRunResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRunResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgRunResponse",
            value: exports.MsgRunResponse.encode(message).finish()
        };
    }
};
const Cosmos_basev1beta1Msg_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
exports.Cosmos_basev1beta1Msg_InterfaceDecoder = Cosmos_basev1beta1Msg_InterfaceDecoder;
const Cosmos_basev1beta1Msg_FromAmino = (content) => {
    return any_1.Any.fromAmino(content);
};
exports.Cosmos_basev1beta1Msg_FromAmino = Cosmos_basev1beta1Msg_FromAmino;
const Cosmos_basev1beta1Msg_ToAmino = (content) => {
    return any_1.Any.toAmino(content);
};
exports.Cosmos_basev1beta1Msg_ToAmino = Cosmos_basev1beta1Msg_ToAmino;
//# sourceMappingURL=msgrun.js.map