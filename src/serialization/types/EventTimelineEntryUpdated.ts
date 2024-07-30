/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { TimelineEntry } from "./TimelineEntry";

export const EventTimelineEntryUpdated: core.serialization.ObjectSchema<
    serializers.EventTimelineEntryUpdated.Raw,
    DevRev.EventTimelineEntryUpdated
> = core.serialization.object({
    entry: TimelineEntry,
});

export declare namespace EventTimelineEntryUpdated {
    interface Raw {
        entry: TimelineEntry.Raw;
    }
}