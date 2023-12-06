"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
//@ts-nocheck
const helpers_1 = require("../../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.validatorDistributionInfo = this.validatorDistributionInfo.bind(this);
        this.validatorOutstandingRewards = this.validatorOutstandingRewards.bind(this);
        this.validatorCommission = this.validatorCommission.bind(this);
        this.validatorSlashes = this.validatorSlashes.bind(this);
        this.delegationRewards = this.delegationRewards.bind(this);
        this.delegationTotalRewards = this.delegationTotalRewards.bind(this);
        this.delegatorValidators = this.delegatorValidators.bind(this);
        this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
        this.communityPool = this.communityPool.bind(this);
    }
    /* Params queries params of the distribution module. */
    async params(_params = {}) {
        const endpoint = `cosmos/distribution/v1beta1/params`;
        return await this.req.get(endpoint);
    }
    /* ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
    async validatorDistributionInfo(params) {
        const endpoint = `cosmos/distribution/v1beta1/validators/${params.validator_address}`;
        return await this.req.get(endpoint);
    }
    /* ValidatorOutstandingRewards queries rewards of a validator address. */
    async validatorOutstandingRewards(params) {
        const endpoint = `cosmos/distribution/v1beta1/validators/${params.validator_address}/outstanding_rewards`;
        return await this.req.get(endpoint);
    }
    /* ValidatorCommission queries accumulated commission for a validator. */
    async validatorCommission(params) {
        const endpoint = `cosmos/distribution/v1beta1/validators/${params.validator_address}/commission`;
        return await this.req.get(endpoint);
    }
    /* ValidatorSlashes queries slash events of a validator. */
    async validatorSlashes(params) {
        const options = {
            params: {}
        };
        if (typeof params?.starting_height !== "undefined") {
            options.params.starting_height = params.starting_height;
        }
        if (typeof params?.ending_height !== "undefined") {
            options.params.ending_height = params.ending_height;
        }
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `cosmos/distribution/v1beta1/validators/${params.validator_address}/slashes`;
        return await this.req.get(endpoint, options);
    }
    /* DelegationRewards queries the total rewards accrued by a delegation. */
    async delegationRewards(params) {
        const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegator_address}/rewards/${params.validator_address}`;
        return await this.req.get(endpoint);
    }
    /* DelegationTotalRewards queries the total rewards accrued by each
     validator. */
    async delegationTotalRewards(params) {
        const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegator_address}/rewards`;
        return await this.req.get(endpoint);
    }
    /* DelegatorValidators queries the validators of a delegator. */
    async delegatorValidators(params) {
        const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegator_address}/validators`;
        return await this.req.get(endpoint);
    }
    /* DelegatorWithdrawAddress queries withdraw address of a delegator. */
    async delegatorWithdrawAddress(params) {
        const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegator_address}/withdraw_address`;
        return await this.req.get(endpoint);
    }
    /* CommunityPool queries the community pool coins. */
    async communityPool(_params = {}) {
        const endpoint = `cosmos/distribution/v1beta1/community_pool`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map