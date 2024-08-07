/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { AggregationDetailAggregationType } from "../../../../types/AggregationDetailAggregationType";
import { UomsUpdateRequestDimensions } from "../../../../types/UomsUpdateRequestDimensions";

export const UomsUpdateRequest: core.serialization.Schema<serializers.UomsUpdateRequest.Raw, DevRev.UomsUpdateRequest> =
    core.serialization.object({
        aggregationType: core.serialization.property("aggregation_type", AggregationDetailAggregationType.optional()),
        description: core.serialization.string().optional(),
        dimensions: UomsUpdateRequestDimensions.optional(),
        id: core.serialization.string(),
        isEnabled: core.serialization.property("is_enabled", core.serialization.boolean().optional()),
        name: core.serialization.string().optional(),
        partId: core.serialization.property("part_id", core.serialization.string().optional()),
        productId: core.serialization.property("product_id", core.serialization.string().optional()),
        unit: core.serialization.string().optional(),
    });

export declare namespace UomsUpdateRequest {
    interface Raw {
        aggregation_type?: AggregationDetailAggregationType.Raw | null;
        description?: string | null;
        dimensions?: UomsUpdateRequestDimensions.Raw | null;
        id: string;
        is_enabled?: boolean | null;
        name?: string | null;
        part_id?: string | null;
        product_id?: string | null;
        unit?: string | null;
    }
}
