/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { SetTagWithValue } from "./SetTagWithValue";

export const ConversationsUpdateRequestTags: core.serialization.ObjectSchema<
    serializers.ConversationsUpdateRequestTags.Raw,
    DevRev.ConversationsUpdateRequestTags
> = core.serialization.object({
    set: core.serialization.list(SetTagWithValue).optional(),
});

export declare namespace ConversationsUpdateRequestTags {
    interface Raw {
        set?: SetTagWithValue.Raw[] | null;
    }
}
