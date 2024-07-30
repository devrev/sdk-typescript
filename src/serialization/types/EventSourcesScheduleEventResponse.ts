/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const EventSourcesScheduleEventResponse: core.serialization.ObjectSchema<
    serializers.EventSourcesScheduleEventResponse.Raw,
    DevRev.EventSourcesScheduleEventResponse
> = core.serialization.object({
    eventKey: core.serialization.property("event_key", core.serialization.string().optional()),
});

export declare namespace EventSourcesScheduleEventResponse {
    interface Raw {
        event_key?: string | null;
    }
}
