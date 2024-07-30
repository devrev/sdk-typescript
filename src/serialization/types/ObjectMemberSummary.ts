/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AtomBaseSummary } from "./AtomBaseSummary";

export const ObjectMemberSummary: core.serialization.ObjectSchema<
    serializers.ObjectMemberSummary.Raw,
    DevRev.ObjectMemberSummary
> = AtomBaseSummary;

export declare namespace ObjectMemberSummary {
    type Raw = AtomBaseSummary.Raw;
}