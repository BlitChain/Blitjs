//@ts-nocheck
import { Grant, GrantAmino, GrantSDKType } from "./authz";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmos.authz.v1beta1";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrant {
  granter: string;
  grantee: string;
  grant: Grant;
}
export interface MsgGrantProtoMsg {
  type_url: "/cosmos.authz.v1beta1.MsgGrant";
  value: Uint8Array;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrantAmino {
  granter: string;
  grantee: string;
  grant?: GrantAmino;
}
export interface MsgGrantAminoMsg {
  type: "cosmos-sdk/MsgGrant";
  value: MsgGrantAmino;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrantSDKType {
  granter: string;
  grantee: string;
  grant: GrantSDKType;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponse {}
export interface MsgGrantResponseProtoMsg {
  type_url: "/cosmos.authz.v1beta1.MsgGrantResponse";
  value: Uint8Array;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponseAmino {}
export interface MsgGrantResponseAminoMsg {
  type: "cosmos-sdk/MsgGrantResponse";
  value: MsgGrantResponseAmino;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponseSDKType {}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExec {
  grantee: string;
  /**
   * Execute Msg.
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs: (Any)[] | Any[];
}
export interface MsgExecProtoMsg {
  type_url: "/cosmos.authz.v1beta1.MsgExec";
  value: Uint8Array;
}
export type MsgExecEncoded = Omit<MsgExec, "msgs"> & {
  /**
   * Execute Msg.
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs: (AnyProtoMsg)[];
};
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExecAmino {
  grantee: string;
  /**
   * Execute Msg.
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs: AnyAmino[];
}
export interface MsgExecAminoMsg {
  type: "cosmos-sdk/MsgExec";
  value: MsgExecAmino;
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExecSDKType {
  grantee: string;
  msgs: (AnySDKType)[];
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponse {
  results: Uint8Array[];
}
export interface MsgExecResponseProtoMsg {
  type_url: "/cosmos.authz.v1beta1.MsgExecResponse";
  value: Uint8Array;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponseAmino {
  results: Uint8Array[];
}
export interface MsgExecResponseAminoMsg {
  type: "cosmos-sdk/MsgExecResponse";
  value: MsgExecResponseAmino;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponseSDKType {
  results: Uint8Array[];
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevoke {
  granter: string;
  grantee: string;
  msg_type_url: string;
}
export interface MsgRevokeProtoMsg {
  type_url: "/cosmos.authz.v1beta1.MsgRevoke";
  value: Uint8Array;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevokeAmino {
  granter: string;
  grantee: string;
  msg_type_url: string;
}
export interface MsgRevokeAminoMsg {
  type: "cosmos-sdk/MsgRevoke";
  value: MsgRevokeAmino;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevokeSDKType {
  granter: string;
  grantee: string;
  msg_type_url: string;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponse {}
export interface MsgRevokeResponseProtoMsg {
  type_url: "/cosmos.authz.v1beta1.MsgRevokeResponse";
  value: Uint8Array;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponseAmino {}
export interface MsgRevokeResponseAminoMsg {
  type: "cosmos-sdk/MsgRevokeResponse";
  value: MsgRevokeResponseAmino;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponseSDKType {}
function createBaseMsgGrant(): MsgGrant {
  return {
    granter: "",
    grantee: "",
    grant: Grant.fromPartial({})
  };
}
export const MsgGrant = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
  encode(message: MsgGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.grant !== undefined) {
      Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.grant = Grant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGrant {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      grant: isSet(object.grant) ? Grant.fromJSON(object.grant) : undefined
    };
  },
  toJSON(message: MsgGrant): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.grant !== undefined && (obj.grant = message.grant ? Grant.toJSON(message.grant) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgGrant>): MsgGrant {
    const message = createBaseMsgGrant();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.grant = object.grant !== undefined && object.grant !== null ? Grant.fromPartial(object.grant) : undefined;
    return message;
  },
  fromAmino(object: MsgGrantAmino): MsgGrant {
    return {
      granter: object.granter,
      grantee: object.grantee,
      grant: object?.grant ? Grant.fromAmino(object.grant) : undefined
    };
  },
  toAmino(message: MsgGrant): MsgGrantAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.grant = message.grant ? Grant.toAmino(message.grant) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGrantAminoMsg): MsgGrant {
    return MsgGrant.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrant): MsgGrantAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrant",
      value: MsgGrant.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgGrantProtoMsg): MsgGrant {
    return MsgGrant.decode(message.value);
  },
  toProto(message: MsgGrant): Uint8Array {
    return MsgGrant.encode(message).finish();
  },
  toProtoMsg(message: MsgGrant): MsgGrantProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
      value: MsgGrant.encode(message).finish()
    };
  }
};
function createBaseMsgGrantResponse(): MsgGrantResponse {
  return {};
}
export const MsgGrantResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
  encode(_: MsgGrantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantResponse();
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
  fromJSON(_: any): MsgGrantResponse {
    return {};
  },
  toJSON(_: MsgGrantResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgGrantResponse>): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  },
  fromAmino(_: MsgGrantResponseAmino): MsgGrantResponse {
    return {};
  },
  toAmino(_: MsgGrantResponse): MsgGrantResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGrantResponseAminoMsg): MsgGrantResponse {
    return MsgGrantResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrantResponse): MsgGrantResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrantResponse",
      value: MsgGrantResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgGrantResponseProtoMsg): MsgGrantResponse {
    return MsgGrantResponse.decode(message.value);
  },
  toProto(message: MsgGrantResponse): Uint8Array {
    return MsgGrantResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantResponse): MsgGrantResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
      value: MsgGrantResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExec(): MsgExec {
  return {
    grantee: "",
    msgs: []
  };
}
export const MsgExec = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExec",
  encode(message: MsgExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    for (const v of message.msgs) {
      Any.encode((v! as Any), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.msgs.push((Any(reader) as Any));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExec {
    return {
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgExec): unknown {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgExec>): MsgExec {
    const message = createBaseMsgExec();
    message.grantee = object.grantee ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgExecAmino): MsgExec {
    return {
      grantee: object.grantee,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Cosmos_basev1beta1Msg_FromAmino(e)) : []
    };
  },
  toAmino(message: MsgExec): MsgExecAmino {
    const obj: any = {};
    obj.grantee = message.grantee;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Cosmos_basev1beta1Msg_ToAmino((e as Any)) : undefined);
    } else {
      obj.msgs = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecAminoMsg): MsgExec {
    return MsgExec.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExec): MsgExecAminoMsg {
    return {
      type: "cosmos-sdk/MsgExec",
      value: MsgExec.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecProtoMsg): MsgExec {
    return MsgExec.decode(message.value);
  },
  toProto(message: MsgExec): Uint8Array {
    return MsgExec.encode(message).finish();
  },
  toProtoMsg(message: MsgExec): MsgExecProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgExec",
      value: MsgExec.encode(message).finish()
    };
  }
};
function createBaseMsgExecResponse(): MsgExecResponse {
  return {
    results: []
  };
}
export const MsgExecResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
  encode(message: MsgExecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExecResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: MsgExecResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgExecResponse>): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.results = object.results?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgExecResponseAmino): MsgExecResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgExecResponse): MsgExecResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e);
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecResponseAminoMsg): MsgExecResponse {
    return MsgExecResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecResponse): MsgExecResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgExecResponse",
      value: MsgExecResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecResponseProtoMsg): MsgExecResponse {
    return MsgExecResponse.decode(message.value);
  },
  toProto(message: MsgExecResponse): Uint8Array {
    return MsgExecResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecResponse): MsgExecResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
      value: MsgExecResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevoke(): MsgRevoke {
  return {
    granter: "",
    grantee: "",
    msg_type_url: ""
  };
}
export const MsgRevoke = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
  encode(message: MsgRevoke, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msg_type_url !== "") {
      writer.uint32(26).string(message.msg_type_url);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevoke {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.msg_type_url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRevoke {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : ""
    };
  },
  toJSON(message: MsgRevoke): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.msg_type_url !== undefined && (obj.msg_type_url = message.msg_type_url);
    return obj;
  },
  fromPartial(object: Partial<MsgRevoke>): MsgRevoke {
    const message = createBaseMsgRevoke();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.msg_type_url = object.msg_type_url ?? "";
    return message;
  },
  fromAmino(object: MsgRevokeAmino): MsgRevoke {
    return {
      granter: object.granter,
      grantee: object.grantee,
      msg_type_url: object.msg_type_url
    };
  },
  toAmino(message: MsgRevoke): MsgRevokeAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.msg_type_url = message.msg_type_url;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAminoMsg): MsgRevoke {
    return MsgRevoke.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevoke): MsgRevokeAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevoke",
      value: MsgRevoke.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeProtoMsg): MsgRevoke {
    return MsgRevoke.decode(message.value);
  },
  toProto(message: MsgRevoke): Uint8Array {
    return MsgRevoke.encode(message).finish();
  },
  toProtoMsg(message: MsgRevoke): MsgRevokeProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
      value: MsgRevoke.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeResponse(): MsgRevokeResponse {
  return {};
}
export const MsgRevokeResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
  encode(_: MsgRevokeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeResponse();
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
  fromJSON(_: any): MsgRevokeResponse {
    return {};
  },
  toJSON(_: MsgRevokeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRevokeResponse>): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
  fromAmino(_: MsgRevokeResponseAmino): MsgRevokeResponse {
    return {};
  },
  toAmino(_: MsgRevokeResponse): MsgRevokeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeResponseAminoMsg): MsgRevokeResponse {
    return MsgRevokeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeResponse): MsgRevokeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevokeResponse",
      value: MsgRevokeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeResponseProtoMsg): MsgRevokeResponse {
    return MsgRevokeResponse.decode(message.value);
  },
  toProto(message: MsgRevokeResponse): Uint8Array {
    return MsgRevokeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeResponse): MsgRevokeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
      value: MsgRevokeResponse.encode(message).finish()
    };
  }
};
export const Cosmos_basev1beta1Msg_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32(), true);
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Cosmos_basev1beta1Msg_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const Cosmos_basev1beta1Msg_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};