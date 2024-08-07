/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const FieldValueDateList: core.serialization.ObjectSchema<
    serializers.FieldValueDateList.Raw,
    DevRev.FieldValueDateList
> = core.serialization.object({
    values: core.serialization.list(core.serialization.string()),
});

export declare namespace FieldValueDateList {
    interface Raw {
        values: string[];
    }
}
