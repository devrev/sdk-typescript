/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AccountSummary } from "./AccountSummary";
import { WorkBaseSummary } from "./WorkBaseSummary";

export const OpportunitySummary: core.serialization.ObjectSchema<
    serializers.OpportunitySummary.Raw,
    DevRev.OpportunitySummary
> = core.serialization
    .object({
        account: AccountSummary.optional(),
    })
    .extend(WorkBaseSummary);

export declare namespace OpportunitySummary {
    interface Raw extends WorkBaseSummary.Raw {
        account?: AccountSummary.Raw | null;
    }
}
