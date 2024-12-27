/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { SetTagWithValue } from "./SetTagWithValue";

export const MeetingsUpdateRequestTags: core.serialization.ObjectSchema<
    serializers.MeetingsUpdateRequestTags.Raw,
    DevRev.MeetingsUpdateRequestTags
> = core.serialization.object({
    set: core.serialization.list(SetTagWithValue).optional(),
});

export declare namespace MeetingsUpdateRequestTags {
    interface Raw {
        set?: SetTagWithValue.Raw[] | null;
    }
}
