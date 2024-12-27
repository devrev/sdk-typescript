/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const SchemaFieldUenumValue: core.serialization.ObjectSchema<
    serializers.SchemaFieldUenumValue.Raw,
    DevRev.SchemaFieldUenumValue
> = core.serialization.object({
    id: core.serialization.number(),
    isDeprecated: core.serialization.property("is_deprecated", core.serialization.boolean().optional()),
    label: core.serialization.string(),
    ordinal: core.serialization.number(),
    tooltip: core.serialization.string().optional(),
});

export declare namespace SchemaFieldUenumValue {
    interface Raw {
        id: number;
        is_deprecated?: boolean | null;
        label: string;
        ordinal: number;
        tooltip?: string | null;
    }
}
