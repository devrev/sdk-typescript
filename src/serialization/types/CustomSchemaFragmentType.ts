/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const CustomSchemaFragmentType: core.serialization.Schema<
    serializers.CustomSchemaFragmentType.Raw,
    DevRev.CustomSchemaFragmentType
> = core.serialization.enum_(["app_fragment", "custom_type_fragment", "tenant_fragment"]);

export declare namespace CustomSchemaFragmentType {
    type Raw = "app_fragment" | "custom_type_fragment" | "tenant_fragment";
}