import { Header, HeaderAmino, HeaderSDKType } from "../types/types";
import { ProofOps, ProofOpsAmino, ProofOpsSDKType } from "../crypto/proof";
import { EvidenceParams, EvidenceParamsAmino, EvidenceParamsSDKType, ValidatorParams, ValidatorParamsAmino, ValidatorParamsSDKType, VersionParams, VersionParamsAmino, VersionParamsSDKType } from "../types/params";
import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "tendermint.abci";
export declare enum CheckTxType {
    NEW = 0,
    RECHECK = 1,
    UNRECOGNIZED = -1
}
export declare const CheckTxTypeSDKType: typeof CheckTxType;
export declare const CheckTxTypeAmino: typeof CheckTxType;
export declare function checkTxTypeFromJSON(object: any): CheckTxType;
export declare function checkTxTypeToJSON(object: CheckTxType): string;
export declare enum ResponseOfferSnapshot_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Snapshot accepted, apply chunks */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** REJECT - Reject this specific snapshot, try others */
    REJECT = 3,
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    REJECT_FORMAT = 4,
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    REJECT_SENDER = 5,
    UNRECOGNIZED = -1
}
export declare const ResponseOfferSnapshot_ResultSDKType: typeof ResponseOfferSnapshot_Result;
export declare const ResponseOfferSnapshot_ResultAmino: typeof ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string;
export declare enum ResponseApplySnapshotChunk_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Chunk successfully accepted */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** RETRY - Retry chunk (combine with refetch and reject) */
    RETRY = 3,
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    RETRY_SNAPSHOT = 4,
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    REJECT_SNAPSHOT = 5,
    UNRECOGNIZED = -1
}
export declare const ResponseApplySnapshotChunk_ResultSDKType: typeof ResponseApplySnapshotChunk_Result;
export declare const ResponseApplySnapshotChunk_ResultAmino: typeof ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string;
export declare enum EvidenceType {
    UNKNOWN = 0,
    DUPLICATE_VOTE = 1,
    LIGHT_CLIENT_ATTACK = 2,
    UNRECOGNIZED = -1
}
export declare const EvidenceTypeSDKType: typeof EvidenceType;
export declare const EvidenceTypeAmino: typeof EvidenceType;
export declare function evidenceTypeFromJSON(object: any): EvidenceType;
export declare function evidenceTypeToJSON(object: EvidenceType): string;
export interface Request {
    echo?: RequestEcho;
    flush?: RequestFlush;
    info?: RequestInfo;
    set_option?: RequestSetOption;
    init_chain?: RequestInitChain;
    query?: RequestQuery;
    begin_block?: RequestBeginBlock;
    check_tx?: RequestCheckTx;
    deliver_tx?: RequestDeliverTx;
    end_block?: RequestEndBlock;
    commit?: RequestCommit;
    list_snapshots?: RequestListSnapshots;
    offer_snapshot?: RequestOfferSnapshot;
    load_snapshot_chunk?: RequestLoadSnapshotChunk;
    apply_snapshot_chunk?: RequestApplySnapshotChunk;
}
export interface RequestProtoMsg {
    type_url: "/tendermint.abci.Request";
    value: Uint8Array;
}
export interface RequestAmino {
    echo?: RequestEchoAmino;
    flush?: RequestFlushAmino;
    info?: RequestInfoAmino;
    set_option?: RequestSetOptionAmino;
    init_chain?: RequestInitChainAmino;
    query?: RequestQueryAmino;
    begin_block?: RequestBeginBlockAmino;
    check_tx?: RequestCheckTxAmino;
    deliver_tx?: RequestDeliverTxAmino;
    end_block?: RequestEndBlockAmino;
    commit?: RequestCommitAmino;
    list_snapshots?: RequestListSnapshotsAmino;
    offer_snapshot?: RequestOfferSnapshotAmino;
    load_snapshot_chunk?: RequestLoadSnapshotChunkAmino;
    apply_snapshot_chunk?: RequestApplySnapshotChunkAmino;
}
export interface RequestAminoMsg {
    type: "/tendermint.abci.Request";
    value: RequestAmino;
}
export interface RequestSDKType {
    echo?: RequestEchoSDKType;
    flush?: RequestFlushSDKType;
    info?: RequestInfoSDKType;
    set_option?: RequestSetOptionSDKType;
    init_chain?: RequestInitChainSDKType;
    query?: RequestQuerySDKType;
    begin_block?: RequestBeginBlockSDKType;
    check_tx?: RequestCheckTxSDKType;
    deliver_tx?: RequestDeliverTxSDKType;
    end_block?: RequestEndBlockSDKType;
    commit?: RequestCommitSDKType;
    list_snapshots?: RequestListSnapshotsSDKType;
    offer_snapshot?: RequestOfferSnapshotSDKType;
    load_snapshot_chunk?: RequestLoadSnapshotChunkSDKType;
    apply_snapshot_chunk?: RequestApplySnapshotChunkSDKType;
}
export interface RequestEcho {
    message: string;
}
export interface RequestEchoProtoMsg {
    type_url: "/tendermint.abci.RequestEcho";
    value: Uint8Array;
}
export interface RequestEchoAmino {
    message: string;
}
export interface RequestEchoAminoMsg {
    type: "/tendermint.abci.RequestEcho";
    value: RequestEchoAmino;
}
export interface RequestEchoSDKType {
    message: string;
}
export interface RequestFlush {
}
export interface RequestFlushProtoMsg {
    type_url: "/tendermint.abci.RequestFlush";
    value: Uint8Array;
}
export interface RequestFlushAmino {
}
export interface RequestFlushAminoMsg {
    type: "/tendermint.abci.RequestFlush";
    value: RequestFlushAmino;
}
export interface RequestFlushSDKType {
}
export interface RequestInfo {
    version: string;
    block_version: bigint;
    p2p_version: bigint;
}
export interface RequestInfoProtoMsg {
    type_url: "/tendermint.abci.RequestInfo";
    value: Uint8Array;
}
export interface RequestInfoAmino {
    version: string;
    block_version: string;
    p2p_version: string;
}
export interface RequestInfoAminoMsg {
    type: "/tendermint.abci.RequestInfo";
    value: RequestInfoAmino;
}
export interface RequestInfoSDKType {
    version: string;
    block_version: bigint;
    p2p_version: bigint;
}
/** nondeterministic */
export interface RequestSetOption {
    key: string;
    value: string;
}
export interface RequestSetOptionProtoMsg {
    type_url: "/tendermint.abci.RequestSetOption";
    value: Uint8Array;
}
/** nondeterministic */
export interface RequestSetOptionAmino {
    key: string;
    value: string;
}
export interface RequestSetOptionAminoMsg {
    type: "/tendermint.abci.RequestSetOption";
    value: RequestSetOptionAmino;
}
/** nondeterministic */
export interface RequestSetOptionSDKType {
    key: string;
    value: string;
}
export interface RequestInitChain {
    time: Date;
    chain_id: string;
    consensus_params?: ConsensusParams;
    validators: ValidatorUpdate[];
    app_state_bytes: Uint8Array;
    initial_height: bigint;
}
export interface RequestInitChainProtoMsg {
    type_url: "/tendermint.abci.RequestInitChain";
    value: Uint8Array;
}
export interface RequestInitChainAmino {
    time?: string;
    chain_id: string;
    consensus_params?: ConsensusParamsAmino;
    validators: ValidatorUpdateAmino[];
    app_state_bytes: Uint8Array;
    initial_height: string;
}
export interface RequestInitChainAminoMsg {
    type: "/tendermint.abci.RequestInitChain";
    value: RequestInitChainAmino;
}
export interface RequestInitChainSDKType {
    time: Date;
    chain_id: string;
    consensus_params?: ConsensusParamsSDKType;
    validators: ValidatorUpdateSDKType[];
    app_state_bytes: Uint8Array;
    initial_height: bigint;
}
export interface RequestQuery {
    data: Uint8Array;
    path: string;
    height: bigint;
    prove: boolean;
}
export interface RequestQueryProtoMsg {
    type_url: "/tendermint.abci.RequestQuery";
    value: Uint8Array;
}
export interface RequestQueryAmino {
    data: Uint8Array;
    path: string;
    height: string;
    prove: boolean;
}
export interface RequestQueryAminoMsg {
    type: "/tendermint.abci.RequestQuery";
    value: RequestQueryAmino;
}
export interface RequestQuerySDKType {
    data: Uint8Array;
    path: string;
    height: bigint;
    prove: boolean;
}
export interface RequestBeginBlock {
    hash: Uint8Array;
    header: Header;
    last_commit_info: LastCommitInfo;
    byzantine_validators: Evidence[];
}
export interface RequestBeginBlockProtoMsg {
    type_url: "/tendermint.abci.RequestBeginBlock";
    value: Uint8Array;
}
export interface RequestBeginBlockAmino {
    hash: Uint8Array;
    header?: HeaderAmino;
    last_commit_info?: LastCommitInfoAmino;
    byzantine_validators: EvidenceAmino[];
}
export interface RequestBeginBlockAminoMsg {
    type: "/tendermint.abci.RequestBeginBlock";
    value: RequestBeginBlockAmino;
}
export interface RequestBeginBlockSDKType {
    hash: Uint8Array;
    header: HeaderSDKType;
    last_commit_info: LastCommitInfoSDKType;
    byzantine_validators: EvidenceSDKType[];
}
export interface RequestCheckTx {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestCheckTxProtoMsg {
    type_url: "/tendermint.abci.RequestCheckTx";
    value: Uint8Array;
}
export interface RequestCheckTxAmino {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestCheckTxAminoMsg {
    type: "/tendermint.abci.RequestCheckTx";
    value: RequestCheckTxAmino;
}
export interface RequestCheckTxSDKType {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestDeliverTx {
    tx: Uint8Array;
}
export interface RequestDeliverTxProtoMsg {
    type_url: "/tendermint.abci.RequestDeliverTx";
    value: Uint8Array;
}
export interface RequestDeliverTxAmino {
    tx: Uint8Array;
}
export interface RequestDeliverTxAminoMsg {
    type: "/tendermint.abci.RequestDeliverTx";
    value: RequestDeliverTxAmino;
}
export interface RequestDeliverTxSDKType {
    tx: Uint8Array;
}
export interface RequestEndBlock {
    height: bigint;
}
export interface RequestEndBlockProtoMsg {
    type_url: "/tendermint.abci.RequestEndBlock";
    value: Uint8Array;
}
export interface RequestEndBlockAmino {
    height: string;
}
export interface RequestEndBlockAminoMsg {
    type: "/tendermint.abci.RequestEndBlock";
    value: RequestEndBlockAmino;
}
export interface RequestEndBlockSDKType {
    height: bigint;
}
export interface RequestCommit {
}
export interface RequestCommitProtoMsg {
    type_url: "/tendermint.abci.RequestCommit";
    value: Uint8Array;
}
export interface RequestCommitAmino {
}
export interface RequestCommitAminoMsg {
    type: "/tendermint.abci.RequestCommit";
    value: RequestCommitAmino;
}
export interface RequestCommitSDKType {
}
/** lists available snapshots */
export interface RequestListSnapshots {
}
export interface RequestListSnapshotsProtoMsg {
    type_url: "/tendermint.abci.RequestListSnapshots";
    value: Uint8Array;
}
/** lists available snapshots */
export interface RequestListSnapshotsAmino {
}
export interface RequestListSnapshotsAminoMsg {
    type: "/tendermint.abci.RequestListSnapshots";
    value: RequestListSnapshotsAmino;
}
/** lists available snapshots */
export interface RequestListSnapshotsSDKType {
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
    /** snapshot offered by peers */
    snapshot?: Snapshot;
    /** light client-verified app hash for snapshot height */
    app_hash: Uint8Array;
}
export interface RequestOfferSnapshotProtoMsg {
    type_url: "/tendermint.abci.RequestOfferSnapshot";
    value: Uint8Array;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshotAmino {
    /** snapshot offered by peers */
    snapshot?: SnapshotAmino;
    /** light client-verified app hash for snapshot height */
    app_hash: Uint8Array;
}
export interface RequestOfferSnapshotAminoMsg {
    type: "/tendermint.abci.RequestOfferSnapshot";
    value: RequestOfferSnapshotAmino;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshotSDKType {
    snapshot?: SnapshotSDKType;
    app_hash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
    height: bigint;
    format: number;
    chunk: number;
}
export interface RequestLoadSnapshotChunkProtoMsg {
    type_url: "/tendermint.abci.RequestLoadSnapshotChunk";
    value: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkAmino {
    height: string;
    format: number;
    chunk: number;
}
export interface RequestLoadSnapshotChunkAminoMsg {
    type: "/tendermint.abci.RequestLoadSnapshotChunk";
    value: RequestLoadSnapshotChunkAmino;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkSDKType {
    height: bigint;
    format: number;
    chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
export interface RequestApplySnapshotChunkProtoMsg {
    type_url: "/tendermint.abci.RequestApplySnapshotChunk";
    value: Uint8Array;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunkAmino {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
export interface RequestApplySnapshotChunkAminoMsg {
    type: "/tendermint.abci.RequestApplySnapshotChunk";
    value: RequestApplySnapshotChunkAmino;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunkSDKType {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
export interface Response {
    exception?: ResponseException;
    echo?: ResponseEcho;
    flush?: ResponseFlush;
    info?: ResponseInfo;
    set_option?: ResponseSetOption;
    init_chain?: ResponseInitChain;
    query?: ResponseQuery;
    begin_block?: ResponseBeginBlock;
    check_tx?: ResponseCheckTx;
    deliver_tx?: ResponseDeliverTx;
    end_block?: ResponseEndBlock;
    commit?: ResponseCommit;
    list_snapshots?: ResponseListSnapshots;
    offer_snapshot?: ResponseOfferSnapshot;
    load_snapshot_chunk?: ResponseLoadSnapshotChunk;
    apply_snapshot_chunk?: ResponseApplySnapshotChunk;
}
export interface ResponseProtoMsg {
    type_url: "/tendermint.abci.Response";
    value: Uint8Array;
}
export interface ResponseAmino {
    exception?: ResponseExceptionAmino;
    echo?: ResponseEchoAmino;
    flush?: ResponseFlushAmino;
    info?: ResponseInfoAmino;
    set_option?: ResponseSetOptionAmino;
    init_chain?: ResponseInitChainAmino;
    query?: ResponseQueryAmino;
    begin_block?: ResponseBeginBlockAmino;
    check_tx?: ResponseCheckTxAmino;
    deliver_tx?: ResponseDeliverTxAmino;
    end_block?: ResponseEndBlockAmino;
    commit?: ResponseCommitAmino;
    list_snapshots?: ResponseListSnapshotsAmino;
    offer_snapshot?: ResponseOfferSnapshotAmino;
    load_snapshot_chunk?: ResponseLoadSnapshotChunkAmino;
    apply_snapshot_chunk?: ResponseApplySnapshotChunkAmino;
}
export interface ResponseAminoMsg {
    type: "/tendermint.abci.Response";
    value: ResponseAmino;
}
export interface ResponseSDKType {
    exception?: ResponseExceptionSDKType;
    echo?: ResponseEchoSDKType;
    flush?: ResponseFlushSDKType;
    info?: ResponseInfoSDKType;
    set_option?: ResponseSetOptionSDKType;
    init_chain?: ResponseInitChainSDKType;
    query?: ResponseQuerySDKType;
    begin_block?: ResponseBeginBlockSDKType;
    check_tx?: ResponseCheckTxSDKType;
    deliver_tx?: ResponseDeliverTxSDKType;
    end_block?: ResponseEndBlockSDKType;
    commit?: ResponseCommitSDKType;
    list_snapshots?: ResponseListSnapshotsSDKType;
    offer_snapshot?: ResponseOfferSnapshotSDKType;
    load_snapshot_chunk?: ResponseLoadSnapshotChunkSDKType;
    apply_snapshot_chunk?: ResponseApplySnapshotChunkSDKType;
}
/** nondeterministic */
export interface ResponseException {
    error: string;
}
export interface ResponseExceptionProtoMsg {
    type_url: "/tendermint.abci.ResponseException";
    value: Uint8Array;
}
/** nondeterministic */
export interface ResponseExceptionAmino {
    error: string;
}
export interface ResponseExceptionAminoMsg {
    type: "/tendermint.abci.ResponseException";
    value: ResponseExceptionAmino;
}
/** nondeterministic */
export interface ResponseExceptionSDKType {
    error: string;
}
export interface ResponseEcho {
    message: string;
}
export interface ResponseEchoProtoMsg {
    type_url: "/tendermint.abci.ResponseEcho";
    value: Uint8Array;
}
export interface ResponseEchoAmino {
    message: string;
}
export interface ResponseEchoAminoMsg {
    type: "/tendermint.abci.ResponseEcho";
    value: ResponseEchoAmino;
}
export interface ResponseEchoSDKType {
    message: string;
}
export interface ResponseFlush {
}
export interface ResponseFlushProtoMsg {
    type_url: "/tendermint.abci.ResponseFlush";
    value: Uint8Array;
}
export interface ResponseFlushAmino {
}
export interface ResponseFlushAminoMsg {
    type: "/tendermint.abci.ResponseFlush";
    value: ResponseFlushAmino;
}
export interface ResponseFlushSDKType {
}
export interface ResponseInfo {
    data: string;
    version: string;
    app_version: bigint;
    last_block_height: bigint;
    last_block_app_hash: Uint8Array;
}
export interface ResponseInfoProtoMsg {
    type_url: "/tendermint.abci.ResponseInfo";
    value: Uint8Array;
}
export interface ResponseInfoAmino {
    data: string;
    version: string;
    app_version: string;
    last_block_height: string;
    last_block_app_hash: Uint8Array;
}
export interface ResponseInfoAminoMsg {
    type: "/tendermint.abci.ResponseInfo";
    value: ResponseInfoAmino;
}
export interface ResponseInfoSDKType {
    data: string;
    version: string;
    app_version: bigint;
    last_block_height: bigint;
    last_block_app_hash: Uint8Array;
}
/** nondeterministic */
export interface ResponseSetOption {
    code: number;
    /** bytes data = 2; */
    log: string;
    info: string;
}
export interface ResponseSetOptionProtoMsg {
    type_url: "/tendermint.abci.ResponseSetOption";
    value: Uint8Array;
}
/** nondeterministic */
export interface ResponseSetOptionAmino {
    code: number;
    /** bytes data = 2; */
    log: string;
    info: string;
}
export interface ResponseSetOptionAminoMsg {
    type: "/tendermint.abci.ResponseSetOption";
    value: ResponseSetOptionAmino;
}
/** nondeterministic */
export interface ResponseSetOptionSDKType {
    code: number;
    log: string;
    info: string;
}
export interface ResponseInitChain {
    consensus_params?: ConsensusParams;
    validators: ValidatorUpdate[];
    app_hash: Uint8Array;
}
export interface ResponseInitChainProtoMsg {
    type_url: "/tendermint.abci.ResponseInitChain";
    value: Uint8Array;
}
export interface ResponseInitChainAmino {
    consensus_params?: ConsensusParamsAmino;
    validators: ValidatorUpdateAmino[];
    app_hash: Uint8Array;
}
export interface ResponseInitChainAminoMsg {
    type: "/tendermint.abci.ResponseInitChain";
    value: ResponseInitChainAmino;
}
export interface ResponseInitChainSDKType {
    consensus_params?: ConsensusParamsSDKType;
    validators: ValidatorUpdateSDKType[];
    app_hash: Uint8Array;
}
export interface ResponseQuery {
    code: number;
    /** bytes data = 2; // use "value" instead. */
    log: string;
    /** nondeterministic */
    info: string;
    index: bigint;
    key: Uint8Array;
    value: Uint8Array;
    proof_ops?: ProofOps;
    height: bigint;
    codespace: string;
}
export interface ResponseQueryProtoMsg {
    type_url: "/tendermint.abci.ResponseQuery";
    value: Uint8Array;
}
export interface ResponseQueryAmino {
    code: number;
    /** bytes data = 2; // use "value" instead. */
    log: string;
    /** nondeterministic */
    info: string;
    index: string;
    key: Uint8Array;
    value: Uint8Array;
    proof_ops?: ProofOpsAmino;
    height: string;
    codespace: string;
}
export interface ResponseQueryAminoMsg {
    type: "/tendermint.abci.ResponseQuery";
    value: ResponseQueryAmino;
}
export interface ResponseQuerySDKType {
    code: number;
    log: string;
    info: string;
    index: bigint;
    key: Uint8Array;
    value: Uint8Array;
    proof_ops?: ProofOpsSDKType;
    height: bigint;
    codespace: string;
}
export interface ResponseBeginBlock {
    events: Event[];
}
export interface ResponseBeginBlockProtoMsg {
    type_url: "/tendermint.abci.ResponseBeginBlock";
    value: Uint8Array;
}
export interface ResponseBeginBlockAmino {
    events: EventAmino[];
}
export interface ResponseBeginBlockAminoMsg {
    type: "/tendermint.abci.ResponseBeginBlock";
    value: ResponseBeginBlockAmino;
}
export interface ResponseBeginBlockSDKType {
    events: EventSDKType[];
}
export interface ResponseCheckTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gas_wanted: bigint;
    gas_used: bigint;
    events: Event[];
    codespace: string;
}
export interface ResponseCheckTxProtoMsg {
    type_url: "/tendermint.abci.ResponseCheckTx";
    value: Uint8Array;
}
export interface ResponseCheckTxAmino {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gas_wanted: string;
    gas_used: string;
    events: EventAmino[];
    codespace: string;
}
export interface ResponseCheckTxAminoMsg {
    type: "/tendermint.abci.ResponseCheckTx";
    value: ResponseCheckTxAmino;
}
export interface ResponseCheckTxSDKType {
    code: number;
    data: Uint8Array;
    log: string;
    info: string;
    gas_wanted: bigint;
    gas_used: bigint;
    events: EventSDKType[];
    codespace: string;
}
export interface ResponseDeliverTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gas_wanted: bigint;
    gas_used: bigint;
    events: Event[];
    codespace: string;
}
export interface ResponseDeliverTxProtoMsg {
    type_url: "/tendermint.abci.ResponseDeliverTx";
    value: Uint8Array;
}
export interface ResponseDeliverTxAmino {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gas_wanted: string;
    gas_used: string;
    events: EventAmino[];
    codespace: string;
}
export interface ResponseDeliverTxAminoMsg {
    type: "/tendermint.abci.ResponseDeliverTx";
    value: ResponseDeliverTxAmino;
}
export interface ResponseDeliverTxSDKType {
    code: number;
    data: Uint8Array;
    log: string;
    info: string;
    gas_wanted: bigint;
    gas_used: bigint;
    events: EventSDKType[];
    codespace: string;
}
export interface ResponseEndBlock {
    validator_updates: ValidatorUpdate[];
    consensus_param_updates?: ConsensusParams;
    events: Event[];
}
export interface ResponseEndBlockProtoMsg {
    type_url: "/tendermint.abci.ResponseEndBlock";
    value: Uint8Array;
}
export interface ResponseEndBlockAmino {
    validator_updates: ValidatorUpdateAmino[];
    consensus_param_updates?: ConsensusParamsAmino;
    events: EventAmino[];
}
export interface ResponseEndBlockAminoMsg {
    type: "/tendermint.abci.ResponseEndBlock";
    value: ResponseEndBlockAmino;
}
export interface ResponseEndBlockSDKType {
    validator_updates: ValidatorUpdateSDKType[];
    consensus_param_updates?: ConsensusParamsSDKType;
    events: EventSDKType[];
}
export interface ResponseCommit {
    /** reserve 1 */
    data: Uint8Array;
    retain_height: bigint;
}
export interface ResponseCommitProtoMsg {
    type_url: "/tendermint.abci.ResponseCommit";
    value: Uint8Array;
}
export interface ResponseCommitAmino {
    /** reserve 1 */
    data: Uint8Array;
    retain_height: string;
}
export interface ResponseCommitAminoMsg {
    type: "/tendermint.abci.ResponseCommit";
    value: ResponseCommitAmino;
}
export interface ResponseCommitSDKType {
    data: Uint8Array;
    retain_height: bigint;
}
export interface ResponseListSnapshots {
    snapshots: Snapshot[];
}
export interface ResponseListSnapshotsProtoMsg {
    type_url: "/tendermint.abci.ResponseListSnapshots";
    value: Uint8Array;
}
export interface ResponseListSnapshotsAmino {
    snapshots: SnapshotAmino[];
}
export interface ResponseListSnapshotsAminoMsg {
    type: "/tendermint.abci.ResponseListSnapshots";
    value: ResponseListSnapshotsAmino;
}
export interface ResponseListSnapshotsSDKType {
    snapshots: SnapshotSDKType[];
}
export interface ResponseOfferSnapshot {
    result: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotProtoMsg {
    type_url: "/tendermint.abci.ResponseOfferSnapshot";
    value: Uint8Array;
}
export interface ResponseOfferSnapshotAmino {
    result: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotAminoMsg {
    type: "/tendermint.abci.ResponseOfferSnapshot";
    value: ResponseOfferSnapshotAmino;
}
export interface ResponseOfferSnapshotSDKType {
    result: ResponseOfferSnapshot_Result;
}
export interface ResponseLoadSnapshotChunk {
    chunk: Uint8Array;
}
export interface ResponseLoadSnapshotChunkProtoMsg {
    type_url: "/tendermint.abci.ResponseLoadSnapshotChunk";
    value: Uint8Array;
}
export interface ResponseLoadSnapshotChunkAmino {
    chunk: Uint8Array;
}
export interface ResponseLoadSnapshotChunkAminoMsg {
    type: "/tendermint.abci.ResponseLoadSnapshotChunk";
    value: ResponseLoadSnapshotChunkAmino;
}
export interface ResponseLoadSnapshotChunkSDKType {
    chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
    result: ResponseApplySnapshotChunk_Result;
    /** Chunks to refetch and reapply */
    refetch_chunks: number[];
    /** Chunk senders to reject and ban */
    reject_senders: string[];
}
export interface ResponseApplySnapshotChunkProtoMsg {
    type_url: "/tendermint.abci.ResponseApplySnapshotChunk";
    value: Uint8Array;
}
export interface ResponseApplySnapshotChunkAmino {
    result: ResponseApplySnapshotChunk_Result;
    /** Chunks to refetch and reapply */
    refetch_chunks: number[];
    /** Chunk senders to reject and ban */
    reject_senders: string[];
}
export interface ResponseApplySnapshotChunkAminoMsg {
    type: "/tendermint.abci.ResponseApplySnapshotChunk";
    value: ResponseApplySnapshotChunkAmino;
}
export interface ResponseApplySnapshotChunkSDKType {
    result: ResponseApplySnapshotChunk_Result;
    refetch_chunks: number[];
    reject_senders: string[];
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParams {
    block?: BlockParams;
    evidence?: EvidenceParams;
    validator?: ValidatorParams;
    version?: VersionParams;
}
export interface ConsensusParamsProtoMsg {
    type_url: "/tendermint.abci.ConsensusParams";
    value: Uint8Array;
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParamsAmino {
    block?: BlockParamsAmino;
    evidence?: EvidenceParamsAmino;
    validator?: ValidatorParamsAmino;
    version?: VersionParamsAmino;
}
export interface ConsensusParamsAminoMsg {
    type: "/tendermint.abci.ConsensusParams";
    value: ConsensusParamsAmino;
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParamsSDKType {
    block?: BlockParamsSDKType;
    evidence?: EvidenceParamsSDKType;
    validator?: ValidatorParamsSDKType;
    version?: VersionParamsSDKType;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /** Note: must be greater than 0 */
    max_bytes: bigint;
    /** Note: must be greater or equal to -1 */
    max_gas: bigint;
}
export interface BlockParamsProtoMsg {
    type_url: "/tendermint.abci.BlockParams";
    value: Uint8Array;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsAmino {
    /** Note: must be greater than 0 */
    max_bytes: string;
    /** Note: must be greater or equal to -1 */
    max_gas: string;
}
export interface BlockParamsAminoMsg {
    type: "/tendermint.abci.BlockParams";
    value: BlockParamsAmino;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsSDKType {
    max_bytes: bigint;
    max_gas: bigint;
}
export interface LastCommitInfo {
    round: number;
    votes: VoteInfo[];
}
export interface LastCommitInfoProtoMsg {
    type_url: "/tendermint.abci.LastCommitInfo";
    value: Uint8Array;
}
export interface LastCommitInfoAmino {
    round: number;
    votes: VoteInfoAmino[];
}
export interface LastCommitInfoAminoMsg {
    type: "/tendermint.abci.LastCommitInfo";
    value: LastCommitInfoAmino;
}
export interface LastCommitInfoSDKType {
    round: number;
    votes: VoteInfoSDKType[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
    type: string;
    attributes: EventAttribute[];
}
export interface EventProtoMsg {
    type_url: "/tendermint.abci.Event";
    value: Uint8Array;
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface EventAmino {
    type: string;
    attributes: EventAttributeAmino[];
}
export interface EventAminoMsg {
    type: "/tendermint.abci.Event";
    value: EventAmino;
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface EventSDKType {
    type: string;
    attributes: EventAttributeSDKType[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
    key: Uint8Array;
    value: Uint8Array;
    /** nondeterministic */
    index: boolean;
}
export interface EventAttributeProtoMsg {
    type_url: "/tendermint.abci.EventAttribute";
    value: Uint8Array;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeAmino {
    key: Uint8Array;
    value: Uint8Array;
    /** nondeterministic */
    index: boolean;
}
export interface EventAttributeAminoMsg {
    type: "/tendermint.abci.EventAttribute";
    value: EventAttributeAmino;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeSDKType {
    key: Uint8Array;
    value: Uint8Array;
    index: boolean;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResult {
    height: bigint;
    index: number;
    tx: Uint8Array;
    result: ResponseDeliverTx;
}
export interface TxResultProtoMsg {
    type_url: "/tendermint.abci.TxResult";
    value: Uint8Array;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResultAmino {
    height: string;
    index: number;
    tx: Uint8Array;
    result?: ResponseDeliverTxAmino;
}
export interface TxResultAminoMsg {
    type: "/tendermint.abci.TxResult";
    value: TxResultAmino;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResultSDKType {
    height: bigint;
    index: number;
    tx: Uint8Array;
    result: ResponseDeliverTxSDKType;
}
/** Validator */
export interface Validator {
    /**
     * The first 20 bytes of SHA256(public key)
     * PubKey pub_key = 2 [(gogoproto.nullable)=false];
     */
    address: Uint8Array;
    /** The voting power */
    power: bigint;
}
export interface ValidatorProtoMsg {
    type_url: "/tendermint.abci.Validator";
    value: Uint8Array;
}
/** Validator */
export interface ValidatorAmino {
    /**
     * The first 20 bytes of SHA256(public key)
     * PubKey pub_key = 2 [(gogoproto.nullable)=false];
     */
    address: Uint8Array;
    /** The voting power */
    power: string;
}
export interface ValidatorAminoMsg {
    type: "/tendermint.abci.Validator";
    value: ValidatorAmino;
}
/** Validator */
export interface ValidatorSDKType {
    address: Uint8Array;
    power: bigint;
}
/** ValidatorUpdate */
export interface ValidatorUpdate {
    pub_key: PublicKey;
    power: bigint;
}
export interface ValidatorUpdateProtoMsg {
    type_url: "/tendermint.abci.ValidatorUpdate";
    value: Uint8Array;
}
/** ValidatorUpdate */
export interface ValidatorUpdateAmino {
    pub_key?: PublicKeyAmino;
    power: string;
}
export interface ValidatorUpdateAminoMsg {
    type: "/tendermint.abci.ValidatorUpdate";
    value: ValidatorUpdateAmino;
}
/** ValidatorUpdate */
export interface ValidatorUpdateSDKType {
    pub_key: PublicKeySDKType;
    power: bigint;
}
/** VoteInfo */
export interface VoteInfo {
    validator: Validator;
    signed_last_block: boolean;
}
export interface VoteInfoProtoMsg {
    type_url: "/tendermint.abci.VoteInfo";
    value: Uint8Array;
}
/** VoteInfo */
export interface VoteInfoAmino {
    validator?: ValidatorAmino;
    signed_last_block: boolean;
}
export interface VoteInfoAminoMsg {
    type: "/tendermint.abci.VoteInfo";
    value: VoteInfoAmino;
}
/** VoteInfo */
export interface VoteInfoSDKType {
    validator: ValidatorSDKType;
    signed_last_block: boolean;
}
export interface Evidence {
    type: EvidenceType;
    /** The offending validator */
    validator: Validator;
    /** The height when the offense occurred */
    height: bigint;
    /** The corresponding time where the offense occurred */
    time: Date;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     */
    total_voting_power: bigint;
}
export interface EvidenceProtoMsg {
    type_url: "/tendermint.abci.Evidence";
    value: Uint8Array;
}
export interface EvidenceAmino {
    type: EvidenceType;
    /** The offending validator */
    validator?: ValidatorAmino;
    /** The height when the offense occurred */
    height: string;
    /** The corresponding time where the offense occurred */
    time?: string;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     */
    total_voting_power: string;
}
export interface EvidenceAminoMsg {
    type: "/tendermint.abci.Evidence";
    value: EvidenceAmino;
}
export interface EvidenceSDKType {
    type: EvidenceType;
    validator: ValidatorSDKType;
    height: bigint;
    time: Date;
    total_voting_power: bigint;
}
export interface Snapshot {
    /** The height at which the snapshot was taken */
    height: bigint;
    /** The application-specific snapshot format */
    format: number;
    /** Number of chunks in the snapshot */
    chunks: number;
    /** Arbitrary snapshot hash, equal only if identical */
    hash: Uint8Array;
    /** Arbitrary application metadata */
    metadata: Uint8Array;
}
export interface SnapshotProtoMsg {
    type_url: "/tendermint.abci.Snapshot";
    value: Uint8Array;
}
export interface SnapshotAmino {
    /** The height at which the snapshot was taken */
    height: string;
    /** The application-specific snapshot format */
    format: number;
    /** Number of chunks in the snapshot */
    chunks: number;
    /** Arbitrary snapshot hash, equal only if identical */
    hash: Uint8Array;
    /** Arbitrary application metadata */
    metadata: Uint8Array;
}
export interface SnapshotAminoMsg {
    type: "/tendermint.abci.Snapshot";
    value: SnapshotAmino;
}
export interface SnapshotSDKType {
    height: bigint;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Uint8Array;
}
export declare const Request: {
    typeUrl: string;
    encode(message: Request, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    fromPartial(object: Partial<Request>): Request;
    fromSDK(object: RequestSDKType): Request;
    toSDK(message: Request): RequestSDKType;
    fromAmino(object: RequestAmino): Request;
    toAmino(message: Request): RequestAmino;
    fromAminoMsg(object: RequestAminoMsg): Request;
    fromProtoMsg(message: RequestProtoMsg): Request;
    toProto(message: Request): Uint8Array;
    toProtoMsg(message: Request): RequestProtoMsg;
};
export declare const RequestEcho: {
    typeUrl: string;
    encode(message: RequestEcho, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestEcho;
    fromJSON(object: any): RequestEcho;
    toJSON(message: RequestEcho): unknown;
    fromPartial(object: Partial<RequestEcho>): RequestEcho;
    fromSDK(object: RequestEchoSDKType): RequestEcho;
    toSDK(message: RequestEcho): RequestEchoSDKType;
    fromAmino(object: RequestEchoAmino): RequestEcho;
    toAmino(message: RequestEcho): RequestEchoAmino;
    fromAminoMsg(object: RequestEchoAminoMsg): RequestEcho;
    fromProtoMsg(message: RequestEchoProtoMsg): RequestEcho;
    toProto(message: RequestEcho): Uint8Array;
    toProtoMsg(message: RequestEcho): RequestEchoProtoMsg;
};
export declare const RequestFlush: {
    typeUrl: string;
    encode(_: RequestFlush, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestFlush;
    fromJSON(_: any): RequestFlush;
    toJSON(_: RequestFlush): unknown;
    fromPartial(_: Partial<RequestFlush>): RequestFlush;
    fromSDK(_: RequestFlushSDKType): RequestFlush;
    toSDK(_: RequestFlush): RequestFlushSDKType;
    fromAmino(_: RequestFlushAmino): RequestFlush;
    toAmino(_: RequestFlush): RequestFlushAmino;
    fromAminoMsg(object: RequestFlushAminoMsg): RequestFlush;
    fromProtoMsg(message: RequestFlushProtoMsg): RequestFlush;
    toProto(message: RequestFlush): Uint8Array;
    toProtoMsg(message: RequestFlush): RequestFlushProtoMsg;
};
export declare const RequestInfo: {
    typeUrl: string;
    encode(message: RequestInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestInfo;
    fromJSON(object: any): RequestInfo;
    toJSON(message: RequestInfo): unknown;
    fromPartial(object: Partial<RequestInfo>): RequestInfo;
    fromSDK(object: RequestInfoSDKType): RequestInfo;
    toSDK(message: RequestInfo): RequestInfoSDKType;
    fromAmino(object: RequestInfoAmino): RequestInfo;
    toAmino(message: RequestInfo): RequestInfoAmino;
    fromAminoMsg(object: RequestInfoAminoMsg): RequestInfo;
    fromProtoMsg(message: RequestInfoProtoMsg): RequestInfo;
    toProto(message: RequestInfo): Uint8Array;
    toProtoMsg(message: RequestInfo): RequestInfoProtoMsg;
};
export declare const RequestSetOption: {
    typeUrl: string;
    encode(message: RequestSetOption, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestSetOption;
    fromJSON(object: any): RequestSetOption;
    toJSON(message: RequestSetOption): unknown;
    fromPartial(object: Partial<RequestSetOption>): RequestSetOption;
    fromSDK(object: RequestSetOptionSDKType): RequestSetOption;
    toSDK(message: RequestSetOption): RequestSetOptionSDKType;
    fromAmino(object: RequestSetOptionAmino): RequestSetOption;
    toAmino(message: RequestSetOption): RequestSetOptionAmino;
    fromAminoMsg(object: RequestSetOptionAminoMsg): RequestSetOption;
    fromProtoMsg(message: RequestSetOptionProtoMsg): RequestSetOption;
    toProto(message: RequestSetOption): Uint8Array;
    toProtoMsg(message: RequestSetOption): RequestSetOptionProtoMsg;
};
export declare const RequestInitChain: {
    typeUrl: string;
    encode(message: RequestInitChain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestInitChain;
    fromJSON(object: any): RequestInitChain;
    toJSON(message: RequestInitChain): unknown;
    fromPartial(object: Partial<RequestInitChain>): RequestInitChain;
    fromSDK(object: RequestInitChainSDKType): RequestInitChain;
    toSDK(message: RequestInitChain): RequestInitChainSDKType;
    fromAmino(object: RequestInitChainAmino): RequestInitChain;
    toAmino(message: RequestInitChain): RequestInitChainAmino;
    fromAminoMsg(object: RequestInitChainAminoMsg): RequestInitChain;
    fromProtoMsg(message: RequestInitChainProtoMsg): RequestInitChain;
    toProto(message: RequestInitChain): Uint8Array;
    toProtoMsg(message: RequestInitChain): RequestInitChainProtoMsg;
};
export declare const RequestQuery: {
    typeUrl: string;
    encode(message: RequestQuery, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestQuery;
    fromJSON(object: any): RequestQuery;
    toJSON(message: RequestQuery): unknown;
    fromPartial(object: Partial<RequestQuery>): RequestQuery;
    fromSDK(object: RequestQuerySDKType): RequestQuery;
    toSDK(message: RequestQuery): RequestQuerySDKType;
    fromAmino(object: RequestQueryAmino): RequestQuery;
    toAmino(message: RequestQuery): RequestQueryAmino;
    fromAminoMsg(object: RequestQueryAminoMsg): RequestQuery;
    fromProtoMsg(message: RequestQueryProtoMsg): RequestQuery;
    toProto(message: RequestQuery): Uint8Array;
    toProtoMsg(message: RequestQuery): RequestQueryProtoMsg;
};
export declare const RequestBeginBlock: {
    typeUrl: string;
    encode(message: RequestBeginBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestBeginBlock;
    fromJSON(object: any): RequestBeginBlock;
    toJSON(message: RequestBeginBlock): unknown;
    fromPartial(object: Partial<RequestBeginBlock>): RequestBeginBlock;
    fromSDK(object: RequestBeginBlockSDKType): RequestBeginBlock;
    toSDK(message: RequestBeginBlock): RequestBeginBlockSDKType;
    fromAmino(object: RequestBeginBlockAmino): RequestBeginBlock;
    toAmino(message: RequestBeginBlock): RequestBeginBlockAmino;
    fromAminoMsg(object: RequestBeginBlockAminoMsg): RequestBeginBlock;
    fromProtoMsg(message: RequestBeginBlockProtoMsg): RequestBeginBlock;
    toProto(message: RequestBeginBlock): Uint8Array;
    toProtoMsg(message: RequestBeginBlock): RequestBeginBlockProtoMsg;
};
export declare const RequestCheckTx: {
    typeUrl: string;
    encode(message: RequestCheckTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestCheckTx;
    fromJSON(object: any): RequestCheckTx;
    toJSON(message: RequestCheckTx): unknown;
    fromPartial(object: Partial<RequestCheckTx>): RequestCheckTx;
    fromSDK(object: RequestCheckTxSDKType): RequestCheckTx;
    toSDK(message: RequestCheckTx): RequestCheckTxSDKType;
    fromAmino(object: RequestCheckTxAmino): RequestCheckTx;
    toAmino(message: RequestCheckTx): RequestCheckTxAmino;
    fromAminoMsg(object: RequestCheckTxAminoMsg): RequestCheckTx;
    fromProtoMsg(message: RequestCheckTxProtoMsg): RequestCheckTx;
    toProto(message: RequestCheckTx): Uint8Array;
    toProtoMsg(message: RequestCheckTx): RequestCheckTxProtoMsg;
};
export declare const RequestDeliverTx: {
    typeUrl: string;
    encode(message: RequestDeliverTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestDeliverTx;
    fromJSON(object: any): RequestDeliverTx;
    toJSON(message: RequestDeliverTx): unknown;
    fromPartial(object: Partial<RequestDeliverTx>): RequestDeliverTx;
    fromSDK(object: RequestDeliverTxSDKType): RequestDeliverTx;
    toSDK(message: RequestDeliverTx): RequestDeliverTxSDKType;
    fromAmino(object: RequestDeliverTxAmino): RequestDeliverTx;
    toAmino(message: RequestDeliverTx): RequestDeliverTxAmino;
    fromAminoMsg(object: RequestDeliverTxAminoMsg): RequestDeliverTx;
    fromProtoMsg(message: RequestDeliverTxProtoMsg): RequestDeliverTx;
    toProto(message: RequestDeliverTx): Uint8Array;
    toProtoMsg(message: RequestDeliverTx): RequestDeliverTxProtoMsg;
};
export declare const RequestEndBlock: {
    typeUrl: string;
    encode(message: RequestEndBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestEndBlock;
    fromJSON(object: any): RequestEndBlock;
    toJSON(message: RequestEndBlock): unknown;
    fromPartial(object: Partial<RequestEndBlock>): RequestEndBlock;
    fromSDK(object: RequestEndBlockSDKType): RequestEndBlock;
    toSDK(message: RequestEndBlock): RequestEndBlockSDKType;
    fromAmino(object: RequestEndBlockAmino): RequestEndBlock;
    toAmino(message: RequestEndBlock): RequestEndBlockAmino;
    fromAminoMsg(object: RequestEndBlockAminoMsg): RequestEndBlock;
    fromProtoMsg(message: RequestEndBlockProtoMsg): RequestEndBlock;
    toProto(message: RequestEndBlock): Uint8Array;
    toProtoMsg(message: RequestEndBlock): RequestEndBlockProtoMsg;
};
export declare const RequestCommit: {
    typeUrl: string;
    encode(_: RequestCommit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestCommit;
    fromJSON(_: any): RequestCommit;
    toJSON(_: RequestCommit): unknown;
    fromPartial(_: Partial<RequestCommit>): RequestCommit;
    fromSDK(_: RequestCommitSDKType): RequestCommit;
    toSDK(_: RequestCommit): RequestCommitSDKType;
    fromAmino(_: RequestCommitAmino): RequestCommit;
    toAmino(_: RequestCommit): RequestCommitAmino;
    fromAminoMsg(object: RequestCommitAminoMsg): RequestCommit;
    fromProtoMsg(message: RequestCommitProtoMsg): RequestCommit;
    toProto(message: RequestCommit): Uint8Array;
    toProtoMsg(message: RequestCommit): RequestCommitProtoMsg;
};
export declare const RequestListSnapshots: {
    typeUrl: string;
    encode(_: RequestListSnapshots, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestListSnapshots;
    fromJSON(_: any): RequestListSnapshots;
    toJSON(_: RequestListSnapshots): unknown;
    fromPartial(_: Partial<RequestListSnapshots>): RequestListSnapshots;
    fromSDK(_: RequestListSnapshotsSDKType): RequestListSnapshots;
    toSDK(_: RequestListSnapshots): RequestListSnapshotsSDKType;
    fromAmino(_: RequestListSnapshotsAmino): RequestListSnapshots;
    toAmino(_: RequestListSnapshots): RequestListSnapshotsAmino;
    fromAminoMsg(object: RequestListSnapshotsAminoMsg): RequestListSnapshots;
    fromProtoMsg(message: RequestListSnapshotsProtoMsg): RequestListSnapshots;
    toProto(message: RequestListSnapshots): Uint8Array;
    toProtoMsg(message: RequestListSnapshots): RequestListSnapshotsProtoMsg;
};
export declare const RequestOfferSnapshot: {
    typeUrl: string;
    encode(message: RequestOfferSnapshot, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestOfferSnapshot;
    fromJSON(object: any): RequestOfferSnapshot;
    toJSON(message: RequestOfferSnapshot): unknown;
    fromPartial(object: Partial<RequestOfferSnapshot>): RequestOfferSnapshot;
    fromSDK(object: RequestOfferSnapshotSDKType): RequestOfferSnapshot;
    toSDK(message: RequestOfferSnapshot): RequestOfferSnapshotSDKType;
    fromAmino(object: RequestOfferSnapshotAmino): RequestOfferSnapshot;
    toAmino(message: RequestOfferSnapshot): RequestOfferSnapshotAmino;
    fromAminoMsg(object: RequestOfferSnapshotAminoMsg): RequestOfferSnapshot;
    fromProtoMsg(message: RequestOfferSnapshotProtoMsg): RequestOfferSnapshot;
    toProto(message: RequestOfferSnapshot): Uint8Array;
    toProtoMsg(message: RequestOfferSnapshot): RequestOfferSnapshotProtoMsg;
};
export declare const RequestLoadSnapshotChunk: {
    typeUrl: string;
    encode(message: RequestLoadSnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestLoadSnapshotChunk;
    fromJSON(object: any): RequestLoadSnapshotChunk;
    toJSON(message: RequestLoadSnapshotChunk): unknown;
    fromPartial(object: Partial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk;
    fromSDK(object: RequestLoadSnapshotChunkSDKType): RequestLoadSnapshotChunk;
    toSDK(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkSDKType;
    fromAmino(object: RequestLoadSnapshotChunkAmino): RequestLoadSnapshotChunk;
    toAmino(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkAmino;
    fromAminoMsg(object: RequestLoadSnapshotChunkAminoMsg): RequestLoadSnapshotChunk;
    fromProtoMsg(message: RequestLoadSnapshotChunkProtoMsg): RequestLoadSnapshotChunk;
    toProto(message: RequestLoadSnapshotChunk): Uint8Array;
    toProtoMsg(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkProtoMsg;
};
export declare const RequestApplySnapshotChunk: {
    typeUrl: string;
    encode(message: RequestApplySnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestApplySnapshotChunk;
    fromJSON(object: any): RequestApplySnapshotChunk;
    toJSON(message: RequestApplySnapshotChunk): unknown;
    fromPartial(object: Partial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk;
    fromSDK(object: RequestApplySnapshotChunkSDKType): RequestApplySnapshotChunk;
    toSDK(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkSDKType;
    fromAmino(object: RequestApplySnapshotChunkAmino): RequestApplySnapshotChunk;
    toAmino(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkAmino;
    fromAminoMsg(object: RequestApplySnapshotChunkAminoMsg): RequestApplySnapshotChunk;
    fromProtoMsg(message: RequestApplySnapshotChunkProtoMsg): RequestApplySnapshotChunk;
    toProto(message: RequestApplySnapshotChunk): Uint8Array;
    toProtoMsg(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkProtoMsg;
};
export declare const Response: {
    typeUrl: string;
    encode(message: Response, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    fromPartial(object: Partial<Response>): Response;
    fromSDK(object: ResponseSDKType): Response;
    toSDK(message: Response): ResponseSDKType;
    fromAmino(object: ResponseAmino): Response;
    toAmino(message: Response): ResponseAmino;
    fromAminoMsg(object: ResponseAminoMsg): Response;
    fromProtoMsg(message: ResponseProtoMsg): Response;
    toProto(message: Response): Uint8Array;
    toProtoMsg(message: Response): ResponseProtoMsg;
};
export declare const ResponseException: {
    typeUrl: string;
    encode(message: ResponseException, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseException;
    fromJSON(object: any): ResponseException;
    toJSON(message: ResponseException): unknown;
    fromPartial(object: Partial<ResponseException>): ResponseException;
    fromSDK(object: ResponseExceptionSDKType): ResponseException;
    toSDK(message: ResponseException): ResponseExceptionSDKType;
    fromAmino(object: ResponseExceptionAmino): ResponseException;
    toAmino(message: ResponseException): ResponseExceptionAmino;
    fromAminoMsg(object: ResponseExceptionAminoMsg): ResponseException;
    fromProtoMsg(message: ResponseExceptionProtoMsg): ResponseException;
    toProto(message: ResponseException): Uint8Array;
    toProtoMsg(message: ResponseException): ResponseExceptionProtoMsg;
};
export declare const ResponseEcho: {
    typeUrl: string;
    encode(message: ResponseEcho, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseEcho;
    fromJSON(object: any): ResponseEcho;
    toJSON(message: ResponseEcho): unknown;
    fromPartial(object: Partial<ResponseEcho>): ResponseEcho;
    fromSDK(object: ResponseEchoSDKType): ResponseEcho;
    toSDK(message: ResponseEcho): ResponseEchoSDKType;
    fromAmino(object: ResponseEchoAmino): ResponseEcho;
    toAmino(message: ResponseEcho): ResponseEchoAmino;
    fromAminoMsg(object: ResponseEchoAminoMsg): ResponseEcho;
    fromProtoMsg(message: ResponseEchoProtoMsg): ResponseEcho;
    toProto(message: ResponseEcho): Uint8Array;
    toProtoMsg(message: ResponseEcho): ResponseEchoProtoMsg;
};
export declare const ResponseFlush: {
    typeUrl: string;
    encode(_: ResponseFlush, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseFlush;
    fromJSON(_: any): ResponseFlush;
    toJSON(_: ResponseFlush): unknown;
    fromPartial(_: Partial<ResponseFlush>): ResponseFlush;
    fromSDK(_: ResponseFlushSDKType): ResponseFlush;
    toSDK(_: ResponseFlush): ResponseFlushSDKType;
    fromAmino(_: ResponseFlushAmino): ResponseFlush;
    toAmino(_: ResponseFlush): ResponseFlushAmino;
    fromAminoMsg(object: ResponseFlushAminoMsg): ResponseFlush;
    fromProtoMsg(message: ResponseFlushProtoMsg): ResponseFlush;
    toProto(message: ResponseFlush): Uint8Array;
    toProtoMsg(message: ResponseFlush): ResponseFlushProtoMsg;
};
export declare const ResponseInfo: {
    typeUrl: string;
    encode(message: ResponseInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseInfo;
    fromJSON(object: any): ResponseInfo;
    toJSON(message: ResponseInfo): unknown;
    fromPartial(object: Partial<ResponseInfo>): ResponseInfo;
    fromSDK(object: ResponseInfoSDKType): ResponseInfo;
    toSDK(message: ResponseInfo): ResponseInfoSDKType;
    fromAmino(object: ResponseInfoAmino): ResponseInfo;
    toAmino(message: ResponseInfo): ResponseInfoAmino;
    fromAminoMsg(object: ResponseInfoAminoMsg): ResponseInfo;
    fromProtoMsg(message: ResponseInfoProtoMsg): ResponseInfo;
    toProto(message: ResponseInfo): Uint8Array;
    toProtoMsg(message: ResponseInfo): ResponseInfoProtoMsg;
};
export declare const ResponseSetOption: {
    typeUrl: string;
    encode(message: ResponseSetOption, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseSetOption;
    fromJSON(object: any): ResponseSetOption;
    toJSON(message: ResponseSetOption): unknown;
    fromPartial(object: Partial<ResponseSetOption>): ResponseSetOption;
    fromSDK(object: ResponseSetOptionSDKType): ResponseSetOption;
    toSDK(message: ResponseSetOption): ResponseSetOptionSDKType;
    fromAmino(object: ResponseSetOptionAmino): ResponseSetOption;
    toAmino(message: ResponseSetOption): ResponseSetOptionAmino;
    fromAminoMsg(object: ResponseSetOptionAminoMsg): ResponseSetOption;
    fromProtoMsg(message: ResponseSetOptionProtoMsg): ResponseSetOption;
    toProto(message: ResponseSetOption): Uint8Array;
    toProtoMsg(message: ResponseSetOption): ResponseSetOptionProtoMsg;
};
export declare const ResponseInitChain: {
    typeUrl: string;
    encode(message: ResponseInitChain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseInitChain;
    fromJSON(object: any): ResponseInitChain;
    toJSON(message: ResponseInitChain): unknown;
    fromPartial(object: Partial<ResponseInitChain>): ResponseInitChain;
    fromSDK(object: ResponseInitChainSDKType): ResponseInitChain;
    toSDK(message: ResponseInitChain): ResponseInitChainSDKType;
    fromAmino(object: ResponseInitChainAmino): ResponseInitChain;
    toAmino(message: ResponseInitChain): ResponseInitChainAmino;
    fromAminoMsg(object: ResponseInitChainAminoMsg): ResponseInitChain;
    fromProtoMsg(message: ResponseInitChainProtoMsg): ResponseInitChain;
    toProto(message: ResponseInitChain): Uint8Array;
    toProtoMsg(message: ResponseInitChain): ResponseInitChainProtoMsg;
};
export declare const ResponseQuery: {
    typeUrl: string;
    encode(message: ResponseQuery, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseQuery;
    fromJSON(object: any): ResponseQuery;
    toJSON(message: ResponseQuery): unknown;
    fromPartial(object: Partial<ResponseQuery>): ResponseQuery;
    fromSDK(object: ResponseQuerySDKType): ResponseQuery;
    toSDK(message: ResponseQuery): ResponseQuerySDKType;
    fromAmino(object: ResponseQueryAmino): ResponseQuery;
    toAmino(message: ResponseQuery): ResponseQueryAmino;
    fromAminoMsg(object: ResponseQueryAminoMsg): ResponseQuery;
    fromProtoMsg(message: ResponseQueryProtoMsg): ResponseQuery;
    toProto(message: ResponseQuery): Uint8Array;
    toProtoMsg(message: ResponseQuery): ResponseQueryProtoMsg;
};
export declare const ResponseBeginBlock: {
    typeUrl: string;
    encode(message: ResponseBeginBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseBeginBlock;
    fromJSON(object: any): ResponseBeginBlock;
    toJSON(message: ResponseBeginBlock): unknown;
    fromPartial(object: Partial<ResponseBeginBlock>): ResponseBeginBlock;
    fromSDK(object: ResponseBeginBlockSDKType): ResponseBeginBlock;
    toSDK(message: ResponseBeginBlock): ResponseBeginBlockSDKType;
    fromAmino(object: ResponseBeginBlockAmino): ResponseBeginBlock;
    toAmino(message: ResponseBeginBlock): ResponseBeginBlockAmino;
    fromAminoMsg(object: ResponseBeginBlockAminoMsg): ResponseBeginBlock;
    fromProtoMsg(message: ResponseBeginBlockProtoMsg): ResponseBeginBlock;
    toProto(message: ResponseBeginBlock): Uint8Array;
    toProtoMsg(message: ResponseBeginBlock): ResponseBeginBlockProtoMsg;
};
export declare const ResponseCheckTx: {
    typeUrl: string;
    encode(message: ResponseCheckTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseCheckTx;
    fromJSON(object: any): ResponseCheckTx;
    toJSON(message: ResponseCheckTx): unknown;
    fromPartial(object: Partial<ResponseCheckTx>): ResponseCheckTx;
    fromSDK(object: ResponseCheckTxSDKType): ResponseCheckTx;
    toSDK(message: ResponseCheckTx): ResponseCheckTxSDKType;
    fromAmino(object: ResponseCheckTxAmino): ResponseCheckTx;
    toAmino(message: ResponseCheckTx): ResponseCheckTxAmino;
    fromAminoMsg(object: ResponseCheckTxAminoMsg): ResponseCheckTx;
    fromProtoMsg(message: ResponseCheckTxProtoMsg): ResponseCheckTx;
    toProto(message: ResponseCheckTx): Uint8Array;
    toProtoMsg(message: ResponseCheckTx): ResponseCheckTxProtoMsg;
};
export declare const ResponseDeliverTx: {
    typeUrl: string;
    encode(message: ResponseDeliverTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseDeliverTx;
    fromJSON(object: any): ResponseDeliverTx;
    toJSON(message: ResponseDeliverTx): unknown;
    fromPartial(object: Partial<ResponseDeliverTx>): ResponseDeliverTx;
    fromSDK(object: ResponseDeliverTxSDKType): ResponseDeliverTx;
    toSDK(message: ResponseDeliverTx): ResponseDeliverTxSDKType;
    fromAmino(object: ResponseDeliverTxAmino): ResponseDeliverTx;
    toAmino(message: ResponseDeliverTx): ResponseDeliverTxAmino;
    fromAminoMsg(object: ResponseDeliverTxAminoMsg): ResponseDeliverTx;
    fromProtoMsg(message: ResponseDeliverTxProtoMsg): ResponseDeliverTx;
    toProto(message: ResponseDeliverTx): Uint8Array;
    toProtoMsg(message: ResponseDeliverTx): ResponseDeliverTxProtoMsg;
};
export declare const ResponseEndBlock: {
    typeUrl: string;
    encode(message: ResponseEndBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseEndBlock;
    fromJSON(object: any): ResponseEndBlock;
    toJSON(message: ResponseEndBlock): unknown;
    fromPartial(object: Partial<ResponseEndBlock>): ResponseEndBlock;
    fromSDK(object: ResponseEndBlockSDKType): ResponseEndBlock;
    toSDK(message: ResponseEndBlock): ResponseEndBlockSDKType;
    fromAmino(object: ResponseEndBlockAmino): ResponseEndBlock;
    toAmino(message: ResponseEndBlock): ResponseEndBlockAmino;
    fromAminoMsg(object: ResponseEndBlockAminoMsg): ResponseEndBlock;
    fromProtoMsg(message: ResponseEndBlockProtoMsg): ResponseEndBlock;
    toProto(message: ResponseEndBlock): Uint8Array;
    toProtoMsg(message: ResponseEndBlock): ResponseEndBlockProtoMsg;
};
export declare const ResponseCommit: {
    typeUrl: string;
    encode(message: ResponseCommit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseCommit;
    fromJSON(object: any): ResponseCommit;
    toJSON(message: ResponseCommit): unknown;
    fromPartial(object: Partial<ResponseCommit>): ResponseCommit;
    fromSDK(object: ResponseCommitSDKType): ResponseCommit;
    toSDK(message: ResponseCommit): ResponseCommitSDKType;
    fromAmino(object: ResponseCommitAmino): ResponseCommit;
    toAmino(message: ResponseCommit): ResponseCommitAmino;
    fromAminoMsg(object: ResponseCommitAminoMsg): ResponseCommit;
    fromProtoMsg(message: ResponseCommitProtoMsg): ResponseCommit;
    toProto(message: ResponseCommit): Uint8Array;
    toProtoMsg(message: ResponseCommit): ResponseCommitProtoMsg;
};
export declare const ResponseListSnapshots: {
    typeUrl: string;
    encode(message: ResponseListSnapshots, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseListSnapshots;
    fromJSON(object: any): ResponseListSnapshots;
    toJSON(message: ResponseListSnapshots): unknown;
    fromPartial(object: Partial<ResponseListSnapshots>): ResponseListSnapshots;
    fromSDK(object: ResponseListSnapshotsSDKType): ResponseListSnapshots;
    toSDK(message: ResponseListSnapshots): ResponseListSnapshotsSDKType;
    fromAmino(object: ResponseListSnapshotsAmino): ResponseListSnapshots;
    toAmino(message: ResponseListSnapshots): ResponseListSnapshotsAmino;
    fromAminoMsg(object: ResponseListSnapshotsAminoMsg): ResponseListSnapshots;
    fromProtoMsg(message: ResponseListSnapshotsProtoMsg): ResponseListSnapshots;
    toProto(message: ResponseListSnapshots): Uint8Array;
    toProtoMsg(message: ResponseListSnapshots): ResponseListSnapshotsProtoMsg;
};
export declare const ResponseOfferSnapshot: {
    typeUrl: string;
    encode(message: ResponseOfferSnapshot, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseOfferSnapshot;
    fromJSON(object: any): ResponseOfferSnapshot;
    toJSON(message: ResponseOfferSnapshot): unknown;
    fromPartial(object: Partial<ResponseOfferSnapshot>): ResponseOfferSnapshot;
    fromSDK(object: ResponseOfferSnapshotSDKType): ResponseOfferSnapshot;
    toSDK(message: ResponseOfferSnapshot): ResponseOfferSnapshotSDKType;
    fromAmino(object: ResponseOfferSnapshotAmino): ResponseOfferSnapshot;
    toAmino(message: ResponseOfferSnapshot): ResponseOfferSnapshotAmino;
    fromAminoMsg(object: ResponseOfferSnapshotAminoMsg): ResponseOfferSnapshot;
    fromProtoMsg(message: ResponseOfferSnapshotProtoMsg): ResponseOfferSnapshot;
    toProto(message: ResponseOfferSnapshot): Uint8Array;
    toProtoMsg(message: ResponseOfferSnapshot): ResponseOfferSnapshotProtoMsg;
};
export declare const ResponseLoadSnapshotChunk: {
    typeUrl: string;
    encode(message: ResponseLoadSnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseLoadSnapshotChunk;
    fromJSON(object: any): ResponseLoadSnapshotChunk;
    toJSON(message: ResponseLoadSnapshotChunk): unknown;
    fromPartial(object: Partial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk;
    fromSDK(object: ResponseLoadSnapshotChunkSDKType): ResponseLoadSnapshotChunk;
    toSDK(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkSDKType;
    fromAmino(object: ResponseLoadSnapshotChunkAmino): ResponseLoadSnapshotChunk;
    toAmino(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkAmino;
    fromAminoMsg(object: ResponseLoadSnapshotChunkAminoMsg): ResponseLoadSnapshotChunk;
    fromProtoMsg(message: ResponseLoadSnapshotChunkProtoMsg): ResponseLoadSnapshotChunk;
    toProto(message: ResponseLoadSnapshotChunk): Uint8Array;
    toProtoMsg(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkProtoMsg;
};
export declare const ResponseApplySnapshotChunk: {
    typeUrl: string;
    encode(message: ResponseApplySnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseApplySnapshotChunk;
    fromJSON(object: any): ResponseApplySnapshotChunk;
    toJSON(message: ResponseApplySnapshotChunk): unknown;
    fromPartial(object: Partial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk;
    fromSDK(object: ResponseApplySnapshotChunkSDKType): ResponseApplySnapshotChunk;
    toSDK(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkSDKType;
    fromAmino(object: ResponseApplySnapshotChunkAmino): ResponseApplySnapshotChunk;
    toAmino(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkAmino;
    fromAminoMsg(object: ResponseApplySnapshotChunkAminoMsg): ResponseApplySnapshotChunk;
    fromProtoMsg(message: ResponseApplySnapshotChunkProtoMsg): ResponseApplySnapshotChunk;
    toProto(message: ResponseApplySnapshotChunk): Uint8Array;
    toProtoMsg(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkProtoMsg;
};
export declare const ConsensusParams: {
    typeUrl: string;
    encode(message: ConsensusParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConsensusParams;
    fromJSON(object: any): ConsensusParams;
    toJSON(message: ConsensusParams): unknown;
    fromPartial(object: Partial<ConsensusParams>): ConsensusParams;
    fromSDK(object: ConsensusParamsSDKType): ConsensusParams;
    toSDK(message: ConsensusParams): ConsensusParamsSDKType;
    fromAmino(object: ConsensusParamsAmino): ConsensusParams;
    toAmino(message: ConsensusParams): ConsensusParamsAmino;
    fromAminoMsg(object: ConsensusParamsAminoMsg): ConsensusParams;
    fromProtoMsg(message: ConsensusParamsProtoMsg): ConsensusParams;
    toProto(message: ConsensusParams): Uint8Array;
    toProtoMsg(message: ConsensusParams): ConsensusParamsProtoMsg;
};
export declare const BlockParams: {
    typeUrl: string;
    encode(message: BlockParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockParams;
    fromJSON(object: any): BlockParams;
    toJSON(message: BlockParams): unknown;
    fromPartial(object: Partial<BlockParams>): BlockParams;
    fromSDK(object: BlockParamsSDKType): BlockParams;
    toSDK(message: BlockParams): BlockParamsSDKType;
    fromAmino(object: BlockParamsAmino): BlockParams;
    toAmino(message: BlockParams): BlockParamsAmino;
    fromAminoMsg(object: BlockParamsAminoMsg): BlockParams;
    fromProtoMsg(message: BlockParamsProtoMsg): BlockParams;
    toProto(message: BlockParams): Uint8Array;
    toProtoMsg(message: BlockParams): BlockParamsProtoMsg;
};
export declare const LastCommitInfo: {
    typeUrl: string;
    encode(message: LastCommitInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LastCommitInfo;
    fromJSON(object: any): LastCommitInfo;
    toJSON(message: LastCommitInfo): unknown;
    fromPartial(object: Partial<LastCommitInfo>): LastCommitInfo;
    fromSDK(object: LastCommitInfoSDKType): LastCommitInfo;
    toSDK(message: LastCommitInfo): LastCommitInfoSDKType;
    fromAmino(object: LastCommitInfoAmino): LastCommitInfo;
    toAmino(message: LastCommitInfo): LastCommitInfoAmino;
    fromAminoMsg(object: LastCommitInfoAminoMsg): LastCommitInfo;
    fromProtoMsg(message: LastCommitInfoProtoMsg): LastCommitInfo;
    toProto(message: LastCommitInfo): Uint8Array;
    toProtoMsg(message: LastCommitInfo): LastCommitInfoProtoMsg;
};
export declare const Event: {
    typeUrl: string;
    encode(message: Event, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): unknown;
    fromPartial(object: Partial<Event>): Event;
    fromSDK(object: EventSDKType): Event;
    toSDK(message: Event): EventSDKType;
    fromAmino(object: EventAmino): Event;
    toAmino(message: Event): EventAmino;
    fromAminoMsg(object: EventAminoMsg): Event;
    fromProtoMsg(message: EventProtoMsg): Event;
    toProto(message: Event): Uint8Array;
    toProtoMsg(message: Event): EventProtoMsg;
};
export declare const EventAttribute: {
    typeUrl: string;
    encode(message: EventAttribute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventAttribute;
    fromJSON(object: any): EventAttribute;
    toJSON(message: EventAttribute): unknown;
    fromPartial(object: Partial<EventAttribute>): EventAttribute;
    fromSDK(object: EventAttributeSDKType): EventAttribute;
    toSDK(message: EventAttribute): EventAttributeSDKType;
    fromAmino(object: EventAttributeAmino): EventAttribute;
    toAmino(message: EventAttribute): EventAttributeAmino;
    fromAminoMsg(object: EventAttributeAminoMsg): EventAttribute;
    fromProtoMsg(message: EventAttributeProtoMsg): EventAttribute;
    toProto(message: EventAttribute): Uint8Array;
    toProtoMsg(message: EventAttribute): EventAttributeProtoMsg;
};
export declare const TxResult: {
    typeUrl: string;
    encode(message: TxResult, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxResult;
    fromJSON(object: any): TxResult;
    toJSON(message: TxResult): unknown;
    fromPartial(object: Partial<TxResult>): TxResult;
    fromSDK(object: TxResultSDKType): TxResult;
    toSDK(message: TxResult): TxResultSDKType;
    fromAmino(object: TxResultAmino): TxResult;
    toAmino(message: TxResult): TxResultAmino;
    fromAminoMsg(object: TxResultAminoMsg): TxResult;
    fromProtoMsg(message: TxResultProtoMsg): TxResult;
    toProto(message: TxResult): Uint8Array;
    toProtoMsg(message: TxResult): TxResultProtoMsg;
};
export declare const Validator: {
    typeUrl: string;
    encode(message: Validator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial(object: Partial<Validator>): Validator;
    fromSDK(object: ValidatorSDKType): Validator;
    toSDK(message: Validator): ValidatorSDKType;
    fromAmino(object: ValidatorAmino): Validator;
    toAmino(message: Validator): ValidatorAmino;
    fromAminoMsg(object: ValidatorAminoMsg): Validator;
    fromProtoMsg(message: ValidatorProtoMsg): Validator;
    toProto(message: Validator): Uint8Array;
    toProtoMsg(message: Validator): ValidatorProtoMsg;
};
export declare const ValidatorUpdate: {
    typeUrl: string;
    encode(message: ValidatorUpdate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorUpdate;
    fromJSON(object: any): ValidatorUpdate;
    toJSON(message: ValidatorUpdate): unknown;
    fromPartial(object: Partial<ValidatorUpdate>): ValidatorUpdate;
    fromSDK(object: ValidatorUpdateSDKType): ValidatorUpdate;
    toSDK(message: ValidatorUpdate): ValidatorUpdateSDKType;
    fromAmino(object: ValidatorUpdateAmino): ValidatorUpdate;
    toAmino(message: ValidatorUpdate): ValidatorUpdateAmino;
    fromAminoMsg(object: ValidatorUpdateAminoMsg): ValidatorUpdate;
    fromProtoMsg(message: ValidatorUpdateProtoMsg): ValidatorUpdate;
    toProto(message: ValidatorUpdate): Uint8Array;
    toProtoMsg(message: ValidatorUpdate): ValidatorUpdateProtoMsg;
};
export declare const VoteInfo: {
    typeUrl: string;
    encode(message: VoteInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): VoteInfo;
    fromJSON(object: any): VoteInfo;
    toJSON(message: VoteInfo): unknown;
    fromPartial(object: Partial<VoteInfo>): VoteInfo;
    fromSDK(object: VoteInfoSDKType): VoteInfo;
    toSDK(message: VoteInfo): VoteInfoSDKType;
    fromAmino(object: VoteInfoAmino): VoteInfo;
    toAmino(message: VoteInfo): VoteInfoAmino;
    fromAminoMsg(object: VoteInfoAminoMsg): VoteInfo;
    fromProtoMsg(message: VoteInfoProtoMsg): VoteInfo;
    toProto(message: VoteInfo): Uint8Array;
    toProtoMsg(message: VoteInfo): VoteInfoProtoMsg;
};
export declare const Evidence: {
    typeUrl: string;
    encode(message: Evidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Evidence;
    fromJSON(object: any): Evidence;
    toJSON(message: Evidence): unknown;
    fromPartial(object: Partial<Evidence>): Evidence;
    fromSDK(object: EvidenceSDKType): Evidence;
    toSDK(message: Evidence): EvidenceSDKType;
    fromAmino(object: EvidenceAmino): Evidence;
    toAmino(message: Evidence): EvidenceAmino;
    fromAminoMsg(object: EvidenceAminoMsg): Evidence;
    fromProtoMsg(message: EvidenceProtoMsg): Evidence;
    toProto(message: Evidence): Uint8Array;
    toProtoMsg(message: Evidence): EvidenceProtoMsg;
};
export declare const Snapshot: {
    typeUrl: string;
    encode(message: Snapshot, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Snapshot;
    fromJSON(object: any): Snapshot;
    toJSON(message: Snapshot): unknown;
    fromPartial(object: Partial<Snapshot>): Snapshot;
    fromSDK(object: SnapshotSDKType): Snapshot;
    toSDK(message: Snapshot): SnapshotSDKType;
    fromAmino(object: SnapshotAmino): Snapshot;
    toAmino(message: Snapshot): SnapshotAmino;
    fromAminoMsg(object: SnapshotAminoMsg): Snapshot;
    fromProtoMsg(message: SnapshotProtoMsg): Snapshot;
    toProto(message: Snapshot): Uint8Array;
    toProtoMsg(message: Snapshot): SnapshotProtoMsg;
};
