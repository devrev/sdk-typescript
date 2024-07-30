/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ErrorBadRequestMissingRequiredField: core.serialization.ObjectSchema<
    serializers.ErrorBadRequestMissingRequiredField.Raw,
    DevRev.ErrorBadRequestMissingRequiredField
> = core.serialization.object({
    fieldName: core.serialization.property("field_name", core.serialization.string()),
});

export declare namespace ErrorBadRequestMissingRequiredField {
    interface Raw {
        field_name: string;
    }
}
