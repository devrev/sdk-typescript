/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { MetricDefinition } from "./MetricDefinition";

export const MetricDefinitionsListResponse: core.serialization.ObjectSchema<
    serializers.MetricDefinitionsListResponse.Raw,
    DevRev.MetricDefinitionsListResponse
> = core.serialization.object({
    metricDefinitions: core.serialization.property("metric_definitions", core.serialization.list(MetricDefinition)),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
    prevCursor: core.serialization.property("prev_cursor", core.serialization.string().optional()),
});

export declare namespace MetricDefinitionsListResponse {
    interface Raw {
        metric_definitions: MetricDefinition.Raw[];
        next_cursor?: string | null;
        prev_cursor?: string | null;
    }
}
