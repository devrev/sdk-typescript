/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface CustomStatesUpdateRequest {
    /** The ID of the custom state to update. */
    id: string;
    /** Whether this is a final state. */
    isFinal?: boolean;
    /** The name of the custom state. */
    name?: string;
    /**
     * Ordinal of the custom state used to identify system states.
     *
     */
    ordinal?: number;
}