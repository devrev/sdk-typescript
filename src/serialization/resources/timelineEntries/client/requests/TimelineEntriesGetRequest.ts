/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const TimelineEntriesGetRequest: core.serialization.Schema<
    serializers.TimelineEntriesGetRequest.Raw,
    DevRev.TimelineEntriesGetRequest
> = core.serialization.object({
    externalRef: core.serialization.property("external_ref", core.serialization.string().optional()),
    id: core.serialization.string(),
});

export declare namespace TimelineEntriesGetRequest {
    interface Raw {
        external_ref?: string | null;
        id: string;
    }
}
