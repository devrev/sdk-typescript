/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const SlaType: core.serialization.Schema<serializers.SlaType.Raw, DevRev.SlaType> = core.serialization.enum_([
    "external",
    "internal",
]);

export declare namespace SlaType {
    type Raw = "external" | "internal";
}
