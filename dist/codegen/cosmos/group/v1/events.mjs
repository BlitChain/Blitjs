//@ts-nocheck
import { TallyResult, proposalExecutorResultFromJSON, proposalExecutorResultToJSON, proposalStatusFromJSON, proposalStatusToJSON } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.group.v1";
function createBaseEventCreateGroup() {
    return {
        group_id: BigInt(0)
    };
}
export const EventCreateGroup = {
    typeUrl: "/cosmos.group.v1.EventCreateGroup",
    encode(message, writer = BinaryWriter.create()) {
        if (message.group_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = reader.uint64();
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
            group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventCreateGroup();
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            group_id: BigInt(object.group_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCreateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventCreateGroup",
            value: EventCreateGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventCreateGroup.decode(message.value);
    },
    toProto(message) {
        return EventCreateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventCreateGroup",
            value: EventCreateGroup.encode(message).finish()
        };
    }
};
function createBaseEventUpdateGroup() {
    return {
        group_id: BigInt(0)
    };
}
export const EventUpdateGroup = {
    typeUrl: "/cosmos.group.v1.EventUpdateGroup",
    encode(message, writer = BinaryWriter.create()) {
        if (message.group_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = reader.uint64();
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
            group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateGroup();
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            group_id: BigInt(object.group_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventUpdateGroup",
            value: EventUpdateGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventUpdateGroup.decode(message.value);
    },
    toProto(message) {
        return EventUpdateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventUpdateGroup",
            value: EventUpdateGroup.encode(message).finish()
        };
    }
};
function createBaseEventCreateGroupPolicy() {
    return {
        address: ""
    };
}
export const EventCreateGroupPolicy = {
    typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateGroupPolicy();
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
        const message = createBaseEventCreateGroupPolicy();
        message.address = object.address ?? "";
        return message;
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
        return EventCreateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventCreateGroupPolicy",
            value: EventCreateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventCreateGroupPolicy.decode(message.value);
    },
    toProto(message) {
        return EventCreateGroupPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
            value: EventCreateGroupPolicy.encode(message).finish()
        };
    }
};
function createBaseEventUpdateGroupPolicy() {
    return {
        address: ""
    };
}
export const EventUpdateGroupPolicy = {
    typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateGroupPolicy();
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
        const message = createBaseEventUpdateGroupPolicy();
        message.address = object.address ?? "";
        return message;
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
        return EventUpdateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventUpdateGroupPolicy",
            value: EventUpdateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventUpdateGroupPolicy.decode(message.value);
    },
    toProto(message) {
        return EventUpdateGroupPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
            value: EventUpdateGroupPolicy.encode(message).finish()
        };
    }
};
function createBaseEventSubmitProposal() {
    return {
        proposal_id: BigInt(0)
    };
}
export const EventSubmitProposal = {
    typeUrl: "/cosmos.group.v1.EventSubmitProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
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
            proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventSubmitProposal();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventSubmitProposal",
            value: EventSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventSubmitProposal.decode(message.value);
    },
    toProto(message) {
        return EventSubmitProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventSubmitProposal",
            value: EventSubmitProposal.encode(message).finish()
        };
    }
};
function createBaseEventWithdrawProposal() {
    return {
        proposal_id: BigInt(0)
    };
}
export const EventWithdrawProposal = {
    typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
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
            proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventWithdrawProposal();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventWithdrawProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventWithdrawProposal",
            value: EventWithdrawProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventWithdrawProposal.decode(message.value);
    },
    toProto(message) {
        return EventWithdrawProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
            value: EventWithdrawProposal.encode(message).finish()
        };
    }
};
function createBaseEventVote() {
    return {
        proposal_id: BigInt(0)
    };
}
export const EventVote = {
    typeUrl: "/cosmos.group.v1.EventVote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
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
            proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventVote();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventVote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventVote",
            value: EventVote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventVote.decode(message.value);
    },
    toProto(message) {
        return EventVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventVote",
            value: EventVote.encode(message).finish()
        };
    }
};
function createBaseEventExec() {
    return {
        proposal_id: BigInt(0),
        result: 0,
        logs: ""
    };
}
export const EventExec = {
    typeUrl: "/cosmos.group.v1.EventExec",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.result !== 0) {
            writer.uint32(16).int32(message.result);
        }
        if (message.logs !== "") {
            writer.uint32(26).string(message.logs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.logs = reader.string();
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
            proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : -1,
            logs: isSet(object.logs) ? String(object.logs) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
        message.logs !== undefined && (obj.logs = message.logs);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventExec();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.result = object.result ?? 0;
        message.logs = object.logs ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : -1,
            logs: object.logs
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.result = message.result;
        obj.logs = message.logs;
        return obj;
    },
    fromAminoMsg(object) {
        return EventExec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventExec",
            value: EventExec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventExec.decode(message.value);
    },
    toProto(message) {
        return EventExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventExec",
            value: EventExec.encode(message).finish()
        };
    }
};
function createBaseEventLeaveGroup() {
    return {
        group_id: BigInt(0),
        address: ""
    };
}
export const EventLeaveGroup = {
    typeUrl: "/cosmos.group.v1.EventLeaveGroup",
    encode(message, writer = BinaryWriter.create()) {
        if (message.group_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_id);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventLeaveGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = reader.uint64();
                    break;
                case 2:
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
            group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventLeaveGroup();
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            group_id: BigInt(object.group_id),
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return EventLeaveGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventLeaveGroup",
            value: EventLeaveGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventLeaveGroup.decode(message.value);
    },
    toProto(message) {
        return EventLeaveGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventLeaveGroup",
            value: EventLeaveGroup.encode(message).finish()
        };
    }
};
function createBaseEventProposalPruned() {
    return {
        proposal_id: BigInt(0),
        status: 0,
        tally_result: undefined
    };
}
export const EventProposalPruned = {
    typeUrl: "/cosmos.group.v1.EventProposalPruned",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.tally_result !== undefined) {
            TallyResult.encode(message.tally_result, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventProposalPruned();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.tally_result = TallyResult.decode(reader, reader.uint32());
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
            proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
            tally_result: isSet(object.tally_result) ? TallyResult.fromJSON(object.tally_result) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
        message.tally_result !== undefined && (obj.tally_result = message.tally_result ? TallyResult.toJSON(message.tally_result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventProposalPruned();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.status = object.status ?? 0;
        message.tally_result = object.tally_result !== undefined && object.tally_result !== null ? TallyResult.fromPartial(object.tally_result) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
            tally_result: object?.tally_result ? TallyResult.fromAmino(object.tally_result) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.status = message.status;
        obj.tally_result = message.tally_result ? TallyResult.toAmino(message.tally_result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventProposalPruned.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventProposalPruned",
            value: EventProposalPruned.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventProposalPruned.decode(message.value);
    },
    toProto(message) {
        return EventProposalPruned.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventProposalPruned",
            value: EventProposalPruned.encode(message).finish()
        };
    }
};
//# sourceMappingURL=events.js.map