/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { CustomStageSummary } from "./CustomStageSummary";

export const StageSummary: core.serialization.ObjectSchema<serializers.StageSummary.Raw, DevRev.StageSummary> =
    core.serialization.object({
        stage: CustomStageSummary.optional(),
    });

export declare namespace StageSummary {
    interface Raw {
        stage?: CustomStageSummary.Raw | null;
    }
}
