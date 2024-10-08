/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { ContentTemplate } from "./ContentTemplate";

export const ContentTemplateListResponse: core.serialization.ObjectSchema<
    serializers.ContentTemplateListResponse.Raw,
    DevRev.ContentTemplateListResponse
> = core.serialization.object({
    contentTemplate: core.serialization.property("content_template", core.serialization.list(ContentTemplate)),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
    prevCursor: core.serialization.property("prev_cursor", core.serialization.string().optional()),
});

export declare namespace ContentTemplateListResponse {
    interface Raw {
        content_template: ContentTemplate.Raw[];
        next_cursor?: string | null;
        prev_cursor?: string | null;
    }
}
