/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AtomBaseSummary } from "./AtomBaseSummary";

export const EngagementSummary: core.serialization.ObjectSchema<
    serializers.EngagementSummary.Raw,
    DevRev.EngagementSummary
> = AtomBaseSummary;

export declare namespace EngagementSummary {
    type Raw = AtomBaseSummary.Raw;
}
