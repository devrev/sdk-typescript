/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface SyncMetadataFilter {
    /** Filters for issues with this specific external reference. */
    externalReference?: string[];
    lastSyncIn?: DevRev.SyncMetadataFilterSyncInFilter;
    lastSyncOut?: DevRev.SyncMetadataFilterSyncOutFilter;
    /** Filters for issues synced from this specific origin system. */
    originSystem?: string[];
}
