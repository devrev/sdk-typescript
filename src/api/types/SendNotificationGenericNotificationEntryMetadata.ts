/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface SendNotificationGenericNotificationEntryMetadata {
    action?: DevRev.SendNotificationGenericNotificationEntryNotificationAction;
    /** The ID of the content template for the content of the notification. */
    contentTemplate: string;
    /** Inputs required for the template. */
    inputs?: Record<string, unknown>;
}
