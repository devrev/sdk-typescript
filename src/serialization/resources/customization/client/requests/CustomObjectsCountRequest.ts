/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const CustomObjectsCountRequest: core.serialization.Schema<
    serializers.CustomObjectsCountRequest.Raw,
    DevRev.CustomObjectsCountRequest
> = core.serialization.object({
    filters: core.serialization.list(core.serialization.unknown()).optional(),
    leafType: core.serialization.property("leaf_type", core.serialization.string()),
});

export declare namespace CustomObjectsCountRequest {
    interface Raw {
        filters?: unknown[] | null;
        leaf_type: string;
    }
}
