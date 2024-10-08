/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {
 *         url: "url"
 *     }
 */
export interface WebhooksCreateRequest {
    /** The event types that the webhook endpoint will receive. */
    eventTypes?: DevRev.WebhookEventType[];
    /** The headers to include in every webhook invocation. */
    headers?: DevRev.WebhookHeader[];
    /**
     * The secret to use when verifying webhook events. If provided, the
     * secret must be between 8 and 32 bytes (inclusive). If not set, a
     * secret will be automatically generated and provided in the
     * response.
     *
     */
    secret?: string;
    /** The URL of the webhook endpoint. */
    url: string;
}
