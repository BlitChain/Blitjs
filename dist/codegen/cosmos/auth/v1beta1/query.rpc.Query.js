"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.Query = void 0;
//@ts-nocheck
const fm = __importStar(require("../../../grpc-gateway"));
class Query {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    static Accounts(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/accounts?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Account returns account details based on address. */
    static Account(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/accounts/${request["address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Params queries all parameters. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ModuleAccounts returns all the existing module accounts. */
    static ModuleAccounts(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/module_accounts?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Bech32 queries bech32Prefix */
    static Bech32Prefix(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/bech32?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** AddressBytesToString converts Account Address bytes to string */
    static AddressBytesToString(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/bech32/${request["address_bytes"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address_bytes"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** AddressStringToBytes converts Address string to bytes */
    static AddressStringToBytes(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/bech32/${request["address_string"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address_string"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
}
exports.Query = Query;
class QueryClientImpl {
    url;
    constructor(url) {
        this.url = url;
    }
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    async Accounts(req, headers) {
        return Query.Accounts(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Account returns account details based on address. */
    async Account(req, headers) {
        return Query.Account(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Params queries all parameters. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ModuleAccounts returns all the existing module accounts. */
    async ModuleAccounts(req, headers) {
        return Query.ModuleAccounts(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Bech32 queries bech32Prefix */
    async Bech32Prefix(req, headers) {
        return Query.Bech32Prefix(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** AddressBytesToString converts Account Address bytes to string */
    async AddressBytesToString(req, headers) {
        return Query.AddressBytesToString(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** AddressStringToBytes converts Address string to bytes */
    async AddressStringToBytes(req, headers) {
        return Query.AddressStringToBytes(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map