/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface AirdropSyncUnitsHistoryFilter {
    endedAt?: DevRev.DateFilter;
    /** Filter for sync runs that have errors. */
    hasErrorsOrWarnings?: boolean;
    /** Mode of the sync run. */
    mode?: DevRev.SyncRunMode[];
    /** User who started the sync run. */
    startedBy?: DevRev.SyncRunStartedBy[];
    /** State of the sync run. */
    state?: DevRev.SyncRunProgressState[];
}
