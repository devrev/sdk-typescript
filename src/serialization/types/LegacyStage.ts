/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { CustomStageSummary } from "./CustomStageSummary";
import { CustomStateSummary } from "./CustomStateSummary";

export const LegacyStage: core.serialization.ObjectSchema<serializers.LegacyStage.Raw, DevRev.LegacyStage> =
    core.serialization.object({
        name: core.serialization.string(),
        notes: core.serialization.string().optional(),
        ordinal: core.serialization.number().optional(),
        stage: CustomStageSummary.optional(),
        state: CustomStateSummary.optional(),
    });

export declare namespace LegacyStage {
    interface Raw {
        name: string;
        notes?: string | null;
        ordinal?: number | null;
        stage?: CustomStageSummary.Raw | null;
        state?: CustomStateSummary.Raw | null;
    }
}
