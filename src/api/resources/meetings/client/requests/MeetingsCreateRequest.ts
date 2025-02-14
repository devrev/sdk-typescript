/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {
 *         channel: DevRev.MeetingChannel.GoogleMeet,
 *         endedDate: new Date("2023-01-01T12:00:00.000Z"),
 *         members: ["DEVU-12345"],
 *         scheduledDate: new Date("2023-01-01T12:00:00.000Z"),
 *         state: DevRev.MeetingState.Canceled,
 *         title: "title"
 *     }
 */
export interface MeetingsCreateRequest {
    channel: DevRev.MeetingChannel;
    /** Application-defined custom fields. */
    customFields?: Record<string, unknown>;
    /** The description of the meeting. */
    description?: string;
    /** Time at which meeting ended. */
    endedDate: Date;
    /** External reference for the meeting. */
    externalRef?: string;
    /** External URL for the meeting. */
    externalUrl?: string;
    /** IDs of the users that were part of the meeting. */
    members: string[];
    /**
     * The ID of the user who organized the meeting. If not provided, the
     * creator is set as the organizer.
     *
     */
    organizer?: string;
    /** The parent object ID in which the meeting was created. */
    parent?: string;
    /** The recording URL of the meeting. */
    recordingUrl?: string;
    /** The date and time when the meeting was scheduled. */
    scheduledDate: Date;
    state: DevRev.MeetingState;
    /** Tags associated with the meeting. */
    tags?: DevRev.SetTagWithValue[];
    /** The title of the meeting. */
    title: string;
}
