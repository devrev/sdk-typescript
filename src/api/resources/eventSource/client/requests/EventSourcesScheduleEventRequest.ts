/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         eventType: "event_type",
 *         id: "id",
 *         payload: "payload"
 *     }
 */
export interface EventSourcesScheduleEventRequest {
    /**
     * A unique key for this event (scoped to an event source) used for
     * updating/getting/deleting scheduled events.
     *
     */
    eventKey?: string;
    /** The type of the event. */
    eventType: string;
    /** The event source's ID. */
    id: string;
    /** The raw payload of the event. */
    payload: string;
    /**
     * The timestamp at which the event should be published. The event is
     * guaranteed to be published after this. If omitted, the event is
     * published immediately.
     *
     */
    publishAt?: Date;
    /**
     * Whether or not to update an existing scheduled event with the same
     * event key. If this is false, and an event is already scheduled with
     * the same event key, then HTTP 409 Conflict is returned.
     *
     */
    updateIfExists?: boolean;
}