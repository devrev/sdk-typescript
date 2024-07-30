/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { UnitType } from "./UnitType";

export const Unit: core.serialization.ObjectSchema<serializers.Unit.Raw, DevRev.Unit> = core.serialization.object({
    type: UnitType,
    name: core.serialization.string(),
});

export declare namespace Unit {
    interface Raw {
        type: UnitType.Raw;
        name: string;
    }
}