//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    /** SubmitProposal defines a method to create new proposal given the messages. */
    static SubmitProposal(request, initRequest) {
        return fm.fetchReq(`/cosmos.gov.v1/SubmitProposal`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
     * to execute a legacy content-based proposal.
     */
    static ExecLegacyContent(request, initRequest) {
        return fm.fetchReq(`/cosmos.gov.v1/ExecLegacyContent`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** Vote defines a method to add a vote on a specific proposal. */
    static Vote(request, initRequest) {
        return fm.fetchReq(`/cosmos.gov.v1/Vote`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
    static VoteWeighted(request, initRequest) {
        return fm.fetchReq(`/cosmos.gov.v1/VoteWeighted`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** Deposit defines a method to add deposit on a specific proposal. */
    static Deposit(request, initRequest) {
        return fm.fetchReq(`/cosmos.gov.v1/Deposit`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * UpdateParams defines a governance operation for updating the x/gov module
     * parameters. The authority is defined in the keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    static UpdateParams(request, initRequest) {
        return fm.fetchReq(`/cosmos.gov.v1/UpdateParams`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * CancelProposal defines a method to cancel governance proposal
     *
     * Since: cosmos-sdk 0.50
     */
    static CancelProposal(request, initRequest) {
        return fm.fetchReq(`/cosmos.gov.v1/CancelProposal`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map