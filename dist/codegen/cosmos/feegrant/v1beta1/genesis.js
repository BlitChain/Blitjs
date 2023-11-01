"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
const feegrant_1 = require("./feegrant");
const binary_1 = require("../../../binary");
exports.protobufPackage = "cosmos.feegrant.v1beta1";
function createBaseGenesisState() {
    return {
        allowances: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.feegrant.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.allowances) {
            feegrant_1.Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowances.push(feegrant_1.Grant.decode(reader, reader.uint32()));
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
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => feegrant_1.Grant.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toJSON(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.allowances = object.allowances?.map(e => feegrant_1.Grant.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => feegrant_1.Grant.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toSDK(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => feegrant_1.Grant.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toAmino(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map