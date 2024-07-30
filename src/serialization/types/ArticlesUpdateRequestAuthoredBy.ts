/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ArticlesUpdateRequestAuthoredBy: core.serialization.ObjectSchema<
    serializers.ArticlesUpdateRequestAuthoredBy.Raw,
    DevRev.ArticlesUpdateRequestAuthoredBy
> = core.serialization.object({
    set: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ArticlesUpdateRequestAuthoredBy {
    interface Raw {
        set?: string[] | null;
    }
}
