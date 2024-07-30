/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ErrorBadRequestMergeWorksErrorErrorInvalidStageTransition: core.serialization.ObjectSchema<
    serializers.ErrorBadRequestMergeWorksErrorErrorInvalidStageTransition.Raw,
    DevRev.ErrorBadRequestMergeWorksErrorErrorInvalidStageTransition
> = core.serialization.object({
    currentStage: core.serialization.property("current_stage", core.serialization.string()),
    requestedStage: core.serialization.property("requested_stage", core.serialization.string()),
});

export declare namespace ErrorBadRequestMergeWorksErrorErrorInvalidStageTransition {
    interface Raw {
        current_stage: string;
        requested_stage: string;
    }
}