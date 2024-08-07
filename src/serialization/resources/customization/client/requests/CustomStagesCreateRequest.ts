/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const CustomStagesCreateRequest: core.serialization.Schema<
    serializers.CustomStagesCreateRequest.Raw,
    DevRev.CustomStagesCreateRequest
> = core.serialization.object({
    marketplaceRef: core.serialization.property("marketplace_ref", core.serialization.string().optional()),
    name: core.serialization.string(),
    ordinal: core.serialization.number(),
    state: core.serialization.string(),
});

export declare namespace CustomStagesCreateRequest {
    interface Raw {
        marketplace_ref?: string | null;
        name: string;
        ordinal: number;
        state: string;
    }
}
