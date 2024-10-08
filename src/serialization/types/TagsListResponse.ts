/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Tag } from "./Tag";

export const TagsListResponse: core.serialization.ObjectSchema<
    serializers.TagsListResponse.Raw,
    DevRev.TagsListResponse
> = core.serialization.object({
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
    prevCursor: core.serialization.property("prev_cursor", core.serialization.string().optional()),
    tags: core.serialization.list(Tag),
});

export declare namespace TagsListResponse {
    interface Raw {
        next_cursor?: string | null;
        prev_cursor?: string | null;
        tags: Tag.Raw[];
    }
}
