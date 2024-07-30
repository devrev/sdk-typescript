/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ErrorBadRequestMissingDependencyDependency: core.serialization.ObjectSchema<
    serializers.ErrorBadRequestMissingDependencyDependency.Raw,
    DevRev.ErrorBadRequestMissingDependencyDependency
> = core.serialization.object({
    fieldName: core.serialization.property("field_name", core.serialization.string()),
    fieldValue: core.serialization.property("field_value", core.serialization.string()),
});

export declare namespace ErrorBadRequestMissingDependencyDependency {
    interface Raw {
        field_name: string;
        field_value: string;
    }
}