/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { ListMode } from "../../../../types/ListMode";
import { LinkDescriptorFilter } from "../../../../types/LinkDescriptorFilter";

export const CustomLinkTypeListRequest: core.serialization.Schema<
    serializers.CustomLinkTypeListRequest.Raw,
    DevRev.CustomLinkTypeListRequest
> = core.serialization.object({
    cursor: core.serialization.string().optional(),
    deprecated: core.serialization.boolean().optional(),
    limit: core.serialization.number().optional(),
    mode: ListMode.optional(),
    name: core.serialization.list(core.serialization.string()).optional(),
    sortBy: core.serialization.property("sort_by", core.serialization.list(core.serialization.string()).optional()),
    sourceTypes: core.serialization.property("source_types", LinkDescriptorFilter.optional()),
    targetTypes: core.serialization.property("target_types", LinkDescriptorFilter.optional()),
});

export declare namespace CustomLinkTypeListRequest {
    interface Raw {
        cursor?: string | null;
        deprecated?: boolean | null;
        limit?: number | null;
        mode?: ListMode.Raw | null;
        name?: string[] | null;
        sort_by?: string[] | null;
        source_types?: LinkDescriptorFilter.Raw | null;
        target_types?: LinkDescriptorFilter.Raw | null;
    }
}
