/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { AggregationDetail } from "../../../../types/AggregationDetail";
import { Unit } from "../../../../types/Unit";

export const UomsCreateRequest: core.serialization.Schema<serializers.UomsCreateRequest.Raw, DevRev.UomsCreateRequest> =
    core.serialization.object({
        aggregationDetail: core.serialization.property("aggregation_detail", AggregationDetail),
        description: core.serialization.string().optional(),
        dimensions: core.serialization.list(core.serialization.string()).optional(),
        metricName: core.serialization.property("metric_name", core.serialization.string()),
        name: core.serialization.string(),
        partId: core.serialization.property("part_id", core.serialization.string().optional()),
        productId: core.serialization.property("product_id", core.serialization.string()),
        unit: Unit,
    });

export declare namespace UomsCreateRequest {
    interface Raw {
        aggregation_detail: AggregationDetail.Raw;
        description?: string | null;
        dimensions?: string[] | null;
        metric_name: string;
        name: string;
        part_id?: string | null;
        product_id: string;
        unit: Unit.Raw;
    }
}