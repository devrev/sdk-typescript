/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { EnumValue } from "./EnumValue";
import { UserSummary } from "./UserSummary";
import { AtomBase } from "./AtomBase";

export const SurveyResponse: core.serialization.ObjectSchema<serializers.SurveyResponse.Raw, DevRev.SurveyResponse> =
    core.serialization
        .object({
            dispatchId: core.serialization.property("dispatch_id", core.serialization.string().optional()),
            dispatchedChannels: core.serialization.property(
                "dispatched_channels",
                core.serialization.list(EnumValue).optional()
            ),
            object: core.serialization.string().optional(),
            recipient: UserSummary.optional(),
            response: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
            responseChannel: core.serialization.property("response_channel", EnumValue.optional()),
            stage: EnumValue.optional(),
            survey: core.serialization.string().optional(),
        })
        .extend(AtomBase);

export declare namespace SurveyResponse {
    interface Raw extends AtomBase.Raw {
        dispatch_id?: string | null;
        dispatched_channels?: EnumValue.Raw[] | null;
        object?: string | null;
        recipient?: UserSummary.Raw | null;
        response?: Record<string, unknown> | null;
        response_channel?: EnumValue.Raw | null;
        stage?: EnumValue.Raw | null;
        survey?: string | null;
    }
}
