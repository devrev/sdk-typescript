/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { MetricDefinitionStatus } from "../../../../types/MetricDefinitionStatus";

export const MetricDefinitionsUpdateRequest: core.serialization.Schema<
    serializers.MetricDefinitionsUpdateRequest.Raw,
    DevRev.MetricDefinitionsUpdateRequest
> = core.serialization.object({
    description: core.serialization.string().optional(),
    id: core.serialization.string(),
    name: core.serialization.string().optional(),
    status: MetricDefinitionStatus.optional(),
});

export declare namespace MetricDefinitionsUpdateRequest {
    interface Raw {
        description?: string | null;
        id: string;
        name?: string | null;
        status?: MetricDefinitionStatus.Raw | null;
    }
}
