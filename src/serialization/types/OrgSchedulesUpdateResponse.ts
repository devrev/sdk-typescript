/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { OrgSchedule } from "./OrgSchedule";

export const OrgSchedulesUpdateResponse: core.serialization.ObjectSchema<
    serializers.OrgSchedulesUpdateResponse.Raw,
    DevRev.OrgSchedulesUpdateResponse
> = core.serialization.object({
    orgSchedule: core.serialization.property("org_schedule", OrgSchedule),
});

export declare namespace OrgSchedulesUpdateResponse {
    interface Raw {
        org_schedule: OrgSchedule.Raw;
    }
}
