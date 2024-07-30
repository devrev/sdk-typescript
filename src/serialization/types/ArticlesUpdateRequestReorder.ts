/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ArticlesUpdateRequestReorder: core.serialization.ObjectSchema<
    serializers.ArticlesUpdateRequestReorder.Raw,
    DevRev.ArticlesUpdateRequestReorder
> = core.serialization.object({
    after: core.serialization.string().optional(),
    before: core.serialization.string().optional(),
});

export declare namespace ArticlesUpdateRequestReorder {
    interface Raw {
        after?: string | null;
        before?: string | null;
    }
}
