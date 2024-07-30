/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { VistaBaseSummary } from "./VistaBaseSummary";

export const DynamicVistaSummary: core.serialization.ObjectSchema<
    serializers.DynamicVistaSummary.Raw,
    DevRev.DynamicVistaSummary
> = VistaBaseSummary;

export declare namespace DynamicVistaSummary {
    type Raw = VistaBaseSummary.Raw;
}