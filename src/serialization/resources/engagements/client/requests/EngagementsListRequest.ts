/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { EngagementType } from "../../../../types/EngagementType";
import { ListMode } from "../../../../types/ListMode";

export const EngagementsListRequest: core.serialization.Schema<
    serializers.EngagementsListRequest.Raw,
    DevRev.EngagementsListRequest
> = core.serialization.object({
    type: core.serialization.list(EngagementType).optional(),
    cursor: core.serialization.string().optional(),
    externalRef: core.serialization.property(
        "external_ref",
        core.serialization.list(core.serialization.string()).optional()
    ),
    limit: core.serialization.number().optional(),
    members: core.serialization.list(core.serialization.string()).optional(),
    mode: ListMode.optional(),
    parent: core.serialization.list(core.serialization.string()).optional(),
    sortBy: core.serialization.property("sort_by", core.serialization.list(core.serialization.string()).optional()),
});

export declare namespace EngagementsListRequest {
    interface Raw {
        type?: EngagementType.Raw[] | null;
        cursor?: string | null;
        external_ref?: string[] | null;
        limit?: number | null;
        members?: string[] | null;
        mode?: ListMode.Raw | null;
        parent?: string[] | null;
        sort_by?: string[] | null;
    }
}
