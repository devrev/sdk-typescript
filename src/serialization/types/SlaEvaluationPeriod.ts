/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const SlaEvaluationPeriod: core.serialization.Schema<
    serializers.SlaEvaluationPeriod.Raw,
    DevRev.SlaEvaluationPeriod
> = core.serialization.enum_(["monthly", "quarterly", "weekly", "yearly"]);

export declare namespace SlaEvaluationPeriod {
    type Raw = "monthly" | "quarterly" | "weekly" | "yearly";
}
