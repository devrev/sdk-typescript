/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface SyncHistory extends DevRev.AtomBase {
    syncRun?: DevRev.SyncRun;
    /** SyncUnit ID associated with this historical entry. */
    syncUnit?: string;
}
