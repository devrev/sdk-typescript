/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { OrgSummary } from "./OrgSummary";
import { UserBaseSummary } from "./UserBaseSummary";

export const RevUserSummary: core.serialization.ObjectSchema<serializers.RevUserSummary.Raw, DevRev.RevUserSummary> =
    core.serialization
        .object({
            externalRef: core.serialization.property("external_ref", core.serialization.string().optional()),
            revOrg: core.serialization.property("rev_org", OrgSummary.optional()),
        })
        .extend(UserBaseSummary);

export declare namespace RevUserSummary {
    interface Raw extends UserBaseSummary.Raw {
        external_ref?: string | null;
        rev_org?: OrgSummary.Raw | null;
    }
}
