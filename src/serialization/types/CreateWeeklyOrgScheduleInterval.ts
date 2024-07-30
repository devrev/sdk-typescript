/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const CreateWeeklyOrgScheduleInterval: core.serialization.ObjectSchema<
    serializers.CreateWeeklyOrgScheduleInterval.Raw,
    DevRev.CreateWeeklyOrgScheduleInterval
> = core.serialization.object({
    from: core.serialization.number(),
    to: core.serialization.number(),
});

export declare namespace CreateWeeklyOrgScheduleInterval {
    interface Raw {
        from: number;
        to: number;
    }
}