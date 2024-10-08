/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const StockSchemaFragmentsListRequestFilterPreset: core.serialization.Schema<
    serializers.StockSchemaFragmentsListRequestFilterPreset.Raw,
    DevRev.StockSchemaFragmentsListRequestFilterPreset
> = core.serialization.enum_(["customizable_types_preset", "no_preset"]);

export declare namespace StockSchemaFragmentsListRequestFilterPreset {
    type Raw = "customizable_types_preset" | "no_preset";
}
