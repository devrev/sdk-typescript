/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const SlaSummaryStage: core.serialization.Schema<serializers.SlaSummaryStage.Raw, DevRev.SlaSummaryStage> =
    core.serialization.enum_(["breached", "completed", "paused", "running", "warning"]);

export declare namespace SlaSummaryStage {
    type Raw = "breached" | "completed" | "paused" | "running" | "warning";
}