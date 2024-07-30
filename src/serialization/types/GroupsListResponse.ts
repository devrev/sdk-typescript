/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Group } from "./Group";

export const GroupsListResponse: core.serialization.ObjectSchema<
    serializers.GroupsListResponse.Raw,
    DevRev.GroupsListResponse
> = core.serialization.object({
    groups: core.serialization.list(Group),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
    prevCursor: core.serialization.property("prev_cursor", core.serialization.string().optional()),
});

export declare namespace GroupsListResponse {
    interface Raw {
        groups: Group.Raw[];
        next_cursor?: string | null;
        prev_cursor?: string | null;
    }
}