/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const CustomSchemaFragmentCondition: core.serialization.Schema<
    serializers.CustomSchemaFragmentCondition.Raw,
    DevRev.CustomSchemaFragmentCondition
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace CustomSchemaFragmentCondition {
    type Raw = Record<string, unknown>;
}
