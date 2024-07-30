/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const OrgType: core.serialization.Schema<serializers.OrgType.Raw, DevRev.OrgType> = core.serialization.enum_([
    "account",
    "rev_org",
]);

export declare namespace OrgType {
    type Raw = "account" | "rev_org";
}