//@ts-nocheck
import { Timestamp } from "../../google/protobuf/timestamp";
import { Header } from "../types/types";
import { ProofOps } from "../crypto/proof";
import { EvidenceParams, ValidatorParams, VersionParams } from "../types/params";
import { PublicKey } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../helpers";
export const protobufPackage = "tendermint.abci";
export var CheckTxType;
(function (CheckTxType) {
    CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
    CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
    CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckTxType || (CheckTxType = {}));
export const CheckTxTypeSDKType = CheckTxType;
export const CheckTxTypeAmino = CheckTxType;
export function checkTxTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "NEW":
            return CheckTxType.NEW;
        case 1:
        case "RECHECK":
            return CheckTxType.RECHECK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CheckTxType.UNRECOGNIZED;
    }
}
export function checkTxTypeToJSON(object) {
    switch (object) {
        case CheckTxType.NEW:
            return "NEW";
        case CheckTxType.RECHECK:
            return "RECHECK";
        case CheckTxType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var ResponseOfferSnapshot_Result;
(function (ResponseOfferSnapshot_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Snapshot accepted, apply chunks */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ABORT"] = 2] = "ABORT";
    /** REJECT - Reject this specific snapshot, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT"] = 3] = "REJECT";
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_SENDER"] = 5] = "REJECT_SENDER";
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseOfferSnapshot_Result || (ResponseOfferSnapshot_Result = {}));
export const ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_Result;
export const ResponseOfferSnapshot_ResultAmino = ResponseOfferSnapshot_Result;
export function responseOfferSnapshot_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseOfferSnapshot_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseOfferSnapshot_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseOfferSnapshot_Result.ABORT;
        case 3:
        case "REJECT":
            return ResponseOfferSnapshot_Result.REJECT;
        case 4:
        case "REJECT_FORMAT":
            return ResponseOfferSnapshot_Result.REJECT_FORMAT;
        case 5:
        case "REJECT_SENDER":
            return ResponseOfferSnapshot_Result.REJECT_SENDER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseOfferSnapshot_Result.UNRECOGNIZED;
    }
}
export function responseOfferSnapshot_ResultToJSON(object) {
    switch (object) {
        case ResponseOfferSnapshot_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseOfferSnapshot_Result.ACCEPT:
            return "ACCEPT";
        case ResponseOfferSnapshot_Result.ABORT:
            return "ABORT";
        case ResponseOfferSnapshot_Result.REJECT:
            return "REJECT";
        case ResponseOfferSnapshot_Result.REJECT_FORMAT:
            return "REJECT_FORMAT";
        case ResponseOfferSnapshot_Result.REJECT_SENDER:
            return "REJECT_SENDER";
        case ResponseOfferSnapshot_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var ResponseApplySnapshotChunk_Result;
(function (ResponseApplySnapshotChunk_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Chunk successfully accepted */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ABORT"] = 2] = "ABORT";
    /** RETRY - Retry chunk (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY"] = 3] = "RETRY";
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseApplySnapshotChunk_Result || (ResponseApplySnapshotChunk_Result = {}));
export const ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_Result;
export const ResponseApplySnapshotChunk_ResultAmino = ResponseApplySnapshotChunk_Result;
export function responseApplySnapshotChunk_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseApplySnapshotChunk_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseApplySnapshotChunk_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseApplySnapshotChunk_Result.ABORT;
        case 3:
        case "RETRY":
            return ResponseApplySnapshotChunk_Result.RETRY;
        case 4:
        case "RETRY_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
        case 5:
        case "REJECT_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
    }
}
export function responseApplySnapshotChunk_ResultToJSON(object) {
    switch (object) {
        case ResponseApplySnapshotChunk_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseApplySnapshotChunk_Result.ACCEPT:
            return "ACCEPT";
        case ResponseApplySnapshotChunk_Result.ABORT:
            return "ABORT";
        case ResponseApplySnapshotChunk_Result.RETRY:
            return "RETRY";
        case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
            return "RETRY_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
            return "REJECT_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var EvidenceType;
(function (EvidenceType) {
    EvidenceType[EvidenceType["UNKNOWN"] = 0] = "UNKNOWN";
    EvidenceType[EvidenceType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
    EvidenceType[EvidenceType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
    EvidenceType[EvidenceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EvidenceType || (EvidenceType = {}));
export const EvidenceTypeSDKType = EvidenceType;
export const EvidenceTypeAmino = EvidenceType;
export function evidenceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return EvidenceType.UNKNOWN;
        case 1:
        case "DUPLICATE_VOTE":
            return EvidenceType.DUPLICATE_VOTE;
        case 2:
        case "LIGHT_CLIENT_ATTACK":
            return EvidenceType.LIGHT_CLIENT_ATTACK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EvidenceType.UNRECOGNIZED;
    }
}
export function evidenceTypeToJSON(object) {
    switch (object) {
        case EvidenceType.UNKNOWN:
            return "UNKNOWN";
        case EvidenceType.DUPLICATE_VOTE:
            return "DUPLICATE_VOTE";
        case EvidenceType.LIGHT_CLIENT_ATTACK:
            return "LIGHT_CLIENT_ATTACK";
        case EvidenceType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseRequest() {
    return {
        echo: undefined,
        flush: undefined,
        info: undefined,
        set_option: undefined,
        init_chain: undefined,
        query: undefined,
        begin_block: undefined,
        check_tx: undefined,
        deliver_tx: undefined,
        end_block: undefined,
        commit: undefined,
        list_snapshots: undefined,
        offer_snapshot: undefined,
        load_snapshot_chunk: undefined,
        apply_snapshot_chunk: undefined
    };
}
export const Request = {
    typeUrl: "/tendermint.abci.Request",
    encode(message, writer = BinaryWriter.create()) {
        if (message.echo !== undefined) {
            RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
        }
        if (message.info !== undefined) {
            RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.set_option !== undefined) {
            RequestSetOption.encode(message.set_option, writer.uint32(34).fork()).ldelim();
        }
        if (message.init_chain !== undefined) {
            RequestInitChain.encode(message.init_chain, writer.uint32(42).fork()).ldelim();
        }
        if (message.query !== undefined) {
            RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
        }
        if (message.begin_block !== undefined) {
            RequestBeginBlock.encode(message.begin_block, writer.uint32(58).fork()).ldelim();
        }
        if (message.check_tx !== undefined) {
            RequestCheckTx.encode(message.check_tx, writer.uint32(66).fork()).ldelim();
        }
        if (message.deliver_tx !== undefined) {
            RequestDeliverTx.encode(message.deliver_tx, writer.uint32(74).fork()).ldelim();
        }
        if (message.end_block !== undefined) {
            RequestEndBlock.encode(message.end_block, writer.uint32(82).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
        }
        if (message.list_snapshots !== undefined) {
            RequestListSnapshots.encode(message.list_snapshots, writer.uint32(98).fork()).ldelim();
        }
        if (message.offer_snapshot !== undefined) {
            RequestOfferSnapshot.encode(message.offer_snapshot, writer.uint32(106).fork()).ldelim();
        }
        if (message.load_snapshot_chunk !== undefined) {
            RequestLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(114).fork()).ldelim();
        }
        if (message.apply_snapshot_chunk !== undefined) {
            RequestApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.echo = RequestEcho.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.flush = RequestFlush.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.info = RequestInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.set_option = RequestSetOption.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.init_chain = RequestInitChain.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.query = RequestQuery.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.begin_block = RequestBeginBlock.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.check_tx = RequestCheckTx.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.deliver_tx = RequestDeliverTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.end_block = RequestEndBlock.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.commit = RequestCommit.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.list_snapshots = RequestListSnapshots.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.offer_snapshot = RequestOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.load_snapshot_chunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.apply_snapshot_chunk = RequestApplySnapshotChunk.decode(reader, reader.uint32());
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
            echo: isSet(object.echo) ? RequestEcho.fromJSON(object.echo) : undefined,
            flush: isSet(object.flush) ? RequestFlush.fromJSON(object.flush) : undefined,
            info: isSet(object.info) ? RequestInfo.fromJSON(object.info) : undefined,
            set_option: isSet(object.set_option) ? RequestSetOption.fromJSON(object.set_option) : undefined,
            init_chain: isSet(object.init_chain) ? RequestInitChain.fromJSON(object.init_chain) : undefined,
            query: isSet(object.query) ? RequestQuery.fromJSON(object.query) : undefined,
            begin_block: isSet(object.begin_block) ? RequestBeginBlock.fromJSON(object.begin_block) : undefined,
            check_tx: isSet(object.check_tx) ? RequestCheckTx.fromJSON(object.check_tx) : undefined,
            deliver_tx: isSet(object.deliver_tx) ? RequestDeliverTx.fromJSON(object.deliver_tx) : undefined,
            end_block: isSet(object.end_block) ? RequestEndBlock.fromJSON(object.end_block) : undefined,
            commit: isSet(object.commit) ? RequestCommit.fromJSON(object.commit) : undefined,
            list_snapshots: isSet(object.list_snapshots) ? RequestListSnapshots.fromJSON(object.list_snapshots) : undefined,
            offer_snapshot: isSet(object.offer_snapshot) ? RequestOfferSnapshot.fromJSON(object.offer_snapshot) : undefined,
            load_snapshot_chunk: isSet(object.load_snapshot_chunk) ? RequestLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: isSet(object.apply_snapshot_chunk) ? RequestApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.echo !== undefined && (obj.echo = message.echo ? RequestEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? RequestFlush.toJSON(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? RequestInfo.toJSON(message.info) : undefined);
        message.set_option !== undefined && (obj.set_option = message.set_option ? RequestSetOption.toJSON(message.set_option) : undefined);
        message.init_chain !== undefined && (obj.init_chain = message.init_chain ? RequestInitChain.toJSON(message.init_chain) : undefined);
        message.query !== undefined && (obj.query = message.query ? RequestQuery.toJSON(message.query) : undefined);
        message.begin_block !== undefined && (obj.begin_block = message.begin_block ? RequestBeginBlock.toJSON(message.begin_block) : undefined);
        message.check_tx !== undefined && (obj.check_tx = message.check_tx ? RequestCheckTx.toJSON(message.check_tx) : undefined);
        message.deliver_tx !== undefined && (obj.deliver_tx = message.deliver_tx ? RequestDeliverTx.toJSON(message.deliver_tx) : undefined);
        message.end_block !== undefined && (obj.end_block = message.end_block ? RequestEndBlock.toJSON(message.end_block) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? RequestCommit.toJSON(message.commit) : undefined);
        message.list_snapshots !== undefined && (obj.list_snapshots = message.list_snapshots ? RequestListSnapshots.toJSON(message.list_snapshots) : undefined);
        message.offer_snapshot !== undefined && (obj.offer_snapshot = message.offer_snapshot ? RequestOfferSnapshot.toJSON(message.offer_snapshot) : undefined);
        message.load_snapshot_chunk !== undefined && (obj.load_snapshot_chunk = message.load_snapshot_chunk ? RequestLoadSnapshotChunk.toJSON(message.load_snapshot_chunk) : undefined);
        message.apply_snapshot_chunk !== undefined && (obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? RequestApplySnapshotChunk.toJSON(message.apply_snapshot_chunk) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequest();
        message.echo = object.echo !== undefined && object.echo !== null ? RequestEcho.fromPartial(object.echo) : undefined;
        message.flush = object.flush !== undefined && object.flush !== null ? RequestFlush.fromPartial(object.flush) : undefined;
        message.info = object.info !== undefined && object.info !== null ? RequestInfo.fromPartial(object.info) : undefined;
        message.set_option = object.set_option !== undefined && object.set_option !== null ? RequestSetOption.fromPartial(object.set_option) : undefined;
        message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? RequestInitChain.fromPartial(object.init_chain) : undefined;
        message.query = object.query !== undefined && object.query !== null ? RequestQuery.fromPartial(object.query) : undefined;
        message.begin_block = object.begin_block !== undefined && object.begin_block !== null ? RequestBeginBlock.fromPartial(object.begin_block) : undefined;
        message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? RequestCheckTx.fromPartial(object.check_tx) : undefined;
        message.deliver_tx = object.deliver_tx !== undefined && object.deliver_tx !== null ? RequestDeliverTx.fromPartial(object.deliver_tx) : undefined;
        message.end_block = object.end_block !== undefined && object.end_block !== null ? RequestEndBlock.fromPartial(object.end_block) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? RequestCommit.fromPartial(object.commit) : undefined;
        message.list_snapshots = object.list_snapshots !== undefined && object.list_snapshots !== null ? RequestListSnapshots.fromPartial(object.list_snapshots) : undefined;
        message.offer_snapshot = object.offer_snapshot !== undefined && object.offer_snapshot !== null ? RequestOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
        message.load_snapshot_chunk = object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null ? RequestLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk) : undefined;
        message.apply_snapshot_chunk = object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null ? RequestApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            echo: object.echo ? RequestEcho.fromSDK(object.echo) : undefined,
            flush: object.flush ? RequestFlush.fromSDK(object.flush) : undefined,
            info: object.info ? RequestInfo.fromSDK(object.info) : undefined,
            set_option: object.set_option ? RequestSetOption.fromSDK(object.set_option) : undefined,
            init_chain: object.init_chain ? RequestInitChain.fromSDK(object.init_chain) : undefined,
            query: object.query ? RequestQuery.fromSDK(object.query) : undefined,
            begin_block: object.begin_block ? RequestBeginBlock.fromSDK(object.begin_block) : undefined,
            check_tx: object.check_tx ? RequestCheckTx.fromSDK(object.check_tx) : undefined,
            deliver_tx: object.deliver_tx ? RequestDeliverTx.fromSDK(object.deliver_tx) : undefined,
            end_block: object.end_block ? RequestEndBlock.fromSDK(object.end_block) : undefined,
            commit: object.commit ? RequestCommit.fromSDK(object.commit) : undefined,
            list_snapshots: object.list_snapshots ? RequestListSnapshots.fromSDK(object.list_snapshots) : undefined,
            offer_snapshot: object.offer_snapshot ? RequestOfferSnapshot.fromSDK(object.offer_snapshot) : undefined,
            load_snapshot_chunk: object.load_snapshot_chunk ? RequestLoadSnapshotChunk.fromSDK(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: object.apply_snapshot_chunk ? RequestApplySnapshotChunk.fromSDK(object.apply_snapshot_chunk) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.echo !== undefined && (obj.echo = message.echo ? RequestEcho.toSDK(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? RequestFlush.toSDK(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? RequestInfo.toSDK(message.info) : undefined);
        message.set_option !== undefined && (obj.set_option = message.set_option ? RequestSetOption.toSDK(message.set_option) : undefined);
        message.init_chain !== undefined && (obj.init_chain = message.init_chain ? RequestInitChain.toSDK(message.init_chain) : undefined);
        message.query !== undefined && (obj.query = message.query ? RequestQuery.toSDK(message.query) : undefined);
        message.begin_block !== undefined && (obj.begin_block = message.begin_block ? RequestBeginBlock.toSDK(message.begin_block) : undefined);
        message.check_tx !== undefined && (obj.check_tx = message.check_tx ? RequestCheckTx.toSDK(message.check_tx) : undefined);
        message.deliver_tx !== undefined && (obj.deliver_tx = message.deliver_tx ? RequestDeliverTx.toSDK(message.deliver_tx) : undefined);
        message.end_block !== undefined && (obj.end_block = message.end_block ? RequestEndBlock.toSDK(message.end_block) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? RequestCommit.toSDK(message.commit) : undefined);
        message.list_snapshots !== undefined && (obj.list_snapshots = message.list_snapshots ? RequestListSnapshots.toSDK(message.list_snapshots) : undefined);
        message.offer_snapshot !== undefined && (obj.offer_snapshot = message.offer_snapshot ? RequestOfferSnapshot.toSDK(message.offer_snapshot) : undefined);
        message.load_snapshot_chunk !== undefined && (obj.load_snapshot_chunk = message.load_snapshot_chunk ? RequestLoadSnapshotChunk.toSDK(message.load_snapshot_chunk) : undefined);
        message.apply_snapshot_chunk !== undefined && (obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? RequestApplySnapshotChunk.toSDK(message.apply_snapshot_chunk) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            echo: object?.echo ? RequestEcho.fromAmino(object.echo) : undefined,
            flush: object?.flush ? RequestFlush.fromAmino(object.flush) : undefined,
            info: object?.info ? RequestInfo.fromAmino(object.info) : undefined,
            set_option: object?.set_option ? RequestSetOption.fromAmino(object.set_option) : undefined,
            init_chain: object?.init_chain ? RequestInitChain.fromAmino(object.init_chain) : undefined,
            query: object?.query ? RequestQuery.fromAmino(object.query) : undefined,
            begin_block: object?.begin_block ? RequestBeginBlock.fromAmino(object.begin_block) : undefined,
            check_tx: object?.check_tx ? RequestCheckTx.fromAmino(object.check_tx) : undefined,
            deliver_tx: object?.deliver_tx ? RequestDeliverTx.fromAmino(object.deliver_tx) : undefined,
            end_block: object?.end_block ? RequestEndBlock.fromAmino(object.end_block) : undefined,
            commit: object?.commit ? RequestCommit.fromAmino(object.commit) : undefined,
            list_snapshots: object?.list_snapshots ? RequestListSnapshots.fromAmino(object.list_snapshots) : undefined,
            offer_snapshot: object?.offer_snapshot ? RequestOfferSnapshot.fromAmino(object.offer_snapshot) : undefined,
            load_snapshot_chunk: object?.load_snapshot_chunk ? RequestLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: object?.apply_snapshot_chunk ? RequestApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.echo = message.echo ? RequestEcho.toAmino(message.echo) : undefined;
        obj.flush = message.flush ? RequestFlush.toAmino(message.flush) : undefined;
        obj.info = message.info ? RequestInfo.toAmino(message.info) : undefined;
        obj.set_option = message.set_option ? RequestSetOption.toAmino(message.set_option) : undefined;
        obj.init_chain = message.init_chain ? RequestInitChain.toAmino(message.init_chain) : undefined;
        obj.query = message.query ? RequestQuery.toAmino(message.query) : undefined;
        obj.begin_block = message.begin_block ? RequestBeginBlock.toAmino(message.begin_block) : undefined;
        obj.check_tx = message.check_tx ? RequestCheckTx.toAmino(message.check_tx) : undefined;
        obj.deliver_tx = message.deliver_tx ? RequestDeliverTx.toAmino(message.deliver_tx) : undefined;
        obj.end_block = message.end_block ? RequestEndBlock.toAmino(message.end_block) : undefined;
        obj.commit = message.commit ? RequestCommit.toAmino(message.commit) : undefined;
        obj.list_snapshots = message.list_snapshots ? RequestListSnapshots.toAmino(message.list_snapshots) : undefined;
        obj.offer_snapshot = message.offer_snapshot ? RequestOfferSnapshot.toAmino(message.offer_snapshot) : undefined;
        obj.load_snapshot_chunk = message.load_snapshot_chunk ? RequestLoadSnapshotChunk.toAmino(message.load_snapshot_chunk) : undefined;
        obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? RequestApplySnapshotChunk.toAmino(message.apply_snapshot_chunk) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Request.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Request.decode(message.value);
    },
    toProto(message) {
        return Request.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Request",
            value: Request.encode(message).finish()
        };
    }
};
function createBaseRequestEcho() {
    return {
        message: ""
    };
}
export const RequestEcho = {
    typeUrl: "/tendermint.abci.RequestEcho",
    encode(message, writer = BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestEcho();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
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
            message: isSet(object.message) ? String(object.message) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestEcho();
        message.message = object.message ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            message: object?.message
        };
    },
    toSDK(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAmino(object) {
        return {
            message: object.message
        };
    },
    toAmino(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestEcho.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestEcho.decode(message.value);
    },
    toProto(message) {
        return RequestEcho.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestEcho",
            value: RequestEcho.encode(message).finish()
        };
    }
};
function createBaseRequestFlush() {
    return {};
}
export const RequestFlush = {
    typeUrl: "/tendermint.abci.RequestFlush",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestFlush();
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
        const message = createBaseRequestFlush();
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
        return RequestFlush.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestFlush.decode(message.value);
    },
    toProto(message) {
        return RequestFlush.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestFlush",
            value: RequestFlush.encode(message).finish()
        };
    }
};
function createBaseRequestInfo() {
    return {
        version: "",
        block_version: BigInt(0),
        p2p_version: BigInt(0)
    };
}
export const RequestInfo = {
    typeUrl: "/tendermint.abci.RequestInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.block_version !== BigInt(0)) {
            writer.uint32(16).uint64(message.block_version);
        }
        if (message.p2p_version !== BigInt(0)) {
            writer.uint32(24).uint64(message.p2p_version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.block_version = reader.uint64();
                    break;
                case 3:
                    message.p2p_version = reader.uint64();
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
            version: isSet(object.version) ? String(object.version) : "",
            block_version: isSet(object.block_version) ? BigInt(object.block_version.toString()) : BigInt(0),
            p2p_version: isSet(object.p2p_version) ? BigInt(object.p2p_version.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.block_version !== undefined && (obj.block_version = (message.block_version || BigInt(0)).toString());
        message.p2p_version !== undefined && (obj.p2p_version = (message.p2p_version || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestInfo();
        message.version = object.version ?? "";
        message.block_version = object.block_version !== undefined && object.block_version !== null ? BigInt(object.block_version.toString()) : BigInt(0);
        message.p2p_version = object.p2p_version !== undefined && object.p2p_version !== null ? BigInt(object.p2p_version.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            version: object?.version,
            block_version: object?.block_version,
            p2p_version: object?.p2p_version
        };
    },
    toSDK(message) {
        const obj = {};
        obj.version = message.version;
        obj.block_version = message.block_version;
        obj.p2p_version = message.p2p_version;
        return obj;
    },
    fromAmino(object) {
        return {
            version: object.version,
            block_version: BigInt(object.block_version),
            p2p_version: BigInt(object.p2p_version)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version;
        obj.block_version = message.block_version ? message.block_version.toString() : undefined;
        obj.p2p_version = message.p2p_version ? message.p2p_version.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestInfo.decode(message.value);
    },
    toProto(message) {
        return RequestInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestInfo",
            value: RequestInfo.encode(message).finish()
        };
    }
};
function createBaseRequestSetOption() {
    return {
        key: "",
        value: ""
    };
}
export const RequestSetOption = {
    typeUrl: "/tendermint.abci.RequestSetOption",
    encode(message, writer = BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestSetOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestSetOption();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            key: object?.key,
            value: object?.value
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestSetOption.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestSetOption.decode(message.value);
    },
    toProto(message) {
        return RequestSetOption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestSetOption",
            value: RequestSetOption.encode(message).finish()
        };
    }
};
function createBaseRequestInitChain() {
    return {
        time: new Date(),
        chain_id: "",
        consensus_params: undefined,
        validators: [],
        app_state_bytes: new Uint8Array(),
        initial_height: BigInt(0)
    };
}
export const RequestInitChain = {
    typeUrl: "/tendermint.abci.RequestInitChain",
    encode(message, writer = BinaryWriter.create()) {
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        if (message.consensus_params !== undefined) {
            ConsensusParams.encode(message.consensus_params, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.app_state_bytes.length !== 0) {
            writer.uint32(42).bytes(message.app_state_bytes);
        }
        if (message.initial_height !== BigInt(0)) {
            writer.uint32(48).int64(message.initial_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.chain_id = reader.string();
                    break;
                case 3:
                    message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.app_state_bytes = reader.bytes();
                    break;
                case 6:
                    message.initial_height = reader.int64();
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
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            consensus_params: isSet(object.consensus_params) ? ConsensusParams.fromJSON(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => ValidatorUpdate.fromJSON(e)) : [],
            app_state_bytes: isSet(object.app_state_bytes) ? bytesFromBase64(object.app_state_bytes) : new Uint8Array(),
            initial_height: isSet(object.initial_height) ? BigInt(object.initial_height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.consensus_params !== undefined && (obj.consensus_params = message.consensus_params ? ConsensusParams.toJSON(message.consensus_params) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.app_state_bytes !== undefined && (obj.app_state_bytes = base64FromBytes(message.app_state_bytes !== undefined ? message.app_state_bytes : new Uint8Array()));
        message.initial_height !== undefined && (obj.initial_height = (message.initial_height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestInitChain();
        message.time = object.time ?? undefined;
        message.chain_id = object.chain_id ?? "";
        message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? ConsensusParams.fromPartial(object.consensus_params) : undefined;
        message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
        message.app_state_bytes = object.app_state_bytes ?? new Uint8Array();
        message.initial_height = object.initial_height !== undefined && object.initial_height !== null ? BigInt(object.initial_height.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            time: object.time ? Timestamp.fromSDK(object.time) : undefined,
            chain_id: object?.chain_id,
            consensus_params: object.consensus_params ? ConsensusParams.fromSDK(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => ValidatorUpdate.fromSDK(e)) : [],
            app_state_bytes: object?.app_state_bytes,
            initial_height: object?.initial_height
        };
    },
    toSDK(message) {
        const obj = {};
        message.time !== undefined && (obj.time = message.time ? Timestamp.toSDK(message.time) : undefined);
        obj.chain_id = message.chain_id;
        message.consensus_params !== undefined && (obj.consensus_params = message.consensus_params ? ConsensusParams.toSDK(message.consensus_params) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? ValidatorUpdate.toSDK(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_state_bytes = message.app_state_bytes;
        obj.initial_height = message.initial_height;
        return obj;
    },
    fromAmino(object) {
        return {
            time: object?.time ? fromTimestamp(Timestamp.fromAmino(object.time)) : undefined,
            chain_id: object.chain_id,
            consensus_params: object?.consensus_params ? ConsensusParams.fromAmino(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => ValidatorUpdate.fromAmino(e)) : [],
            app_state_bytes: object.app_state_bytes,
            initial_height: BigInt(object.initial_height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
        obj.chain_id = message.chain_id;
        obj.consensus_params = message.consensus_params ? ConsensusParams.toAmino(message.consensus_params) : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_state_bytes = message.app_state_bytes;
        obj.initial_height = message.initial_height ? message.initial_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestInitChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestInitChain.decode(message.value);
    },
    toProto(message) {
        return RequestInitChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestInitChain",
            value: RequestInitChain.encode(message).finish()
        };
    }
};
function createBaseRequestQuery() {
    return {
        data: new Uint8Array(),
        path: "",
        height: BigInt(0),
        prove: false
    };
}
export const RequestQuery = {
    typeUrl: "/tendermint.abci.RequestQuery",
    encode(message, writer = BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.prove === true) {
            writer.uint32(32).bool(message.prove);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.prove = reader.bool();
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            path: isSet(object.path) ? String(object.path) : "",
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            prove: isSet(object.prove) ? Boolean(object.prove) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.path !== undefined && (obj.path = message.path);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.prove !== undefined && (obj.prove = message.prove);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestQuery();
        message.data = object.data ?? new Uint8Array();
        message.path = object.path ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.prove = object.prove ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            data: object?.data,
            path: object?.path,
            height: object?.height,
            prove: object?.prove
        };
    },
    toSDK(message) {
        const obj = {};
        obj.data = message.data;
        obj.path = message.path;
        obj.height = message.height;
        obj.prove = message.prove;
        return obj;
    },
    fromAmino(object) {
        return {
            data: object.data,
            path: object.path,
            height: BigInt(object.height),
            prove: object.prove
        };
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data;
        obj.path = message.path;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.prove = message.prove;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestQuery.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestQuery.decode(message.value);
    },
    toProto(message) {
        return RequestQuery.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestQuery",
            value: RequestQuery.encode(message).finish()
        };
    }
};
function createBaseRequestBeginBlock() {
    return {
        hash: new Uint8Array(),
        header: Header.fromPartial({}),
        last_commit_info: LastCommitInfo.fromPartial({}),
        byzantine_validators: []
    };
}
export const RequestBeginBlock = {
    typeUrl: "/tendermint.abci.RequestBeginBlock",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(18).fork()).ldelim();
        }
        if (message.last_commit_info !== undefined) {
            LastCommitInfo.encode(message.last_commit_info, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.byzantine_validators) {
            Evidence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestBeginBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.last_commit_info = LastCommitInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.byzantine_validators.push(Evidence.decode(reader, reader.uint32()));
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
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
            header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
            last_commit_info: isSet(object.last_commit_info) ? LastCommitInfo.fromJSON(object.last_commit_info) : undefined,
            byzantine_validators: Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e) => Evidence.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
        message.last_commit_info !== undefined && (obj.last_commit_info = message.last_commit_info ? LastCommitInfo.toJSON(message.last_commit_info) : undefined);
        if (message.byzantine_validators) {
            obj.byzantine_validators = message.byzantine_validators.map(e => e ? Evidence.toJSON(e) : undefined);
        }
        else {
            obj.byzantine_validators = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestBeginBlock();
        message.hash = object.hash ?? new Uint8Array();
        message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
        message.last_commit_info = object.last_commit_info !== undefined && object.last_commit_info !== null ? LastCommitInfo.fromPartial(object.last_commit_info) : undefined;
        message.byzantine_validators = object.byzantine_validators?.map(e => Evidence.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            hash: object?.hash,
            header: object.header ? Header.fromSDK(object.header) : undefined,
            last_commit_info: object.last_commit_info ? LastCommitInfo.fromSDK(object.last_commit_info) : undefined,
            byzantine_validators: Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e) => Evidence.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.hash = message.hash;
        message.header !== undefined && (obj.header = message.header ? Header.toSDK(message.header) : undefined);
        message.last_commit_info !== undefined && (obj.last_commit_info = message.last_commit_info ? LastCommitInfo.toSDK(message.last_commit_info) : undefined);
        if (message.byzantine_validators) {
            obj.byzantine_validators = message.byzantine_validators.map(e => e ? Evidence.toSDK(e) : undefined);
        }
        else {
            obj.byzantine_validators = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            hash: object.hash,
            header: object?.header ? Header.fromAmino(object.header) : undefined,
            last_commit_info: object?.last_commit_info ? LastCommitInfo.fromAmino(object.last_commit_info) : undefined,
            byzantine_validators: Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e) => Evidence.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        obj.header = message.header ? Header.toAmino(message.header) : undefined;
        obj.last_commit_info = message.last_commit_info ? LastCommitInfo.toAmino(message.last_commit_info) : undefined;
        if (message.byzantine_validators) {
            obj.byzantine_validators = message.byzantine_validators.map(e => e ? Evidence.toAmino(e) : undefined);
        }
        else {
            obj.byzantine_validators = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return RequestBeginBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestBeginBlock.decode(message.value);
    },
    toProto(message) {
        return RequestBeginBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestBeginBlock",
            value: RequestBeginBlock.encode(message).finish()
        };
    }
};
function createBaseRequestCheckTx() {
    return {
        tx: new Uint8Array(),
        type: 0
    };
}
export const RequestCheckTx = {
    typeUrl: "/tendermint.abci.RequestCheckTx",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestCheckTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
                    break;
                case 2:
                    message.type = reader.int32();
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
            tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
            type: isSet(object.type) ? checkTxTypeFromJSON(object.type) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestCheckTx();
        message.tx = object.tx ?? new Uint8Array();
        message.type = object.type ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            tx: object?.tx,
            type: isSet(object.type) ? checkTxTypeFromJSON(object.type) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        obj.tx = message.tx;
        message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
        return obj;
    },
    fromAmino(object) {
        return {
            tx: object.tx,
            type: isSet(object.type) ? checkTxTypeFromJSON(object.type) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx;
        obj.type = message.type;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestCheckTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestCheckTx.decode(message.value);
    },
    toProto(message) {
        return RequestCheckTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestCheckTx",
            value: RequestCheckTx.encode(message).finish()
        };
    }
};
function createBaseRequestDeliverTx() {
    return {
        tx: new Uint8Array()
    };
}
export const RequestDeliverTx = {
    typeUrl: "/tendermint.abci.RequestDeliverTx",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestDeliverTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
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
            tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestDeliverTx();
        message.tx = object.tx ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            tx: object?.tx
        };
    },
    toSDK(message) {
        const obj = {};
        obj.tx = message.tx;
        return obj;
    },
    fromAmino(object) {
        return {
            tx: object.tx
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestDeliverTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestDeliverTx.decode(message.value);
    },
    toProto(message) {
        return RequestDeliverTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestDeliverTx",
            value: RequestDeliverTx.encode(message).finish()
        };
    }
};
function createBaseRequestEndBlock() {
    return {
        height: BigInt(0)
    };
}
export const RequestEndBlock = {
    typeUrl: "/tendermint.abci.RequestEndBlock",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestEndBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
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
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestEndBlock();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        return obj;
    },
    fromAmino(object) {
        return {
            height: BigInt(object.height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestEndBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestEndBlock.decode(message.value);
    },
    toProto(message) {
        return RequestEndBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestEndBlock",
            value: RequestEndBlock.encode(message).finish()
        };
    }
};
function createBaseRequestCommit() {
    return {};
}
export const RequestCommit = {
    typeUrl: "/tendermint.abci.RequestCommit",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestCommit();
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
        const message = createBaseRequestCommit();
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
        return RequestCommit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestCommit.decode(message.value);
    },
    toProto(message) {
        return RequestCommit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestCommit",
            value: RequestCommit.encode(message).finish()
        };
    }
};
function createBaseRequestListSnapshots() {
    return {};
}
export const RequestListSnapshots = {
    typeUrl: "/tendermint.abci.RequestListSnapshots",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestListSnapshots();
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
        const message = createBaseRequestListSnapshots();
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
        return RequestListSnapshots.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestListSnapshots.decode(message.value);
    },
    toProto(message) {
        return RequestListSnapshots.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestListSnapshots",
            value: RequestListSnapshots.encode(message).finish()
        };
    }
};
function createBaseRequestOfferSnapshot() {
    return {
        snapshot: undefined,
        app_hash: new Uint8Array()
    };
}
export const RequestOfferSnapshot = {
    typeUrl: "/tendermint.abci.RequestOfferSnapshot",
    encode(message, writer = BinaryWriter.create()) {
        if (message.snapshot !== undefined) {
            Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(18).bytes(message.app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestOfferSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshot = Snapshot.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.app_hash = reader.bytes();
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
            snapshot: isSet(object.snapshot) ? Snapshot.fromJSON(object.snapshot) : undefined,
            app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.snapshot !== undefined && (obj.snapshot = message.snapshot ? Snapshot.toJSON(message.snapshot) : undefined);
        message.app_hash !== undefined && (obj.app_hash = base64FromBytes(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestOfferSnapshot();
        message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
        message.app_hash = object.app_hash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            snapshot: object.snapshot ? Snapshot.fromSDK(object.snapshot) : undefined,
            app_hash: object?.app_hash
        };
    },
    toSDK(message) {
        const obj = {};
        message.snapshot !== undefined && (obj.snapshot = message.snapshot ? Snapshot.toSDK(message.snapshot) : undefined);
        obj.app_hash = message.app_hash;
        return obj;
    },
    fromAmino(object) {
        return {
            snapshot: object?.snapshot ? Snapshot.fromAmino(object.snapshot) : undefined,
            app_hash: object.app_hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.snapshot = message.snapshot ? Snapshot.toAmino(message.snapshot) : undefined;
        obj.app_hash = message.app_hash;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestOfferSnapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestOfferSnapshot.decode(message.value);
    },
    toProto(message) {
        return RequestOfferSnapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestOfferSnapshot",
            value: RequestOfferSnapshot.encode(message).finish()
        };
    }
};
function createBaseRequestLoadSnapshotChunk() {
    return {
        height: BigInt(0),
        format: 0,
        chunk: 0
    };
}
export const RequestLoadSnapshotChunk = {
    typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunk !== 0) {
            writer.uint32(24).uint32(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestLoadSnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunk = reader.uint32();
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
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            format: isSet(object.format) ? Number(object.format) : 0,
            chunk: isSet(object.chunk) ? Number(object.chunk) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunk !== undefined && (obj.chunk = Math.round(message.chunk));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestLoadSnapshotChunk();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.format = object.format ?? 0;
        message.chunk = object.chunk ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height,
            format: object?.format,
            chunk: object?.chunk
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        obj.format = message.format;
        obj.chunk = message.chunk;
        return obj;
    },
    fromAmino(object) {
        return {
            height: BigInt(object.height),
            format: object.format,
            chunk: object.chunk
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunk = message.chunk;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestLoadSnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestLoadSnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return RequestLoadSnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
            value: RequestLoadSnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseRequestApplySnapshotChunk() {
    return {
        index: 0,
        chunk: new Uint8Array(),
        sender: ""
    };
}
export const RequestApplySnapshotChunk = {
    typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
    encode(message, writer = BinaryWriter.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.chunk.length !== 0) {
            writer.uint32(18).bytes(message.chunk);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestApplySnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.chunk = reader.bytes();
                    break;
                case 3:
                    message.sender = reader.string();
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
            index: isSet(object.index) ? Number(object.index) : 0,
            chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(),
            sender: isSet(object.sender) ? String(object.sender) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.chunk !== undefined && (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestApplySnapshotChunk();
        message.index = object.index ?? 0;
        message.chunk = object.chunk ?? new Uint8Array();
        message.sender = object.sender ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            index: object?.index,
            chunk: object?.chunk,
            sender: object?.sender
        };
    },
    toSDK(message) {
        const obj = {};
        obj.index = message.index;
        obj.chunk = message.chunk;
        obj.sender = message.sender;
        return obj;
    },
    fromAmino(object) {
        return {
            index: object.index,
            chunk: object.chunk,
            sender: object.sender
        };
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index;
        obj.chunk = message.chunk;
        obj.sender = message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestApplySnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestApplySnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return RequestApplySnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
            value: RequestApplySnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseResponse() {
    return {
        exception: undefined,
        echo: undefined,
        flush: undefined,
        info: undefined,
        set_option: undefined,
        init_chain: undefined,
        query: undefined,
        begin_block: undefined,
        check_tx: undefined,
        deliver_tx: undefined,
        end_block: undefined,
        commit: undefined,
        list_snapshots: undefined,
        offer_snapshot: undefined,
        load_snapshot_chunk: undefined,
        apply_snapshot_chunk: undefined
    };
}
export const Response = {
    typeUrl: "/tendermint.abci.Response",
    encode(message, writer = BinaryWriter.create()) {
        if (message.exception !== undefined) {
            ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
        }
        if (message.echo !== undefined) {
            ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.set_option !== undefined) {
            ResponseSetOption.encode(message.set_option, writer.uint32(42).fork()).ldelim();
        }
        if (message.init_chain !== undefined) {
            ResponseInitChain.encode(message.init_chain, writer.uint32(50).fork()).ldelim();
        }
        if (message.query !== undefined) {
            ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
        }
        if (message.begin_block !== undefined) {
            ResponseBeginBlock.encode(message.begin_block, writer.uint32(66).fork()).ldelim();
        }
        if (message.check_tx !== undefined) {
            ResponseCheckTx.encode(message.check_tx, writer.uint32(74).fork()).ldelim();
        }
        if (message.deliver_tx !== undefined) {
            ResponseDeliverTx.encode(message.deliver_tx, writer.uint32(82).fork()).ldelim();
        }
        if (message.end_block !== undefined) {
            ResponseEndBlock.encode(message.end_block, writer.uint32(90).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
        }
        if (message.list_snapshots !== undefined) {
            ResponseListSnapshots.encode(message.list_snapshots, writer.uint32(106).fork()).ldelim();
        }
        if (message.offer_snapshot !== undefined) {
            ResponseOfferSnapshot.encode(message.offer_snapshot, writer.uint32(114).fork()).ldelim();
        }
        if (message.load_snapshot_chunk !== undefined) {
            ResponseLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.apply_snapshot_chunk !== undefined) {
            ResponseApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exception = ResponseException.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.echo = ResponseEcho.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.flush = ResponseFlush.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.info = ResponseInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.set_option = ResponseSetOption.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.init_chain = ResponseInitChain.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.query = ResponseQuery.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.begin_block = ResponseBeginBlock.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.check_tx = ResponseCheckTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deliver_tx = ResponseDeliverTx.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.end_block = ResponseEndBlock.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.commit = ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.list_snapshots = ResponseListSnapshots.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.offer_snapshot = ResponseOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.load_snapshot_chunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.apply_snapshot_chunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32());
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
            exception: isSet(object.exception) ? ResponseException.fromJSON(object.exception) : undefined,
            echo: isSet(object.echo) ? ResponseEcho.fromJSON(object.echo) : undefined,
            flush: isSet(object.flush) ? ResponseFlush.fromJSON(object.flush) : undefined,
            info: isSet(object.info) ? ResponseInfo.fromJSON(object.info) : undefined,
            set_option: isSet(object.set_option) ? ResponseSetOption.fromJSON(object.set_option) : undefined,
            init_chain: isSet(object.init_chain) ? ResponseInitChain.fromJSON(object.init_chain) : undefined,
            query: isSet(object.query) ? ResponseQuery.fromJSON(object.query) : undefined,
            begin_block: isSet(object.begin_block) ? ResponseBeginBlock.fromJSON(object.begin_block) : undefined,
            check_tx: isSet(object.check_tx) ? ResponseCheckTx.fromJSON(object.check_tx) : undefined,
            deliver_tx: isSet(object.deliver_tx) ? ResponseDeliverTx.fromJSON(object.deliver_tx) : undefined,
            end_block: isSet(object.end_block) ? ResponseEndBlock.fromJSON(object.end_block) : undefined,
            commit: isSet(object.commit) ? ResponseCommit.fromJSON(object.commit) : undefined,
            list_snapshots: isSet(object.list_snapshots) ? ResponseListSnapshots.fromJSON(object.list_snapshots) : undefined,
            offer_snapshot: isSet(object.offer_snapshot) ? ResponseOfferSnapshot.fromJSON(object.offer_snapshot) : undefined,
            load_snapshot_chunk: isSet(object.load_snapshot_chunk) ? ResponseLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: isSet(object.apply_snapshot_chunk) ? ResponseApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.exception !== undefined && (obj.exception = message.exception ? ResponseException.toJSON(message.exception) : undefined);
        message.echo !== undefined && (obj.echo = message.echo ? ResponseEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? ResponseFlush.toJSON(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? ResponseInfo.toJSON(message.info) : undefined);
        message.set_option !== undefined && (obj.set_option = message.set_option ? ResponseSetOption.toJSON(message.set_option) : undefined);
        message.init_chain !== undefined && (obj.init_chain = message.init_chain ? ResponseInitChain.toJSON(message.init_chain) : undefined);
        message.query !== undefined && (obj.query = message.query ? ResponseQuery.toJSON(message.query) : undefined);
        message.begin_block !== undefined && (obj.begin_block = message.begin_block ? ResponseBeginBlock.toJSON(message.begin_block) : undefined);
        message.check_tx !== undefined && (obj.check_tx = message.check_tx ? ResponseCheckTx.toJSON(message.check_tx) : undefined);
        message.deliver_tx !== undefined && (obj.deliver_tx = message.deliver_tx ? ResponseDeliverTx.toJSON(message.deliver_tx) : undefined);
        message.end_block !== undefined && (obj.end_block = message.end_block ? ResponseEndBlock.toJSON(message.end_block) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? ResponseCommit.toJSON(message.commit) : undefined);
        message.list_snapshots !== undefined && (obj.list_snapshots = message.list_snapshots ? ResponseListSnapshots.toJSON(message.list_snapshots) : undefined);
        message.offer_snapshot !== undefined && (obj.offer_snapshot = message.offer_snapshot ? ResponseOfferSnapshot.toJSON(message.offer_snapshot) : undefined);
        message.load_snapshot_chunk !== undefined && (obj.load_snapshot_chunk = message.load_snapshot_chunk ? ResponseLoadSnapshotChunk.toJSON(message.load_snapshot_chunk) : undefined);
        message.apply_snapshot_chunk !== undefined && (obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? ResponseApplySnapshotChunk.toJSON(message.apply_snapshot_chunk) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponse();
        message.exception = object.exception !== undefined && object.exception !== null ? ResponseException.fromPartial(object.exception) : undefined;
        message.echo = object.echo !== undefined && object.echo !== null ? ResponseEcho.fromPartial(object.echo) : undefined;
        message.flush = object.flush !== undefined && object.flush !== null ? ResponseFlush.fromPartial(object.flush) : undefined;
        message.info = object.info !== undefined && object.info !== null ? ResponseInfo.fromPartial(object.info) : undefined;
        message.set_option = object.set_option !== undefined && object.set_option !== null ? ResponseSetOption.fromPartial(object.set_option) : undefined;
        message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? ResponseInitChain.fromPartial(object.init_chain) : undefined;
        message.query = object.query !== undefined && object.query !== null ? ResponseQuery.fromPartial(object.query) : undefined;
        message.begin_block = object.begin_block !== undefined && object.begin_block !== null ? ResponseBeginBlock.fromPartial(object.begin_block) : undefined;
        message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? ResponseCheckTx.fromPartial(object.check_tx) : undefined;
        message.deliver_tx = object.deliver_tx !== undefined && object.deliver_tx !== null ? ResponseDeliverTx.fromPartial(object.deliver_tx) : undefined;
        message.end_block = object.end_block !== undefined && object.end_block !== null ? ResponseEndBlock.fromPartial(object.end_block) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? ResponseCommit.fromPartial(object.commit) : undefined;
        message.list_snapshots = object.list_snapshots !== undefined && object.list_snapshots !== null ? ResponseListSnapshots.fromPartial(object.list_snapshots) : undefined;
        message.offer_snapshot = object.offer_snapshot !== undefined && object.offer_snapshot !== null ? ResponseOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
        message.load_snapshot_chunk = object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null ? ResponseLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk) : undefined;
        message.apply_snapshot_chunk = object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null ? ResponseApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            exception: object.exception ? ResponseException.fromSDK(object.exception) : undefined,
            echo: object.echo ? ResponseEcho.fromSDK(object.echo) : undefined,
            flush: object.flush ? ResponseFlush.fromSDK(object.flush) : undefined,
            info: object.info ? ResponseInfo.fromSDK(object.info) : undefined,
            set_option: object.set_option ? ResponseSetOption.fromSDK(object.set_option) : undefined,
            init_chain: object.init_chain ? ResponseInitChain.fromSDK(object.init_chain) : undefined,
            query: object.query ? ResponseQuery.fromSDK(object.query) : undefined,
            begin_block: object.begin_block ? ResponseBeginBlock.fromSDK(object.begin_block) : undefined,
            check_tx: object.check_tx ? ResponseCheckTx.fromSDK(object.check_tx) : undefined,
            deliver_tx: object.deliver_tx ? ResponseDeliverTx.fromSDK(object.deliver_tx) : undefined,
            end_block: object.end_block ? ResponseEndBlock.fromSDK(object.end_block) : undefined,
            commit: object.commit ? ResponseCommit.fromSDK(object.commit) : undefined,
            list_snapshots: object.list_snapshots ? ResponseListSnapshots.fromSDK(object.list_snapshots) : undefined,
            offer_snapshot: object.offer_snapshot ? ResponseOfferSnapshot.fromSDK(object.offer_snapshot) : undefined,
            load_snapshot_chunk: object.load_snapshot_chunk ? ResponseLoadSnapshotChunk.fromSDK(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: object.apply_snapshot_chunk ? ResponseApplySnapshotChunk.fromSDK(object.apply_snapshot_chunk) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.exception !== undefined && (obj.exception = message.exception ? ResponseException.toSDK(message.exception) : undefined);
        message.echo !== undefined && (obj.echo = message.echo ? ResponseEcho.toSDK(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? ResponseFlush.toSDK(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? ResponseInfo.toSDK(message.info) : undefined);
        message.set_option !== undefined && (obj.set_option = message.set_option ? ResponseSetOption.toSDK(message.set_option) : undefined);
        message.init_chain !== undefined && (obj.init_chain = message.init_chain ? ResponseInitChain.toSDK(message.init_chain) : undefined);
        message.query !== undefined && (obj.query = message.query ? ResponseQuery.toSDK(message.query) : undefined);
        message.begin_block !== undefined && (obj.begin_block = message.begin_block ? ResponseBeginBlock.toSDK(message.begin_block) : undefined);
        message.check_tx !== undefined && (obj.check_tx = message.check_tx ? ResponseCheckTx.toSDK(message.check_tx) : undefined);
        message.deliver_tx !== undefined && (obj.deliver_tx = message.deliver_tx ? ResponseDeliverTx.toSDK(message.deliver_tx) : undefined);
        message.end_block !== undefined && (obj.end_block = message.end_block ? ResponseEndBlock.toSDK(message.end_block) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? ResponseCommit.toSDK(message.commit) : undefined);
        message.list_snapshots !== undefined && (obj.list_snapshots = message.list_snapshots ? ResponseListSnapshots.toSDK(message.list_snapshots) : undefined);
        message.offer_snapshot !== undefined && (obj.offer_snapshot = message.offer_snapshot ? ResponseOfferSnapshot.toSDK(message.offer_snapshot) : undefined);
        message.load_snapshot_chunk !== undefined && (obj.load_snapshot_chunk = message.load_snapshot_chunk ? ResponseLoadSnapshotChunk.toSDK(message.load_snapshot_chunk) : undefined);
        message.apply_snapshot_chunk !== undefined && (obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? ResponseApplySnapshotChunk.toSDK(message.apply_snapshot_chunk) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            exception: object?.exception ? ResponseException.fromAmino(object.exception) : undefined,
            echo: object?.echo ? ResponseEcho.fromAmino(object.echo) : undefined,
            flush: object?.flush ? ResponseFlush.fromAmino(object.flush) : undefined,
            info: object?.info ? ResponseInfo.fromAmino(object.info) : undefined,
            set_option: object?.set_option ? ResponseSetOption.fromAmino(object.set_option) : undefined,
            init_chain: object?.init_chain ? ResponseInitChain.fromAmino(object.init_chain) : undefined,
            query: object?.query ? ResponseQuery.fromAmino(object.query) : undefined,
            begin_block: object?.begin_block ? ResponseBeginBlock.fromAmino(object.begin_block) : undefined,
            check_tx: object?.check_tx ? ResponseCheckTx.fromAmino(object.check_tx) : undefined,
            deliver_tx: object?.deliver_tx ? ResponseDeliverTx.fromAmino(object.deliver_tx) : undefined,
            end_block: object?.end_block ? ResponseEndBlock.fromAmino(object.end_block) : undefined,
            commit: object?.commit ? ResponseCommit.fromAmino(object.commit) : undefined,
            list_snapshots: object?.list_snapshots ? ResponseListSnapshots.fromAmino(object.list_snapshots) : undefined,
            offer_snapshot: object?.offer_snapshot ? ResponseOfferSnapshot.fromAmino(object.offer_snapshot) : undefined,
            load_snapshot_chunk: object?.load_snapshot_chunk ? ResponseLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: object?.apply_snapshot_chunk ? ResponseApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.exception = message.exception ? ResponseException.toAmino(message.exception) : undefined;
        obj.echo = message.echo ? ResponseEcho.toAmino(message.echo) : undefined;
        obj.flush = message.flush ? ResponseFlush.toAmino(message.flush) : undefined;
        obj.info = message.info ? ResponseInfo.toAmino(message.info) : undefined;
        obj.set_option = message.set_option ? ResponseSetOption.toAmino(message.set_option) : undefined;
        obj.init_chain = message.init_chain ? ResponseInitChain.toAmino(message.init_chain) : undefined;
        obj.query = message.query ? ResponseQuery.toAmino(message.query) : undefined;
        obj.begin_block = message.begin_block ? ResponseBeginBlock.toAmino(message.begin_block) : undefined;
        obj.check_tx = message.check_tx ? ResponseCheckTx.toAmino(message.check_tx) : undefined;
        obj.deliver_tx = message.deliver_tx ? ResponseDeliverTx.toAmino(message.deliver_tx) : undefined;
        obj.end_block = message.end_block ? ResponseEndBlock.toAmino(message.end_block) : undefined;
        obj.commit = message.commit ? ResponseCommit.toAmino(message.commit) : undefined;
        obj.list_snapshots = message.list_snapshots ? ResponseListSnapshots.toAmino(message.list_snapshots) : undefined;
        obj.offer_snapshot = message.offer_snapshot ? ResponseOfferSnapshot.toAmino(message.offer_snapshot) : undefined;
        obj.load_snapshot_chunk = message.load_snapshot_chunk ? ResponseLoadSnapshotChunk.toAmino(message.load_snapshot_chunk) : undefined;
        obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? ResponseApplySnapshotChunk.toAmino(message.apply_snapshot_chunk) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Response.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Response.decode(message.value);
    },
    toProto(message) {
        return Response.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Response",
            value: Response.encode(message).finish()
        };
    }
};
function createBaseResponseException() {
    return {
        error: ""
    };
}
export const ResponseException = {
    typeUrl: "/tendermint.abci.ResponseException",
    encode(message, writer = BinaryWriter.create()) {
        if (message.error !== "") {
            writer.uint32(10).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseException();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.error = reader.string();
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
            error: isSet(object.error) ? String(object.error) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseException();
        message.error = object.error ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            error: object?.error
        };
    },
    toSDK(message) {
        const obj = {};
        obj.error = message.error;
        return obj;
    },
    fromAmino(object) {
        return {
            error: object.error
        };
    },
    toAmino(message) {
        const obj = {};
        obj.error = message.error;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseException.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseException.decode(message.value);
    },
    toProto(message) {
        return ResponseException.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseException",
            value: ResponseException.encode(message).finish()
        };
    }
};
function createBaseResponseEcho() {
    return {
        message: ""
    };
}
export const ResponseEcho = {
    typeUrl: "/tendermint.abci.ResponseEcho",
    encode(message, writer = BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseEcho();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
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
            message: isSet(object.message) ? String(object.message) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseEcho();
        message.message = object.message ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            message: object?.message
        };
    },
    toSDK(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAmino(object) {
        return {
            message: object.message
        };
    },
    toAmino(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseEcho.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseEcho.decode(message.value);
    },
    toProto(message) {
        return ResponseEcho.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseEcho",
            value: ResponseEcho.encode(message).finish()
        };
    }
};
function createBaseResponseFlush() {
    return {};
}
export const ResponseFlush = {
    typeUrl: "/tendermint.abci.ResponseFlush",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseFlush();
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
        const message = createBaseResponseFlush();
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
        return ResponseFlush.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseFlush.decode(message.value);
    },
    toProto(message) {
        return ResponseFlush.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseFlush",
            value: ResponseFlush.encode(message).finish()
        };
    }
};
function createBaseResponseInfo() {
    return {
        data: "",
        version: "",
        app_version: BigInt(0),
        last_block_height: BigInt(0),
        last_block_app_hash: new Uint8Array()
    };
}
export const ResponseInfo = {
    typeUrl: "/tendermint.abci.ResponseInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.app_version !== BigInt(0)) {
            writer.uint32(24).uint64(message.app_version);
        }
        if (message.last_block_height !== BigInt(0)) {
            writer.uint32(32).int64(message.last_block_height);
        }
        if (message.last_block_app_hash.length !== 0) {
            writer.uint32(42).bytes(message.last_block_app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.app_version = reader.uint64();
                    break;
                case 4:
                    message.last_block_height = reader.int64();
                    break;
                case 5:
                    message.last_block_app_hash = reader.bytes();
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
            data: isSet(object.data) ? String(object.data) : "",
            version: isSet(object.version) ? String(object.version) : "",
            app_version: isSet(object.app_version) ? BigInt(object.app_version.toString()) : BigInt(0),
            last_block_height: isSet(object.last_block_height) ? BigInt(object.last_block_height.toString()) : BigInt(0),
            last_block_app_hash: isSet(object.last_block_app_hash) ? bytesFromBase64(object.last_block_app_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data);
        message.version !== undefined && (obj.version = message.version);
        message.app_version !== undefined && (obj.app_version = (message.app_version || BigInt(0)).toString());
        message.last_block_height !== undefined && (obj.last_block_height = (message.last_block_height || BigInt(0)).toString());
        message.last_block_app_hash !== undefined && (obj.last_block_app_hash = base64FromBytes(message.last_block_app_hash !== undefined ? message.last_block_app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseInfo();
        message.data = object.data ?? "";
        message.version = object.version ?? "";
        message.app_version = object.app_version !== undefined && object.app_version !== null ? BigInt(object.app_version.toString()) : BigInt(0);
        message.last_block_height = object.last_block_height !== undefined && object.last_block_height !== null ? BigInt(object.last_block_height.toString()) : BigInt(0);
        message.last_block_app_hash = object.last_block_app_hash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            data: object?.data,
            version: object?.version,
            app_version: object?.app_version,
            last_block_height: object?.last_block_height,
            last_block_app_hash: object?.last_block_app_hash
        };
    },
    toSDK(message) {
        const obj = {};
        obj.data = message.data;
        obj.version = message.version;
        obj.app_version = message.app_version;
        obj.last_block_height = message.last_block_height;
        obj.last_block_app_hash = message.last_block_app_hash;
        return obj;
    },
    fromAmino(object) {
        return {
            data: object.data,
            version: object.version,
            app_version: BigInt(object.app_version),
            last_block_height: BigInt(object.last_block_height),
            last_block_app_hash: object.last_block_app_hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data;
        obj.version = message.version;
        obj.app_version = message.app_version ? message.app_version.toString() : undefined;
        obj.last_block_height = message.last_block_height ? message.last_block_height.toString() : undefined;
        obj.last_block_app_hash = message.last_block_app_hash;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseInfo.decode(message.value);
    },
    toProto(message) {
        return ResponseInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseInfo",
            value: ResponseInfo.encode(message).finish()
        };
    }
};
function createBaseResponseSetOption() {
    return {
        code: 0,
        log: "",
        info: ""
    };
}
export const ResponseSetOption = {
    typeUrl: "/tendermint.abci.ResponseSetOption",
    encode(message, writer = BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseSetOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseSetOption();
        message.code = object.code ?? 0;
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            code: object?.code,
            log: object?.log,
            info: object?.info
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code = message.code;
        obj.log = message.log;
        obj.info = message.info;
        return obj;
    },
    fromAmino(object) {
        return {
            code: object.code,
            log: object.log,
            info: object.info
        };
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.log = message.log;
        obj.info = message.info;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseSetOption.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseSetOption.decode(message.value);
    },
    toProto(message) {
        return ResponseSetOption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseSetOption",
            value: ResponseSetOption.encode(message).finish()
        };
    }
};
function createBaseResponseInitChain() {
    return {
        consensus_params: undefined,
        validators: [],
        app_hash: new Uint8Array()
    };
}
export const ResponseInitChain = {
    typeUrl: "/tendermint.abci.ResponseInitChain",
    encode(message, writer = BinaryWriter.create()) {
        if (message.consensus_params !== undefined) {
            ConsensusParams.encode(message.consensus_params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.validators) {
            ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(26).bytes(message.app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.app_hash = reader.bytes();
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
            consensus_params: isSet(object.consensus_params) ? ConsensusParams.fromJSON(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => ValidatorUpdate.fromJSON(e)) : [],
            app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus_params !== undefined && (obj.consensus_params = message.consensus_params ? ConsensusParams.toJSON(message.consensus_params) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.app_hash !== undefined && (obj.app_hash = base64FromBytes(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseInitChain();
        message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? ConsensusParams.fromPartial(object.consensus_params) : undefined;
        message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
        message.app_hash = object.app_hash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            consensus_params: object.consensus_params ? ConsensusParams.fromSDK(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => ValidatorUpdate.fromSDK(e)) : [],
            app_hash: object?.app_hash
        };
    },
    toSDK(message) {
        const obj = {};
        message.consensus_params !== undefined && (obj.consensus_params = message.consensus_params ? ConsensusParams.toSDK(message.consensus_params) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? ValidatorUpdate.toSDK(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_hash = message.app_hash;
        return obj;
    },
    fromAmino(object) {
        return {
            consensus_params: object?.consensus_params ? ConsensusParams.fromAmino(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => ValidatorUpdate.fromAmino(e)) : [],
            app_hash: object.app_hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_params = message.consensus_params ? ConsensusParams.toAmino(message.consensus_params) : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_hash = message.app_hash;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseInitChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseInitChain.decode(message.value);
    },
    toProto(message) {
        return ResponseInitChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseInitChain",
            value: ResponseInitChain.encode(message).finish()
        };
    }
};
function createBaseResponseQuery() {
    return {
        code: 0,
        log: "",
        info: "",
        index: BigInt(0),
        key: new Uint8Array(),
        value: new Uint8Array(),
        proof_ops: undefined,
        height: BigInt(0),
        codespace: ""
    };
}
export const ResponseQuery = {
    typeUrl: "/tendermint.abci.ResponseQuery",
    encode(message, writer = BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.index !== BigInt(0)) {
            writer.uint32(40).int64(message.index);
        }
        if (message.key.length !== 0) {
            writer.uint32(50).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.proof_ops !== undefined) {
            ProofOps.encode(message.proof_ops, writer.uint32(66).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(72).int64(message.height);
        }
        if (message.codespace !== "") {
            writer.uint32(82).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.index = reader.int64();
                    break;
                case 6:
                    message.key = reader.bytes();
                    break;
                case 7:
                    message.value = reader.bytes();
                    break;
                case 8:
                    message.proof_ops = ProofOps.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.height = reader.int64();
                    break;
                case 10:
                    message.codespace = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : "",
            index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
            proof_ops: isSet(object.proof_ops) ? ProofOps.fromJSON(object.proof_ops) : undefined,
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            codespace: isSet(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.proof_ops !== undefined && (obj.proof_ops = message.proof_ops ? ProofOps.toJSON(message.proof_ops) : undefined);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseQuery();
        message.code = object.code ?? 0;
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? ProofOps.fromPartial(object.proof_ops) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            code: object?.code,
            log: object?.log,
            info: object?.info,
            index: object?.index,
            key: object?.key,
            value: object?.value,
            proof_ops: object.proof_ops ? ProofOps.fromSDK(object.proof_ops) : undefined,
            height: object?.height,
            codespace: object?.codespace
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code = message.code;
        obj.log = message.log;
        obj.info = message.info;
        obj.index = message.index;
        obj.key = message.key;
        obj.value = message.value;
        message.proof_ops !== undefined && (obj.proof_ops = message.proof_ops ? ProofOps.toSDK(message.proof_ops) : undefined);
        obj.height = message.height;
        obj.codespace = message.codespace;
        return obj;
    },
    fromAmino(object) {
        return {
            code: object.code,
            log: object.log,
            info: object.info,
            index: BigInt(object.index),
            key: object.key,
            value: object.value,
            proof_ops: object?.proof_ops ? ProofOps.fromAmino(object.proof_ops) : undefined,
            height: BigInt(object.height),
            codespace: object.codespace
        };
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.log = message.log;
        obj.info = message.info;
        obj.index = message.index ? message.index.toString() : undefined;
        obj.key = message.key;
        obj.value = message.value;
        obj.proof_ops = message.proof_ops ? ProofOps.toAmino(message.proof_ops) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseQuery.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseQuery.decode(message.value);
    },
    toProto(message) {
        return ResponseQuery.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseQuery",
            value: ResponseQuery.encode(message).finish()
        };
    }
};
function createBaseResponseBeginBlock() {
    return {
        events: []
    };
}
export const ResponseBeginBlock = {
    typeUrl: "/tendermint.abci.ResponseBeginBlock",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.events) {
            Event.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseBeginBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(Event.decode(reader, reader.uint32()));
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
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseBeginBlock();
        message.events = object.events?.map(e => Event.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toSDK(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseBeginBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseBeginBlock.decode(message.value);
    },
    toProto(message) {
        return ResponseBeginBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseBeginBlock",
            value: ResponseBeginBlock.encode(message).finish()
        };
    }
};
function createBaseResponseCheckTx() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gas_wanted: BigInt(0),
        gas_used: BigInt(0),
        events: [],
        codespace: ""
    };
}
export const ResponseCheckTx = {
    typeUrl: "/tendermint.abci.ResponseCheckTx",
    encode(message, writer = BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gas_wanted !== BigInt(0)) {
            writer.uint32(40).int64(message.gas_wanted);
        }
        if (message.gas_used !== BigInt(0)) {
            writer.uint32(48).int64(message.gas_used);
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseCheckTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gas_wanted = reader.int64();
                    break;
                case 6:
                    message.gas_used = reader.int64();
                    break;
                case 7:
                    message.events.push(Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : "",
            gas_wanted: isSet(object.gas_wanted) ? BigInt(object.gas_wanted.toString()) : BigInt(0),
            gas_used: isSet(object.gas_used) ? BigInt(object.gas_used.toString()) : BigInt(0),
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromJSON(e)) : [],
            codespace: isSet(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = (message.gas_wanted || BigInt(0)).toString());
        message.gas_used !== undefined && (obj.gas_used = (message.gas_used || BigInt(0)).toString());
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseCheckTx();
        message.code = object.code ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? BigInt(object.gas_wanted.toString()) : BigInt(0);
        message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? BigInt(object.gas_used.toString()) : BigInt(0);
        message.events = object.events?.map(e => Event.fromPartial(e)) || [];
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            code: object?.code,
            data: object?.data,
            log: object?.log,
            info: object?.info,
            gas_wanted: object?.gas_wanted,
            gas_used: object?.gas_used,
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromSDK(e)) : [],
            codespace: object?.codespace
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gas_wanted;
        obj.gas_used = message.gas_used;
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toSDK(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAmino(object) {
        return {
            code: object.code,
            data: object.data,
            log: object.log,
            info: object.info,
            gas_wanted: BigInt(object.gas_wanted),
            gas_used: BigInt(object.gas_used),
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromAmino(e)) : [],
            codespace: object.codespace
        };
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gas_wanted ? message.gas_wanted.toString() : undefined;
        obj.gas_used = message.gas_used ? message.gas_used.toString() : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseCheckTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseCheckTx.decode(message.value);
    },
    toProto(message) {
        return ResponseCheckTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseCheckTx",
            value: ResponseCheckTx.encode(message).finish()
        };
    }
};
function createBaseResponseDeliverTx() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gas_wanted: BigInt(0),
        gas_used: BigInt(0),
        events: [],
        codespace: ""
    };
}
export const ResponseDeliverTx = {
    typeUrl: "/tendermint.abci.ResponseDeliverTx",
    encode(message, writer = BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gas_wanted !== BigInt(0)) {
            writer.uint32(40).int64(message.gas_wanted);
        }
        if (message.gas_used !== BigInt(0)) {
            writer.uint32(48).int64(message.gas_used);
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseDeliverTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gas_wanted = reader.int64();
                    break;
                case 6:
                    message.gas_used = reader.int64();
                    break;
                case 7:
                    message.events.push(Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : "",
            gas_wanted: isSet(object.gas_wanted) ? BigInt(object.gas_wanted.toString()) : BigInt(0),
            gas_used: isSet(object.gas_used) ? BigInt(object.gas_used.toString()) : BigInt(0),
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromJSON(e)) : [],
            codespace: isSet(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = (message.gas_wanted || BigInt(0)).toString());
        message.gas_used !== undefined && (obj.gas_used = (message.gas_used || BigInt(0)).toString());
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseDeliverTx();
        message.code = object.code ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? BigInt(object.gas_wanted.toString()) : BigInt(0);
        message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? BigInt(object.gas_used.toString()) : BigInt(0);
        message.events = object.events?.map(e => Event.fromPartial(e)) || [];
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            code: object?.code,
            data: object?.data,
            log: object?.log,
            info: object?.info,
            gas_wanted: object?.gas_wanted,
            gas_used: object?.gas_used,
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromSDK(e)) : [],
            codespace: object?.codespace
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gas_wanted;
        obj.gas_used = message.gas_used;
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toSDK(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAmino(object) {
        return {
            code: object.code,
            data: object.data,
            log: object.log,
            info: object.info,
            gas_wanted: BigInt(object.gas_wanted),
            gas_used: BigInt(object.gas_used),
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromAmino(e)) : [],
            codespace: object.codespace
        };
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gas_wanted ? message.gas_wanted.toString() : undefined;
        obj.gas_used = message.gas_used ? message.gas_used.toString() : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseDeliverTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseDeliverTx.decode(message.value);
    },
    toProto(message) {
        return ResponseDeliverTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseDeliverTx",
            value: ResponseDeliverTx.encode(message).finish()
        };
    }
};
function createBaseResponseEndBlock() {
    return {
        validator_updates: [],
        consensus_param_updates: undefined,
        events: []
    };
}
export const ResponseEndBlock = {
    typeUrl: "/tendermint.abci.ResponseEndBlock",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.validator_updates) {
            ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensus_param_updates !== undefined) {
            ConsensusParams.encode(message.consensus_param_updates, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseEndBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.consensus_param_updates = ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.events.push(Event.decode(reader, reader.uint32()));
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
            validator_updates: Array.isArray(object?.validator_updates) ? object.validator_updates.map((e) => ValidatorUpdate.fromJSON(e)) : [],
            consensus_param_updates: isSet(object.consensus_param_updates) ? ConsensusParams.fromJSON(object.consensus_param_updates) : undefined,
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validator_updates) {
            obj.validator_updates = message.validator_updates.map(e => e ? ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validator_updates = [];
        }
        message.consensus_param_updates !== undefined && (obj.consensus_param_updates = message.consensus_param_updates ? ConsensusParams.toJSON(message.consensus_param_updates) : undefined);
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseEndBlock();
        message.validator_updates = object.validator_updates?.map(e => ValidatorUpdate.fromPartial(e)) || [];
        message.consensus_param_updates = object.consensus_param_updates !== undefined && object.consensus_param_updates !== null ? ConsensusParams.fromPartial(object.consensus_param_updates) : undefined;
        message.events = object.events?.map(e => Event.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            validator_updates: Array.isArray(object?.validator_updates) ? object.validator_updates.map((e) => ValidatorUpdate.fromSDK(e)) : [],
            consensus_param_updates: object.consensus_param_updates ? ConsensusParams.fromSDK(object.consensus_param_updates) : undefined,
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.validator_updates) {
            obj.validator_updates = message.validator_updates.map(e => e ? ValidatorUpdate.toSDK(e) : undefined);
        }
        else {
            obj.validator_updates = [];
        }
        message.consensus_param_updates !== undefined && (obj.consensus_param_updates = message.consensus_param_updates ? ConsensusParams.toSDK(message.consensus_param_updates) : undefined);
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toSDK(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            validator_updates: Array.isArray(object?.validator_updates) ? object.validator_updates.map((e) => ValidatorUpdate.fromAmino(e)) : [],
            consensus_param_updates: object?.consensus_param_updates ? ConsensusParams.fromAmino(object.consensus_param_updates) : undefined,
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.validator_updates) {
            obj.validator_updates = message.validator_updates.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validator_updates = [];
        }
        obj.consensus_param_updates = message.consensus_param_updates ? ConsensusParams.toAmino(message.consensus_param_updates) : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseEndBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseEndBlock.decode(message.value);
    },
    toProto(message) {
        return ResponseEndBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseEndBlock",
            value: ResponseEndBlock.encode(message).finish()
        };
    }
};
function createBaseResponseCommit() {
    return {
        data: new Uint8Array(),
        retain_height: BigInt(0)
    };
}
export const ResponseCommit = {
    typeUrl: "/tendermint.abci.ResponseCommit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.retain_height !== BigInt(0)) {
            writer.uint32(24).int64(message.retain_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.retain_height = reader.int64();
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            retain_height: isSet(object.retain_height) ? BigInt(object.retain_height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.retain_height !== undefined && (obj.retain_height = (message.retain_height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseCommit();
        message.data = object.data ?? new Uint8Array();
        message.retain_height = object.retain_height !== undefined && object.retain_height !== null ? BigInt(object.retain_height.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            data: object?.data,
            retain_height: object?.retain_height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.data = message.data;
        obj.retain_height = message.retain_height;
        return obj;
    },
    fromAmino(object) {
        return {
            data: object.data,
            retain_height: BigInt(object.retain_height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data;
        obj.retain_height = message.retain_height ? message.retain_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseCommit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseCommit.decode(message.value);
    },
    toProto(message) {
        return ResponseCommit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseCommit",
            value: ResponseCommit.encode(message).finish()
        };
    }
};
function createBaseResponseListSnapshots() {
    return {
        snapshots: []
    };
}
export const ResponseListSnapshots = {
    typeUrl: "/tendermint.abci.ResponseListSnapshots",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.snapshots) {
            Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseListSnapshots();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
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
            snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e) => Snapshot.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map(e => e ? Snapshot.toJSON(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseListSnapshots();
        message.snapshots = object.snapshots?.map(e => Snapshot.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e) => Snapshot.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map(e => e ? Snapshot.toSDK(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e) => Snapshot.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map(e => e ? Snapshot.toAmino(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseListSnapshots.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseListSnapshots.decode(message.value);
    },
    toProto(message) {
        return ResponseListSnapshots.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseListSnapshots",
            value: ResponseListSnapshots.encode(message).finish()
        };
    }
};
function createBaseResponseOfferSnapshot() {
    return {
        result: 0
    };
}
export const ResponseOfferSnapshot = {
    typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseOfferSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
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
            result: isSet(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseOfferSnapshot();
        message.result = object.result ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            result: isSet(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
        return obj;
    },
    fromAmino(object) {
        return {
            result: isSet(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseOfferSnapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseOfferSnapshot.decode(message.value);
    },
    toProto(message) {
        return ResponseOfferSnapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
            value: ResponseOfferSnapshot.encode(message).finish()
        };
    }
};
function createBaseResponseLoadSnapshotChunk() {
    return {
        chunk: new Uint8Array()
    };
}
export const ResponseLoadSnapshotChunk = {
    typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chunk.length !== 0) {
            writer.uint32(10).bytes(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseLoadSnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunk = reader.bytes();
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
            chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.chunk !== undefined && (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseLoadSnapshotChunk();
        message.chunk = object.chunk ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            chunk: object?.chunk
        };
    },
    toSDK(message) {
        const obj = {};
        obj.chunk = message.chunk;
        return obj;
    },
    fromAmino(object) {
        return {
            chunk: object.chunk
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chunk = message.chunk;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseLoadSnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseLoadSnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return ResponseLoadSnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
            value: ResponseLoadSnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseResponseApplySnapshotChunk() {
    return {
        result: 0,
        refetch_chunks: [],
        reject_senders: []
    };
}
export const ResponseApplySnapshotChunk = {
    typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        writer.uint32(18).fork();
        for (const v of message.refetch_chunks) {
            writer.uint32(v);
        }
        writer.ldelim();
        for (const v of message.reject_senders) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseApplySnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.refetch_chunks.push(reader.uint32());
                        }
                    }
                    else {
                        message.refetch_chunks.push(reader.uint32());
                    }
                    break;
                case 3:
                    message.reject_senders.push(reader.string());
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
            result: isSet(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : -1,
            refetch_chunks: Array.isArray(object?.refetch_chunks) ? object.refetch_chunks.map((e) => Number(e)) : [],
            reject_senders: Array.isArray(object?.reject_senders) ? object.reject_senders.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));
        if (message.refetch_chunks) {
            obj.refetch_chunks = message.refetch_chunks.map(e => Math.round(e));
        }
        else {
            obj.refetch_chunks = [];
        }
        if (message.reject_senders) {
            obj.reject_senders = message.reject_senders.map(e => e);
        }
        else {
            obj.reject_senders = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseApplySnapshotChunk();
        message.result = object.result ?? 0;
        message.refetch_chunks = object.refetch_chunks?.map(e => e) || [];
        message.reject_senders = object.reject_senders?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            result: isSet(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : -1,
            refetch_chunks: Array.isArray(object?.refetch_chunks) ? object.refetch_chunks.map((e) => e) : [],
            reject_senders: Array.isArray(object?.reject_senders) ? object.reject_senders.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));
        if (message.refetch_chunks) {
            obj.refetch_chunks = message.refetch_chunks.map(e => e);
        }
        else {
            obj.refetch_chunks = [];
        }
        if (message.reject_senders) {
            obj.reject_senders = message.reject_senders.map(e => e);
        }
        else {
            obj.reject_senders = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            result: isSet(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : -1,
            refetch_chunks: Array.isArray(object?.refetch_chunks) ? object.refetch_chunks.map((e) => e) : [],
            reject_senders: Array.isArray(object?.reject_senders) ? object.reject_senders.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        if (message.refetch_chunks) {
            obj.refetch_chunks = message.refetch_chunks.map(e => e);
        }
        else {
            obj.refetch_chunks = [];
        }
        if (message.reject_senders) {
            obj.reject_senders = message.reject_senders.map(e => e);
        }
        else {
            obj.reject_senders = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseApplySnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseApplySnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return ResponseApplySnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
            value: ResponseApplySnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseConsensusParams() {
    return {
        block: undefined,
        evidence: undefined,
        validator: undefined,
        version: undefined
    };
}
export const ConsensusParams = {
    typeUrl: "/tendermint.abci.ConsensusParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.block !== undefined) {
            BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = VersionParams.decode(reader, reader.uint32());
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
            block: isSet(object.block) ? BlockParams.fromJSON(object.block) : undefined,
            evidence: isSet(object.evidence) ? EvidenceParams.fromJSON(object.evidence) : undefined,
            validator: isSet(object.validator) ? ValidatorParams.fromJSON(object.validator) : undefined,
            version: isSet(object.version) ? VersionParams.fromJSON(object.version) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined && (obj.block = message.block ? BlockParams.toJSON(message.block) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? EvidenceParams.toJSON(message.evidence) : undefined);
        message.validator !== undefined && (obj.validator = message.validator ? ValidatorParams.toJSON(message.validator) : undefined);
        message.version !== undefined && (obj.version = message.version ? VersionParams.toJSON(message.version) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusParams();
        message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
        message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
        message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            block: object.block ? BlockParams.fromSDK(object.block) : undefined,
            evidence: object.evidence ? EvidenceParams.fromSDK(object.evidence) : undefined,
            validator: object.validator ? ValidatorParams.fromSDK(object.validator) : undefined,
            version: object.version ? VersionParams.fromSDK(object.version) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.block !== undefined && (obj.block = message.block ? BlockParams.toSDK(message.block) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? EvidenceParams.toSDK(message.evidence) : undefined);
        message.validator !== undefined && (obj.validator = message.validator ? ValidatorParams.toSDK(message.validator) : undefined);
        message.version !== undefined && (obj.version = message.version ? VersionParams.toSDK(message.version) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            block: object?.block ? BlockParams.fromAmino(object.block) : undefined,
            evidence: object?.evidence ? EvidenceParams.fromAmino(object.evidence) : undefined,
            validator: object?.validator ? ValidatorParams.fromAmino(object.validator) : undefined,
            version: object?.version ? VersionParams.fromAmino(object.version) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block = message.block ? BlockParams.toAmino(message.block) : undefined;
        obj.evidence = message.evidence ? EvidenceParams.toAmino(message.evidence) : undefined;
        obj.validator = message.validator ? ValidatorParams.toAmino(message.validator) : undefined;
        obj.version = message.version ? VersionParams.toAmino(message.version) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConsensusParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConsensusParams.decode(message.value);
    },
    toProto(message) {
        return ConsensusParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ConsensusParams",
            value: ConsensusParams.encode(message).finish()
        };
    }
};
function createBaseBlockParams() {
    return {
        max_bytes: BigInt(0),
        max_gas: BigInt(0)
    };
}
export const BlockParams = {
    typeUrl: "/tendermint.abci.BlockParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.max_bytes !== BigInt(0)) {
            writer.uint32(8).int64(message.max_bytes);
        }
        if (message.max_gas !== BigInt(0)) {
            writer.uint32(16).int64(message.max_gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_bytes = reader.int64();
                    break;
                case 2:
                    message.max_gas = reader.int64();
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
            max_bytes: isSet(object.max_bytes) ? BigInt(object.max_bytes.toString()) : BigInt(0),
            max_gas: isSet(object.max_gas) ? BigInt(object.max_gas.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_bytes !== undefined && (obj.max_bytes = (message.max_bytes || BigInt(0)).toString());
        message.max_gas !== undefined && (obj.max_gas = (message.max_gas || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockParams();
        message.max_bytes = object.max_bytes !== undefined && object.max_bytes !== null ? BigInt(object.max_bytes.toString()) : BigInt(0);
        message.max_gas = object.max_gas !== undefined && object.max_gas !== null ? BigInt(object.max_gas.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            max_bytes: object?.max_bytes,
            max_gas: object?.max_gas
        };
    },
    toSDK(message) {
        const obj = {};
        obj.max_bytes = message.max_bytes;
        obj.max_gas = message.max_gas;
        return obj;
    },
    fromAmino(object) {
        return {
            max_bytes: BigInt(object.max_bytes),
            max_gas: BigInt(object.max_gas)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.max_bytes = message.max_bytes ? message.max_bytes.toString() : undefined;
        obj.max_gas = message.max_gas ? message.max_gas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BlockParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BlockParams.decode(message.value);
    },
    toProto(message) {
        return BlockParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.BlockParams",
            value: BlockParams.encode(message).finish()
        };
    }
};
function createBaseLastCommitInfo() {
    return {
        round: 0,
        votes: []
    };
}
export const LastCommitInfo = {
    typeUrl: "/tendermint.abci.LastCommitInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (const v of message.votes) {
            VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.votes.push(VoteInfo.decode(reader, reader.uint32()));
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
            round: isSet(object.round) ? Number(object.round) : 0,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => VoteInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.round !== undefined && (obj.round = Math.round(message.round));
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? VoteInfo.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLastCommitInfo();
        message.round = object.round ?? 0;
        message.votes = object.votes?.map(e => VoteInfo.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            round: object?.round,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => VoteInfo.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.round = message.round;
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? VoteInfo.toSDK(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            round: object.round,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => VoteInfo.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.round = message.round;
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? VoteInfo.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return LastCommitInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LastCommitInfo.decode(message.value);
    },
    toProto(message) {
        return LastCommitInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.LastCommitInfo",
            value: LastCommitInfo.encode(message).finish()
        };
    }
};
function createBaseEvent() {
    return {
        type: "",
        attributes: []
    };
}
export const Event = {
    typeUrl: "/tendermint.abci.Event",
    encode(message, writer = BinaryWriter.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
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
            type: isSet(object.type) ? String(object.type) : "",
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => EventAttribute.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? EventAttribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEvent();
        message.type = object.type ?? "";
        message.attributes = object.attributes?.map(e => EventAttribute.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            type: object?.type,
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => EventAttribute.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.type = message.type;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? EventAttribute.toSDK(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            type: object.type,
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => EventAttribute.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? EventAttribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Event.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Event.decode(message.value);
    },
    toProto(message) {
        return Event.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Event",
            value: Event.encode(message).finish()
        };
    }
};
function createBaseEventAttribute() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        index: false
    };
}
export const EventAttribute = {
    typeUrl: "/tendermint.abci.EventAttribute",
    encode(message, writer = BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.index === true) {
            writer.uint32(24).bool(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.index = reader.bool();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
            index: isSet(object.index) ? Boolean(object.index) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventAttribute();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.index = object.index ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            key: object?.key,
            value: object?.value,
            index: object?.index
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.index = message.index;
        return obj;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value,
            index: object.index
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.index = message.index;
        return obj;
    },
    fromAminoMsg(object) {
        return EventAttribute.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventAttribute.decode(message.value);
    },
    toProto(message) {
        return EventAttribute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.EventAttribute",
            value: EventAttribute.encode(message).finish()
        };
    }
};
function createBaseTxResult() {
    return {
        height: BigInt(0),
        index: 0,
        tx: new Uint8Array(),
        result: ResponseDeliverTx.fromPartial({})
    };
}
export const TxResult = {
    typeUrl: "/tendermint.abci.TxResult",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.index !== 0) {
            writer.uint32(16).uint32(message.index);
        }
        if (message.tx.length !== 0) {
            writer.uint32(26).bytes(message.tx);
        }
        if (message.result !== undefined) {
            ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.index = reader.uint32();
                    break;
                case 3:
                    message.tx = reader.bytes();
                    break;
                case 4:
                    message.result = ResponseDeliverTx.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            index: isSet(object.index) ? Number(object.index) : 0,
            tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
            result: isSet(object.result) ? ResponseDeliverTx.fromJSON(object.result) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.tx !== undefined && (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.result !== undefined && (obj.result = message.result ? ResponseDeliverTx.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxResult();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.index = object.index ?? 0;
        message.tx = object.tx ?? new Uint8Array();
        message.result = object.result !== undefined && object.result !== null ? ResponseDeliverTx.fromPartial(object.result) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height,
            index: object?.index,
            tx: object?.tx,
            result: object.result ? ResponseDeliverTx.fromSDK(object.result) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        obj.index = message.index;
        obj.tx = message.tx;
        message.result !== undefined && (obj.result = message.result ? ResponseDeliverTx.toSDK(message.result) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            height: BigInt(object.height),
            index: object.index,
            tx: object.tx,
            result: object?.result ? ResponseDeliverTx.fromAmino(object.result) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.index = message.index;
        obj.tx = message.tx;
        obj.result = message.result ? ResponseDeliverTx.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TxResult.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TxResult.decode(message.value);
    },
    toProto(message) {
        return TxResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.TxResult",
            value: TxResult.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        address: new Uint8Array(),
        power: BigInt(0)
    };
}
export const Validator = {
    typeUrl: "/tendermint.abci.Validator",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(24).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 3:
                    message.power = reader.int64();
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
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
            power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
        message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? new Uint8Array();
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            power: object?.power
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.power = message.power;
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            power: BigInt(object.power)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.power = message.power ? message.power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Validator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Validator.decode(message.value);
    },
    toProto(message) {
        return Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Validator",
            value: Validator.encode(message).finish()
        };
    }
};
function createBaseValidatorUpdate() {
    return {
        pub_key: PublicKey.fromPartial({}),
        power: BigInt(0)
    };
}
export const ValidatorUpdate = {
    typeUrl: "/tendermint.abci.ValidatorUpdate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pub_key !== undefined) {
            PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key = PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.power = reader.int64();
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
            pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
            power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? PublicKey.toJSON(message.pub_key) : undefined);
        message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorUpdate();
        message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? PublicKey.fromPartial(object.pub_key) : undefined;
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            pub_key: object.pub_key ? PublicKey.fromSDK(object.pub_key) : undefined,
            power: object?.power
        };
    },
    toSDK(message) {
        const obj = {};
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? PublicKey.toSDK(message.pub_key) : undefined);
        obj.power = message.power;
        return obj;
    },
    fromAmino(object) {
        return {
            pub_key: object?.pub_key ? PublicKey.fromAmino(object.pub_key) : undefined,
            power: BigInt(object.power)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pub_key = message.pub_key ? PublicKey.toAmino(message.pub_key) : undefined;
        obj.power = message.power ? message.power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ValidatorUpdate.decode(message.value);
    },
    toProto(message) {
        return ValidatorUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ValidatorUpdate",
            value: ValidatorUpdate.encode(message).finish()
        };
    }
};
function createBaseVoteInfo() {
    return {
        validator: Validator.fromPartial({}),
        signed_last_block: false
    };
}
export const VoteInfo = {
    typeUrl: "/tendermint.abci.VoteInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator !== undefined) {
            Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.signed_last_block === true) {
            writer.uint32(16).bool(message.signed_last_block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = Validator.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signed_last_block = reader.bool();
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
            validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined,
            signed_last_block: isSet(object.signed_last_block) ? Boolean(object.signed_last_block) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
        message.signed_last_block !== undefined && (obj.signed_last_block = message.signed_last_block);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVoteInfo();
        message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
        message.signed_last_block = object.signed_last_block ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            validator: object.validator ? Validator.fromSDK(object.validator) : undefined,
            signed_last_block: object?.signed_last_block
        };
    },
    toSDK(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator ? Validator.toSDK(message.validator) : undefined);
        obj.signed_last_block = message.signed_last_block;
        return obj;
    },
    fromAmino(object) {
        return {
            validator: object?.validator ? Validator.fromAmino(object.validator) : undefined,
            signed_last_block: object.signed_last_block
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
        obj.signed_last_block = message.signed_last_block;
        return obj;
    },
    fromAminoMsg(object) {
        return VoteInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return VoteInfo.decode(message.value);
    },
    toProto(message) {
        return VoteInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.VoteInfo",
            value: VoteInfo.encode(message).finish()
        };
    }
};
function createBaseEvidence() {
    return {
        type: 0,
        validator: Validator.fromPartial({}),
        height: BigInt(0),
        time: new Date(),
        total_voting_power: BigInt(0)
    };
}
export const Evidence = {
    typeUrl: "/tendermint.abci.Evidence",
    encode(message, writer = BinaryWriter.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.validator !== undefined) {
            Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.total_voting_power !== BigInt(0)) {
            writer.uint32(40).int64(message.total_voting_power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.validator = Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.total_voting_power = reader.int64();
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
            type: isSet(object.type) ? evidenceTypeFromJSON(object.type) : -1,
            validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined,
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            total_voting_power: isSet(object.total_voting_power) ? BigInt(object.total_voting_power.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = evidenceTypeToJSON(message.type));
        message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEvidence();
        message.type = object.type ?? 0;
        message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? BigInt(object.total_voting_power.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            type: isSet(object.type) ? evidenceTypeFromJSON(object.type) : -1,
            validator: object.validator ? Validator.fromSDK(object.validator) : undefined,
            height: object?.height,
            time: object.time ? Timestamp.fromSDK(object.time) : undefined,
            total_voting_power: object?.total_voting_power
        };
    },
    toSDK(message) {
        const obj = {};
        message.type !== undefined && (obj.type = evidenceTypeToJSON(message.type));
        message.validator !== undefined && (obj.validator = message.validator ? Validator.toSDK(message.validator) : undefined);
        obj.height = message.height;
        message.time !== undefined && (obj.time = message.time ? Timestamp.toSDK(message.time) : undefined);
        obj.total_voting_power = message.total_voting_power;
        return obj;
    },
    fromAmino(object) {
        return {
            type: isSet(object.type) ? evidenceTypeFromJSON(object.type) : -1,
            validator: object?.validator ? Validator.fromAmino(object.validator) : undefined,
            height: BigInt(object.height),
            time: object?.time ? fromTimestamp(Timestamp.fromAmino(object.time)) : undefined,
            total_voting_power: BigInt(object.total_voting_power)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
        obj.total_voting_power = message.total_voting_power ? message.total_voting_power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Evidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Evidence.decode(message.value);
    },
    toProto(message) {
        return Evidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Evidence",
            value: Evidence.encode(message).finish()
        };
    }
};
function createBaseSnapshot() {
    return {
        height: BigInt(0),
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: new Uint8Array()
    };
}
export const Snapshot = {
    typeUrl: "/tendermint.abci.Snapshot",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(42).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = reader.bytes();
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
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            format: isSet(object.format) ? Number(object.format) : 0,
            chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
            metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshot();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.format = object.format ?? 0;
        message.chunks = object.chunks ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        message.metadata = object.metadata ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height,
            format: object?.format,
            chunks: object?.chunks,
            hash: object?.hash,
            metadata: object?.metadata
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAmino(object) {
        return {
            height: BigInt(object.height),
            format: object.format,
            chunks: object.chunks,
            hash: object.hash,
            metadata: object.metadata
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return Snapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Snapshot.decode(message.value);
    },
    toProto(message) {
        return Snapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Snapshot",
            value: Snapshot.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map