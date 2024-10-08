/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Reaction.
 */
export interface TimelineReaction {
    /** The reaction emoji's unicode codepoint, e.g. "1f44d". */
    emoji?: string;
    /** Whether the requesting user reacted. */
    reacted?: boolean;
    /** The total number of users with this reaction. */
    totalUsers?: number;
}
