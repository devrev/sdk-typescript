/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { GroupMembersListResponseMember } from "./GroupMembersListResponseMember";

export const GroupMembersListResponse: core.serialization.ObjectSchema<
    serializers.GroupMembersListResponse.Raw,
    DevRev.GroupMembersListResponse
> = core.serialization.object({
    members: core.serialization.list(GroupMembersListResponseMember),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
    prevCursor: core.serialization.property("prev_cursor", core.serialization.string().optional()),
});

export declare namespace GroupMembersListResponse {
    interface Raw {
        members: GroupMembersListResponseMember.Raw[];
        next_cursor?: string | null;
        prev_cursor?: string | null;
    }
}
