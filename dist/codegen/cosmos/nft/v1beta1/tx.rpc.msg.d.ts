import * as fm from "../../../grpc-gateway";
import { MsgSend, MsgSendResponse } from "./tx";
export declare class Msg {
    /** Send defines a method to send a nft from one account to another account. */
    static Send(request: MsgSend, initRequest?: fm.InitReq): Promise<MsgSendResponse>;
}
