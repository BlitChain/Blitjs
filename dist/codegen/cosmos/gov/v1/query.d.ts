import { ProposalStatus, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType, VotingParams, VotingParamsAmino, VotingParamsSDKType, DepositParams, DepositParamsAmino, DepositParamsSDKType, TallyParams, TallyParamsAmino, TallyParamsSDKType, Params, ParamsAmino, ParamsSDKType, Deposit, DepositAmino, DepositSDKType, TallyResult, TallyResultAmino, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "cosmos.gov.v1";
/** QueryConstitutionRequest is the request type for the Query/Constitution RPC method */
export interface QueryConstitutionRequest {
}
export interface QueryConstitutionRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryConstitutionRequest";
    value: Uint8Array;
}
export interface QueryConstitutionRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryConstitutionRequest";
    value: Uint8Array;
}
/** QueryConstitutionRequest is the request type for the Query/Constitution RPC method */
export interface QueryConstitutionRequestAmino {
}
export interface QueryConstitutionRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryConstitutionRequest";
    value: QueryConstitutionRequestAmino;
}
/** QueryConstitutionRequest is the request type for the Query/Constitution RPC method */
export interface QueryConstitutionRequestSDKType {
}
/** QueryConstitutionResponse is the response type for the Query/Constitution RPC method */
export interface QueryConstitutionResponse {
    constitution: string;
}
export interface QueryConstitutionResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryConstitutionResponse";
    value: Uint8Array;
}
export interface QueryConstitutionResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryConstitutionResponse";
    value: Uint8Array;
}
/** QueryConstitutionResponse is the response type for the Query/Constitution RPC method */
export interface QueryConstitutionResponseAmino {
    constitution: string;
}
export interface QueryConstitutionResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryConstitutionResponse";
    value: QueryConstitutionResponseAmino;
}
/** QueryConstitutionResponse is the response type for the Query/Constitution RPC method */
export interface QueryConstitutionResponseSDKType {
    constitution: string;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: bigint;
}
export interface QueryProposalRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryProposalRequest";
    value: Uint8Array;
}
export interface QueryProposalRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryProposalRequest";
    value: Uint8Array;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequestAmino {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: string;
}
export interface QueryProposalRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryProposalRequest";
    value: QueryProposalRequestAmino;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequestSDKType {
    proposal_id: bigint;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
    /** proposal is the requested governance proposal. */
    proposal?: Proposal;
}
export interface QueryProposalResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryProposalResponse";
    value: Uint8Array;
}
export interface QueryProposalResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryProposalResponse";
    value: Uint8Array;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponseAmino {
    /** proposal is the requested governance proposal. */
    proposal?: ProposalAmino;
}
export interface QueryProposalResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryProposalResponse";
    value: QueryProposalResponseAmino;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponseSDKType {
    proposal?: ProposalSDKType;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
    /** proposal_status defines the status of the proposals. */
    proposal_status: ProposalStatus;
    /** voter defines the voter address for the proposals. */
    voter: string;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryProposalsRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryProposalsRequest";
    value: Uint8Array;
}
export interface QueryProposalsRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryProposalsRequest";
    value: Uint8Array;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequestAmino {
    /** proposal_status defines the status of the proposals. */
    proposal_status: ProposalStatus;
    /** voter defines the voter address for the proposals. */
    voter: string;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryProposalsRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryProposalsRequest";
    value: QueryProposalsRequestAmino;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequestSDKType {
    proposal_status: ProposalStatus;
    voter: string;
    depositor: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponse {
    /** proposals defines all the requested governance proposals. */
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryProposalsResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryProposalsResponse";
    value: Uint8Array;
}
export interface QueryProposalsResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryProposalsResponse";
    value: Uint8Array;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponseAmino {
    /** proposals defines all the requested governance proposals. */
    proposals: ProposalAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryProposalsResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryProposalsResponse";
    value: QueryProposalsResponseAmino;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponseSDKType {
    proposals: ProposalSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: bigint;
    /** voter defines the voter address for the proposals. */
    voter: string;
}
export interface QueryVoteRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryVoteRequest";
    value: Uint8Array;
}
export interface QueryVoteRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryVoteRequest";
    value: Uint8Array;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequestAmino {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: string;
    /** voter defines the voter address for the proposals. */
    voter: string;
}
export interface QueryVoteRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryVoteRequest";
    value: QueryVoteRequestAmino;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequestSDKType {
    proposal_id: bigint;
    voter: string;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
    /** vote defines the queried vote. */
    vote?: Vote;
}
export interface QueryVoteResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryVoteResponse";
    value: Uint8Array;
}
export interface QueryVoteResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryVoteResponse";
    value: Uint8Array;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponseAmino {
    /** vote defines the queried vote. */
    vote?: VoteAmino;
}
export interface QueryVoteResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryVoteResponse";
    value: QueryVoteResponseAmino;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponseSDKType {
    vote?: VoteSDKType;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryVotesRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryVotesRequest";
    value: Uint8Array;
}
export interface QueryVotesRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryVotesRequest";
    value: Uint8Array;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequestAmino {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryVotesRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryVotesRequest";
    value: QueryVotesRequestAmino;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequestSDKType {
    proposal_id: bigint;
    pagination?: PageRequestSDKType;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponse {
    /** votes defines the queried votes. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryVotesResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryVotesResponse";
    value: Uint8Array;
}
export interface QueryVotesResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryVotesResponse";
    value: Uint8Array;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponseAmino {
    /** votes defines the queried votes. */
    votes: VoteAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryVotesResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryVotesResponse";
    value: QueryVotesResponseAmino;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponseSDKType {
    votes: VoteSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
    /**
     * params_type defines which parameters to query for, can be one of "voting",
     * "tallying" or "deposit".
     */
    params_type: string;
}
export interface QueryParamsRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
    /**
     * params_type defines which parameters to query for, can be one of "voting",
     * "tallying" or "deposit".
     */
    params_type: string;
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
    params_type: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /**
     * Deprecated: Prefer to use `params` instead.
     * voting_params defines the parameters related to voting.
     */
    /** @deprecated */
    voting_params?: VotingParams;
    /**
     * Deprecated: Prefer to use `params` instead.
     * deposit_params defines the parameters related to deposit.
     */
    /** @deprecated */
    deposit_params?: DepositParams;
    /**
     * Deprecated: Prefer to use `params` instead.
     * tally_params defines the parameters related to tally.
     */
    /** @deprecated */
    tally_params?: TallyParams;
    /**
     * params defines all the paramaters of x/gov module.
     *
     * Since: cosmos-sdk 0.47
     */
    params?: Params;
}
export interface QueryParamsResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /**
     * Deprecated: Prefer to use `params` instead.
     * voting_params defines the parameters related to voting.
     */
    /** @deprecated */
    voting_params?: VotingParamsAmino;
    /**
     * Deprecated: Prefer to use `params` instead.
     * deposit_params defines the parameters related to deposit.
     */
    /** @deprecated */
    deposit_params?: DepositParamsAmino;
    /**
     * Deprecated: Prefer to use `params` instead.
     * tally_params defines the parameters related to tally.
     */
    /** @deprecated */
    tally_params?: TallyParamsAmino;
    /**
     * params defines all the paramaters of x/gov module.
     *
     * Since: cosmos-sdk 0.47
     */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    /** @deprecated */
    voting_params?: VotingParamsSDKType;
    /** @deprecated */
    deposit_params?: DepositParamsSDKType;
    /** @deprecated */
    tally_params?: TallyParamsSDKType;
    params?: ParamsSDKType;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: bigint;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
}
export interface QueryDepositRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryDepositRequest";
    value: Uint8Array;
}
export interface QueryDepositRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryDepositRequest";
    value: Uint8Array;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequestAmino {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: string;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
}
export interface QueryDepositRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryDepositRequest";
    value: QueryDepositRequestAmino;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequestSDKType {
    proposal_id: bigint;
    depositor: string;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
    /** deposit defines the requested deposit. */
    deposit?: Deposit;
}
export interface QueryDepositResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryDepositResponse";
    value: Uint8Array;
}
export interface QueryDepositResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryDepositResponse";
    value: Uint8Array;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponseAmino {
    /** deposit defines the requested deposit. */
    deposit?: DepositAmino;
}
export interface QueryDepositResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryDepositResponse";
    value: QueryDepositResponseAmino;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponseSDKType {
    deposit?: DepositSDKType;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryDepositsRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryDepositsRequest";
    value: Uint8Array;
}
export interface QueryDepositsRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryDepositsRequest";
    value: Uint8Array;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestAmino {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryDepositsRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryDepositsRequest";
    value: QueryDepositsRequestAmino;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
    proposal_id: bigint;
    pagination?: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    /** deposits defines the requested deposits. */
    deposits: Deposit[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryDepositsResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryDepositsResponse";
    value: Uint8Array;
}
export interface QueryDepositsResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryDepositsResponse";
    value: Uint8Array;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseAmino {
    /** deposits defines the requested deposits. */
    deposits: DepositAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryDepositsResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryDepositsResponse";
    value: QueryDepositsResponseAmino;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
    deposits: DepositSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: bigint;
}
export interface QueryTallyResultRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryTallyResultRequest";
    value: Uint8Array;
}
export interface QueryTallyResultRequestProtoMsg {
    type_url: "/cosmos.gov.v1.QueryTallyResultRequest";
    value: Uint8Array;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequestAmino {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: string;
}
export interface QueryTallyResultRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryTallyResultRequest";
    value: QueryTallyResultRequestAmino;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequestSDKType {
    proposal_id: bigint;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
    /** tally defines the requested tally. */
    tally?: TallyResult;
}
export interface QueryTallyResultResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryTallyResultResponse";
    value: Uint8Array;
}
export interface QueryTallyResultResponseProtoMsg {
    type_url: "/cosmos.gov.v1.QueryTallyResultResponse";
    value: Uint8Array;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponseAmino {
    /** tally defines the requested tally. */
    tally?: TallyResultAmino;
}
export interface QueryTallyResultResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryTallyResultResponse";
    value: QueryTallyResultResponseAmino;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponseSDKType {
    tally?: TallyResultSDKType;
}
export declare const QueryConstitutionRequest: {
    typeUrl: string;
    encode(_: QueryConstitutionRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConstitutionRequest;
    fromJSON(_: any): QueryConstitutionRequest;
    toJSON(_: QueryConstitutionRequest): unknown;
    fromPartial(_: Partial<QueryConstitutionRequest>): QueryConstitutionRequest;
    fromSDK(_: QueryConstitutionRequestSDKType): QueryConstitutionRequest;
    toSDK(_: QueryConstitutionRequest): QueryConstitutionRequestSDKType;
    fromAmino(_: QueryConstitutionRequestAmino): QueryConstitutionRequest;
    toAmino(_: QueryConstitutionRequest): QueryConstitutionRequestAmino;
    fromAminoMsg(object: QueryConstitutionRequestAminoMsg): QueryConstitutionRequest;
    toAminoMsg(message: QueryConstitutionRequest): QueryConstitutionRequestAminoMsg;
    fromProtoMsg(message: QueryConstitutionRequestProtoMsg): QueryConstitutionRequest;
    toProto(message: QueryConstitutionRequest): Uint8Array;
    toProtoMsg(message: QueryConstitutionRequest): QueryConstitutionRequestProtoMsg;
};
export declare const QueryConstitutionResponse: {
    typeUrl: string;
    encode(message: QueryConstitutionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConstitutionResponse;
    fromJSON(object: any): QueryConstitutionResponse;
    toJSON(message: QueryConstitutionResponse): unknown;
    fromPartial(object: Partial<QueryConstitutionResponse>): QueryConstitutionResponse;
    fromSDK(object: QueryConstitutionResponseSDKType): QueryConstitutionResponse;
    toSDK(message: QueryConstitutionResponse): QueryConstitutionResponseSDKType;
    fromAmino(object: QueryConstitutionResponseAmino): QueryConstitutionResponse;
    toAmino(message: QueryConstitutionResponse): QueryConstitutionResponseAmino;
    fromAminoMsg(object: QueryConstitutionResponseAminoMsg): QueryConstitutionResponse;
    toAminoMsg(message: QueryConstitutionResponse): QueryConstitutionResponseAminoMsg;
    fromProtoMsg(message: QueryConstitutionResponseProtoMsg): QueryConstitutionResponse;
    toProto(message: QueryConstitutionResponse): Uint8Array;
    toProtoMsg(message: QueryConstitutionResponse): QueryConstitutionResponseProtoMsg;
};
export declare const QueryProposalRequest: {
    typeUrl: string;
    encode(message: QueryProposalRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalRequest;
    fromJSON(object: any): QueryProposalRequest;
    toJSON(message: QueryProposalRequest): unknown;
    fromPartial(object: Partial<QueryProposalRequest>): QueryProposalRequest;
    fromSDK(object: QueryProposalRequestSDKType): QueryProposalRequest;
    toSDK(message: QueryProposalRequest): QueryProposalRequestSDKType;
    fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest;
    toAmino(message: QueryProposalRequest): QueryProposalRequestAmino;
    fromAminoMsg(object: QueryProposalRequestAminoMsg): QueryProposalRequest;
    toAminoMsg(message: QueryProposalRequest): QueryProposalRequestAminoMsg;
    fromProtoMsg(message: QueryProposalRequestProtoMsg): QueryProposalRequest;
    toProto(message: QueryProposalRequest): Uint8Array;
    toProtoMsg(message: QueryProposalRequest): QueryProposalRequestProtoMsg;
};
export declare const QueryProposalResponse: {
    typeUrl: string;
    encode(message: QueryProposalResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalResponse;
    fromJSON(object: any): QueryProposalResponse;
    toJSON(message: QueryProposalResponse): unknown;
    fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse;
    fromSDK(object: QueryProposalResponseSDKType): QueryProposalResponse;
    toSDK(message: QueryProposalResponse): QueryProposalResponseSDKType;
    fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse;
    toAmino(message: QueryProposalResponse): QueryProposalResponseAmino;
    fromAminoMsg(object: QueryProposalResponseAminoMsg): QueryProposalResponse;
    toAminoMsg(message: QueryProposalResponse): QueryProposalResponseAminoMsg;
    fromProtoMsg(message: QueryProposalResponseProtoMsg): QueryProposalResponse;
    toProto(message: QueryProposalResponse): Uint8Array;
    toProtoMsg(message: QueryProposalResponse): QueryProposalResponseProtoMsg;
};
export declare const QueryProposalsRequest: {
    typeUrl: string;
    encode(message: QueryProposalsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsRequest;
    fromJSON(object: any): QueryProposalsRequest;
    toJSON(message: QueryProposalsRequest): unknown;
    fromPartial(object: Partial<QueryProposalsRequest>): QueryProposalsRequest;
    fromSDK(object: QueryProposalsRequestSDKType): QueryProposalsRequest;
    toSDK(message: QueryProposalsRequest): QueryProposalsRequestSDKType;
    fromAmino(object: QueryProposalsRequestAmino): QueryProposalsRequest;
    toAmino(message: QueryProposalsRequest): QueryProposalsRequestAmino;
    fromAminoMsg(object: QueryProposalsRequestAminoMsg): QueryProposalsRequest;
    toAminoMsg(message: QueryProposalsRequest): QueryProposalsRequestAminoMsg;
    fromProtoMsg(message: QueryProposalsRequestProtoMsg): QueryProposalsRequest;
    toProto(message: QueryProposalsRequest): Uint8Array;
    toProtoMsg(message: QueryProposalsRequest): QueryProposalsRequestProtoMsg;
};
export declare const QueryProposalsResponse: {
    typeUrl: string;
    encode(message: QueryProposalsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsResponse;
    fromJSON(object: any): QueryProposalsResponse;
    toJSON(message: QueryProposalsResponse): unknown;
    fromPartial(object: Partial<QueryProposalsResponse>): QueryProposalsResponse;
    fromSDK(object: QueryProposalsResponseSDKType): QueryProposalsResponse;
    toSDK(message: QueryProposalsResponse): QueryProposalsResponseSDKType;
    fromAmino(object: QueryProposalsResponseAmino): QueryProposalsResponse;
    toAmino(message: QueryProposalsResponse): QueryProposalsResponseAmino;
    fromAminoMsg(object: QueryProposalsResponseAminoMsg): QueryProposalsResponse;
    toAminoMsg(message: QueryProposalsResponse): QueryProposalsResponseAminoMsg;
    fromProtoMsg(message: QueryProposalsResponseProtoMsg): QueryProposalsResponse;
    toProto(message: QueryProposalsResponse): Uint8Array;
    toProtoMsg(message: QueryProposalsResponse): QueryProposalsResponseProtoMsg;
};
export declare const QueryVoteRequest: {
    typeUrl: string;
    encode(message: QueryVoteRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteRequest;
    fromJSON(object: any): QueryVoteRequest;
    toJSON(message: QueryVoteRequest): unknown;
    fromPartial(object: Partial<QueryVoteRequest>): QueryVoteRequest;
    fromSDK(object: QueryVoteRequestSDKType): QueryVoteRequest;
    toSDK(message: QueryVoteRequest): QueryVoteRequestSDKType;
    fromAmino(object: QueryVoteRequestAmino): QueryVoteRequest;
    toAmino(message: QueryVoteRequest): QueryVoteRequestAmino;
    fromAminoMsg(object: QueryVoteRequestAminoMsg): QueryVoteRequest;
    toAminoMsg(message: QueryVoteRequest): QueryVoteRequestAminoMsg;
    fromProtoMsg(message: QueryVoteRequestProtoMsg): QueryVoteRequest;
    toProto(message: QueryVoteRequest): Uint8Array;
    toProtoMsg(message: QueryVoteRequest): QueryVoteRequestProtoMsg;
};
export declare const QueryVoteResponse: {
    typeUrl: string;
    encode(message: QueryVoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteResponse;
    fromJSON(object: any): QueryVoteResponse;
    toJSON(message: QueryVoteResponse): unknown;
    fromPartial(object: Partial<QueryVoteResponse>): QueryVoteResponse;
    fromSDK(object: QueryVoteResponseSDKType): QueryVoteResponse;
    toSDK(message: QueryVoteResponse): QueryVoteResponseSDKType;
    fromAmino(object: QueryVoteResponseAmino): QueryVoteResponse;
    toAmino(message: QueryVoteResponse): QueryVoteResponseAmino;
    fromAminoMsg(object: QueryVoteResponseAminoMsg): QueryVoteResponse;
    toAminoMsg(message: QueryVoteResponse): QueryVoteResponseAminoMsg;
    fromProtoMsg(message: QueryVoteResponseProtoMsg): QueryVoteResponse;
    toProto(message: QueryVoteResponse): Uint8Array;
    toProtoMsg(message: QueryVoteResponse): QueryVoteResponseProtoMsg;
};
export declare const QueryVotesRequest: {
    typeUrl: string;
    encode(message: QueryVotesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesRequest;
    fromJSON(object: any): QueryVotesRequest;
    toJSON(message: QueryVotesRequest): unknown;
    fromPartial(object: Partial<QueryVotesRequest>): QueryVotesRequest;
    fromSDK(object: QueryVotesRequestSDKType): QueryVotesRequest;
    toSDK(message: QueryVotesRequest): QueryVotesRequestSDKType;
    fromAmino(object: QueryVotesRequestAmino): QueryVotesRequest;
    toAmino(message: QueryVotesRequest): QueryVotesRequestAmino;
    fromAminoMsg(object: QueryVotesRequestAminoMsg): QueryVotesRequest;
    toAminoMsg(message: QueryVotesRequest): QueryVotesRequestAminoMsg;
    fromProtoMsg(message: QueryVotesRequestProtoMsg): QueryVotesRequest;
    toProto(message: QueryVotesRequest): Uint8Array;
    toProtoMsg(message: QueryVotesRequest): QueryVotesRequestProtoMsg;
};
export declare const QueryVotesResponse: {
    typeUrl: string;
    encode(message: QueryVotesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesResponse;
    fromJSON(object: any): QueryVotesResponse;
    toJSON(message: QueryVotesResponse): unknown;
    fromPartial(object: Partial<QueryVotesResponse>): QueryVotesResponse;
    fromSDK(object: QueryVotesResponseSDKType): QueryVotesResponse;
    toSDK(message: QueryVotesResponse): QueryVotesResponseSDKType;
    fromAmino(object: QueryVotesResponseAmino): QueryVotesResponse;
    toAmino(message: QueryVotesResponse): QueryVotesResponseAmino;
    fromAminoMsg(object: QueryVotesResponseAminoMsg): QueryVotesResponse;
    toAminoMsg(message: QueryVotesResponse): QueryVotesResponseAminoMsg;
    fromProtoMsg(message: QueryVotesResponseProtoMsg): QueryVotesResponse;
    toProto(message: QueryVotesResponse): Uint8Array;
    toProtoMsg(message: QueryVotesResponse): QueryVotesResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(message: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(object: any): QueryParamsRequest;
    toJSON(message: QueryParamsRequest): unknown;
    fromPartial(object: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromSDK(object: QueryParamsRequestSDKType): QueryParamsRequest;
    toSDK(message: QueryParamsRequest): QueryParamsRequestSDKType;
    fromAmino(object: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(message: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse;
    toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryDepositRequest: {
    typeUrl: string;
    encode(message: QueryDepositRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRequest;
    fromJSON(object: any): QueryDepositRequest;
    toJSON(message: QueryDepositRequest): unknown;
    fromPartial(object: Partial<QueryDepositRequest>): QueryDepositRequest;
    fromSDK(object: QueryDepositRequestSDKType): QueryDepositRequest;
    toSDK(message: QueryDepositRequest): QueryDepositRequestSDKType;
    fromAmino(object: QueryDepositRequestAmino): QueryDepositRequest;
    toAmino(message: QueryDepositRequest): QueryDepositRequestAmino;
    fromAminoMsg(object: QueryDepositRequestAminoMsg): QueryDepositRequest;
    toAminoMsg(message: QueryDepositRequest): QueryDepositRequestAminoMsg;
    fromProtoMsg(message: QueryDepositRequestProtoMsg): QueryDepositRequest;
    toProto(message: QueryDepositRequest): Uint8Array;
    toProtoMsg(message: QueryDepositRequest): QueryDepositRequestProtoMsg;
};
export declare const QueryDepositResponse: {
    typeUrl: string;
    encode(message: QueryDepositResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositResponse;
    fromJSON(object: any): QueryDepositResponse;
    toJSON(message: QueryDepositResponse): unknown;
    fromPartial(object: Partial<QueryDepositResponse>): QueryDepositResponse;
    fromSDK(object: QueryDepositResponseSDKType): QueryDepositResponse;
    toSDK(message: QueryDepositResponse): QueryDepositResponseSDKType;
    fromAmino(object: QueryDepositResponseAmino): QueryDepositResponse;
    toAmino(message: QueryDepositResponse): QueryDepositResponseAmino;
    fromAminoMsg(object: QueryDepositResponseAminoMsg): QueryDepositResponse;
    toAminoMsg(message: QueryDepositResponse): QueryDepositResponseAminoMsg;
    fromProtoMsg(message: QueryDepositResponseProtoMsg): QueryDepositResponse;
    toProto(message: QueryDepositResponse): Uint8Array;
    toProtoMsg(message: QueryDepositResponse): QueryDepositResponseProtoMsg;
};
export declare const QueryDepositsRequest: {
    typeUrl: string;
    encode(message: QueryDepositsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsRequest;
    fromJSON(object: any): QueryDepositsRequest;
    toJSON(message: QueryDepositsRequest): unknown;
    fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest;
    fromSDK(object: QueryDepositsRequestSDKType): QueryDepositsRequest;
    toSDK(message: QueryDepositsRequest): QueryDepositsRequestSDKType;
    fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest;
    toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino;
    fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest;
    toAminoMsg(message: QueryDepositsRequest): QueryDepositsRequestAminoMsg;
    fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest;
    toProto(message: QueryDepositsRequest): Uint8Array;
    toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg;
};
export declare const QueryDepositsResponse: {
    typeUrl: string;
    encode(message: QueryDepositsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsResponse;
    fromJSON(object: any): QueryDepositsResponse;
    toJSON(message: QueryDepositsResponse): unknown;
    fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse;
    fromSDK(object: QueryDepositsResponseSDKType): QueryDepositsResponse;
    toSDK(message: QueryDepositsResponse): QueryDepositsResponseSDKType;
    fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse;
    toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino;
    fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse;
    toAminoMsg(message: QueryDepositsResponse): QueryDepositsResponseAminoMsg;
    fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse;
    toProto(message: QueryDepositsResponse): Uint8Array;
    toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg;
};
export declare const QueryTallyResultRequest: {
    typeUrl: string;
    encode(message: QueryTallyResultRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultRequest;
    fromJSON(object: any): QueryTallyResultRequest;
    toJSON(message: QueryTallyResultRequest): unknown;
    fromPartial(object: Partial<QueryTallyResultRequest>): QueryTallyResultRequest;
    fromSDK(object: QueryTallyResultRequestSDKType): QueryTallyResultRequest;
    toSDK(message: QueryTallyResultRequest): QueryTallyResultRequestSDKType;
    fromAmino(object: QueryTallyResultRequestAmino): QueryTallyResultRequest;
    toAmino(message: QueryTallyResultRequest): QueryTallyResultRequestAmino;
    fromAminoMsg(object: QueryTallyResultRequestAminoMsg): QueryTallyResultRequest;
    toAminoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestAminoMsg;
    fromProtoMsg(message: QueryTallyResultRequestProtoMsg): QueryTallyResultRequest;
    toProto(message: QueryTallyResultRequest): Uint8Array;
    toProtoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestProtoMsg;
};
export declare const QueryTallyResultResponse: {
    typeUrl: string;
    encode(message: QueryTallyResultResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultResponse;
    fromJSON(object: any): QueryTallyResultResponse;
    toJSON(message: QueryTallyResultResponse): unknown;
    fromPartial(object: Partial<QueryTallyResultResponse>): QueryTallyResultResponse;
    fromSDK(object: QueryTallyResultResponseSDKType): QueryTallyResultResponse;
    toSDK(message: QueryTallyResultResponse): QueryTallyResultResponseSDKType;
    fromAmino(object: QueryTallyResultResponseAmino): QueryTallyResultResponse;
    toAmino(message: QueryTallyResultResponse): QueryTallyResultResponseAmino;
    fromAminoMsg(object: QueryTallyResultResponseAminoMsg): QueryTallyResultResponse;
    toAminoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseAminoMsg;
    fromProtoMsg(message: QueryTallyResultResponseProtoMsg): QueryTallyResultResponse;
    toProto(message: QueryTallyResultResponse): Uint8Array;
    toProtoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseProtoMsg;
};
