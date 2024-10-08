/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const PartsCreateRequestEnhancement: core.serialization.ObjectSchema<
    serializers.PartsCreateRequestEnhancement.Raw,
    DevRev.PartsCreateRequestEnhancement
> = core.serialization.object({
    parentPart: core.serialization.property("parent_part", core.serialization.list(core.serialization.string())),
    targetCloseDate: core.serialization.property("target_close_date", core.serialization.date().optional()),
    targetStartDate: core.serialization.property("target_start_date", core.serialization.date().optional()),
});

export declare namespace PartsCreateRequestEnhancement {
    interface Raw {
        parent_part: string[];
        target_close_date?: string | null;
        target_start_date?: string | null;
    }
}
