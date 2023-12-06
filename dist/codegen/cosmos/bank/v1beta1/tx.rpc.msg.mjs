//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    /** Send defines a method for sending coins from one account to another account. */
    static Send(request, initRequest) {
        return fm.fetchReq(`/cosmos.bank.v1beta1/Send`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** MultiSend defines a method for sending coins from some accounts to other accounts. */
    static MultiSend(request, initRequest) {
        return fm.fetchReq(`/cosmos.bank.v1beta1/MultiSend`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * UpdateParams defines a governance operation for updating the x/bank module parameters.
     * The authority is defined in the keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    static UpdateParams(request, initRequest) {
        return fm.fetchReq(`/cosmos.bank.v1beta1/UpdateParams`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * SetSendEnabled is a governance operation for setting the SendEnabled flag
     * on any number of Denoms. Only the entries to add or update should be
     * included. Entries that already exist in the store, but that aren't
     * included in this message, will be left unchanged.
     *
     * Since: cosmos-sdk 0.47
     */
    static SetSendEnabled(request, initRequest) {
        return fm.fetchReq(`/cosmos.bank.v1beta1/SetSendEnabled`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map