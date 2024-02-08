//@ts-nocheck
import { IdentifiedConnection, IdentifiedConnectionAmino, IdentifiedConnectionSDKType, ConnectionPaths, ConnectionPathsAmino, ConnectionPathsSDKType, Params, ParamsAmino, ParamsSDKType } from "./connection";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "ibc.core.connection.v1";
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisState {
  connections: IdentifiedConnection[];
  client_connection_paths: ConnectionPaths[];
  /** the sequence for the next generated connection identifier */
  next_connection_sequence: bigint;
  params: Params;
}
export interface GenesisStateProtoMsg {
  type_url: "/ibc.core.connection.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisStateAmino {
  connections?: IdentifiedConnectionAmino[];
  client_connection_paths?: ConnectionPathsAmino[];
  /** the sequence for the next generated connection identifier */
  next_connection_sequence?: string;
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisStateSDKType {
  connections: IdentifiedConnectionSDKType[];
  client_connection_paths: ConnectionPathsSDKType[];
  next_connection_sequence: bigint;
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    connections: [],
    client_connection_paths: [],
    next_connection_sequence: BigInt(0),
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/ibc.core.connection.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.connections) {
      IdentifiedConnection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.client_connection_paths) {
      ConnectionPaths.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.next_connection_sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.next_connection_sequence);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.client_connection_paths.push(ConnectionPaths.decode(reader, reader.uint32()));
          break;
        case 3:
          message.next_connection_sequence = reader.uint64();
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      connections: Array.isArray(object?.connections) ? object.connections.map((e: any) => IdentifiedConnection.fromJSON(e)) : [],
      client_connection_paths: Array.isArray(object?.client_connection_paths) ? object.client_connection_paths.map((e: any) => ConnectionPaths.fromJSON(e)) : [],
      next_connection_sequence: isSet(object.next_connection_sequence) ? BigInt(object.next_connection_sequence.toString()) : BigInt(0),
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.connections) {
      obj.connections = message.connections.map(e => e ? IdentifiedConnection.toJSON(e) : undefined);
    } else {
      obj.connections = [];
    }
    if (message.client_connection_paths) {
      obj.client_connection_paths = message.client_connection_paths.map(e => e ? ConnectionPaths.toJSON(e) : undefined);
    } else {
      obj.client_connection_paths = [];
    }
    message.next_connection_sequence !== undefined && (obj.next_connection_sequence = (message.next_connection_sequence || BigInt(0)).toString());
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.connections = object.connections?.map(e => IdentifiedConnection.fromPartial(e)) || [];
    message.client_connection_paths = object.client_connection_paths?.map(e => ConnectionPaths.fromPartial(e)) || [];
    message.next_connection_sequence = object.next_connection_sequence !== undefined && object.next_connection_sequence !== null ? BigInt(object.next_connection_sequence.toString()) : BigInt(0);
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.connections = object.connections?.map(e => IdentifiedConnection.fromAmino(e)) || [];
    message.client_connection_paths = object.client_connection_paths?.map(e => ConnectionPaths.fromAmino(e)) || [];
    if (object.next_connection_sequence !== undefined && object.next_connection_sequence !== null) {
      message.next_connection_sequence = BigInt(object.next_connection_sequence);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.connections) {
      obj.connections = message.connections.map(e => e ? IdentifiedConnection.toAmino(e) : undefined);
    } else {
      obj.connections = [];
    }
    if (message.client_connection_paths) {
      obj.client_connection_paths = message.client_connection_paths.map(e => e ? ConnectionPaths.toAmino(e) : undefined);
    } else {
      obj.client_connection_paths = [];
    }
    obj.next_connection_sequence = message.next_connection_sequence ? message.next_connection_sequence.toString() : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};