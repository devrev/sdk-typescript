/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Meeting } from "./Meeting";

export const MeetingsUpdateResponse: core.serialization.ObjectSchema<
    serializers.MeetingsUpdateResponse.Raw,
    DevRev.MeetingsUpdateResponse
> = core.serialization.object({
    meeting: Meeting,
});

export declare namespace MeetingsUpdateResponse {
    interface Raw {
        meeting: Meeting.Raw;
    }
}
