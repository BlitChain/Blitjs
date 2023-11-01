//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.authz.v1beta1";
/** EventGrant is emitted on Msg/Grant */
export interface EventGrant {
  /** Msg type URL for which an autorization is granted */
  msg_type_url: string;
  /** Granter account address */
  granter: string;
  /** Grantee account address */
  grantee: string;
}
export interface EventGrantProtoMsg {
  type_url: "/cosmos.authz.v1beta1.EventGrant";
  value: Uint8Array;
}
export interface EventGrantProtoMsg {
  type_url: "/cosmos.authz.v1beta1.EventGrant";
  value: Uint8Array;
}
/** EventGrant is emitted on Msg/Grant */
export interface EventGrantAmino {
  /** Msg type URL for which an autorization is granted */
  msg_type_url: string;
  /** Granter account address */
  granter: string;
  /** Grantee account address */
  grantee: string;
}
export interface EventGrantAminoMsg {
  type: "cosmos-sdk/EventGrant";
  value: EventGrantAmino;
}
/** EventGrant is emitted on Msg/Grant */
export interface EventGrantSDKType {
  msg_type_url: string;
  granter: string;
  grantee: string;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevoke {
  /** Msg type URL for which an autorization is revoked */
  msg_type_url: string;
  /** Granter account address */
  granter: string;
  /** Grantee account address */
  grantee: string;
}
export interface EventRevokeProtoMsg {
  type_url: "/cosmos.authz.v1beta1.EventRevoke";
  value: Uint8Array;
}
export interface EventRevokeProtoMsg {
  type_url: "/cosmos.authz.v1beta1.EventRevoke";
  value: Uint8Array;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevokeAmino {
  /** Msg type URL for which an autorization is revoked */
  msg_type_url: string;
  /** Granter account address */
  granter: string;
  /** Grantee account address */
  grantee: string;
}
export interface EventRevokeAminoMsg {
  type: "cosmos-sdk/EventRevoke";
  value: EventRevokeAmino;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevokeSDKType {
  msg_type_url: string;
  granter: string;
  grantee: string;
}
function createBaseEventGrant(): EventGrant {
  return {
    msg_type_url: "",
    granter: "",
    grantee: ""
  };
}
export const EventGrant = {
  typeUrl: "/cosmos.authz.v1beta1.EventGrant",
  encode(message: EventGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg_type_url !== "") {
      writer.uint32(18).string(message.msg_type_url);
    }
    if (message.granter !== "") {
      writer.uint32(26).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.msg_type_url = reader.string();
          break;
        case 3:
          message.granter = reader.string();
          break;
        case 4:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventGrant {
    return {
      msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : "",
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  toJSON(message: EventGrant): unknown {
    const obj: any = {};
    message.msg_type_url !== undefined && (obj.msg_type_url = message.msg_type_url);
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial(object: Partial<EventGrant>): EventGrant {
    const message = createBaseEventGrant();
    message.msg_type_url = object.msg_type_url ?? "";
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromSDK(object: EventGrantSDKType): EventGrant {
    return {
      msg_type_url: object?.msg_type_url,
      granter: object?.granter,
      grantee: object?.grantee
    };
  },
  toSDK(message: EventGrant): EventGrantSDKType {
    const obj: any = {};
    obj.msg_type_url = message.msg_type_url;
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAmino(object: EventGrantAmino): EventGrant {
    return {
      msg_type_url: object.msg_type_url,
      granter: object.granter,
      grantee: object.grantee
    };
  },
  toAmino(message: EventGrant): EventGrantAmino {
    const obj: any = {};
    obj.msg_type_url = message.msg_type_url;
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAminoMsg(object: EventGrantAminoMsg): EventGrant {
    return EventGrant.fromAmino(object.value);
  },
  toAminoMsg(message: EventGrant): EventGrantAminoMsg {
    return {
      type: "cosmos-sdk/EventGrant",
      value: EventGrant.toAmino(message)
    };
  },
  fromProtoMsg(message: EventGrantProtoMsg): EventGrant {
    return EventGrant.decode(message.value);
  },
  toProto(message: EventGrant): Uint8Array {
    return EventGrant.encode(message).finish();
  },
  toProtoMsg(message: EventGrant): EventGrantProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.EventGrant",
      value: EventGrant.encode(message).finish()
    };
  }
};
function createBaseEventRevoke(): EventRevoke {
  return {
    msg_type_url: "",
    granter: "",
    grantee: ""
  };
}
export const EventRevoke = {
  typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
  encode(message: EventRevoke, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg_type_url !== "") {
      writer.uint32(18).string(message.msg_type_url);
    }
    if (message.granter !== "") {
      writer.uint32(26).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRevoke {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.msg_type_url = reader.string();
          break;
        case 3:
          message.granter = reader.string();
          break;
        case 4:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRevoke {
    return {
      msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : "",
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  toJSON(message: EventRevoke): unknown {
    const obj: any = {};
    message.msg_type_url !== undefined && (obj.msg_type_url = message.msg_type_url);
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial(object: Partial<EventRevoke>): EventRevoke {
    const message = createBaseEventRevoke();
    message.msg_type_url = object.msg_type_url ?? "";
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromSDK(object: EventRevokeSDKType): EventRevoke {
    return {
      msg_type_url: object?.msg_type_url,
      granter: object?.granter,
      grantee: object?.grantee
    };
  },
  toSDK(message: EventRevoke): EventRevokeSDKType {
    const obj: any = {};
    obj.msg_type_url = message.msg_type_url;
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAmino(object: EventRevokeAmino): EventRevoke {
    return {
      msg_type_url: object.msg_type_url,
      granter: object.granter,
      grantee: object.grantee
    };
  },
  toAmino(message: EventRevoke): EventRevokeAmino {
    const obj: any = {};
    obj.msg_type_url = message.msg_type_url;
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAminoMsg(object: EventRevokeAminoMsg): EventRevoke {
    return EventRevoke.fromAmino(object.value);
  },
  toAminoMsg(message: EventRevoke): EventRevokeAminoMsg {
    return {
      type: "cosmos-sdk/EventRevoke",
      value: EventRevoke.toAmino(message)
    };
  },
  fromProtoMsg(message: EventRevokeProtoMsg): EventRevoke {
    return EventRevoke.decode(message.value);
  },
  toProto(message: EventRevoke): Uint8Array {
    return EventRevoke.encode(message).finish();
  },
  toProtoMsg(message: EventRevoke): EventRevokeProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
      value: EventRevoke.encode(message).finish()
    };
  }
};