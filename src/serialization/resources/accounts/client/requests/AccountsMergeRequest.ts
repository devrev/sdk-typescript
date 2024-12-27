/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const AccountsMergeRequest: core.serialization.Schema<
    serializers.AccountsMergeRequest.Raw,
    DevRev.AccountsMergeRequest
> = core.serialization.object({
    primaryAccount: core.serialization.property("primary_account", core.serialization.string()),
    secondaryAccount: core.serialization.property("secondary_account", core.serialization.string()),
});

export declare namespace AccountsMergeRequest {
    interface Raw {
        primary_account: string;
        secondary_account: string;
    }
}
