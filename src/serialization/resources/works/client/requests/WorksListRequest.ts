/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { WorkType } from "../../../../types/WorkType";
import { DateFilter } from "../../../../types/DateFilter";
import { WorksFilterIssue } from "../../../../types/WorksFilterIssue";
import { ListMode } from "../../../../types/ListMode";
import { WorksFilterOpportunity } from "../../../../types/WorksFilterOpportunity";
import { StageFilter } from "../../../../types/StageFilter";
import { StagedInfoFilter } from "../../../../types/StagedInfoFilter";
import { SyncMetadataFilter } from "../../../../types/SyncMetadataFilter";
import { WorksFilterTicket } from "../../../../types/WorksFilterTicket";

export const WorksListRequest: core.serialization.Schema<serializers.WorksListRequest.Raw, DevRev.WorksListRequest> =
    core.serialization.object({
        type: core.serialization.list(WorkType).optional(),
        actualCloseDate: core.serialization.property("actual_close_date", DateFilter.optional()),
        appliesToPart: core.serialization.property(
            "applies_to_part",
            core.serialization.list(core.serialization.string()).optional()
        ),
        createdBy: core.serialization.property(
            "created_by",
            core.serialization.list(core.serialization.string()).optional()
        ),
        createdDate: core.serialization.property("created_date", DateFilter.optional()),
        cursor: core.serialization.string().optional(),
        customFields: core.serialization.property(
            "custom_fields",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        issue: WorksFilterIssue.optional(),
        limit: core.serialization.number().optional(),
        mode: ListMode.optional(),
        modifiedDate: core.serialization.property("modified_date", DateFilter.optional()),
        opportunity: WorksFilterOpportunity.optional(),
        ownedBy: core.serialization.property(
            "owned_by",
            core.serialization.list(core.serialization.string()).optional()
        ),
        reportedBy: core.serialization.property(
            "reported_by",
            core.serialization.list(core.serialization.string()).optional()
        ),
        sortBy: core.serialization.property("sort_by", core.serialization.list(core.serialization.string()).optional()),
        stage: StageFilter.optional(),
        stagedInfo: core.serialization.property("staged_info", StagedInfoFilter.optional()),
        syncMetadata: core.serialization.property("sync_metadata", SyncMetadataFilter.optional()),
        tags: core.serialization.list(core.serialization.string()).optional(),
        targetCloseDate: core.serialization.property("target_close_date", DateFilter.optional()),
        ticket: WorksFilterTicket.optional(),
    });

export declare namespace WorksListRequest {
    interface Raw {
        type?: WorkType.Raw[] | null;
        actual_close_date?: DateFilter.Raw | null;
        applies_to_part?: string[] | null;
        created_by?: string[] | null;
        created_date?: DateFilter.Raw | null;
        cursor?: string | null;
        custom_fields?: Record<string, unknown> | null;
        issue?: WorksFilterIssue.Raw | null;
        limit?: number | null;
        mode?: ListMode.Raw | null;
        modified_date?: DateFilter.Raw | null;
        opportunity?: WorksFilterOpportunity.Raw | null;
        owned_by?: string[] | null;
        reported_by?: string[] | null;
        sort_by?: string[] | null;
        stage?: StageFilter.Raw | null;
        staged_info?: StagedInfoFilter.Raw | null;
        sync_metadata?: SyncMetadataFilter.Raw | null;
        tags?: string[] | null;
        target_close_date?: DateFilter.Raw | null;
        ticket?: WorksFilterTicket.Raw | null;
    }
}
