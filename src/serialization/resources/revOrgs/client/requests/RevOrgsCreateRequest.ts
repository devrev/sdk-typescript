/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { OrgEnvironment } from "../../../../types/OrgEnvironment";
import { SetTagWithValue } from "../../../../types/SetTagWithValue";

export const RevOrgsCreateRequest: core.serialization.Schema<
    serializers.RevOrgsCreateRequest.Raw,
    DevRev.RevOrgsCreateRequest
> = core.serialization.object({
    account: core.serialization.string(),
    artifacts: core.serialization.list(core.serialization.string()).optional(),
    customFields: core.serialization.property(
        "custom_fields",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    customSchemaFragments: core.serialization.property(
        "custom_schema_fragments",
        core.serialization.list(core.serialization.string()).optional()
    ),
    description: core.serialization.string().optional(),
    displayName: core.serialization.property("display_name", core.serialization.string()),
    domain: core.serialization.string().optional(),
    environment: OrgEnvironment.optional(),
    externalRef: core.serialization.property("external_ref", core.serialization.string().optional()),
    tags: core.serialization.list(SetTagWithValue).optional(),
    tier: core.serialization.string().optional(),
});

export declare namespace RevOrgsCreateRequest {
    interface Raw {
        account: string;
        artifacts?: string[] | null;
        custom_fields?: Record<string, unknown> | null;
        custom_schema_fragments?: string[] | null;
        description?: string | null;
        display_name: string;
        domain?: string | null;
        environment?: OrgEnvironment.Raw | null;
        external_ref?: string | null;
        tags?: SetTagWithValue.Raw[] | null;
        tier?: string | null;
    }
}
