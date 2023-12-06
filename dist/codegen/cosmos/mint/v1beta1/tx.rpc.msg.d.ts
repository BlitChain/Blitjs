import * as fm from "../../../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export declare class Msg {
    /**
     * UpdateParams defines a governance operation for updating the x/mint module
     * parameters. The authority is defaults to the x/gov module account.
     *
     * Since: cosmos-sdk 0.47
     */
    static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse>;
}
