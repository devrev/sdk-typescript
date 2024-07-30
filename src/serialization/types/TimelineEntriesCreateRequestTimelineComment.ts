/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { TimelineCommentBodyType } from "./TimelineCommentBodyType";
import { TimelineSnapKitBody } from "./TimelineSnapKitBody";

export const TimelineEntriesCreateRequestTimelineComment: core.serialization.ObjectSchema<
    serializers.TimelineEntriesCreateRequestTimelineComment.Raw,
    DevRev.TimelineEntriesCreateRequestTimelineComment
> = core.serialization.object({
    artifacts: core.serialization.list(core.serialization.string()).optional(),
    body: core.serialization.string().optional(),
    bodyType: core.serialization.property("body_type", TimelineCommentBodyType.optional()),
    externalRef: core.serialization.property("external_ref", core.serialization.string().optional()),
    linkPreviews: core.serialization.property(
        "link_previews",
        core.serialization.list(core.serialization.string()).optional()
    ),
    snapKitBody: core.serialization.property("snap_kit_body", TimelineSnapKitBody.optional()),
    snapWidgetBody: core.serialization.property(
        "snap_widget_body",
        core.serialization.list(core.serialization.string()).optional()
    ),
});

export declare namespace TimelineEntriesCreateRequestTimelineComment {
    interface Raw {
        artifacts?: string[] | null;
        body?: string | null;
        body_type?: TimelineCommentBodyType.Raw | null;
        external_ref?: string | null;
        link_previews?: string[] | null;
        snap_kit_body?: TimelineSnapKitBody.Raw | null;
        snap_widget_body?: string[] | null;
    }
}
