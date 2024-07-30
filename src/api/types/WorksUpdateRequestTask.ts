/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface WorksUpdateRequestTask {
    /** Whether the task is embedded in the work. */
    embedded?: boolean;
    priority?: DevRev.TaskPriority;
    /** Timestamp when the task was started. */
    startDate?: Date;
}