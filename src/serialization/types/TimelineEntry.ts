/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { TimelineChangeEvent } from "./TimelineChangeEvent";
import { TimelineComment } from "./TimelineComment";

export const TimelineEntry: core.serialization.Schema<serializers.TimelineEntry.Raw, DevRev.TimelineEntry> =
    core.serialization
        .union("type", {
            timeline_change_event: TimelineChangeEvent,
            timeline_comment: TimelineComment,
        })
        .transform<DevRev.TimelineEntry>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace TimelineEntry {
    type Raw = TimelineEntry.TimelineChangeEvent | TimelineEntry.TimelineComment;

    interface TimelineChangeEvent extends TimelineChangeEvent.Raw {
        type: "timeline_change_event";
    }

    interface TimelineComment extends TimelineComment.Raw {
        type: "timeline_comment";
    }
}
