/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { MetricDefinitionSummary } from "./MetricDefinitionSummary";
import { OrgScheduleSummary } from "./OrgScheduleSummary";

export const ArchetypeMetricTarget: core.serialization.ObjectSchema<
    serializers.ArchetypeMetricTarget.Raw,
    DevRev.ArchetypeMetricTarget
> = core.serialization.object({
    isOutOfSchedule: core.serialization.property("is_out_of_schedule", core.serialization.boolean().optional()),
    metricDefinition: core.serialization.property("metric_definition", MetricDefinitionSummary),
    orgSchedule: core.serialization.property("org_schedule", OrgScheduleSummary.optional()),
    remainingTime: core.serialization.property("remaining_time", core.serialization.number().optional()),
    targetTime: core.serialization.property("target_time", core.serialization.date().optional()),
    warningTargetTime: core.serialization.property("warning_target_time", core.serialization.date().optional()),
});

export declare namespace ArchetypeMetricTarget {
    interface Raw {
        is_out_of_schedule?: boolean | null;
        metric_definition: MetricDefinitionSummary.Raw;
        org_schedule?: OrgScheduleSummary.Raw | null;
        remaining_time?: number | null;
        target_time?: string | null;
        warning_target_time?: string | null;
    }
}