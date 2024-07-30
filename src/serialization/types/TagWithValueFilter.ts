/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const TagWithValueFilter: core.serialization.ObjectSchema<
    serializers.TagWithValueFilter.Raw,
    DevRev.TagWithValueFilter
> = core.serialization.object({
    id: core.serialization.string().optional(),
    value: core.serialization.string().optional(),
});

export declare namespace TagWithValueFilter {
    interface Raw {
        id?: string | null;
        value?: string | null;
    }
}