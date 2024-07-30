/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { OrgBaseSummary } from "./OrgBaseSummary";

export const AccountSummary: core.serialization.ObjectSchema<serializers.AccountSummary.Raw, DevRev.AccountSummary> =
    OrgBaseSummary;

export declare namespace AccountSummary {
    type Raw = OrgBaseSummary.Raw;
}
