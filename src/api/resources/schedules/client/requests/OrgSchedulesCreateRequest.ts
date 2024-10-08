/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {
 *         name: "name",
 *         timezone: "timezone"
 *     }
 */
export interface OrgSchedulesCreateRequest {
    defaultWeeklyOrgSchedule?: DevRev.SetWeeklyOrgSchedule;
    /**
     * Organization schedule must be valid for at least this many days in
     * the future. Meaning organization schedule fragments must cover this
     * period. 0 if omitted.
     *
     */
    minValidDays?: number;
    /** Human-readable name. */
    name: string;
    /**
     * List of organization schedule fragments with no overlaps or gaps.
     *
     */
    orgScheduleFragments?: DevRev.SetOrgScheduleFragmentSummary[];
    /**
     * Timezone in which the organization schedule applies. Expected to be
     * a valid IANA time zone name such as America/New_York.
     *
     */
    timezone: string;
    /**
     * If this day belongs to a named period according to the currently
     * active organization schedule fragment, a weekly organization
     * schedule from this list with the corresponding name will apply.
     *
     */
    weeklyOrgSchedules?: DevRev.SetWeeklyOrgSchedule[];
}
