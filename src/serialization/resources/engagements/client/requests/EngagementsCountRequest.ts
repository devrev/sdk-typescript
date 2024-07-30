/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { EngagementType } from "../../../../types/EngagementType";

export const EngagementsCountRequest: core.serialization.Schema<
    serializers.EngagementsCountRequest.Raw,
    DevRev.EngagementsCountRequest
> = core.serialization.object({
    type: core.serialization.list(EngagementType).optional(),
    externalRef: core.serialization.property(
        "external_ref",
        core.serialization.list(core.serialization.string()).optional()
    ),
    members: core.serialization.list(core.serialization.string()).optional(),
    parent: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace EngagementsCountRequest {
    interface Raw {
        type?: EngagementType.Raw[] | null;
        external_ref?: string[] | null;
        members?: string[] | null;
        parent?: string[] | null;
    }
}