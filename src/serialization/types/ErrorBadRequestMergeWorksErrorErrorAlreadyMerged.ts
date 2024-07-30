/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ErrorBadRequestMergeWorksErrorErrorAlreadyMerged: core.serialization.ObjectSchema<
    serializers.ErrorBadRequestMergeWorksErrorErrorAlreadyMerged.Raw,
    DevRev.ErrorBadRequestMergeWorksErrorErrorAlreadyMerged
> = core.serialization.object({
    mergedInto: core.serialization.property("merged_into", core.serialization.string()),
});

export declare namespace ErrorBadRequestMergeWorksErrorErrorAlreadyMerged {
    interface Raw {
        merged_into: string;
    }
}
