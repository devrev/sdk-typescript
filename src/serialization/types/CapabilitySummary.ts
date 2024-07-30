/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { PartBaseSummary } from "./PartBaseSummary";

export const CapabilitySummary: core.serialization.ObjectSchema<
    serializers.CapabilitySummary.Raw,
    DevRev.CapabilitySummary
> = PartBaseSummary;

export declare namespace CapabilitySummary {
    type Raw = PartBaseSummary.Raw;
}