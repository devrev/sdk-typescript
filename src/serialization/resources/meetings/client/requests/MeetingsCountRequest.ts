/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { MeetingChannel } from "../../../../types/MeetingChannel";
import { DateFilter } from "../../../../types/DateFilter";
import { MeetingsFilterLinkSummaryFilter } from "../../../../types/MeetingsFilterLinkSummaryFilter";
import { MeetingState } from "../../../../types/MeetingState";

export const MeetingsCountRequest: core.serialization.Schema<
    serializers.MeetingsCountRequest.Raw,
    DevRev.MeetingsCountRequest
> = core.serialization.object({
    channel: core.serialization.list(MeetingChannel).optional(),
    createdBy: core.serialization.property(
        "created_by",
        core.serialization.list(core.serialization.string()).optional()
    ),
    createdDate: core.serialization.property("created_date", DateFilter.optional()),
    customFields: core.serialization.property(
        "custom_fields",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    externalRef: core.serialization.property(
        "external_ref",
        core.serialization.list(core.serialization.string()).optional()
    ),
    links: core.serialization.list(MeetingsFilterLinkSummaryFilter).optional(),
    members: core.serialization.list(core.serialization.string()).optional(),
    modifiedDate: core.serialization.property("modified_date", DateFilter.optional()),
    organizer: core.serialization.list(core.serialization.string()).optional(),
    parent: core.serialization.list(core.serialization.string()).optional(),
    state: core.serialization.list(MeetingState).optional(),
    tags: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace MeetingsCountRequest {
    interface Raw {
        channel?: MeetingChannel.Raw[] | null;
        created_by?: string[] | null;
        created_date?: DateFilter.Raw | null;
        custom_fields?: Record<string, unknown> | null;
        external_ref?: string[] | null;
        links?: MeetingsFilterLinkSummaryFilter.Raw[] | null;
        members?: string[] | null;
        modified_date?: DateFilter.Raw | null;
        organizer?: string[] | null;
        parent?: string[] | null;
        state?: MeetingState.Raw[] | null;
        tags?: string[] | null;
    }
}
