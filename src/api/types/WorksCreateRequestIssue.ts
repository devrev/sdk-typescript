/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface WorksCreateRequestIssue {
    /** The IDs of the parts associated with issue. */
    developedWith?: string[];
    priority?: DevRev.IssuePriority;
    /** Priority enum id of the work based upon impact and criticality. */
    priorityV2?: number;
    /** The sprint that the issue belongs to. */
    sprint?: string;
    /** Timestamp for when the work is expected to start. */
    targetStartDate?: Date;
}
