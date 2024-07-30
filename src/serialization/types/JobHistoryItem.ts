/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { EnumValue } from "./EnumValue";

export const JobHistoryItem: core.serialization.ObjectSchema<serializers.JobHistoryItem.Raw, DevRev.JobHistoryItem> =
    core.serialization.object({
        employmentStatus: core.serialization.property("employment_status", EnumValue.optional()),
        endDate: core.serialization.property("end_date", core.serialization.date().optional()),
        isCurrent: core.serialization.property("is_current", core.serialization.boolean().optional()),
        location: core.serialization.string().optional(),
        startDate: core.serialization.property("start_date", core.serialization.date().optional()),
        title: core.serialization.string().optional(),
    });

export declare namespace JobHistoryItem {
    interface Raw {
        employment_status?: EnumValue.Raw | null;
        end_date?: string | null;
        is_current?: boolean | null;
        location?: string | null;
        start_date?: string | null;
        title?: string | null;
    }
}