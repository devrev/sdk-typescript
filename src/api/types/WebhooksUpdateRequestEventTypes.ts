/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface WebhooksUpdateRequestEventTypes {
    /**
     * The event types to add. If a provided event type is already set for
     * the webhook, then nothing is done. Note this is mutually exclusive
     * with 'set'.
     */
    add?: DevRev.WebhookEventType[];
    /**
     * The event types to remove. If a provided event type isn't set for
     * the webhook, then nothing is done. Note this is mutually exclusive
     * with 'set'.
     */
    remove?: DevRev.WebhookEventType[];
    /**
     * The updated event types, which will replace the webhook's current
     * event types. Note this is mutually exclusive with 'add' and
     * 'remove'.
     */
    set?: DevRev.WebhookEventType[];
}
