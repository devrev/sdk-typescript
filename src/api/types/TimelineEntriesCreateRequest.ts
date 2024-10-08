/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

/**
 * The request to create a timeline entry for an object.
 */
export type TimelineEntriesCreateRequest = DevRev.TimelineEntriesCreateRequest.TimelineComment;

export declare namespace TimelineEntriesCreateRequest {
    interface TimelineComment extends DevRev.TimelineEntriesCreateRequestTimelineComment, _Base {
        type: "timeline_comment";
    }

    interface _Base {
        /**
         * The collection(s) that the entry belongs to, otherwise if not
         * provided, then the entry's default collection is used.
         */
        collections?: DevRev.TimelineEntriesCollection[];
        /**
         * If set, then the entry is ephemeral and will be deleted after the
         * provided time. The minimum value should be at least a minute more
         * than the current timestamp.
         */
        expiresAt?: Date;
        /** The labels to be associated with the entry. */
        labels?: string[];
        /** The ID of the object to create the timeline entry for. */
        object: string;
        /**
         * If the visibility of the entry is private, this specifies the users
         * that the entry is private to. Note the creator is always implicitly
         * included in this list.
         */
        privateTo?: string[];
        visibility?: DevRev.TimelineEntryVisibility;
    }
}
