/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { ArtifactSummary } from "./ArtifactSummary";

export const EmailInlineAttachment: core.serialization.ObjectSchema<
    serializers.EmailInlineAttachment.Raw,
    DevRev.EmailInlineAttachment
> = core.serialization.object({
    artifact: ArtifactSummary.optional(),
    contentId: core.serialization.property("content_id", core.serialization.string().optional()),
});

export declare namespace EmailInlineAttachment {
    interface Raw {
        artifact?: ArtifactSummary.Raw | null;
        content_id?: string | null;
    }
}
