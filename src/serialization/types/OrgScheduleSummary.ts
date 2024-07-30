/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { OrgScheduleStatus } from "./OrgScheduleStatus";
import { AtomBaseSummary } from "./AtomBaseSummary";

export const OrgScheduleSummary: core.serialization.ObjectSchema<
    serializers.OrgScheduleSummary.Raw,
    DevRev.OrgScheduleSummary
> = core.serialization
    .object({
        name: core.serialization.string().optional(),
        status: OrgScheduleStatus,
        timezone: core.serialization.string().optional(),
        validUntil: core.serialization.property("valid_until", core.serialization.date().optional()),
    })
    .extend(AtomBaseSummary);

export declare namespace OrgScheduleSummary {
    interface Raw extends AtomBaseSummary.Raw {
        name?: string | null;
        status: OrgScheduleStatus.Raw;
        timezone?: string | null;
        valid_until?: string | null;
    }
}