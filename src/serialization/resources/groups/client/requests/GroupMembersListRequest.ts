/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { ListMode } from "../../../../types/ListMode";

export const GroupMembersListRequest: core.serialization.Schema<
    serializers.GroupMembersListRequest.Raw,
    DevRev.GroupMembersListRequest
> = core.serialization.object({
    cursor: core.serialization.string().optional(),
    group: core.serialization.string(),
    limit: core.serialization.number().optional(),
    mode: ListMode.optional(),
});

export declare namespace GroupMembersListRequest {
    interface Raw {
        cursor?: string | null;
        group: string;
        limit?: number | null;
        mode?: ListMode.Raw | null;
    }
}