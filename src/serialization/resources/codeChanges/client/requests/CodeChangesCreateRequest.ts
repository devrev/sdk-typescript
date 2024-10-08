/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { CustomSchemaSpec } from "../../../../types/CustomSchemaSpec";

export const CodeChangesCreateRequest: core.serialization.Schema<
    serializers.CodeChangesCreateRequest.Raw,
    DevRev.CodeChangesCreateRequest
> = core.serialization.object({
    customFields: core.serialization.property(
        "custom_fields",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    customSchemaSpec: core.serialization.property("custom_schema_spec", CustomSchemaSpec.optional()),
});

export declare namespace CodeChangesCreateRequest {
    interface Raw {
        custom_fields?: Record<string, unknown> | null;
        custom_schema_spec?: CustomSchemaSpec.Raw | null;
    }
}
