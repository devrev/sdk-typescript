/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface TimelineEntryBase extends DevRev.AtomBase {
    /**
     * An external reference that's associated with the Timeline entry
     * that's guaranteed to be unique among its siblings.
     */
    externalRef?: string;
    /** Labels that are associated with the Timeline entry. */
    labels?: string[];
    /** The object that the Timeline entry belongs to. */
    object: string;
    /** The display ID of the object that the Timeline entry belongs to. */
    objectDisplayId: string;
    objectType?: DevRev.TimelineEntryObjectType;
    /** Display panels for the Timeline entry. */
    panels?: DevRev.TimelineEntryPanel[];
    /** The reactions to the entry. */
    reactions?: DevRev.TimelineReaction[];
    thread?: DevRev.TimelineThread;
    visibility?: DevRev.TimelineEntryVisibility;
}
