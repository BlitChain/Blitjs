import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams, MsgCancelProposal } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: Uint8Array;
        };
        execLegacyContent(value: MsgExecLegacyContent): {
            typeUrl: string;
            value: Uint8Array;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: Uint8Array;
        };
        voteWeighted(value: MsgVoteWeighted): {
            typeUrl: string;
            value: Uint8Array;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelProposal(value: MsgCancelProposal): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        execLegacyContent(value: MsgExecLegacyContent): {
            typeUrl: string;
            value: MsgExecLegacyContent;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        voteWeighted(value: MsgVoteWeighted): {
            typeUrl: string;
            value: MsgVoteWeighted;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        cancelProposal(value: MsgCancelProposal): {
            typeUrl: string;
            value: MsgCancelProposal;
        };
    };
    toJSON: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: unknown;
        };
        execLegacyContent(value: MsgExecLegacyContent): {
            typeUrl: string;
            value: unknown;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: unknown;
        };
        voteWeighted(value: MsgVoteWeighted): {
            typeUrl: string;
            value: unknown;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: unknown;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: unknown;
        };
        cancelProposal(value: MsgCancelProposal): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        submitProposal(value: any): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        execLegacyContent(value: any): {
            typeUrl: string;
            value: MsgExecLegacyContent;
        };
        vote(value: any): {
            typeUrl: string;
            value: MsgVote;
        };
        voteWeighted(value: any): {
            typeUrl: string;
            value: MsgVoteWeighted;
        };
        deposit(value: any): {
            typeUrl: string;
            value: MsgDeposit;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        cancelProposal(value: any): {
            typeUrl: string;
            value: MsgCancelProposal;
        };
    };
    fromPartial: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        execLegacyContent(value: MsgExecLegacyContent): {
            typeUrl: string;
            value: MsgExecLegacyContent;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        voteWeighted(value: MsgVoteWeighted): {
            typeUrl: string;
            value: MsgVoteWeighted;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        cancelProposal(value: MsgCancelProposal): {
            typeUrl: string;
            value: MsgCancelProposal;
        };
    };
};
