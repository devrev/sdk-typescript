/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { OrgSchedule } from "./OrgSchedule";

export const OrgSchedulesSetFutureResponse: core.serialization.ObjectSchema<
    serializers.OrgSchedulesSetFutureResponse.Raw,
    DevRev.OrgSchedulesSetFutureResponse
> = core.serialization.object({
    orgSchedule: core.serialization.property("org_schedule", OrgSchedule),
});

export declare namespace OrgSchedulesSetFutureResponse {
    interface Raw {
        org_schedule: OrgSchedule.Raw;
    }
}
