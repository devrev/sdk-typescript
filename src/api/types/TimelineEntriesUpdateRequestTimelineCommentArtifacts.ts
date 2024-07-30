/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TimelineEntriesUpdateRequestTimelineCommentArtifacts {
    /**
     * Adds the provided artifacts to the comment. An artifact cannot be
     * added more than once, i.e. nothing is done if the artifact is
     * already attached. Mutually exclusive with `set`.
     */
    add?: string[];
    /**
     * Removes the provided artifacts from the comment. If an artifact is
     * not present, then it's ignored. Mututally exclusive with `set`.
     */
    remove?: string[];
    /** Sets the field to the provided artifacts. */
    set?: string[];
}