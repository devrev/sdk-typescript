/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { TimelineChangeEventEvent } from "./TimelineChangeEventEvent";
import { TimelineEntryBase } from "./TimelineEntryBase";

export const TimelineChangeEvent: core.serialization.ObjectSchema<
    serializers.TimelineChangeEvent.Raw,
    DevRev.TimelineChangeEvent
> = core.serialization
    .object({
        event: TimelineChangeEventEvent.optional(),
    })
    .extend(TimelineEntryBase);

export declare namespace TimelineChangeEvent {
    interface Raw extends TimelineEntryBase.Raw {
        event?: TimelineChangeEventEvent.Raw | null;
    }
}
