//@ts-nocheck
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Script } from "./script";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.script";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/blit.script.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
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
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/blit.script.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetScriptRequest() {
    return {
        address: ""
    };
}
export const QueryGetScriptRequest = {
    typeUrl: "/blit.script.QueryGetScriptRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetScriptRequest();
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
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetScriptRequest();
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
        return QueryGetScriptRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetScriptRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetScriptRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryGetScriptRequest",
            value: QueryGetScriptRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetScriptResponse() {
    return {
        script: Script.fromPartial({})
    };
}
export const QueryGetScriptResponse = {
    typeUrl: "/blit.script.QueryGetScriptResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.script !== undefined) {
            Script.encode(message.script, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetScriptResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.script = Script.decode(reader, reader.uint32());
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
            script: isSet(object.script) ? Script.fromJSON(object.script) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.script !== undefined && (obj.script = message.script ? Script.toJSON(message.script) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetScriptResponse();
        message.script = object.script !== undefined && object.script !== null ? Script.fromPartial(object.script) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            script: object.script ? Script.fromSDK(object.script) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.script !== undefined && (obj.script = message.script ? Script.toSDK(message.script) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            script: object?.script ? Script.fromAmino(object.script) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.script = message.script ? Script.toAmino(message.script) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetScriptResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetScriptResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetScriptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryGetScriptResponse",
            value: QueryGetScriptResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllScriptRequest() {
    return {
        pagination: undefined
    };
}
export const QueryAllScriptRequest = {
    typeUrl: "/blit.script.QueryAllScriptRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllScriptRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllScriptRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllScriptRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllScriptRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllScriptRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryAllScriptRequest",
            value: QueryAllScriptRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllScriptResponse() {
    return {
        script: [],
        pagination: undefined
    };
}
export const QueryAllScriptResponse = {
    typeUrl: "/blit.script.QueryAllScriptResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.script) {
            Script.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllScriptResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.script.push(Script.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            script: Array.isArray(object?.script) ? object.script.map((e) => Script.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.script) {
            obj.script = message.script.map(e => e ? Script.toJSON(e) : undefined);
        }
        else {
            obj.script = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllScriptResponse();
        message.script = object.script?.map(e => Script.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            script: Array.isArray(object?.script) ? object.script.map((e) => Script.fromSDK(e)) : [],
            pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.script) {
            obj.script = message.script.map(e => e ? Script.toSDK(e) : undefined);
        }
        else {
            obj.script = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            script: Array.isArray(object?.script) ? object.script.map((e) => Script.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.script) {
            obj.script = message.script.map(e => e ? Script.toAmino(e) : undefined);
        }
        else {
            obj.script = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllScriptResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllScriptResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllScriptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryAllScriptResponse",
            value: QueryAllScriptResponse.encode(message).finish()
        };
    }
};
function createBaseQueryWebRequest() {
    return {
        address: "",
        httprequest: ""
    };
}
export const QueryWebRequest = {
    typeUrl: "/blit.script.QueryWebRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.httprequest !== "") {
            writer.uint32(18).string(message.httprequest);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWebRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.httprequest = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            httprequest: isSet(object.httprequest) ? String(object.httprequest) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.httprequest !== undefined && (obj.httprequest = message.httprequest);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryWebRequest();
        message.address = object.address ?? "";
        message.httprequest = object.httprequest ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            httprequest: object?.httprequest
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.httprequest = message.httprequest;
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            httprequest: object.httprequest
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.httprequest = message.httprequest;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryWebRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryWebRequest.decode(message.value);
    },
    toProto(message) {
        return QueryWebRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryWebRequest",
            value: QueryWebRequest.encode(message).finish()
        };
    }
};
function createBaseQueryWebResponse() {
    return {
        httpresponse: ""
    };
}
export const QueryWebResponse = {
    typeUrl: "/blit.script.QueryWebResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.httpresponse !== "") {
            writer.uint32(10).string(message.httpresponse);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWebResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpresponse = reader.string();
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
            httpresponse: isSet(object.httpresponse) ? String(object.httpresponse) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.httpresponse !== undefined && (obj.httpresponse = message.httpresponse);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryWebResponse();
        message.httpresponse = object.httpresponse ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            httpresponse: object?.httpresponse
        };
    },
    toSDK(message) {
        const obj = {};
        obj.httpresponse = message.httpresponse;
        return obj;
    },
    fromAmino(object) {
        return {
            httpresponse: object.httpresponse
        };
    },
    toAmino(message) {
        const obj = {};
        obj.httpresponse = message.httpresponse;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryWebResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryWebResponse.decode(message.value);
    },
    toProto(message) {
        return QueryWebResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryWebResponse",
            value: QueryWebResponse.encode(message).finish()
        };
    }
};
function createBaseQueryEvalRequest() {
    return {
        caller_address: "",
        script_address: "",
        extra_code: "",
        function_name: "",
        kwargs: "",
        grantee: ""
    };
}
export const QueryEvalRequest = {
    typeUrl: "/blit.script.QueryEvalRequest",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEvalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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
            caller_address: isSet(object.caller_address) ? String(object.caller_address) : "",
            script_address: isSet(object.script_address) ? String(object.script_address) : "",
            extra_code: isSet(object.extra_code) ? String(object.extra_code) : "",
            function_name: isSet(object.function_name) ? String(object.function_name) : "",
            kwargs: isSet(object.kwargs) ? String(object.kwargs) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.caller_address !== undefined && (obj.caller_address = message.caller_address);
        message.script_address !== undefined && (obj.script_address = message.script_address);
        message.extra_code !== undefined && (obj.extra_code = message.extra_code);
        message.function_name !== undefined && (obj.function_name = message.function_name);
        message.kwargs !== undefined && (obj.kwargs = message.kwargs);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEvalRequest();
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
        obj.caller_address = message.caller_address;
        obj.script_address = message.script_address;
        obj.extra_code = message.extra_code;
        obj.function_name = message.function_name;
        obj.kwargs = message.kwargs;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEvalRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryEvalRequest.decode(message.value);
    },
    toProto(message) {
        return QueryEvalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryEvalRequest",
            value: QueryEvalRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEvalResponse() {
    return {
        response: ""
    };
}
export const QueryEvalResponse = {
    typeUrl: "/blit.script.QueryEvalResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.response !== "") {
            writer.uint32(10).string(message.response);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEvalResponse();
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
            response: isSet(object.response) ? String(object.response) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.response !== undefined && (obj.response = message.response);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEvalResponse();
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
        return QueryEvalResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryEvalResponse.decode(message.value);
    },
    toProto(message) {
        return QueryEvalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.QueryEvalResponse",
            value: QueryEvalResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map