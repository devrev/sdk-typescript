/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { ArtifactSummary } from "./ArtifactSummary";
import { OrgSummary } from "./OrgSummary";
import { TagWithValue } from "./TagWithValue";
import { UserBase } from "./UserBase";

export const RevUser: core.serialization.ObjectSchema<serializers.RevUser.Raw, DevRev.RevUser> = core.serialization
    .object({
        artifacts: core.serialization.list(ArtifactSummary).optional(),
        customFields: core.serialization.property(
            "custom_fields",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        customSchemaFragments: core.serialization.property(
            "custom_schema_fragments",
            core.serialization.list(core.serialization.string()).optional()
        ),
        description: core.serialization.string().optional(),
        externalRef: core.serialization.property("external_ref", core.serialization.string().optional()),
        isVerified: core.serialization.property("is_verified", core.serialization.boolean().optional()),
        revOrg: core.serialization.property("rev_org", OrgSummary.optional()),
        stockSchemaFragment: core.serialization.property(
            "stock_schema_fragment",
            core.serialization.string().optional()
        ),
        subtype: core.serialization.string().optional(),
        tags: core.serialization.list(TagWithValue).optional(),
    })
    .extend(UserBase);

export declare namespace RevUser {
    interface Raw extends UserBase.Raw {
        artifacts?: ArtifactSummary.Raw[] | null;
        custom_fields?: Record<string, unknown> | null;
        custom_schema_fragments?: string[] | null;
        description?: string | null;
        external_ref?: string | null;
        is_verified?: boolean | null;
        rev_org?: OrgSummary.Raw | null;
        stock_schema_fragment?: string | null;
        subtype?: string | null;
        tags?: TagWithValue.Raw[] | null;
    }
}
