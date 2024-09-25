/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AtomBaseSummary } from "./AtomBaseSummary";

export const PreferencesBaseSummary: core.serialization.ObjectSchema<
    serializers.PreferencesBaseSummary.Raw,
    DevRev.PreferencesBaseSummary
> = AtomBaseSummary;

export declare namespace PreferencesBaseSummary {
    type Raw = AtomBaseSummary.Raw;
}
