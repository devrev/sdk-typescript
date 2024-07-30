/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { DateTimeFilter } from "../../../../types/DateTimeFilter";
import { ListMode } from "../../../../types/ListMode";

export const AccountsListRequest: core.serialization.Schema<
    serializers.AccountsListRequest.Raw,
    DevRev.AccountsListRequest
> = core.serialization.object({
    createdBy: core.serialization.property(
        "created_by",
        core.serialization.list(core.serialization.string()).optional()
    ),
    createdDate: core.serialization.property("created_date", DateTimeFilter.optional()),
    cursor: core.serialization.string().optional(),
    customFields: core.serialization.property(
        "custom_fields",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    displayName: core.serialization.property(
        "display_name",
        core.serialization.list(core.serialization.string()).optional()
    ),
    domains: core.serialization.list(core.serialization.string()).optional(),
    externalRefs: core.serialization.property(
        "external_refs",
        core.serialization.list(core.serialization.string()).optional()
    ),
    limit: core.serialization.number().optional(),
    mode: ListMode.optional(),
    modifiedDate: core.serialization.property("modified_date", DateTimeFilter.optional()),
    ownedBy: core.serialization.property("owned_by", core.serialization.list(core.serialization.string()).optional()),
    sortBy: core.serialization.property("sort_by", core.serialization.list(core.serialization.string()).optional()),
    stage: core.serialization.list(core.serialization.string()).optional(),
    tags: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace AccountsListRequest {
    interface Raw {
        created_by?: string[] | null;
        created_date?: DateTimeFilter.Raw | null;
        cursor?: string | null;
        custom_fields?: Record<string, unknown> | null;
        display_name?: string[] | null;
        domains?: string[] | null;
        external_refs?: string[] | null;
        limit?: number | null;
        mode?: ListMode.Raw | null;
        modified_date?: DateTimeFilter.Raw | null;
        owned_by?: string[] | null;
        sort_by?: string[] | null;
        stage?: string[] | null;
        tags?: string[] | null;
    }
}
