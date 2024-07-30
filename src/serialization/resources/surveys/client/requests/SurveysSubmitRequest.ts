/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const SurveysSubmitRequest: core.serialization.Schema<
    serializers.SurveysSubmitRequest.Raw,
    DevRev.SurveysSubmitRequest
> = core.serialization.object({
    dispatchId: core.serialization.property("dispatch_id", core.serialization.string().optional()),
    dispatchedChannels: core.serialization.property(
        "dispatched_channels",
        core.serialization.list(core.serialization.number()).optional()
    ),
    object: core.serialization.string(),
    recipient: core.serialization.string().optional(),
    response: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    responseScore: core.serialization.property("response_score", core.serialization.number().optional()),
    sourceChannel: core.serialization.property("source_channel", core.serialization.string().optional()),
    stage: core.serialization.number().optional(),
    survey: core.serialization.string(),
});

export declare namespace SurveysSubmitRequest {
    interface Raw {
        dispatch_id?: string | null;
        dispatched_channels?: number[] | null;
        object: string;
        recipient?: string | null;
        response?: Record<string, unknown> | null;
        response_score?: number | null;
        source_channel?: string | null;
        stage?: number | null;
        survey: string;
    }
}
