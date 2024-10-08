/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface SendNotificationGenericNotificationEntry {
    /** ID used to group notifications in the inbox for the same parent. */
    eventId?: string;
    eventType: DevRev.GenericNotificationEventType;
    /** Metadata for the objects that triggered the notification. */
    metadata: DevRev.SendNotificationGenericNotificationEntryMetadata[];
}
