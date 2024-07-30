/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const TimelineReaction: core.serialization.ObjectSchema<
    serializers.TimelineReaction.Raw,
    DevRev.TimelineReaction
> = core.serialization.object({
    emoji: core.serialization.string().optional(),
    reacted: core.serialization.boolean().optional(),
    totalUsers: core.serialization.property("total_users", core.serialization.number().optional()),
});

export declare namespace TimelineReaction {
    interface Raw {
        emoji?: string | null;
        reacted?: boolean | null;
        total_users?: number | null;
    }
}