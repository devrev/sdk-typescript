/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {
 *         id: "id",
 *         status: DevRev.OrgScheduleFragmentStatus.Archived
 *     }
 */
export interface OrgScheduleFragmentsTransitionRequest {
    /** Organization schedule Fragment ID. */
    id: string;
    status: DevRev.OrgScheduleFragmentStatus;
}
