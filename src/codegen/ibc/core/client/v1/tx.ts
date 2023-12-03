//@ts-nocheck
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Plan, PlanAmino, PlanSDKType } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import { Params, ParamsAmino, ParamsSDKType } from "./client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "ibc.core.client.v1";
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClient {
  /** light client state */
  client_state?: Any;
  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   */
  consensus_state?: Any;
  /** signer address */
  signer: string;
}
export interface MsgCreateClientProtoMsg {
  type_url: "/ibc.core.client.v1.MsgCreateClient";
  value: Uint8Array;
}
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClientAmino {
  /** light client state */
  client_state?: AnyAmino;
  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   */
  consensus_state?: AnyAmino;
  /** signer address */
  signer: string;
}
export interface MsgCreateClientAminoMsg {
  type: "cosmos-sdk/MsgCreateClient";
  value: MsgCreateClientAmino;
}
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClientSDKType {
  client_state?: AnySDKType;
  consensus_state?: AnySDKType;
  signer: string;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponse {}
export interface MsgCreateClientResponseProtoMsg {
  type_url: "/ibc.core.client.v1.MsgCreateClientResponse";
  value: Uint8Array;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponseAmino {}
export interface MsgCreateClientResponseAminoMsg {
  type: "cosmos-sdk/MsgCreateClientResponse";
  value: MsgCreateClientResponseAmino;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponseSDKType {}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 */
export interface MsgUpdateClient {
  /** client unique identifier */
  client_id: string;
  /** client message to update the light client */
  client_message?: Any;
  /** signer address */
  signer: string;
}
export interface MsgUpdateClientProtoMsg {
  type_url: "/ibc.core.client.v1.MsgUpdateClient";
  value: Uint8Array;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 */
export interface MsgUpdateClientAmino {
  /** client unique identifier */
  client_id: string;
  /** client message to update the light client */
  client_message?: AnyAmino;
  /** signer address */
  signer: string;
}
export interface MsgUpdateClientAminoMsg {
  type: "cosmos-sdk/MsgUpdateClient";
  value: MsgUpdateClientAmino;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 */
export interface MsgUpdateClientSDKType {
  client_id: string;
  client_message?: AnySDKType;
  signer: string;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponse {}
export interface MsgUpdateClientResponseProtoMsg {
  type_url: "/ibc.core.client.v1.MsgUpdateClientResponse";
  value: Uint8Array;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponseAmino {}
export interface MsgUpdateClientResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateClientResponse";
  value: MsgUpdateClientResponseAmino;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponseSDKType {}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClient {
  /** client unique identifier */
  client_id: string;
  /** upgraded client state */
  client_state?: Any;
  /**
   * upgraded consensus state, only contains enough information to serve as a
   * basis of trust in update logic
   */
  consensus_state?: Any;
  /** proof that old chain committed to new client */
  proof_upgrade_client: Uint8Array;
  /** proof that old chain committed to new consensus state */
  proof_upgrade_consensus_state: Uint8Array;
  /** signer address */
  signer: string;
}
export interface MsgUpgradeClientProtoMsg {
  type_url: "/ibc.core.client.v1.MsgUpgradeClient";
  value: Uint8Array;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClientAmino {
  /** client unique identifier */
  client_id: string;
  /** upgraded client state */
  client_state?: AnyAmino;
  /**
   * upgraded consensus state, only contains enough information to serve as a
   * basis of trust in update logic
   */
  consensus_state?: AnyAmino;
  /** proof that old chain committed to new client */
  proof_upgrade_client: Uint8Array;
  /** proof that old chain committed to new consensus state */
  proof_upgrade_consensus_state: Uint8Array;
  /** signer address */
  signer: string;
}
export interface MsgUpgradeClientAminoMsg {
  type: "cosmos-sdk/MsgUpgradeClient";
  value: MsgUpgradeClientAmino;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClientSDKType {
  client_id: string;
  client_state?: AnySDKType;
  consensus_state?: AnySDKType;
  proof_upgrade_client: Uint8Array;
  proof_upgrade_consensus_state: Uint8Array;
  signer: string;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponse {}
export interface MsgUpgradeClientResponseProtoMsg {
  type_url: "/ibc.core.client.v1.MsgUpgradeClientResponse";
  value: Uint8Array;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponseAmino {}
export interface MsgUpgradeClientResponseAminoMsg {
  type: "cosmos-sdk/MsgUpgradeClientResponse";
  value: MsgUpgradeClientResponseAmino;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponseSDKType {}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * This message has been deprecated. Use MsgUpdateClient instead.
 */
/** @deprecated */
export interface MsgSubmitMisbehaviour {
  /** client unique identifier */
  client_id: string;
  /** misbehaviour used for freezing the light client */
  misbehaviour?: Any;
  /** signer address */
  signer: string;
}
export interface MsgSubmitMisbehaviourProtoMsg {
  type_url: "/ibc.core.client.v1.MsgSubmitMisbehaviour";
  value: Uint8Array;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * This message has been deprecated. Use MsgUpdateClient instead.
 */
/** @deprecated */
export interface MsgSubmitMisbehaviourAmino {
  /** client unique identifier */
  client_id: string;
  /** misbehaviour used for freezing the light client */
  misbehaviour?: AnyAmino;
  /** signer address */
  signer: string;
}
export interface MsgSubmitMisbehaviourAminoMsg {
  type: "cosmos-sdk/MsgSubmitMisbehaviour";
  value: MsgSubmitMisbehaviourAmino;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * This message has been deprecated. Use MsgUpdateClient instead.
 */
/** @deprecated */
export interface MsgSubmitMisbehaviourSDKType {
  client_id: string;
  misbehaviour?: AnySDKType;
  signer: string;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponse {}
export interface MsgSubmitMisbehaviourResponseProtoMsg {
  type_url: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponseAmino {}
export interface MsgSubmitMisbehaviourResponseAminoMsg {
  type: "cosmos-sdk/MsgSubmitMisbehaviourResponse";
  value: MsgSubmitMisbehaviourResponseAmino;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponseSDKType {}
/** MsgRecoverClient defines the message used to recover a frozen or expired client. */
export interface MsgRecoverClient {
  /** the client identifier for the client to be updated if the proposal passes */
  subject_client_id: string;
  /**
   * the substitute client identifier for the client which will replace the subject
   * client
   */
  substitute_client_id: string;
  /** signer address */
  signer: string;
}
export interface MsgRecoverClientProtoMsg {
  type_url: "/ibc.core.client.v1.MsgRecoverClient";
  value: Uint8Array;
}
/** MsgRecoverClient defines the message used to recover a frozen or expired client. */
export interface MsgRecoverClientAmino {
  /** the client identifier for the client to be updated if the proposal passes */
  subject_client_id: string;
  /**
   * the substitute client identifier for the client which will replace the subject
   * client
   */
  substitute_client_id: string;
  /** signer address */
  signer: string;
}
export interface MsgRecoverClientAminoMsg {
  type: "cosmos-sdk/MsgRecoverClient";
  value: MsgRecoverClientAmino;
}
/** MsgRecoverClient defines the message used to recover a frozen or expired client. */
export interface MsgRecoverClientSDKType {
  subject_client_id: string;
  substitute_client_id: string;
  signer: string;
}
/** MsgRecoverClientResponse defines the Msg/RecoverClient response type. */
export interface MsgRecoverClientResponse {}
export interface MsgRecoverClientResponseProtoMsg {
  type_url: "/ibc.core.client.v1.MsgRecoverClientResponse";
  value: Uint8Array;
}
/** MsgRecoverClientResponse defines the Msg/RecoverClient response type. */
export interface MsgRecoverClientResponseAmino {}
export interface MsgRecoverClientResponseAminoMsg {
  type: "cosmos-sdk/MsgRecoverClientResponse";
  value: MsgRecoverClientResponseAmino;
}
/** MsgRecoverClientResponse defines the Msg/RecoverClient response type. */
export interface MsgRecoverClientResponseSDKType {}
/** MsgIBCSoftwareUpgrade defines the message used to schedule an upgrade of an IBC client using a v1 governance proposal */
export interface MsgIBCSoftwareUpgrade {
  plan: Plan;
  /**
   * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
   * This will make the chain commit to the correct upgraded (self) client state
   * before the upgrade occurs, so that connecting chains can verify that the
   * new upgraded client is valid by verifying a proof on the previous version
   * of the chain. This will allow IBC connections to persist smoothly across
   * planned chain upgrades. Correspondingly, the UpgradedClientState field has been
   * deprecated in the Cosmos SDK to allow for this logic to exist solely in
   * the 02-client module.
   */
  upgraded_client_state?: Any;
  /** signer address */
  signer: string;
}
export interface MsgIBCSoftwareUpgradeProtoMsg {
  type_url: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade";
  value: Uint8Array;
}
/** MsgIBCSoftwareUpgrade defines the message used to schedule an upgrade of an IBC client using a v1 governance proposal */
export interface MsgIBCSoftwareUpgradeAmino {
  plan?: PlanAmino;
  /**
   * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
   * This will make the chain commit to the correct upgraded (self) client state
   * before the upgrade occurs, so that connecting chains can verify that the
   * new upgraded client is valid by verifying a proof on the previous version
   * of the chain. This will allow IBC connections to persist smoothly across
   * planned chain upgrades. Correspondingly, the UpgradedClientState field has been
   * deprecated in the Cosmos SDK to allow for this logic to exist solely in
   * the 02-client module.
   */
  upgraded_client_state?: AnyAmino;
  /** signer address */
  signer: string;
}
export interface MsgIBCSoftwareUpgradeAminoMsg {
  type: "cosmos-sdk/MsgIBCSoftwareUpgrade";
  value: MsgIBCSoftwareUpgradeAmino;
}
/** MsgIBCSoftwareUpgrade defines the message used to schedule an upgrade of an IBC client using a v1 governance proposal */
export interface MsgIBCSoftwareUpgradeSDKType {
  plan: PlanSDKType;
  upgraded_client_state?: AnySDKType;
  signer: string;
}
/** MsgIBCSoftwareUpgradeResponse defines the Msg/IBCSoftwareUpgrade response type. */
export interface MsgIBCSoftwareUpgradeResponse {}
export interface MsgIBCSoftwareUpgradeResponseProtoMsg {
  type_url: "/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse";
  value: Uint8Array;
}
/** MsgIBCSoftwareUpgradeResponse defines the Msg/IBCSoftwareUpgrade response type. */
export interface MsgIBCSoftwareUpgradeResponseAmino {}
export interface MsgIBCSoftwareUpgradeResponseAminoMsg {
  type: "cosmos-sdk/MsgIBCSoftwareUpgradeResponse";
  value: MsgIBCSoftwareUpgradeResponseAmino;
}
/** MsgIBCSoftwareUpgradeResponse defines the Msg/IBCSoftwareUpgrade response type. */
export interface MsgIBCSoftwareUpgradeResponseSDKType {}
/** MsgUpdateParams defines the sdk.Msg type to update the client parameters. */
export interface MsgUpdateParams {
  /** signer address */
  signer: string;
  /**
   * params defines the client parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  type_url: "/ibc.core.client.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams defines the sdk.Msg type to update the client parameters. */
export interface MsgUpdateParamsAmino {
  /** signer address */
  signer: string;
  /**
   * params defines the client parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines the sdk.Msg type to update the client parameters. */
export interface MsgUpdateParamsSDKType {
  signer: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  type_url: "/ibc.core.client.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgCreateClient(): MsgCreateClient {
  return {
    client_state: undefined,
    consensus_state: undefined,
    signer: ""
  };
}
export const MsgCreateClient = {
  typeUrl: "/ibc.core.client.v1.MsgCreateClient",
  encode(message: MsgCreateClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.client_state !== undefined) {
      Any.encode(message.client_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_state = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensus_state = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateClient {
    return {
      client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined,
      consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgCreateClient): unknown {
    const obj: any = {};
    message.client_state !== undefined && (obj.client_state = message.client_state ? Any.toJSON(message.client_state) : undefined);
    message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toJSON(message.consensus_state) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateClient>): MsgCreateClient {
    const message = createBaseMsgCreateClient();
    message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgCreateClientSDKType): MsgCreateClient {
    return {
      client_state: object.client_state ? Any.fromSDK(object.client_state) : undefined,
      consensus_state: object.consensus_state ? Any.fromSDK(object.consensus_state) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgCreateClient): MsgCreateClientSDKType {
    const obj: any = {};
    message.client_state !== undefined && (obj.client_state = message.client_state ? Any.toSDK(message.client_state) : undefined);
    message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toSDK(message.consensus_state) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgCreateClientAmino): MsgCreateClient {
    return {
      client_state: object?.client_state ? Any.fromAmino(object.client_state) : undefined,
      consensus_state: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgCreateClient): MsgCreateClientAmino {
    const obj: any = {};
    obj.client_state = message.client_state ? Any.toAmino(message.client_state) : undefined;
    obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClientAminoMsg): MsgCreateClient {
    return MsgCreateClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateClient): MsgCreateClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateClient",
      value: MsgCreateClient.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateClientProtoMsg): MsgCreateClient {
    return MsgCreateClient.decode(message.value);
  },
  toProto(message: MsgCreateClient): Uint8Array {
    return MsgCreateClient.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClient): MsgCreateClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgCreateClient",
      value: MsgCreateClient.encode(message).finish()
    };
  }
};
function createBaseMsgCreateClientResponse(): MsgCreateClientResponse {
  return {};
}
export const MsgCreateClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
  encode(_: MsgCreateClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClientResponse();
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
  fromJSON(_: any): MsgCreateClientResponse {
    return {};
  },
  toJSON(_: MsgCreateClientResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateClientResponse>): MsgCreateClientResponse {
    const message = createBaseMsgCreateClientResponse();
    return message;
  },
  fromSDK(_: MsgCreateClientResponseSDKType): MsgCreateClientResponse {
    return {};
  },
  toSDK(_: MsgCreateClientResponse): MsgCreateClientResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateClientResponseAmino): MsgCreateClientResponse {
    return {};
  },
  toAmino(_: MsgCreateClientResponse): MsgCreateClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateClientResponseAminoMsg): MsgCreateClientResponse {
    return MsgCreateClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateClientResponse",
      value: MsgCreateClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateClientResponseProtoMsg): MsgCreateClientResponse {
    return MsgCreateClientResponse.decode(message.value);
  },
  toProto(message: MsgCreateClientResponse): Uint8Array {
    return MsgCreateClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
      value: MsgCreateClientResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClient(): MsgUpdateClient {
  return {
    client_id: "",
    client_message: undefined,
    signer: ""
  };
}
export const MsgUpdateClient = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
  encode(message: MsgUpdateClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.client_message !== undefined) {
      Any.encode(message.client_message, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.client_message = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateClient {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      client_message: isSet(object.client_message) ? Any.fromJSON(object.client_message) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgUpdateClient): unknown {
    const obj: any = {};
    message.client_id !== undefined && (obj.client_id = message.client_id);
    message.client_message !== undefined && (obj.client_message = message.client_message ? Any.toJSON(message.client_message) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateClient>): MsgUpdateClient {
    const message = createBaseMsgUpdateClient();
    message.client_id = object.client_id ?? "";
    message.client_message = object.client_message !== undefined && object.client_message !== null ? Any.fromPartial(object.client_message) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgUpdateClientSDKType): MsgUpdateClient {
    return {
      client_id: object?.client_id,
      client_message: object.client_message ? Any.fromSDK(object.client_message) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgUpdateClient): MsgUpdateClientSDKType {
    const obj: any = {};
    obj.client_id = message.client_id;
    message.client_message !== undefined && (obj.client_message = message.client_message ? Any.toSDK(message.client_message) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgUpdateClientAmino): MsgUpdateClient {
    return {
      client_id: object.client_id,
      client_message: object?.client_message ? Any.fromAmino(object.client_message) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgUpdateClient): MsgUpdateClientAmino {
    const obj: any = {};
    obj.client_id = message.client_id;
    obj.client_message = message.client_message ? Any.toAmino(message.client_message) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClientAminoMsg): MsgUpdateClient {
    return MsgUpdateClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateClient): MsgUpdateClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateClient",
      value: MsgUpdateClient.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateClientProtoMsg): MsgUpdateClient {
    return MsgUpdateClient.decode(message.value);
  },
  toProto(message: MsgUpdateClient): Uint8Array {
    return MsgUpdateClient.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClient): MsgUpdateClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
      value: MsgUpdateClient.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClientResponse(): MsgUpdateClientResponse {
  return {};
}
export const MsgUpdateClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
  encode(_: MsgUpdateClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientResponse();
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
  fromJSON(_: any): MsgUpdateClientResponse {
    return {};
  },
  toJSON(_: MsgUpdateClientResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateClientResponse>): MsgUpdateClientResponse {
    const message = createBaseMsgUpdateClientResponse();
    return message;
  },
  fromSDK(_: MsgUpdateClientResponseSDKType): MsgUpdateClientResponse {
    return {};
  },
  toSDK(_: MsgUpdateClientResponse): MsgUpdateClientResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateClientResponseAmino): MsgUpdateClientResponse {
    return {};
  },
  toAmino(_: MsgUpdateClientResponse): MsgUpdateClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClientResponseAminoMsg): MsgUpdateClientResponse {
    return MsgUpdateClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateClientResponse",
      value: MsgUpdateClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateClientResponseProtoMsg): MsgUpdateClientResponse {
    return MsgUpdateClientResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClientResponse): Uint8Array {
    return MsgUpdateClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
      value: MsgUpdateClientResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpgradeClient(): MsgUpgradeClient {
  return {
    client_id: "",
    client_state: undefined,
    consensus_state: undefined,
    proof_upgrade_client: new Uint8Array(),
    proof_upgrade_consensus_state: new Uint8Array(),
    signer: ""
  };
}
export const MsgUpgradeClient = {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
  encode(message: MsgUpgradeClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.client_state !== undefined) {
      Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
    }
    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(26).fork()).ldelim();
    }
    if (message.proof_upgrade_client.length !== 0) {
      writer.uint32(34).bytes(message.proof_upgrade_client);
    }
    if (message.proof_upgrade_consensus_state.length !== 0) {
      writer.uint32(42).bytes(message.proof_upgrade_consensus_state);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpgradeClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.client_state = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.consensus_state = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.proof_upgrade_client = reader.bytes();
          break;
        case 5:
          message.proof_upgrade_consensus_state = reader.bytes();
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpgradeClient {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined,
      consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined,
      proof_upgrade_client: isSet(object.proof_upgrade_client) ? bytesFromBase64(object.proof_upgrade_client) : new Uint8Array(),
      proof_upgrade_consensus_state: isSet(object.proof_upgrade_consensus_state) ? bytesFromBase64(object.proof_upgrade_consensus_state) : new Uint8Array(),
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgUpgradeClient): unknown {
    const obj: any = {};
    message.client_id !== undefined && (obj.client_id = message.client_id);
    message.client_state !== undefined && (obj.client_state = message.client_state ? Any.toJSON(message.client_state) : undefined);
    message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toJSON(message.consensus_state) : undefined);
    message.proof_upgrade_client !== undefined && (obj.proof_upgrade_client = base64FromBytes(message.proof_upgrade_client !== undefined ? message.proof_upgrade_client : new Uint8Array()));
    message.proof_upgrade_consensus_state !== undefined && (obj.proof_upgrade_consensus_state = base64FromBytes(message.proof_upgrade_consensus_state !== undefined ? message.proof_upgrade_consensus_state : new Uint8Array()));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgUpgradeClient>): MsgUpgradeClient {
    const message = createBaseMsgUpgradeClient();
    message.client_id = object.client_id ?? "";
    message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
    message.proof_upgrade_client = object.proof_upgrade_client ?? new Uint8Array();
    message.proof_upgrade_consensus_state = object.proof_upgrade_consensus_state ?? new Uint8Array();
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgUpgradeClientSDKType): MsgUpgradeClient {
    return {
      client_id: object?.client_id,
      client_state: object.client_state ? Any.fromSDK(object.client_state) : undefined,
      consensus_state: object.consensus_state ? Any.fromSDK(object.consensus_state) : undefined,
      proof_upgrade_client: object?.proof_upgrade_client,
      proof_upgrade_consensus_state: object?.proof_upgrade_consensus_state,
      signer: object?.signer
    };
  },
  toSDK(message: MsgUpgradeClient): MsgUpgradeClientSDKType {
    const obj: any = {};
    obj.client_id = message.client_id;
    message.client_state !== undefined && (obj.client_state = message.client_state ? Any.toSDK(message.client_state) : undefined);
    message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toSDK(message.consensus_state) : undefined);
    obj.proof_upgrade_client = message.proof_upgrade_client;
    obj.proof_upgrade_consensus_state = message.proof_upgrade_consensus_state;
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgUpgradeClientAmino): MsgUpgradeClient {
    return {
      client_id: object.client_id,
      client_state: object?.client_state ? Any.fromAmino(object.client_state) : undefined,
      consensus_state: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined,
      proof_upgrade_client: object.proof_upgrade_client,
      proof_upgrade_consensus_state: object.proof_upgrade_consensus_state,
      signer: object.signer
    };
  },
  toAmino(message: MsgUpgradeClient): MsgUpgradeClientAmino {
    const obj: any = {};
    obj.client_id = message.client_id;
    obj.client_state = message.client_state ? Any.toAmino(message.client_state) : undefined;
    obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
    obj.proof_upgrade_client = message.proof_upgrade_client;
    obj.proof_upgrade_consensus_state = message.proof_upgrade_consensus_state;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgUpgradeClientAminoMsg): MsgUpgradeClient {
    return MsgUpgradeClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpgradeClient): MsgUpgradeClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpgradeClient",
      value: MsgUpgradeClient.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpgradeClientProtoMsg): MsgUpgradeClient {
    return MsgUpgradeClient.decode(message.value);
  },
  toProto(message: MsgUpgradeClient): Uint8Array {
    return MsgUpgradeClient.encode(message).finish();
  },
  toProtoMsg(message: MsgUpgradeClient): MsgUpgradeClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
      value: MsgUpgradeClient.encode(message).finish()
    };
  }
};
function createBaseMsgUpgradeClientResponse(): MsgUpgradeClientResponse {
  return {};
}
export const MsgUpgradeClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
  encode(_: MsgUpgradeClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpgradeClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClientResponse();
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
  fromJSON(_: any): MsgUpgradeClientResponse {
    return {};
  },
  toJSON(_: MsgUpgradeClientResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpgradeClientResponse>): MsgUpgradeClientResponse {
    const message = createBaseMsgUpgradeClientResponse();
    return message;
  },
  fromSDK(_: MsgUpgradeClientResponseSDKType): MsgUpgradeClientResponse {
    return {};
  },
  toSDK(_: MsgUpgradeClientResponse): MsgUpgradeClientResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpgradeClientResponseAmino): MsgUpgradeClientResponse {
    return {};
  },
  toAmino(_: MsgUpgradeClientResponse): MsgUpgradeClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpgradeClientResponseAminoMsg): MsgUpgradeClientResponse {
    return MsgUpgradeClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpgradeClientResponse",
      value: MsgUpgradeClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpgradeClientResponseProtoMsg): MsgUpgradeClientResponse {
    return MsgUpgradeClientResponse.decode(message.value);
  },
  toProto(message: MsgUpgradeClientResponse): Uint8Array {
    return MsgUpgradeClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
      value: MsgUpgradeClientResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitMisbehaviour(): MsgSubmitMisbehaviour {
  return {
    client_id: "",
    misbehaviour: undefined,
    signer: ""
  };
}
export const MsgSubmitMisbehaviour = {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
  encode(message: MsgSubmitMisbehaviour, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.misbehaviour !== undefined) {
      Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitMisbehaviour {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.misbehaviour = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitMisbehaviour {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      misbehaviour: isSet(object.misbehaviour) ? Any.fromJSON(object.misbehaviour) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgSubmitMisbehaviour): unknown {
    const obj: any = {};
    message.client_id !== undefined && (obj.client_id = message.client_id);
    message.misbehaviour !== undefined && (obj.misbehaviour = message.misbehaviour ? Any.toJSON(message.misbehaviour) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitMisbehaviour>): MsgSubmitMisbehaviour {
    const message = createBaseMsgSubmitMisbehaviour();
    message.client_id = object.client_id ?? "";
    message.misbehaviour = object.misbehaviour !== undefined && object.misbehaviour !== null ? Any.fromPartial(object.misbehaviour) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgSubmitMisbehaviourSDKType): MsgSubmitMisbehaviour {
    return {
      client_id: object?.client_id,
      misbehaviour: object.misbehaviour ? Any.fromSDK(object.misbehaviour) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourSDKType {
    const obj: any = {};
    obj.client_id = message.client_id;
    message.misbehaviour !== undefined && (obj.misbehaviour = message.misbehaviour ? Any.toSDK(message.misbehaviour) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgSubmitMisbehaviourAmino): MsgSubmitMisbehaviour {
    return {
      client_id: object.client_id,
      misbehaviour: object?.misbehaviour ? Any.fromAmino(object.misbehaviour) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAmino {
    const obj: any = {};
    obj.client_id = message.client_id;
    obj.misbehaviour = message.misbehaviour ? Any.toAmino(message.misbehaviour) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitMisbehaviourAminoMsg): MsgSubmitMisbehaviour {
    return MsgSubmitMisbehaviour.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitMisbehaviour",
      value: MsgSubmitMisbehaviour.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitMisbehaviourProtoMsg): MsgSubmitMisbehaviour {
    return MsgSubmitMisbehaviour.decode(message.value);
  },
  toProto(message: MsgSubmitMisbehaviour): Uint8Array {
    return MsgSubmitMisbehaviour.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
      value: MsgSubmitMisbehaviour.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitMisbehaviourResponse(): MsgSubmitMisbehaviourResponse {
  return {};
}
export const MsgSubmitMisbehaviourResponse = {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
  encode(_: MsgSubmitMisbehaviourResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitMisbehaviourResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviourResponse();
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
  fromJSON(_: any): MsgSubmitMisbehaviourResponse {
    return {};
  },
  toJSON(_: MsgSubmitMisbehaviourResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSubmitMisbehaviourResponse>): MsgSubmitMisbehaviourResponse {
    const message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  },
  fromSDK(_: MsgSubmitMisbehaviourResponseSDKType): MsgSubmitMisbehaviourResponse {
    return {};
  },
  toSDK(_: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSubmitMisbehaviourResponseAmino): MsgSubmitMisbehaviourResponse {
    return {};
  },
  toAmino(_: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitMisbehaviourResponseAminoMsg): MsgSubmitMisbehaviourResponse {
    return MsgSubmitMisbehaviourResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitMisbehaviourResponse",
      value: MsgSubmitMisbehaviourResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitMisbehaviourResponseProtoMsg): MsgSubmitMisbehaviourResponse {
    return MsgSubmitMisbehaviourResponse.decode(message.value);
  },
  toProto(message: MsgSubmitMisbehaviourResponse): Uint8Array {
    return MsgSubmitMisbehaviourResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
      value: MsgSubmitMisbehaviourResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRecoverClient(): MsgRecoverClient {
  return {
    subject_client_id: "",
    substitute_client_id: "",
    signer: ""
  };
}
export const MsgRecoverClient = {
  typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
  encode(message: MsgRecoverClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subject_client_id !== "") {
      writer.uint32(10).string(message.subject_client_id);
    }
    if (message.substitute_client_id !== "") {
      writer.uint32(18).string(message.substitute_client_id);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecoverClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoverClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subject_client_id = reader.string();
          break;
        case 2:
          message.substitute_client_id = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRecoverClient {
    return {
      subject_client_id: isSet(object.subject_client_id) ? String(object.subject_client_id) : "",
      substitute_client_id: isSet(object.substitute_client_id) ? String(object.substitute_client_id) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgRecoverClient): unknown {
    const obj: any = {};
    message.subject_client_id !== undefined && (obj.subject_client_id = message.subject_client_id);
    message.substitute_client_id !== undefined && (obj.substitute_client_id = message.substitute_client_id);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgRecoverClient>): MsgRecoverClient {
    const message = createBaseMsgRecoverClient();
    message.subject_client_id = object.subject_client_id ?? "";
    message.substitute_client_id = object.substitute_client_id ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgRecoverClientSDKType): MsgRecoverClient {
    return {
      subject_client_id: object?.subject_client_id,
      substitute_client_id: object?.substitute_client_id,
      signer: object?.signer
    };
  },
  toSDK(message: MsgRecoverClient): MsgRecoverClientSDKType {
    const obj: any = {};
    obj.subject_client_id = message.subject_client_id;
    obj.substitute_client_id = message.substitute_client_id;
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgRecoverClientAmino): MsgRecoverClient {
    return {
      subject_client_id: object.subject_client_id,
      substitute_client_id: object.substitute_client_id,
      signer: object.signer
    };
  },
  toAmino(message: MsgRecoverClient): MsgRecoverClientAmino {
    const obj: any = {};
    obj.subject_client_id = message.subject_client_id;
    obj.substitute_client_id = message.substitute_client_id;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgRecoverClientAminoMsg): MsgRecoverClient {
    return MsgRecoverClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecoverClient): MsgRecoverClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecoverClient",
      value: MsgRecoverClient.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRecoverClientProtoMsg): MsgRecoverClient {
    return MsgRecoverClient.decode(message.value);
  },
  toProto(message: MsgRecoverClient): Uint8Array {
    return MsgRecoverClient.encode(message).finish();
  },
  toProtoMsg(message: MsgRecoverClient): MsgRecoverClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
      value: MsgRecoverClient.encode(message).finish()
    };
  }
};
function createBaseMsgRecoverClientResponse(): MsgRecoverClientResponse {
  return {};
}
export const MsgRecoverClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgRecoverClientResponse",
  encode(_: MsgRecoverClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecoverClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoverClientResponse();
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
  fromJSON(_: any): MsgRecoverClientResponse {
    return {};
  },
  toJSON(_: MsgRecoverClientResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRecoverClientResponse>): MsgRecoverClientResponse {
    const message = createBaseMsgRecoverClientResponse();
    return message;
  },
  fromSDK(_: MsgRecoverClientResponseSDKType): MsgRecoverClientResponse {
    return {};
  },
  toSDK(_: MsgRecoverClientResponse): MsgRecoverClientResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRecoverClientResponseAmino): MsgRecoverClientResponse {
    return {};
  },
  toAmino(_: MsgRecoverClientResponse): MsgRecoverClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRecoverClientResponseAminoMsg): MsgRecoverClientResponse {
    return MsgRecoverClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecoverClientResponse): MsgRecoverClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecoverClientResponse",
      value: MsgRecoverClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRecoverClientResponseProtoMsg): MsgRecoverClientResponse {
    return MsgRecoverClientResponse.decode(message.value);
  },
  toProto(message: MsgRecoverClientResponse): Uint8Array {
    return MsgRecoverClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRecoverClientResponse): MsgRecoverClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgRecoverClientResponse",
      value: MsgRecoverClientResponse.encode(message).finish()
    };
  }
};
function createBaseMsgIBCSoftwareUpgrade(): MsgIBCSoftwareUpgrade {
  return {
    plan: Plan.fromPartial({}),
    upgraded_client_state: undefined,
    signer: ""
  };
}
export const MsgIBCSoftwareUpgrade = {
  typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
  encode(message: MsgIBCSoftwareUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    if (message.upgraded_client_state !== undefined) {
      Any.encode(message.upgraded_client_state, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCSoftwareUpgrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSoftwareUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        case 2:
          message.upgraded_client_state = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgIBCSoftwareUpgrade {
    return {
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined,
      upgraded_client_state: isSet(object.upgraded_client_state) ? Any.fromJSON(object.upgraded_client_state) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgIBCSoftwareUpgrade): unknown {
    const obj: any = {};
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    message.upgraded_client_state !== undefined && (obj.upgraded_client_state = message.upgraded_client_state ? Any.toJSON(message.upgraded_client_state) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgIBCSoftwareUpgrade>): MsgIBCSoftwareUpgrade {
    const message = createBaseMsgIBCSoftwareUpgrade();
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? Any.fromPartial(object.upgraded_client_state) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgIBCSoftwareUpgradeSDKType): MsgIBCSoftwareUpgrade {
    return {
      plan: object.plan ? Plan.fromSDK(object.plan) : undefined,
      upgraded_client_state: object.upgraded_client_state ? Any.fromSDK(object.upgraded_client_state) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgIBCSoftwareUpgrade): MsgIBCSoftwareUpgradeSDKType {
    const obj: any = {};
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toSDK(message.plan) : undefined);
    message.upgraded_client_state !== undefined && (obj.upgraded_client_state = message.upgraded_client_state ? Any.toSDK(message.upgraded_client_state) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgIBCSoftwareUpgradeAmino): MsgIBCSoftwareUpgrade {
    return {
      plan: object?.plan ? Plan.fromAmino(object.plan) : undefined,
      upgraded_client_state: object?.upgraded_client_state ? Any.fromAmino(object.upgraded_client_state) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgIBCSoftwareUpgrade): MsgIBCSoftwareUpgradeAmino {
    const obj: any = {};
    obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
    obj.upgraded_client_state = message.upgraded_client_state ? Any.toAmino(message.upgraded_client_state) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgIBCSoftwareUpgradeAminoMsg): MsgIBCSoftwareUpgrade {
    return MsgIBCSoftwareUpgrade.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIBCSoftwareUpgrade): MsgIBCSoftwareUpgradeAminoMsg {
    return {
      type: "cosmos-sdk/MsgIBCSoftwareUpgrade",
      value: MsgIBCSoftwareUpgrade.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgIBCSoftwareUpgradeProtoMsg): MsgIBCSoftwareUpgrade {
    return MsgIBCSoftwareUpgrade.decode(message.value);
  },
  toProto(message: MsgIBCSoftwareUpgrade): Uint8Array {
    return MsgIBCSoftwareUpgrade.encode(message).finish();
  },
  toProtoMsg(message: MsgIBCSoftwareUpgrade): MsgIBCSoftwareUpgradeProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
      value: MsgIBCSoftwareUpgrade.encode(message).finish()
    };
  }
};
function createBaseMsgIBCSoftwareUpgradeResponse(): MsgIBCSoftwareUpgradeResponse {
  return {};
}
export const MsgIBCSoftwareUpgradeResponse = {
  typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse",
  encode(_: MsgIBCSoftwareUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCSoftwareUpgradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSoftwareUpgradeResponse();
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
  fromJSON(_: any): MsgIBCSoftwareUpgradeResponse {
    return {};
  },
  toJSON(_: MsgIBCSoftwareUpgradeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgIBCSoftwareUpgradeResponse>): MsgIBCSoftwareUpgradeResponse {
    const message = createBaseMsgIBCSoftwareUpgradeResponse();
    return message;
  },
  fromSDK(_: MsgIBCSoftwareUpgradeResponseSDKType): MsgIBCSoftwareUpgradeResponse {
    return {};
  },
  toSDK(_: MsgIBCSoftwareUpgradeResponse): MsgIBCSoftwareUpgradeResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgIBCSoftwareUpgradeResponseAmino): MsgIBCSoftwareUpgradeResponse {
    return {};
  },
  toAmino(_: MsgIBCSoftwareUpgradeResponse): MsgIBCSoftwareUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIBCSoftwareUpgradeResponseAminoMsg): MsgIBCSoftwareUpgradeResponse {
    return MsgIBCSoftwareUpgradeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIBCSoftwareUpgradeResponse): MsgIBCSoftwareUpgradeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgIBCSoftwareUpgradeResponse",
      value: MsgIBCSoftwareUpgradeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgIBCSoftwareUpgradeResponseProtoMsg): MsgIBCSoftwareUpgradeResponse {
    return MsgIBCSoftwareUpgradeResponse.decode(message.value);
  },
  toProto(message: MsgIBCSoftwareUpgradeResponse): Uint8Array {
    return MsgIBCSoftwareUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIBCSoftwareUpgradeResponse): MsgIBCSoftwareUpgradeResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse",
      value: MsgIBCSoftwareUpgradeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    signer: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.signer = object.signer ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: MsgUpdateParamsSDKType): MsgUpdateParams {
    return {
      signer: object?.signer,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: MsgUpdateParams): MsgUpdateParamsSDKType {
    const obj: any = {};
    obj.signer = message.signer;
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    return {
      signer: object.signer,
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.signer = message.signer;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromSDK(_: MsgUpdateParamsResponseSDKType): MsgUpdateParamsResponse {
    return {};
  },
  toSDK(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    return {};
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};