//@ts-nocheck
import { MemberRequest, MemberRequestAmino, MemberRequestSDKType, VoteOption, ProposalExecutorResult, ThresholdDecisionPolicy, ThresholdDecisionPolicyProtoMsg, ThresholdDecisionPolicySDKType, PercentageDecisionPolicy, PercentageDecisionPolicyProtoMsg, PercentageDecisionPolicySDKType, voteOptionFromJSON, voteOptionToJSON, proposalExecutorResultFromJSON, proposalExecutorResultToJSON } from "./types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.group.v1";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export enum Exec {
  /**
   * EXEC_UNSPECIFIED - An empty value means that there should be a separate
   * MsgExec request for the proposal to execute.
   */
  EXEC_UNSPECIFIED = 0,
  /**
   * EXEC_TRY - Try to execute the proposal immediately.
   * If the proposal is not allowed per the DecisionPolicy,
   * the proposal will still be open and could
   * be executed at a later point.
   */
  EXEC_TRY = 1,
  UNRECOGNIZED = -1,
}
export const ExecSDKType = Exec;
export const ExecAmino = Exec;
export function execFromJSON(object: any): Exec {
  switch (object) {
    case 0:
    case "EXEC_UNSPECIFIED":
      return Exec.EXEC_UNSPECIFIED;
    case 1:
    case "EXEC_TRY":
      return Exec.EXEC_TRY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Exec.UNRECOGNIZED;
  }
}
export function execToJSON(object: Exec): string {
  switch (object) {
    case Exec.EXEC_UNSPECIFIED:
      return "EXEC_UNSPECIFIED";
    case Exec.EXEC_TRY:
      return "EXEC_TRY";
    case Exec.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
  /** admin is the account address of the group admin. */
  admin: string;
  /** members defines the group members. */
  members: MemberRequest[];
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: string;
}
export interface MsgCreateGroupProtoMsg {
  type_url: "/cosmos.group.v1.MsgCreateGroup";
  value: Uint8Array;
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroupAmino {
  /** admin is the account address of the group admin. */
  admin: string;
  /** members defines the group members. */
  members: MemberRequestAmino[];
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: string;
}
export interface MsgCreateGroupAminoMsg {
  type: "cosmos-sdk/MsgCreateGroup";
  value: MsgCreateGroupAmino;
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroupSDKType {
  admin: string;
  members: MemberRequestSDKType[];
  metadata: string;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
  /** group_id is the unique ID of the newly created group. */
  group_id: bigint;
}
export interface MsgCreateGroupResponseProtoMsg {
  type_url: "/cosmos.group.v1.MsgCreateGroupResponse";
  value: Uint8Array;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponseAmino {
  /** group_id is the unique ID of the newly created group. */
  group_id: string;
}
export interface MsgCreateGroupResponseAminoMsg {
  type: "cosmos-sdk/MsgCreateGroupResponse";
  value: MsgCreateGroupResponseAmino;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponseSDKType {
  group_id: bigint;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: bigint;
  /**
   * member_updates is the list of members to update,
   * set weight to 0 to remove a member.
   */
  member_updates: MemberRequest[];
}
export interface MsgUpdateGroupMembersProtoMsg {
  type_url: "/cosmos.group.v1.MsgUpdateGroupMembers";
  value: Uint8Array;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembersAmino {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
  /**
   * member_updates is the list of members to update,
   * set weight to 0 to remove a member.
   */
  member_updates: MemberRequestAmino[];
}
export interface MsgUpdateGroupMembersAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMembers";
  value: MsgUpdateGroupMembersAmino;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembersSDKType {
  admin: string;
  group_id: bigint;
  member_updates: MemberRequestSDKType[];
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {}
export interface MsgUpdateGroupMembersResponseProtoMsg {
  type_url: "/cosmos.group.v1.MsgUpdateGroupMembersResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponseAmino {}
export interface MsgUpdateGroupMembersResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMembersResponse";
  value: MsgUpdateGroupMembersResponseAmino;
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponseSDKType {}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
  /** admin is the current account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: bigint;
  /** new_admin is the group new admin account address. */
  new_admin: string;
}
export interface MsgUpdateGroupAdminProtoMsg {
  type_url: "/cosmos.group.v1.MsgUpdateGroupAdmin";
  value: Uint8Array;
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdminAmino {
  /** admin is the current account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** new_admin is the group new admin account address. */
  new_admin: string;
}
export interface MsgUpdateGroupAdminAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupAdmin";
  value: MsgUpdateGroupAdminAmino;
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdminSDKType {
  admin: string;
  group_id: bigint;
  new_admin: string;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {}
export interface MsgUpdateGroupAdminResponseProtoMsg {
  type_url: "/cosmos.group.v1.MsgUpdateGroupAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponseAmino {}
export interface MsgUpdateGroupAdminResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupAdminResponse";
  value: MsgUpdateGroupAdminResponseAmino;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponseSDKType {}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: bigint;
  /** metadata is the updated group's metadata. */
  metadata: string;
}
export interface MsgUpdateGroupMetadataProtoMsg {
  type_url: "/cosmos.group.v1.MsgUpdateGroupMetadata";
  value: Uint8Array;
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadataAmino {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** metadata is the updated group's metadata. */
  metadata: string;
}
export interface MsgUpdateGroupMetadataAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMetadata";
  value: MsgUpdateGroupMetadataAmino;
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadataSDKType {
  admin: string;
  group_id: bigint;
  metadata: string;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {}
export interface MsgUpdateGroupMetadataResponseProtoMsg {
  type_url: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponseAmino {}
export interface MsgUpdateGroupMetadataResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMetadataResponse";
  value: MsgUpdateGroupMetadataResponseAmino;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponseSDKType {}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicy {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: bigint;
  /** metadata is any arbitrary metadata attached to the group policy. */
  metadata: string;
  /** decision_policy specifies the group policy's decision policy. */
  decision_policy?: (ThresholdDecisionPolicy & PercentageDecisionPolicy & Any) | undefined;
}
export interface MsgCreateGroupPolicyProtoMsg {
  type_url: "/cosmos.group.v1.MsgCreateGroupPolicy";
  value: Uint8Array;
}
export type MsgCreateGroupPolicyEncoded = Omit<MsgCreateGroupPolicy, "decision_policy"> & {
  /** decision_policy specifies the group policy's decision policy. */decision_policy?: ThresholdDecisionPolicyProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
};
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicyAmino {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** metadata is any arbitrary metadata attached to the group policy. */
  metadata: string;
  /** decision_policy specifies the group policy's decision policy. */
  decision_policy?: AnyAmino;
}
export interface MsgCreateGroupPolicyAminoMsg {
  type: "cosmos-sdk/MsgCreateGroupPolicy";
  value: MsgCreateGroupPolicyAmino;
}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicySDKType {
  admin: string;
  group_id: bigint;
  metadata: string;
  decision_policy?: ThresholdDecisionPolicySDKType | PercentageDecisionPolicySDKType | AnySDKType | undefined;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponse {
  /** address is the account address of the newly created group policy. */
  address: string;
}
export interface MsgCreateGroupPolicyResponseProtoMsg {
  type_url: "/cosmos.group.v1.MsgCreateGroupPolicyResponse";
  value: Uint8Array;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponseAmino {
  /** address is the account address of the newly created group policy. */
  address: string;
}
export interface MsgCreateGroupPolicyResponseAminoMsg {
  type: "cosmos-sdk/MsgCreateGroupPolicyResponse";
  value: MsgCreateGroupPolicyResponseAmino;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponseSDKType {
  address: string;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdmin {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of the group policy. */
  group_policy_address: string;
  /** new_admin is the new group policy admin. */
  new_admin: string;
}
export interface MsgUpdateGroupPolicyAdminProtoMsg {
  type_url: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin";
  value: Uint8Array;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdminAmino {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of the group policy. */
  group_policy_address: string;
  /** new_admin is the new group policy admin. */
  new_admin: string;
}
export interface MsgUpdateGroupPolicyAdminAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin";
  value: MsgUpdateGroupPolicyAdminAmino;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdminSDKType {
  admin: string;
  group_policy_address: string;
  new_admin: string;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponse {}
export interface MsgUpdateGroupPolicyAdminResponseProtoMsg {
  type_url: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponseAmino {}
export interface MsgUpdateGroupPolicyAdminResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse";
  value: MsgUpdateGroupPolicyAdminResponseAmino;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponseSDKType {}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicy {
  /** admin is the account address of the group and group policy admin. */
  admin: string;
  /** members defines the group members. */
  members: MemberRequest[];
  /** group_metadata is any arbitrary metadata attached to the group. */
  group_metadata: string;
  /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
  group_policy_metadata: string;
  /**
   * group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group
   * and group policy admin.
   */
  group_policy_as_admin: boolean;
  /** decision_policy specifies the group policy's decision policy. */
  decision_policy?: (ThresholdDecisionPolicy & PercentageDecisionPolicy & Any) | undefined;
}
export interface MsgCreateGroupWithPolicyProtoMsg {
  type_url: "/cosmos.group.v1.MsgCreateGroupWithPolicy";
  value: Uint8Array;
}
export type MsgCreateGroupWithPolicyEncoded = Omit<MsgCreateGroupWithPolicy, "decision_policy"> & {
  /** decision_policy specifies the group policy's decision policy. */decision_policy?: ThresholdDecisionPolicyProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
};
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicyAmino {
  /** admin is the account address of the group and group policy admin. */
  admin: string;
  /** members defines the group members. */
  members: MemberRequestAmino[];
  /** group_metadata is any arbitrary metadata attached to the group. */
  group_metadata: string;
  /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
  group_policy_metadata: string;
  /**
   * group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group
   * and group policy admin.
   */
  group_policy_as_admin: boolean;
  /** decision_policy specifies the group policy's decision policy. */
  decision_policy?: AnyAmino;
}
export interface MsgCreateGroupWithPolicyAminoMsg {
  type: "cosmos-sdk/MsgCreateGroupWithPolicy";
  value: MsgCreateGroupWithPolicyAmino;
}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicySDKType {
  admin: string;
  members: MemberRequestSDKType[];
  group_metadata: string;
  group_policy_metadata: string;
  group_policy_as_admin: boolean;
  decision_policy?: ThresholdDecisionPolicySDKType | PercentageDecisionPolicySDKType | AnySDKType | undefined;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponse {
  /** group_id is the unique ID of the newly created group with policy. */
  group_id: bigint;
  /** group_policy_address is the account address of the newly created group policy. */
  group_policy_address: string;
}
export interface MsgCreateGroupWithPolicyResponseProtoMsg {
  type_url: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse";
  value: Uint8Array;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponseAmino {
  /** group_id is the unique ID of the newly created group with policy. */
  group_id: string;
  /** group_policy_address is the account address of the newly created group policy. */
  group_policy_address: string;
}
export interface MsgCreateGroupWithPolicyResponseAminoMsg {
  type: "cosmos-sdk/MsgCreateGroupWithPolicyResponse";
  value: MsgCreateGroupWithPolicyResponseAmino;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponseSDKType {
  group_id: bigint;
  group_policy_address: string;
}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicy {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of group policy. */
  group_policy_address: string;
  /** decision_policy is the updated group policy's decision policy. */
  decision_policy?: (ThresholdDecisionPolicy & PercentageDecisionPolicy & Any) | undefined;
}
export interface MsgUpdateGroupPolicyDecisionPolicyProtoMsg {
  type_url: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy";
  value: Uint8Array;
}
export type MsgUpdateGroupPolicyDecisionPolicyEncoded = Omit<MsgUpdateGroupPolicyDecisionPolicy, "decision_policy"> & {
  /** decision_policy is the updated group policy's decision policy. */decision_policy?: ThresholdDecisionPolicyProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
};
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicyAmino {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of group policy. */
  group_policy_address: string;
  /** decision_policy is the updated group policy's decision policy. */
  decision_policy?: AnyAmino;
}
export interface MsgUpdateGroupPolicyDecisionPolicyAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupDecisionPolicy";
  value: MsgUpdateGroupPolicyDecisionPolicyAmino;
}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicySDKType {
  admin: string;
  group_policy_address: string;
  decision_policy?: ThresholdDecisionPolicySDKType | PercentageDecisionPolicySDKType | AnySDKType | undefined;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponse {}
export interface MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg {
  type_url: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponseAmino {}
export interface MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse";
  value: MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponseSDKType {}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadata {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of group policy. */
  group_policy_address: string;
  /** metadata is the group policy metadata to be updated. */
  metadata: string;
}
export interface MsgUpdateGroupPolicyMetadataProtoMsg {
  type_url: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata";
  value: Uint8Array;
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadataAmino {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of group policy. */
  group_policy_address: string;
  /** metadata is the group policy metadata to be updated. */
  metadata: string;
}
export interface MsgUpdateGroupPolicyMetadataAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata";
  value: MsgUpdateGroupPolicyMetadataAmino;
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadataSDKType {
  admin: string;
  group_policy_address: string;
  metadata: string;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponse {}
export interface MsgUpdateGroupPolicyMetadataResponseProtoMsg {
  type_url: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponseAmino {}
export interface MsgUpdateGroupPolicyMetadataResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse";
  value: MsgUpdateGroupPolicyMetadataResponseAmino;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponseSDKType {}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposal {
  /** group_policy_address is the account address of group policy. */
  group_policy_address: string;
  /**
   * proposers are the account addresses of the proposers.
   * Proposers signatures will be counted as yes votes.
   */
  proposers: string[];
  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
  messages: Any[];
  /**
   * exec defines the mode of execution of the proposal,
   * whether it should be executed immediately on creation or not.
   * If so, proposers signatures are considered as Yes votes.
   */
  exec: Exec;
  /**
   * title is the title of the proposal.
   * 
   * Since: cosmos-sdk 0.47
   */
  title: string;
  /**
   * summary is the summary of the proposal.
   * 
   * Since: cosmos-sdk 0.47
   */
  summary: string;
}
export interface MsgSubmitProposalProtoMsg {
  type_url: "/cosmos.group.v1.MsgSubmitProposal";
  value: Uint8Array;
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposalAmino {
  /** group_policy_address is the account address of group policy. */
  group_policy_address: string;
  /**
   * proposers are the account addresses of the proposers.
   * Proposers signatures will be counted as yes votes.
   */
  proposers: string[];
  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
  messages: AnyAmino[];
  /**
   * exec defines the mode of execution of the proposal,
   * whether it should be executed immediately on creation or not.
   * If so, proposers signatures are considered as Yes votes.
   */
  exec: Exec;
  /**
   * title is the title of the proposal.
   * 
   * Since: cosmos-sdk 0.47
   */
  title: string;
  /**
   * summary is the summary of the proposal.
   * 
   * Since: cosmos-sdk 0.47
   */
  summary: string;
}
export interface MsgSubmitProposalAminoMsg {
  type: "cosmos-sdk/group/MsgSubmitProposal";
  value: MsgSubmitProposalAmino;
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposalSDKType {
  group_policy_address: string;
  proposers: string[];
  metadata: string;
  messages: AnySDKType[];
  exec: Exec;
  title: string;
  summary: string;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  /** proposal is the unique ID of the proposal. */
  proposal_id: bigint;
}
export interface MsgSubmitProposalResponseProtoMsg {
  type_url: "/cosmos.group.v1.MsgSubmitProposalResponse";
  value: Uint8Array;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseAmino {
  /** proposal is the unique ID of the proposal. */
  proposal_id: string;
}
export interface MsgSubmitProposalResponseAminoMsg {
  type: "cosmos-sdk/MsgSubmitProposalResponse";
  value: MsgSubmitProposalResponseAmino;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseSDKType {
  proposal_id: bigint;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposal {
  /** proposal is the unique ID of the proposal. */
  proposal_id: bigint;
  /** address is the admin of the group policy or one of the proposer of the proposal. */
  address: string;
}
export interface MsgWithdrawProposalProtoMsg {
  type_url: "/cosmos.group.v1.MsgWithdrawProposal";
  value: Uint8Array;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposalAmino {
  /** proposal is the unique ID of the proposal. */
  proposal_id: string;
  /** address is the admin of the group policy or one of the proposer of the proposal. */
  address: string;
}
export interface MsgWithdrawProposalAminoMsg {
  type: "cosmos-sdk/group/MsgWithdrawProposal";
  value: MsgWithdrawProposalAmino;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposalSDKType {
  proposal_id: bigint;
  address: string;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponse {}
export interface MsgWithdrawProposalResponseProtoMsg {
  type_url: "/cosmos.group.v1.MsgWithdrawProposalResponse";
  value: Uint8Array;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponseAmino {}
export interface MsgWithdrawProposalResponseAminoMsg {
  type: "cosmos-sdk/MsgWithdrawProposalResponse";
  value: MsgWithdrawProposalResponseAmino;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponseSDKType {}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
  /** proposal is the unique ID of the proposal. */
  proposal_id: bigint;
  /** voter is the voter account address. */
  voter: string;
  /** option is the voter's choice on the proposal. */
  option: VoteOption;
  /** metadata is any arbitrary metadata attached to the vote. */
  metadata: string;
  /**
   * exec defines whether the proposal should be executed
   * immediately after voting or not.
   */
  exec: Exec;
}
export interface MsgVoteProtoMsg {
  type_url: "/cosmos.group.v1.MsgVote";
  value: Uint8Array;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVoteAmino {
  /** proposal is the unique ID of the proposal. */
  proposal_id: string;
  /** voter is the voter account address. */
  voter: string;
  /** option is the voter's choice on the proposal. */
  option: VoteOption;
  /** metadata is any arbitrary metadata attached to the vote. */
  metadata: string;
  /**
   * exec defines whether the proposal should be executed
   * immediately after voting or not.
   */
  exec: Exec;
}
export interface MsgVoteAminoMsg {
  type: "cosmos-sdk/group/MsgVote";
  value: MsgVoteAmino;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVoteSDKType {
  proposal_id: bigint;
  voter: string;
  option: VoteOption;
  metadata: string;
  exec: Exec;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {}
export interface MsgVoteResponseProtoMsg {
  type_url: "/cosmos.group.v1.MsgVoteResponse";
  value: Uint8Array;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponseAmino {}
export interface MsgVoteResponseAminoMsg {
  type: "cosmos-sdk/MsgVoteResponse";
  value: MsgVoteResponseAmino;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
  /** proposal is the unique ID of the proposal. */
  proposal_id: bigint;
  /** executor is the account address used to execute the proposal. */
  executor: string;
}
export interface MsgExecProtoMsg {
  type_url: "/cosmos.group.v1.MsgExec";
  value: Uint8Array;
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExecAmino {
  /** proposal is the unique ID of the proposal. */
  proposal_id: string;
  /** executor is the account address used to execute the proposal. */
  executor: string;
}
export interface MsgExecAminoMsg {
  type: "cosmos-sdk/group/MsgExec";
  value: MsgExecAmino;
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExecSDKType {
  proposal_id: bigint;
  executor: string;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {
  /** result is the final result of the proposal execution. */
  result: ProposalExecutorResult;
}
export interface MsgExecResponseProtoMsg {
  type_url: "/cosmos.group.v1.MsgExecResponse";
  value: Uint8Array;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponseAmino {
  /** result is the final result of the proposal execution. */
  result: ProposalExecutorResult;
}
export interface MsgExecResponseAminoMsg {
  type: "cosmos-sdk/MsgExecResponse";
  value: MsgExecResponseAmino;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponseSDKType {
  result: ProposalExecutorResult;
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroup {
  /** address is the account address of the group member. */
  address: string;
  /** group_id is the unique ID of the group. */
  group_id: bigint;
}
export interface MsgLeaveGroupProtoMsg {
  type_url: "/cosmos.group.v1.MsgLeaveGroup";
  value: Uint8Array;
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroupAmino {
  /** address is the account address of the group member. */
  address: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
}
export interface MsgLeaveGroupAminoMsg {
  type: "cosmos-sdk/group/MsgLeaveGroup";
  value: MsgLeaveGroupAmino;
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroupSDKType {
  address: string;
  group_id: bigint;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponse {}
export interface MsgLeaveGroupResponseProtoMsg {
  type_url: "/cosmos.group.v1.MsgLeaveGroupResponse";
  value: Uint8Array;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponseAmino {}
export interface MsgLeaveGroupResponseAminoMsg {
  type: "cosmos-sdk/MsgLeaveGroupResponse";
  value: MsgLeaveGroupResponseAmino;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponseSDKType {}
function createBaseMsgCreateGroup(): MsgCreateGroup {
  return {
    admin: "",
    members: [],
    metadata: ""
  };
}
export const MsgCreateGroup = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroup",
  encode(message: MsgCreateGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      MemberRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(MemberRequest.decode(reader, reader.uint32()));
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroup {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MemberRequest.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  toJSON(message: MsgCreateGroup): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.members) {
      obj.members = message.members.map(e => e ? MemberRequest.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateGroup>): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    message.admin = object.admin ?? "";
    message.members = object.members?.map(e => MemberRequest.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgCreateGroupAmino): MsgCreateGroup {
    return {
      admin: object.admin,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MemberRequest.fromAmino(e)) : [],
      metadata: object.metadata
    };
  },
  toAmino(message: MsgCreateGroup): MsgCreateGroupAmino {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.members) {
      obj.members = message.members.map(e => e ? MemberRequest.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupAminoMsg): MsgCreateGroup {
    return MsgCreateGroup.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroup): MsgCreateGroupAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroup",
      value: MsgCreateGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupProtoMsg): MsgCreateGroup {
    return MsgCreateGroup.decode(message.value);
  },
  toProto(message: MsgCreateGroup): Uint8Array {
    return MsgCreateGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroup): MsgCreateGroupProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroup",
      value: MsgCreateGroup.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupResponse(): MsgCreateGroupResponse {
  return {
    group_id: BigInt(0)
  };
}
export const MsgCreateGroupResponse = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
  encode(message: MsgCreateGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.group_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.group_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();
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
  fromJSON(object: any): MsgCreateGroupResponse {
    return {
      group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreateGroupResponse): unknown {
    const obj: any = {};
    message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreateGroupResponse>): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateGroupResponseAmino): MsgCreateGroupResponse {
    return {
      group_id: BigInt(object.group_id)
    };
  },
  toAmino(message: MsgCreateGroupResponse): MsgCreateGroupResponseAmino {
    const obj: any = {};
    obj.group_id = message.group_id ? message.group_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupResponseAminoMsg): MsgCreateGroupResponse {
    return MsgCreateGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroupResponse): MsgCreateGroupResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroupResponse",
      value: MsgCreateGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupResponseProtoMsg): MsgCreateGroupResponse {
    return MsgCreateGroupResponse.decode(message.value);
  },
  toProto(message: MsgCreateGroupResponse): Uint8Array {
    return MsgCreateGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupResponse): MsgCreateGroupResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
      value: MsgCreateGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMembers(): MsgUpdateGroupMembers {
  return {
    admin: "",
    group_id: BigInt(0),
    member_updates: []
  };
}
export const MsgUpdateGroupMembers = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
  encode(message: MsgUpdateGroupMembers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.group_id);
    }
    for (const v of message.member_updates) {
      MemberRequest.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMembers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.group_id = reader.uint64();
          break;
        case 3:
          message.member_updates.push(MemberRequest.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupMembers {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
      member_updates: Array.isArray(object?.member_updates) ? object.member_updates.map((e: any) => MemberRequest.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgUpdateGroupMembers): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
    if (message.member_updates) {
      obj.member_updates = message.member_updates.map(e => e ? MemberRequest.toJSON(e) : undefined);
    } else {
      obj.member_updates = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateGroupMembers>): MsgUpdateGroupMembers {
    const message = createBaseMsgUpdateGroupMembers();
    message.admin = object.admin ?? "";
    message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
    message.member_updates = object.member_updates?.map(e => MemberRequest.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUpdateGroupMembersAmino): MsgUpdateGroupMembers {
    return {
      admin: object.admin,
      group_id: BigInt(object.group_id),
      member_updates: Array.isArray(object?.member_updates) ? object.member_updates.map((e: any) => MemberRequest.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.group_id ? message.group_id.toString() : undefined;
    if (message.member_updates) {
      obj.member_updates = message.member_updates.map(e => e ? MemberRequest.toAmino(e) : undefined);
    } else {
      obj.member_updates = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMembersAminoMsg): MsgUpdateGroupMembers {
    return MsgUpdateGroupMembers.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMembers",
      value: MsgUpdateGroupMembers.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupMembersProtoMsg): MsgUpdateGroupMembers {
    return MsgUpdateGroupMembers.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMembers): Uint8Array {
    return MsgUpdateGroupMembers.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
      value: MsgUpdateGroupMembers.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMembersResponse(): MsgUpdateGroupMembersResponse {
  return {};
}
export const MsgUpdateGroupMembersResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
  encode(_: MsgUpdateGroupMembersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMembersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembersResponse();
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
  fromJSON(_: any): MsgUpdateGroupMembersResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupMembersResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateGroupMembersResponse>): MsgUpdateGroupMembersResponse {
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGroupMembersResponseAmino): MsgUpdateGroupMembersResponse {
    return {};
  },
  toAmino(_: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMembersResponseAminoMsg): MsgUpdateGroupMembersResponse {
    return MsgUpdateGroupMembersResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMembersResponse",
      value: MsgUpdateGroupMembersResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupMembersResponseProtoMsg): MsgUpdateGroupMembersResponse {
    return MsgUpdateGroupMembersResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMembersResponse): Uint8Array {
    return MsgUpdateGroupMembersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
      value: MsgUpdateGroupMembersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAdmin(): MsgUpdateGroupAdmin {
  return {
    admin: "",
    group_id: BigInt(0),
    new_admin: ""
  };
}
export const MsgUpdateGroupAdmin = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
  encode(message: MsgUpdateGroupAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.group_id);
    }
    if (message.new_admin !== "") {
      writer.uint32(26).string(message.new_admin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.group_id = reader.uint64();
          break;
        case 3:
          message.new_admin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
      new_admin: isSet(object.new_admin) ? String(object.new_admin) : ""
    };
  },
  toJSON(message: MsgUpdateGroupAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
    message.new_admin !== undefined && (obj.new_admin = message.new_admin);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateGroupAdmin>): MsgUpdateGroupAdmin {
    const message = createBaseMsgUpdateGroupAdmin();
    message.admin = object.admin ?? "";
    message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
    message.new_admin = object.new_admin ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateGroupAdminAmino): MsgUpdateGroupAdmin {
    return {
      admin: object.admin,
      group_id: BigInt(object.group_id),
      new_admin: object.new_admin
    };
  },
  toAmino(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.group_id ? message.group_id.toString() : undefined;
    obj.new_admin = message.new_admin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupAdminAminoMsg): MsgUpdateGroupAdmin {
    return MsgUpdateGroupAdmin.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupAdmin",
      value: MsgUpdateGroupAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupAdminProtoMsg): MsgUpdateGroupAdmin {
    return MsgUpdateGroupAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateGroupAdmin): Uint8Array {
    return MsgUpdateGroupAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
      value: MsgUpdateGroupAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAdminResponse(): MsgUpdateGroupAdminResponse {
  return {};
}
export const MsgUpdateGroupAdminResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
  encode(_: MsgUpdateGroupAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdminResponse();
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
  fromJSON(_: any): MsgUpdateGroupAdminResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateGroupAdminResponse>): MsgUpdateGroupAdminResponse {
    const message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGroupAdminResponseAmino): MsgUpdateGroupAdminResponse {
    return {};
  },
  toAmino(_: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupAdminResponseAminoMsg): MsgUpdateGroupAdminResponse {
    return MsgUpdateGroupAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupAdminResponse",
      value: MsgUpdateGroupAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupAdminResponseProtoMsg): MsgUpdateGroupAdminResponse {
    return MsgUpdateGroupAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupAdminResponse): Uint8Array {
    return MsgUpdateGroupAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
      value: MsgUpdateGroupAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMetadata(): MsgUpdateGroupMetadata {
  return {
    admin: "",
    group_id: BigInt(0),
    metadata: ""
  };
}
export const MsgUpdateGroupMetadata = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
  encode(message: MsgUpdateGroupMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.group_id);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.group_id = reader.uint64();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  toJSON(message: MsgUpdateGroupMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateGroupMetadata>): MsgUpdateGroupMetadata {
    const message = createBaseMsgUpdateGroupMetadata();
    message.admin = object.admin ?? "";
    message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateGroupMetadataAmino): MsgUpdateGroupMetadata {
    return {
      admin: object.admin,
      group_id: BigInt(object.group_id),
      metadata: object.metadata
    };
  },
  toAmino(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.group_id ? message.group_id.toString() : undefined;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMetadataAminoMsg): MsgUpdateGroupMetadata {
    return MsgUpdateGroupMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMetadata",
      value: MsgUpdateGroupMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupMetadataProtoMsg): MsgUpdateGroupMetadata {
    return MsgUpdateGroupMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMetadata): Uint8Array {
    return MsgUpdateGroupMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
      value: MsgUpdateGroupMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMetadataResponse(): MsgUpdateGroupMetadataResponse {
  return {};
}
export const MsgUpdateGroupMetadataResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
  encode(_: MsgUpdateGroupMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadataResponse();
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
  fromJSON(_: any): MsgUpdateGroupMetadataResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateGroupMetadataResponse>): MsgUpdateGroupMetadataResponse {
    const message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGroupMetadataResponseAmino): MsgUpdateGroupMetadataResponse {
    return {};
  },
  toAmino(_: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMetadataResponseAminoMsg): MsgUpdateGroupMetadataResponse {
    return MsgUpdateGroupMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMetadataResponse",
      value: MsgUpdateGroupMetadataResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupMetadataResponseProtoMsg): MsgUpdateGroupMetadataResponse {
    return MsgUpdateGroupMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMetadataResponse): Uint8Array {
    return MsgUpdateGroupMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
      value: MsgUpdateGroupMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupPolicy(): MsgCreateGroupPolicy {
  return {
    admin: "",
    group_id: BigInt(0),
    metadata: "",
    decision_policy: undefined
  };
}
export const MsgCreateGroupPolicy = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
  encode(message: MsgCreateGroupPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.group_id);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.decision_policy !== undefined) {
      Any.encode((message.decision_policy as Any), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.group_id = reader.uint64();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.decision_policy = (Cosmos_groupv1DecisionPolicy_InterfaceDecoder(reader) as Any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      decision_policy: isSet(object.decision_policy) ? Any.fromJSON(object.decision_policy) : undefined
    };
  },
  toJSON(message: MsgCreateGroupPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? Any.toJSON(message.decision_policy) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateGroupPolicy>): MsgCreateGroupPolicy {
    const message = createBaseMsgCreateGroupPolicy();
    message.admin = object.admin ?? "";
    message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
    message.metadata = object.metadata ?? "";
    message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? Any.fromPartial(object.decision_policy) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateGroupPolicyAmino): MsgCreateGroupPolicy {
    return {
      admin: object.admin,
      group_id: BigInt(object.group_id),
      metadata: object.metadata,
      decision_policy: object?.decision_policy ? Cosmos_groupv1DecisionPolicy_FromAmino(object.decision_policy) : undefined
    };
  },
  toAmino(message: MsgCreateGroupPolicy): MsgCreateGroupPolicyAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.group_id ? message.group_id.toString() : undefined;
    obj.metadata = message.metadata;
    obj.decision_policy = message.decision_policy ? Cosmos_groupv1DecisionPolicy_ToAmino((message.decision_policy as Any)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupPolicyAminoMsg): MsgCreateGroupPolicy {
    return MsgCreateGroupPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroupPolicy): MsgCreateGroupPolicyAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroupPolicy",
      value: MsgCreateGroupPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupPolicyProtoMsg): MsgCreateGroupPolicy {
    return MsgCreateGroupPolicy.decode(message.value);
  },
  toProto(message: MsgCreateGroupPolicy): Uint8Array {
    return MsgCreateGroupPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupPolicy): MsgCreateGroupPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
      value: MsgCreateGroupPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupPolicyResponse(): MsgCreateGroupPolicyResponse {
  return {
    address: ""
  };
}
export const MsgCreateGroupPolicyResponse = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
  encode(message: MsgCreateGroupPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicyResponse();
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
  fromJSON(object: any): MsgCreateGroupPolicyResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: MsgCreateGroupPolicyResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateGroupPolicyResponse>): MsgCreateGroupPolicyResponse {
    const message = createBaseMsgCreateGroupPolicyResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgCreateGroupPolicyResponseAmino): MsgCreateGroupPolicyResponse {
    return {
      address: object.address
    };
  },
  toAmino(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupPolicyResponseAminoMsg): MsgCreateGroupPolicyResponse {
    return MsgCreateGroupPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroupPolicyResponse",
      value: MsgCreateGroupPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupPolicyResponseProtoMsg): MsgCreateGroupPolicyResponse {
    return MsgCreateGroupPolicyResponse.decode(message.value);
  },
  toProto(message: MsgCreateGroupPolicyResponse): Uint8Array {
    return MsgCreateGroupPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
      value: MsgCreateGroupPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyAdmin(): MsgUpdateGroupPolicyAdmin {
  return {
    admin: "",
    group_policy_address: "",
    new_admin: ""
  };
}
export const MsgUpdateGroupPolicyAdmin = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
  encode(message: MsgUpdateGroupPolicyAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_policy_address !== "") {
      writer.uint32(18).string(message.group_policy_address);
    }
    if (message.new_admin !== "") {
      writer.uint32(26).string(message.new_admin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.group_policy_address = reader.string();
          break;
        case 3:
          message.new_admin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupPolicyAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
      new_admin: isSet(object.new_admin) ? String(object.new_admin) : ""
    };
  },
  toJSON(message: MsgUpdateGroupPolicyAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.group_policy_address !== undefined && (obj.group_policy_address = message.group_policy_address);
    message.new_admin !== undefined && (obj.new_admin = message.new_admin);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateGroupPolicyAdmin>): MsgUpdateGroupPolicyAdmin {
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    message.admin = object.admin ?? "";
    message.group_policy_address = object.group_policy_address ?? "";
    message.new_admin = object.new_admin ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateGroupPolicyAdminAmino): MsgUpdateGroupPolicyAdmin {
    return {
      admin: object.admin,
      group_policy_address: object.group_policy_address,
      new_admin: object.new_admin
    };
  },
  toAmino(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_policy_address = message.group_policy_address;
    obj.new_admin = message.new_admin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyAdminAminoMsg): MsgUpdateGroupPolicyAdmin {
    return MsgUpdateGroupPolicyAdmin.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
      value: MsgUpdateGroupPolicyAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyAdminProtoMsg): MsgUpdateGroupPolicyAdmin {
    return MsgUpdateGroupPolicyAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyAdmin): Uint8Array {
    return MsgUpdateGroupPolicyAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
      value: MsgUpdateGroupPolicyAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyAdminResponse(): MsgUpdateGroupPolicyAdminResponse {
  return {};
}
export const MsgUpdateGroupPolicyAdminResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
  encode(_: MsgUpdateGroupPolicyAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
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
  fromJSON(_: any): MsgUpdateGroupPolicyAdminResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupPolicyAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateGroupPolicyAdminResponse>): MsgUpdateGroupPolicyAdminResponse {
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGroupPolicyAdminResponseAmino): MsgUpdateGroupPolicyAdminResponse {
    return {};
  },
  toAmino(_: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyAdminResponseAminoMsg): MsgUpdateGroupPolicyAdminResponse {
    return MsgUpdateGroupPolicyAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse",
      value: MsgUpdateGroupPolicyAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyAdminResponseProtoMsg): MsgUpdateGroupPolicyAdminResponse {
    return MsgUpdateGroupPolicyAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyAdminResponse): Uint8Array {
    return MsgUpdateGroupPolicyAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
      value: MsgUpdateGroupPolicyAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupWithPolicy(): MsgCreateGroupWithPolicy {
  return {
    admin: "",
    members: [],
    group_metadata: "",
    group_policy_metadata: "",
    group_policy_as_admin: false,
    decision_policy: undefined
  };
}
export const MsgCreateGroupWithPolicy = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
  encode(message: MsgCreateGroupWithPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      MemberRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.group_metadata !== "") {
      writer.uint32(26).string(message.group_metadata);
    }
    if (message.group_policy_metadata !== "") {
      writer.uint32(34).string(message.group_policy_metadata);
    }
    if (message.group_policy_as_admin === true) {
      writer.uint32(40).bool(message.group_policy_as_admin);
    }
    if (message.decision_policy !== undefined) {
      Any.encode((message.decision_policy as Any), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupWithPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(MemberRequest.decode(reader, reader.uint32()));
          break;
        case 3:
          message.group_metadata = reader.string();
          break;
        case 4:
          message.group_policy_metadata = reader.string();
          break;
        case 5:
          message.group_policy_as_admin = reader.bool();
          break;
        case 6:
          message.decision_policy = (Cosmos_groupv1DecisionPolicy_InterfaceDecoder(reader) as Any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupWithPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MemberRequest.fromJSON(e)) : [],
      group_metadata: isSet(object.group_metadata) ? String(object.group_metadata) : "",
      group_policy_metadata: isSet(object.group_policy_metadata) ? String(object.group_policy_metadata) : "",
      group_policy_as_admin: isSet(object.group_policy_as_admin) ? Boolean(object.group_policy_as_admin) : false,
      decision_policy: isSet(object.decision_policy) ? Any.fromJSON(object.decision_policy) : undefined
    };
  },
  toJSON(message: MsgCreateGroupWithPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.members) {
      obj.members = message.members.map(e => e ? MemberRequest.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.group_metadata !== undefined && (obj.group_metadata = message.group_metadata);
    message.group_policy_metadata !== undefined && (obj.group_policy_metadata = message.group_policy_metadata);
    message.group_policy_as_admin !== undefined && (obj.group_policy_as_admin = message.group_policy_as_admin);
    message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? Any.toJSON(message.decision_policy) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateGroupWithPolicy>): MsgCreateGroupWithPolicy {
    const message = createBaseMsgCreateGroupWithPolicy();
    message.admin = object.admin ?? "";
    message.members = object.members?.map(e => MemberRequest.fromPartial(e)) || [];
    message.group_metadata = object.group_metadata ?? "";
    message.group_policy_metadata = object.group_policy_metadata ?? "";
    message.group_policy_as_admin = object.group_policy_as_admin ?? false;
    message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? Any.fromPartial(object.decision_policy) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateGroupWithPolicyAmino): MsgCreateGroupWithPolicy {
    return {
      admin: object.admin,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MemberRequest.fromAmino(e)) : [],
      group_metadata: object.group_metadata,
      group_policy_metadata: object.group_policy_metadata,
      group_policy_as_admin: object.group_policy_as_admin,
      decision_policy: object?.decision_policy ? Cosmos_groupv1DecisionPolicy_FromAmino(object.decision_policy) : undefined
    };
  },
  toAmino(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyAmino {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.members) {
      obj.members = message.members.map(e => e ? MemberRequest.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.group_metadata = message.group_metadata;
    obj.group_policy_metadata = message.group_policy_metadata;
    obj.group_policy_as_admin = message.group_policy_as_admin;
    obj.decision_policy = message.decision_policy ? Cosmos_groupv1DecisionPolicy_ToAmino((message.decision_policy as Any)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupWithPolicyAminoMsg): MsgCreateGroupWithPolicy {
    return MsgCreateGroupWithPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroupWithPolicy",
      value: MsgCreateGroupWithPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupWithPolicyProtoMsg): MsgCreateGroupWithPolicy {
    return MsgCreateGroupWithPolicy.decode(message.value);
  },
  toProto(message: MsgCreateGroupWithPolicy): Uint8Array {
    return MsgCreateGroupWithPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
      value: MsgCreateGroupWithPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupWithPolicyResponse(): MsgCreateGroupWithPolicyResponse {
  return {
    group_id: BigInt(0),
    group_policy_address: ""
  };
}
export const MsgCreateGroupWithPolicyResponse = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
  encode(message: MsgCreateGroupWithPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.group_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.group_id);
    }
    if (message.group_policy_address !== "") {
      writer.uint32(18).string(message.group_policy_address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupWithPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group_id = reader.uint64();
          break;
        case 2:
          message.group_policy_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupWithPolicyResponse {
    return {
      group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
      group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : ""
    };
  },
  toJSON(message: MsgCreateGroupWithPolicyResponse): unknown {
    const obj: any = {};
    message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
    message.group_policy_address !== undefined && (obj.group_policy_address = message.group_policy_address);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateGroupWithPolicyResponse>): MsgCreateGroupWithPolicyResponse {
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
    message.group_policy_address = object.group_policy_address ?? "";
    return message;
  },
  fromAmino(object: MsgCreateGroupWithPolicyResponseAmino): MsgCreateGroupWithPolicyResponse {
    return {
      group_id: BigInt(object.group_id),
      group_policy_address: object.group_policy_address
    };
  },
  toAmino(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseAmino {
    const obj: any = {};
    obj.group_id = message.group_id ? message.group_id.toString() : undefined;
    obj.group_policy_address = message.group_policy_address;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupWithPolicyResponseAminoMsg): MsgCreateGroupWithPolicyResponse {
    return MsgCreateGroupWithPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroupWithPolicyResponse",
      value: MsgCreateGroupWithPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupWithPolicyResponseProtoMsg): MsgCreateGroupWithPolicyResponse {
    return MsgCreateGroupWithPolicyResponse.decode(message.value);
  },
  toProto(message: MsgCreateGroupWithPolicyResponse): Uint8Array {
    return MsgCreateGroupWithPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
      value: MsgCreateGroupWithPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicy(): MsgUpdateGroupPolicyDecisionPolicy {
  return {
    admin: "",
    group_policy_address: "",
    decision_policy: undefined
  };
}
export const MsgUpdateGroupPolicyDecisionPolicy = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
  encode(message: MsgUpdateGroupPolicyDecisionPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_policy_address !== "") {
      writer.uint32(18).string(message.group_policy_address);
    }
    if (message.decision_policy !== undefined) {
      Any.encode((message.decision_policy as Any), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.group_policy_address = reader.string();
          break;
        case 3:
          message.decision_policy = (Cosmos_groupv1DecisionPolicy_InterfaceDecoder(reader) as Any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupPolicyDecisionPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
      decision_policy: isSet(object.decision_policy) ? Any.fromJSON(object.decision_policy) : undefined
    };
  },
  toJSON(message: MsgUpdateGroupPolicyDecisionPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.group_policy_address !== undefined && (obj.group_policy_address = message.group_policy_address);
    message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? Any.toJSON(message.decision_policy) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateGroupPolicyDecisionPolicy>): MsgUpdateGroupPolicyDecisionPolicy {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    message.admin = object.admin ?? "";
    message.group_policy_address = object.group_policy_address ?? "";
    message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? Any.fromPartial(object.decision_policy) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateGroupPolicyDecisionPolicyAmino): MsgUpdateGroupPolicyDecisionPolicy {
    return {
      admin: object.admin,
      group_policy_address: object.group_policy_address,
      decision_policy: object?.decision_policy ? Cosmos_groupv1DecisionPolicy_FromAmino(object.decision_policy) : undefined
    };
  },
  toAmino(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_policy_address = message.group_policy_address;
    obj.decision_policy = message.decision_policy ? Cosmos_groupv1DecisionPolicy_ToAmino((message.decision_policy as Any)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyDecisionPolicyAminoMsg): MsgUpdateGroupPolicyDecisionPolicy {
    return MsgUpdateGroupPolicyDecisionPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupDecisionPolicy",
      value: MsgUpdateGroupPolicyDecisionPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicyProtoMsg): MsgUpdateGroupPolicyDecisionPolicy {
    return MsgUpdateGroupPolicyDecisionPolicy.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyDecisionPolicy): Uint8Array {
    return MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
      value: MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse(): MsgUpdateGroupPolicyDecisionPolicyResponse {
  return {};
}
export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
  encode(_: MsgUpdateGroupPolicyDecisionPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
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
  fromJSON(_: any): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupPolicyDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateGroupPolicyDecisionPolicyResponse>): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGroupPolicyDecisionPolicyResponseAmino): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return {};
  },
  toAmino(_: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return MsgUpdateGroupPolicyDecisionPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse",
      value: MsgUpdateGroupPolicyDecisionPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return MsgUpdateGroupPolicyDecisionPolicyResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array {
    return MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
      value: MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyMetadata(): MsgUpdateGroupPolicyMetadata {
  return {
    admin: "",
    group_policy_address: "",
    metadata: ""
  };
}
export const MsgUpdateGroupPolicyMetadata = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
  encode(message: MsgUpdateGroupPolicyMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_policy_address !== "") {
      writer.uint32(18).string(message.group_policy_address);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.group_policy_address = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupPolicyMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  toJSON(message: MsgUpdateGroupPolicyMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.group_policy_address !== undefined && (obj.group_policy_address = message.group_policy_address);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateGroupPolicyMetadata>): MsgUpdateGroupPolicyMetadata {
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    message.admin = object.admin ?? "";
    message.group_policy_address = object.group_policy_address ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateGroupPolicyMetadataAmino): MsgUpdateGroupPolicyMetadata {
    return {
      admin: object.admin,
      group_policy_address: object.group_policy_address,
      metadata: object.metadata
    };
  },
  toAmino(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_policy_address = message.group_policy_address;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyMetadataAminoMsg): MsgUpdateGroupPolicyMetadata {
    return MsgUpdateGroupPolicyMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
      value: MsgUpdateGroupPolicyMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyMetadataProtoMsg): MsgUpdateGroupPolicyMetadata {
    return MsgUpdateGroupPolicyMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyMetadata): Uint8Array {
    return MsgUpdateGroupPolicyMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
      value: MsgUpdateGroupPolicyMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyMetadataResponse(): MsgUpdateGroupPolicyMetadataResponse {
  return {};
}
export const MsgUpdateGroupPolicyMetadataResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
  encode(_: MsgUpdateGroupPolicyMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
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
  fromJSON(_: any): MsgUpdateGroupPolicyMetadataResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupPolicyMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateGroupPolicyMetadataResponse>): MsgUpdateGroupPolicyMetadataResponse {
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGroupPolicyMetadataResponseAmino): MsgUpdateGroupPolicyMetadataResponse {
    return {};
  },
  toAmino(_: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyMetadataResponseAminoMsg): MsgUpdateGroupPolicyMetadataResponse {
    return MsgUpdateGroupPolicyMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse",
      value: MsgUpdateGroupPolicyMetadataResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyMetadataResponseProtoMsg): MsgUpdateGroupPolicyMetadataResponse {
    return MsgUpdateGroupPolicyMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyMetadataResponse): Uint8Array {
    return MsgUpdateGroupPolicyMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
      value: MsgUpdateGroupPolicyMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    group_policy_address: "",
    proposers: [],
    metadata: "",
    messages: [],
    exec: 0,
    title: "",
    summary: ""
  };
}
export const MsgSubmitProposal = {
  typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
  encode(message: MsgSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.group_policy_address !== "") {
      writer.uint32(10).string(message.group_policy_address);
    }
    for (const v of message.proposers) {
      writer.uint32(18).string(v!);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    if (message.title !== "") {
      writer.uint32(50).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(58).string(message.summary);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group_policy_address = reader.string();
          break;
        case 2:
          message.proposers.push(reader.string());
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.exec = (reader.int32() as any);
          break;
        case 6:
          message.title = reader.string();
          break;
        case 7:
          message.summary = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposal {
    return {
      group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => String(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1,
      title: isSet(object.title) ? String(object.title) : "",
      summary: isSet(object.summary) ? String(object.summary) : ""
    };
  },
  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    message.group_policy_address !== undefined && (obj.group_policy_address = message.group_policy_address);
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.group_policy_address = object.group_policy_address ?? "";
    message.proposers = object.proposers?.map(e => e) || [];
    message.metadata = object.metadata ?? "";
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.exec = object.exec ?? 0;
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal {
    return {
      group_policy_address: object.group_policy_address,
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => e) : [],
      metadata: object.metadata,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromAmino(e)) : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1,
      title: object.title,
      summary: object.summary
    };
  },
  toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino {
    const obj: any = {};
    obj.group_policy_address = message.group_policy_address;
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    obj.metadata = message.metadata;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = [];
    }
    obj.exec = message.exec;
    obj.title = message.title;
    obj.summary = message.summary;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposal): MsgSubmitProposalAminoMsg {
    return {
      type: "cosmos-sdk/group/MsgSubmitProposal",
      value: MsgSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalProtoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.decode(message.value);
  },
  toProto(message: MsgSubmitProposal): Uint8Array {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposal_id: BigInt(0)
  };
}
export const MsgSubmitProposalResponse = {
  typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
  encode(message: MsgSubmitProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
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
  fromJSON(object: any): MsgSubmitProposalResponse {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse {
    return {
      proposal_id: BigInt(object.proposal_id)
    };
  },
  toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.decode(message.value);
  },
  toProto(message: MsgSubmitProposalResponse): Uint8Array {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawProposal(): MsgWithdrawProposal {
  return {
    proposal_id: BigInt(0),
    address: ""
  };
}
export const MsgWithdrawProposal = {
  typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
  encode(message: MsgWithdrawProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
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
  fromJSON(object: any): MsgWithdrawProposal {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: MsgWithdrawProposal): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawProposal>): MsgWithdrawProposal {
    const message = createBaseMsgWithdrawProposal();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawProposalAmino): MsgWithdrawProposal {
    return {
      proposal_id: BigInt(object.proposal_id),
      address: object.address
    };
  },
  toAmino(message: MsgWithdrawProposal): MsgWithdrawProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawProposalAminoMsg): MsgWithdrawProposal {
    return MsgWithdrawProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawProposal): MsgWithdrawProposalAminoMsg {
    return {
      type: "cosmos-sdk/group/MsgWithdrawProposal",
      value: MsgWithdrawProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawProposalProtoMsg): MsgWithdrawProposal {
    return MsgWithdrawProposal.decode(message.value);
  },
  toProto(message: MsgWithdrawProposal): Uint8Array {
    return MsgWithdrawProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawProposal): MsgWithdrawProposalProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
      value: MsgWithdrawProposal.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawProposalResponse(): MsgWithdrawProposalResponse {
  return {};
}
export const MsgWithdrawProposalResponse = {
  typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
  encode(_: MsgWithdrawProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposalResponse();
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
  fromJSON(_: any): MsgWithdrawProposalResponse {
    return {};
  },
  toJSON(_: MsgWithdrawProposalResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgWithdrawProposalResponse>): MsgWithdrawProposalResponse {
    const message = createBaseMsgWithdrawProposalResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawProposalResponseAmino): MsgWithdrawProposalResponse {
    return {};
  },
  toAmino(_: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawProposalResponseAminoMsg): MsgWithdrawProposalResponse {
    return MsgWithdrawProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawProposalResponse",
      value: MsgWithdrawProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawProposalResponseProtoMsg): MsgWithdrawProposalResponse {
    return MsgWithdrawProposalResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawProposalResponse): Uint8Array {
    return MsgWithdrawProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
      value: MsgWithdrawProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVote(): MsgVote {
  return {
    proposal_id: BigInt(0),
    voter: "",
    option: 0,
    metadata: "",
    exec: 0
  };
}
export const MsgVote = {
  typeUrl: "/cosmos.group.v1.MsgVote",
  encode(message: MsgVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = (reader.int32() as any);
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.exec = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVote {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
    };
  },
  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },
  fromPartial(object: Partial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    message.exec = object.exec ?? 0;
    return message;
  },
  fromAmino(object: MsgVoteAmino): MsgVote {
    return {
      proposal_id: BigInt(object.proposal_id),
      voter: object.voter,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      metadata: object.metadata,
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
    };
  },
  toAmino(message: MsgVote): MsgVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    obj.voter = message.voter;
    obj.option = message.option;
    obj.metadata = message.metadata;
    obj.exec = message.exec;
    return obj;
  },
  fromAminoMsg(object: MsgVoteAminoMsg): MsgVote {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVote): MsgVoteAminoMsg {
    return {
      type: "cosmos-sdk/group/MsgVote",
      value: MsgVote.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteProtoMsg): MsgVote {
    return MsgVote.decode(message.value);
  },
  toProto(message: MsgVote): Uint8Array {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg(message: MsgVote): MsgVoteProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  }
};
function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}
export const MsgVoteResponse = {
  typeUrl: "/cosmos.group.v1.MsgVoteResponse",
  encode(_: MsgVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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
  fromJSON(_: any): MsgVoteResponse {
    return {};
  },
  toJSON(_: MsgVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse {
    return {};
  },
  toAmino(_: MsgVoteResponse): MsgVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse {
    return MsgVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteResponse): MsgVoteResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgVoteResponse",
      value: MsgVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse {
    return MsgVoteResponse.decode(message.value);
  },
  toProto(message: MsgVoteResponse): Uint8Array {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExec(): MsgExec {
  return {
    proposal_id: BigInt(0),
    executor: ""
  };
}
export const MsgExec = {
  typeUrl: "/cosmos.group.v1.MsgExec",
  encode(message: MsgExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
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
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.executor = reader.string();
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
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
      executor: isSet(object.executor) ? String(object.executor) : ""
    };
  },
  toJSON(message: MsgExec): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    message.executor !== undefined && (obj.executor = message.executor);
    return obj;
  },
  fromPartial(object: Partial<MsgExec>): MsgExec {
    const message = createBaseMsgExec();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    message.executor = object.executor ?? "";
    return message;
  },
  fromAmino(object: MsgExecAmino): MsgExec {
    return {
      proposal_id: BigInt(object.proposal_id),
      executor: object.executor
    };
  },
  toAmino(message: MsgExec): MsgExecAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    obj.executor = message.executor;
    return obj;
  },
  fromAminoMsg(object: MsgExecAminoMsg): MsgExec {
    return MsgExec.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExec): MsgExecAminoMsg {
    return {
      type: "cosmos-sdk/group/MsgExec",
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
      typeUrl: "/cosmos.group.v1.MsgExec",
      value: MsgExec.encode(message).finish()
    };
  }
};
function createBaseMsgExecResponse(): MsgExecResponse {
  return {
    result: 0
  };
}
export const MsgExecResponse = {
  typeUrl: "/cosmos.group.v1.MsgExecResponse",
  encode(message: MsgExecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
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
        case 2:
          message.result = (reader.int32() as any);
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
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : -1
    };
  },
  toJSON(message: MsgExecResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
    return obj;
  },
  fromPartial(object: Partial<MsgExecResponse>): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgExecResponseAmino): MsgExecResponse {
    return {
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : -1
    };
  },
  toAmino(message: MsgExecResponse): MsgExecResponseAmino {
    const obj: any = {};
    obj.result = message.result;
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
      typeUrl: "/cosmos.group.v1.MsgExecResponse",
      value: MsgExecResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLeaveGroup(): MsgLeaveGroup {
  return {
    address: "",
    group_id: BigInt(0)
  };
}
export const MsgLeaveGroup = {
  typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
  encode(message: MsgLeaveGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.group_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.group_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaveGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.group_id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLeaveGroup {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgLeaveGroup): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgLeaveGroup>): MsgLeaveGroup {
    const message = createBaseMsgLeaveGroup();
    message.address = object.address ?? "";
    message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgLeaveGroupAmino): MsgLeaveGroup {
    return {
      address: object.address,
      group_id: BigInt(object.group_id)
    };
  },
  toAmino(message: MsgLeaveGroup): MsgLeaveGroupAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.group_id = message.group_id ? message.group_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLeaveGroupAminoMsg): MsgLeaveGroup {
    return MsgLeaveGroup.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLeaveGroup): MsgLeaveGroupAminoMsg {
    return {
      type: "cosmos-sdk/group/MsgLeaveGroup",
      value: MsgLeaveGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLeaveGroupProtoMsg): MsgLeaveGroup {
    return MsgLeaveGroup.decode(message.value);
  },
  toProto(message: MsgLeaveGroup): Uint8Array {
    return MsgLeaveGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgLeaveGroup): MsgLeaveGroupProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
      value: MsgLeaveGroup.encode(message).finish()
    };
  }
};
function createBaseMsgLeaveGroupResponse(): MsgLeaveGroupResponse {
  return {};
}
export const MsgLeaveGroupResponse = {
  typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
  encode(_: MsgLeaveGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaveGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroupResponse();
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
  fromJSON(_: any): MsgLeaveGroupResponse {
    return {};
  },
  toJSON(_: MsgLeaveGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgLeaveGroupResponse>): MsgLeaveGroupResponse {
    const message = createBaseMsgLeaveGroupResponse();
    return message;
  },
  fromAmino(_: MsgLeaveGroupResponseAmino): MsgLeaveGroupResponse {
    return {};
  },
  toAmino(_: MsgLeaveGroupResponse): MsgLeaveGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLeaveGroupResponseAminoMsg): MsgLeaveGroupResponse {
    return MsgLeaveGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLeaveGroupResponse): MsgLeaveGroupResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgLeaveGroupResponse",
      value: MsgLeaveGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLeaveGroupResponseProtoMsg): MsgLeaveGroupResponse {
    return MsgLeaveGroupResponse.decode(message.value);
  },
  toProto(message: MsgLeaveGroupResponse): Uint8Array {
    return MsgLeaveGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLeaveGroupResponse): MsgLeaveGroupResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
      value: MsgLeaveGroupResponse.encode(message).finish()
    };
  }
};
export const Cosmos_groupv1DecisionPolicy_InterfaceDecoder = (input: BinaryReader | Uint8Array): ThresholdDecisionPolicy | PercentageDecisionPolicy | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32(), true);
  switch (data.typeUrl) {
    case "/cosmos.group.v1.ThresholdDecisionPolicy":
      return ThresholdDecisionPolicy.decode(data.value, undefined, true);
    case "/cosmos.group.v1.PercentageDecisionPolicy":
      return PercentageDecisionPolicy.decode(data.value, undefined, true);
    default:
      return data;
  }
};
export const Cosmos_groupv1DecisionPolicy_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "cosmos-sdk/ThresholdDecisionPolicy":
      return Any.fromPartial({
        typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
        value: ThresholdDecisionPolicy.encode(ThresholdDecisionPolicy.fromPartial(ThresholdDecisionPolicy.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/PercentageDecisionPolicy":
      return Any.fromPartial({
        typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
        value: PercentageDecisionPolicy.encode(PercentageDecisionPolicy.fromPartial(PercentageDecisionPolicy.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Cosmos_groupv1DecisionPolicy_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/cosmos.group.v1.ThresholdDecisionPolicy":
      return {
        type: "cosmos-sdk/ThresholdDecisionPolicy",
        value: ThresholdDecisionPolicy.toAmino(ThresholdDecisionPolicy.decode(content.value, undefined))
      };
    case "/cosmos.group.v1.PercentageDecisionPolicy":
      return {
        type: "cosmos-sdk/PercentageDecisionPolicy",
        value: PercentageDecisionPolicy.toAmino(PercentageDecisionPolicy.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};