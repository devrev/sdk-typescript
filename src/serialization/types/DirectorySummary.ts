/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AtomBaseSummary } from "./AtomBaseSummary";

export const DirectorySummary: core.serialization.ObjectSchema<
    serializers.DirectorySummary.Raw,
    DevRev.DirectorySummary
> = AtomBaseSummary;

export declare namespace DirectorySummary {
    type Raw = AtomBaseSummary.Raw;
}