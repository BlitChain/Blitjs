//@ts-nocheck
import { ProposalStatus, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType, VotingParams, VotingParamsAmino, VotingParamsSDKType, DepositParams, DepositParamsAmino, DepositParamsSDKType, TallyParams, TallyParamsAmino, TallyParamsSDKType, Deposit, DepositAmino, DepositSDKType, TallyResult, TallyResultAmino, TallyResultSDKType, proposalStatusFromJSON, proposalStatusToJSON } from "./gov";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.gov.v1";
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
  /** voter defines the oter address for the proposals. */
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
  /** voter defines the oter address for the proposals. */
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
  /** vote defined the queried vote. */
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
  /** vote defined the queried vote. */
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
  /** votes defined the queried votes. */
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
  /** votes defined the queried votes. */
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
  /** voting_params defines the parameters related to voting. */
  voting_params?: VotingParams;
  /** deposit_params defines the parameters related to deposit. */
  deposit_params?: DepositParams;
  /** tally_params defines the parameters related to tally. */
  tally_params?: TallyParams;
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
  /** voting_params defines the parameters related to voting. */
  voting_params?: VotingParamsAmino;
  /** deposit_params defines the parameters related to deposit. */
  deposit_params?: DepositParamsAmino;
  /** tally_params defines the parameters related to tally. */
  tally_params?: TallyParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  voting_params?: VotingParamsSDKType;
  deposit_params?: DepositParamsSDKType;
  tally_params?: TallyParamsSDKType;
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
function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposal_id: BigInt(0)
  };
}
export const QueryProposalRequest = {
  typeUrl: "/cosmos.gov.v1.QueryProposalRequest",
  encode(message: QueryProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
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
  fromJSON(object: any): QueryProposalRequest {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryProposalRequest): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryProposalRequest>): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryProposalRequestSDKType): QueryProposalRequest {
    return {
      proposal_id: object?.proposal_id
    };
  },
  toSDK(message: QueryProposalRequest): QueryProposalRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposal_id;
    return obj;
  },
  fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest {
    return {
      proposal_id: BigInt(object.proposal_id)
    };
  },
  toAmino(message: QueryProposalRequest): QueryProposalRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalRequestAminoMsg): QueryProposalRequest {
    return QueryProposalRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalRequest): QueryProposalRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryProposalRequest",
      value: QueryProposalRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalRequestProtoMsg): QueryProposalRequest {
    return QueryProposalRequest.decode(message.value);
  },
  toProto(message: QueryProposalRequest): Uint8Array {
    return QueryProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalRequest): QueryProposalRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalRequest",
      value: QueryProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: undefined
  };
}
export const QueryProposalResponse = {
  typeUrl: "/cosmos.gov.v1.QueryProposalResponse",
  encode(message: QueryProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalResponse {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
    };
  },
  toJSON(message: QueryProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  },
  fromSDK(object: QueryProposalResponseSDKType): QueryProposalResponse {
    return {
      proposal: object.proposal ? Proposal.fromSDK(object.proposal) : undefined
    };
  },
  toSDK(message: QueryProposalResponse): QueryProposalResponseSDKType {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toSDK(message.proposal) : undefined);
    return obj;
  },
  fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse {
    return {
      proposal: object?.proposal ? Proposal.fromAmino(object.proposal) : undefined
    };
  },
  toAmino(message: QueryProposalResponse): QueryProposalResponseAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalResponseAminoMsg): QueryProposalResponse {
    return QueryProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalResponse): QueryProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryProposalResponse",
      value: QueryProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalResponseProtoMsg): QueryProposalResponse {
    return QueryProposalResponse.decode(message.value);
  },
  toProto(message: QueryProposalResponse): Uint8Array {
    return QueryProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalResponse): QueryProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalResponse",
      value: QueryProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return {
    proposal_status: 0,
    voter: "",
    depositor: "",
    pagination: undefined
  };
}
export const QueryProposalsRequest = {
  typeUrl: "/cosmos.gov.v1.QueryProposalsRequest",
  encode(message: QueryProposalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_status !== 0) {
      writer.uint32(8).int32(message.proposal_status);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_status = (reader.int32() as any);
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.depositor = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalsRequest {
    return {
      proposal_status: isSet(object.proposal_status) ? proposalStatusFromJSON(object.proposal_status) : -1,
      voter: isSet(object.voter) ? String(object.voter) : "",
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProposalsRequest): unknown {
    const obj: any = {};
    message.proposal_status !== undefined && (obj.proposal_status = proposalStatusToJSON(message.proposal_status));
    message.voter !== undefined && (obj.voter = message.voter);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProposalsRequest>): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.proposal_status = object.proposal_status ?? 0;
    message.voter = object.voter ?? "";
    message.depositor = object.depositor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryProposalsRequestSDKType): QueryProposalsRequest {
    return {
      proposal_status: isSet(object.proposal_status) ? proposalStatusFromJSON(object.proposal_status) : -1,
      voter: object?.voter,
      depositor: object?.depositor,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProposalsRequest): QueryProposalsRequestSDKType {
    const obj: any = {};
    message.proposal_status !== undefined && (obj.proposal_status = proposalStatusToJSON(message.proposal_status));
    obj.voter = message.voter;
    obj.depositor = message.depositor;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProposalsRequestAmino): QueryProposalsRequest {
    return {
      proposal_status: isSet(object.proposal_status) ? proposalStatusFromJSON(object.proposal_status) : -1,
      voter: object.voter,
      depositor: object.depositor,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryProposalsRequest): QueryProposalsRequestAmino {
    const obj: any = {};
    obj.proposal_status = message.proposal_status;
    obj.voter = message.voter;
    obj.depositor = message.depositor;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsRequestAminoMsg): QueryProposalsRequest {
    return QueryProposalsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalsRequest): QueryProposalsRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryProposalsRequest",
      value: QueryProposalsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalsRequestProtoMsg): QueryProposalsRequest {
    return QueryProposalsRequest.decode(message.value);
  },
  toProto(message: QueryProposalsRequest): Uint8Array {
    return QueryProposalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsRequest): QueryProposalsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalsRequest",
      value: QueryProposalsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}
export const QueryProposalsResponse = {
  typeUrl: "/cosmos.gov.v1.QueryProposalsResponse",
  encode(message: QueryProposalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProposalsResponse): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProposalsResponse>): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryProposalsResponseSDKType): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProposalsResponse): QueryProposalsResponseSDKType {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toSDK(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProposalsResponseAmino): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryProposalsResponse): QueryProposalsResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsResponseAminoMsg): QueryProposalsResponse {
    return QueryProposalsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalsResponse): QueryProposalsResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryProposalsResponse",
      value: QueryProposalsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalsResponseProtoMsg): QueryProposalsResponse {
    return QueryProposalsResponse.decode(message.value);
  },
  toProto(message: QueryProposalsResponse): Uint8Array {
    return QueryProposalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsResponse): QueryProposalsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalsResponse",
      value: QueryProposalsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVoteRequest(): QueryVoteRequest {
  return {
    proposal_id: BigInt(0),
    voter: ""
  };
}
export const QueryVoteRequest = {
  typeUrl: "/cosmos.gov.v1.QueryVoteRequest",
  encode(message: QueryVoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteRequest {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : ""
    };
  },
  toJSON(message: QueryVoteRequest): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },
  fromPartial(object: Partial<QueryVoteRequest>): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    return message;
  },
  fromSDK(object: QueryVoteRequestSDKType): QueryVoteRequest {
    return {
      proposal_id: object?.proposal_id,
      voter: object?.voter
    };
  },
  toSDK(message: QueryVoteRequest): QueryVoteRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposal_id;
    obj.voter = message.voter;
    return obj;
  },
  fromAmino(object: QueryVoteRequestAmino): QueryVoteRequest {
    return {
      proposal_id: BigInt(object.proposal_id),
      voter: object.voter
    };
  },
  toAmino(message: QueryVoteRequest): QueryVoteRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    obj.voter = message.voter;
    return obj;
  },
  fromAminoMsg(object: QueryVoteRequestAminoMsg): QueryVoteRequest {
    return QueryVoteRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVoteRequest): QueryVoteRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryVoteRequest",
      value: QueryVoteRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVoteRequestProtoMsg): QueryVoteRequest {
    return QueryVoteRequest.decode(message.value);
  },
  toProto(message: QueryVoteRequest): Uint8Array {
    return QueryVoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteRequest): QueryVoteRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVoteRequest",
      value: QueryVoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVoteResponse(): QueryVoteResponse {
  return {
    vote: undefined
  };
}
export const QueryVoteResponse = {
  typeUrl: "/cosmos.gov.v1.QueryVoteResponse",
  encode(message: QueryVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteResponse {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined
    };
  },
  toJSON(message: QueryVoteResponse): unknown {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVoteResponse>): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  },
  fromSDK(object: QueryVoteResponseSDKType): QueryVoteResponse {
    return {
      vote: object.vote ? Vote.fromSDK(object.vote) : undefined
    };
  },
  toSDK(message: QueryVoteResponse): QueryVoteResponseSDKType {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toSDK(message.vote) : undefined);
    return obj;
  },
  fromAmino(object: QueryVoteResponseAmino): QueryVoteResponse {
    return {
      vote: object?.vote ? Vote.fromAmino(object.vote) : undefined
    };
  },
  toAmino(message: QueryVoteResponse): QueryVoteResponseAmino {
    const obj: any = {};
    obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVoteResponseAminoMsg): QueryVoteResponse {
    return QueryVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVoteResponse): QueryVoteResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryVoteResponse",
      value: QueryVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVoteResponseProtoMsg): QueryVoteResponse {
    return QueryVoteResponse.decode(message.value);
  },
  toProto(message: QueryVoteResponse): Uint8Array {
    return QueryVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteResponse): QueryVoteResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVoteResponse",
      value: QueryVoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotesRequest(): QueryVotesRequest {
  return {
    proposal_id: BigInt(0),
    pagination: undefined
  };
}
export const QueryVotesRequest = {
  typeUrl: "/cosmos.gov.v1.QueryVotesRequest",
  encode(message: QueryVotesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesRequest {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesRequest): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVotesRequest>): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryVotesRequestSDKType): QueryVotesRequest {
    return {
      proposal_id: object?.proposal_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryVotesRequest): QueryVotesRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposal_id;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryVotesRequestAmino): QueryVotesRequest {
    return {
      proposal_id: BigInt(object.proposal_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryVotesRequest): QueryVotesRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesRequestAminoMsg): QueryVotesRequest {
    return QueryVotesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesRequest): QueryVotesRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryVotesRequest",
      value: QueryVotesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesRequestProtoMsg): QueryVotesRequest {
    return QueryVotesRequest.decode(message.value);
  },
  toProto(message: QueryVotesRequest): Uint8Array {
    return QueryVotesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesRequest): QueryVotesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVotesRequest",
      value: QueryVotesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotesResponse(): QueryVotesResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryVotesResponse = {
  typeUrl: "/cosmos.gov.v1.QueryVotesResponse",
  encode(message: QueryVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryVotesResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVotesResponse>): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryVotesResponseSDKType): QueryVotesResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryVotesResponse): QueryVotesResponseSDKType {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toSDK(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryVotesResponseAmino): QueryVotesResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryVotesResponse): QueryVotesResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesResponseAminoMsg): QueryVotesResponse {
    return QueryVotesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesResponse): QueryVotesResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryVotesResponse",
      value: QueryVotesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesResponseProtoMsg): QueryVotesResponse {
    return QueryVotesResponse.decode(message.value);
  },
  toProto(message: QueryVotesResponse): Uint8Array {
    return QueryVotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesResponse): QueryVotesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVotesResponse",
      value: QueryVotesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {
    params_type: ""
  };
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.gov.v1.QueryParamsRequest",
  encode(message: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params_type !== "") {
      writer.uint32(10).string(message.params_type);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params_type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsRequest {
    return {
      params_type: isSet(object.params_type) ? String(object.params_type) : ""
    };
  },
  toJSON(message: QueryParamsRequest): unknown {
    const obj: any = {};
    message.params_type !== undefined && (obj.params_type = message.params_type);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.params_type = object.params_type ?? "";
    return message;
  },
  fromSDK(object: QueryParamsRequestSDKType): QueryParamsRequest {
    return {
      params_type: object?.params_type
    };
  },
  toSDK(message: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    obj.params_type = message.params_type;
    return obj;
  },
  fromAmino(object: QueryParamsRequestAmino): QueryParamsRequest {
    return {
      params_type: object.params_type
    };
  },
  toAmino(message: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    obj.params_type = message.params_type;
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    voting_params: undefined,
    deposit_params: undefined,
    tally_params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.gov.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voting_params !== undefined) {
      VotingParams.encode(message.voting_params, writer.uint32(10).fork()).ldelim();
    }
    if (message.deposit_params !== undefined) {
      DepositParams.encode(message.deposit_params, writer.uint32(18).fork()).ldelim();
    }
    if (message.tally_params !== undefined) {
      TallyParams.encode(message.tally_params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voting_params = VotingParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.deposit_params = DepositParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.tally_params = TallyParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      voting_params: isSet(object.voting_params) ? VotingParams.fromJSON(object.voting_params) : undefined,
      deposit_params: isSet(object.deposit_params) ? DepositParams.fromJSON(object.deposit_params) : undefined,
      tally_params: isSet(object.tally_params) ? TallyParams.fromJSON(object.tally_params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.voting_params !== undefined && (obj.voting_params = message.voting_params ? VotingParams.toJSON(message.voting_params) : undefined);
    message.deposit_params !== undefined && (obj.deposit_params = message.deposit_params ? DepositParams.toJSON(message.deposit_params) : undefined);
    message.tally_params !== undefined && (obj.tally_params = message.tally_params ? TallyParams.toJSON(message.tally_params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.voting_params = object.voting_params !== undefined && object.voting_params !== null ? VotingParams.fromPartial(object.voting_params) : undefined;
    message.deposit_params = object.deposit_params !== undefined && object.deposit_params !== null ? DepositParams.fromPartial(object.deposit_params) : undefined;
    message.tally_params = object.tally_params !== undefined && object.tally_params !== null ? TallyParams.fromPartial(object.tally_params) : undefined;
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      voting_params: object.voting_params ? VotingParams.fromSDK(object.voting_params) : undefined,
      deposit_params: object.deposit_params ? DepositParams.fromSDK(object.deposit_params) : undefined,
      tally_params: object.tally_params ? TallyParams.fromSDK(object.tally_params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.voting_params !== undefined && (obj.voting_params = message.voting_params ? VotingParams.toSDK(message.voting_params) : undefined);
    message.deposit_params !== undefined && (obj.deposit_params = message.deposit_params ? DepositParams.toSDK(message.deposit_params) : undefined);
    message.tally_params !== undefined && (obj.tally_params = message.tally_params ? TallyParams.toSDK(message.tally_params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      voting_params: object?.voting_params ? VotingParams.fromAmino(object.voting_params) : undefined,
      deposit_params: object?.deposit_params ? DepositParams.fromAmino(object.deposit_params) : undefined,
      tally_params: object?.tally_params ? TallyParams.fromAmino(object.tally_params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.voting_params = message.voting_params ? VotingParams.toAmino(message.voting_params) : undefined;
    obj.deposit_params = message.deposit_params ? DepositParams.toAmino(message.deposit_params) : undefined;
    obj.tally_params = message.tally_params ? TallyParams.toAmino(message.tally_params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositRequest(): QueryDepositRequest {
  return {
    proposal_id: BigInt(0),
    depositor: ""
  };
}
export const QueryDepositRequest = {
  typeUrl: "/cosmos.gov.v1.QueryDepositRequest",
  encode(message: QueryDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositRequest {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
      depositor: isSet(object.depositor) ? String(object.depositor) : ""
    };
  },
  toJSON(message: QueryDepositRequest): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },
  fromPartial(object: Partial<QueryDepositRequest>): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromSDK(object: QueryDepositRequestSDKType): QueryDepositRequest {
    return {
      proposal_id: object?.proposal_id,
      depositor: object?.depositor
    };
  },
  toSDK(message: QueryDepositRequest): QueryDepositRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposal_id;
    obj.depositor = message.depositor;
    return obj;
  },
  fromAmino(object: QueryDepositRequestAmino): QueryDepositRequest {
    return {
      proposal_id: BigInt(object.proposal_id),
      depositor: object.depositor
    };
  },
  toAmino(message: QueryDepositRequest): QueryDepositRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    obj.depositor = message.depositor;
    return obj;
  },
  fromAminoMsg(object: QueryDepositRequestAminoMsg): QueryDepositRequest {
    return QueryDepositRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositRequest): QueryDepositRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryDepositRequest",
      value: QueryDepositRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositRequestProtoMsg): QueryDepositRequest {
    return QueryDepositRequest.decode(message.value);
  },
  toProto(message: QueryDepositRequest): Uint8Array {
    return QueryDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositRequest): QueryDepositRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositRequest",
      value: QueryDepositRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositResponse(): QueryDepositResponse {
  return {
    deposit: undefined
  };
}
export const QueryDepositResponse = {
  typeUrl: "/cosmos.gov.v1.QueryDepositResponse",
  encode(message: QueryDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositResponse {
    return {
      deposit: isSet(object.deposit) ? Deposit.fromJSON(object.deposit) : undefined
    };
  },
  toJSON(message: QueryDepositResponse): unknown {
    const obj: any = {};
    message.deposit !== undefined && (obj.deposit = message.deposit ? Deposit.toJSON(message.deposit) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDepositResponse>): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromSDK(object: QueryDepositResponseSDKType): QueryDepositResponse {
    return {
      deposit: object.deposit ? Deposit.fromSDK(object.deposit) : undefined
    };
  },
  toSDK(message: QueryDepositResponse): QueryDepositResponseSDKType {
    const obj: any = {};
    message.deposit !== undefined && (obj.deposit = message.deposit ? Deposit.toSDK(message.deposit) : undefined);
    return obj;
  },
  fromAmino(object: QueryDepositResponseAmino): QueryDepositResponse {
    return {
      deposit: object?.deposit ? Deposit.fromAmino(object.deposit) : undefined
    };
  },
  toAmino(message: QueryDepositResponse): QueryDepositResponseAmino {
    const obj: any = {};
    obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositResponseAminoMsg): QueryDepositResponse {
    return QueryDepositResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositResponse): QueryDepositResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryDepositResponse",
      value: QueryDepositResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositResponseProtoMsg): QueryDepositResponse {
    return QueryDepositResponse.decode(message.value);
  },
  toProto(message: QueryDepositResponse): Uint8Array {
    return QueryDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositResponse): QueryDepositResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositResponse",
      value: QueryDepositResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    proposal_id: BigInt(0),
    pagination: undefined
  };
}
export const QueryDepositsRequest = {
  typeUrl: "/cosmos.gov.v1.QueryDepositsRequest",
  encode(message: QueryDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositsRequest {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDepositsRequest): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryDepositsRequestSDKType): QueryDepositsRequest {
    return {
      proposal_id: object?.proposal_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDepositsRequest): QueryDepositsRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposal_id;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest {
    return {
      proposal_id: BigInt(object.proposal_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositsRequest): QueryDepositsRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryDepositsRequest",
      value: QueryDepositsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.decode(message.value);
  },
  toProto(message: QueryDepositsRequest): Uint8Array {
    return QueryDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositsRequest",
      value: QueryDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}
export const QueryDepositsResponse = {
  typeUrl: "/cosmos.gov.v1.QueryDepositsResponse",
  encode(message: QueryDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDepositsResponse): unknown {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryDepositsResponseSDKType): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDepositsResponse): QueryDepositsResponseSDKType {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toSDK(e) : undefined);
    } else {
      obj.deposits = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositsResponse): QueryDepositsResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryDepositsResponse",
      value: QueryDepositsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.decode(message.value);
  },
  toProto(message: QueryDepositsResponse): Uint8Array {
    return QueryDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositsResponse",
      value: QueryDepositsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
  return {
    proposal_id: BigInt(0)
  };
}
export const QueryTallyResultRequest = {
  typeUrl: "/cosmos.gov.v1.QueryTallyResultRequest",
  encode(message: QueryTallyResultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
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
  fromJSON(object: any): QueryTallyResultRequest {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryTallyResultRequest): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryTallyResultRequest>): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryTallyResultRequestSDKType): QueryTallyResultRequest {
    return {
      proposal_id: object?.proposal_id
    };
  },
  toSDK(message: QueryTallyResultRequest): QueryTallyResultRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposal_id;
    return obj;
  },
  fromAmino(object: QueryTallyResultRequestAmino): QueryTallyResultRequest {
    return {
      proposal_id: BigInt(object.proposal_id)
    };
  },
  toAmino(message: QueryTallyResultRequest): QueryTallyResultRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTallyResultRequestAminoMsg): QueryTallyResultRequest {
    return QueryTallyResultRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryTallyResultRequest",
      value: QueryTallyResultRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTallyResultRequestProtoMsg): QueryTallyResultRequest {
    return QueryTallyResultRequest.decode(message.value);
  },
  toProto(message: QueryTallyResultRequest): Uint8Array {
    return QueryTallyResultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryTallyResultRequest",
      value: QueryTallyResultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResultResponse(): QueryTallyResultResponse {
  return {
    tally: undefined
  };
}
export const QueryTallyResultResponse = {
  typeUrl: "/cosmos.gov.v1.QueryTallyResultResponse",
  encode(message: QueryTallyResultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTallyResultResponse {
    return {
      tally: isSet(object.tally) ? TallyResult.fromJSON(object.tally) : undefined
    };
  },
  toJSON(message: QueryTallyResultResponse): unknown {
    const obj: any = {};
    message.tally !== undefined && (obj.tally = message.tally ? TallyResult.toJSON(message.tally) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTallyResultResponse>): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
    return message;
  },
  fromSDK(object: QueryTallyResultResponseSDKType): QueryTallyResultResponse {
    return {
      tally: object.tally ? TallyResult.fromSDK(object.tally) : undefined
    };
  },
  toSDK(message: QueryTallyResultResponse): QueryTallyResultResponseSDKType {
    const obj: any = {};
    message.tally !== undefined && (obj.tally = message.tally ? TallyResult.toSDK(message.tally) : undefined);
    return obj;
  },
  fromAmino(object: QueryTallyResultResponseAmino): QueryTallyResultResponse {
    return {
      tally: object?.tally ? TallyResult.fromAmino(object.tally) : undefined
    };
  },
  toAmino(message: QueryTallyResultResponse): QueryTallyResultResponseAmino {
    const obj: any = {};
    obj.tally = message.tally ? TallyResult.toAmino(message.tally) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTallyResultResponseAminoMsg): QueryTallyResultResponse {
    return QueryTallyResultResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryTallyResultResponse",
      value: QueryTallyResultResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTallyResultResponseProtoMsg): QueryTallyResultResponse {
    return QueryTallyResultResponse.decode(message.value);
  },
  toProto(message: QueryTallyResultResponse): Uint8Array {
    return QueryTallyResultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryTallyResultResponse",
      value: QueryTallyResultResponse.encode(message).finish()
    };
  }
};