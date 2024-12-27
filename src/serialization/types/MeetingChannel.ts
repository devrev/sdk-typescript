/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const MeetingChannel: core.serialization.Schema<serializers.MeetingChannel.Raw, DevRev.MeetingChannel> =
    core.serialization.enum_(["google_meet", "offline", "other", "teams", "zoom"]);

export declare namespace MeetingChannel {
    type Raw = "google_meet" | "offline" | "other" | "teams" | "zoom";
}
