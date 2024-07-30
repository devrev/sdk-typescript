/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { DateFilter } from "../../../../types/DateFilter";
import { ListMode } from "../../../../types/ListMode";

export const CodeChangesListRequest: core.serialization.Schema<
    serializers.CodeChangesListRequest.Raw,
    DevRev.CodeChangesListRequest
> = core.serialization.object({
    createdDate: core.serialization.property("created_date", DateFilter.optional()),
    cursor: core.serialization.string().optional(),
    limit: core.serialization.number().optional(),
    mode: ListMode.optional(),
    modifiedDate: core.serialization.property("modified_date", DateFilter.optional()),
});

export declare namespace CodeChangesListRequest {
    interface Raw {
        created_date?: DateFilter.Raw | null;
        cursor?: string | null;
        limit?: number | null;
        mode?: ListMode.Raw | null;
        modified_date?: DateFilter.Raw | null;
    }
}