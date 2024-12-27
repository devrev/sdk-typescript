/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface WorkBase extends DevRev.AtomBase {
    /** Timestamp when the work was actually completed. */
    actualCloseDate?: Date;
    appliesToPart?: DevRev.PartSummary;
    /** The artifacts attached to the work item. */
    artifacts?: DevRev.ArtifactSummary[];
    /** Body of the work object. */
    body?: string;
    /** Custom fields. */
    customFields?: Record<string, unknown>;
    /** Custom schema fragments. */
    customSchemaFragments?: string[];
    /** The users that own the work. */
    ownedBy: DevRev.UserSummary[];
    /** Users that reported the work. */
    reportedBy?: DevRev.UserSummary[];
    stage?: DevRev.LegacyStage;
    /** Stock schema fragment. */
    stockSchemaFragment?: string;
    /** Subtype corresponding to the custom type fragment. */
    subtype?: string;
    syncMetadata?: DevRev.SyncMetadata;
    /** Tags associated with the object. */
    tags?: DevRev.TagWithValue[];
    /** Timestamp when the work is expected to be complete. */
    targetCloseDate?: Date;
    /** Title of the work object. */
    title: string;
}
