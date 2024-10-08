/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const SchemaFieldSummaryViewUiMetadata: core.serialization.ObjectSchema<
    serializers.SchemaFieldSummaryViewUiMetadata.Raw,
    DevRev.SchemaFieldSummaryViewUiMetadata
> = core.serialization.object({
    isHidden: core.serialization.property("is_hidden", core.serialization.boolean().optional()),
});

export declare namespace SchemaFieldSummaryViewUiMetadata {
    interface Raw {
        is_hidden?: boolean | null;
    }
}
