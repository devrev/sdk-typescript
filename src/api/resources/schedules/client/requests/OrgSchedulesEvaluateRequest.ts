/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         id: "id",
 *         instants: [new Date("2023-01-01T12:00:00.000Z")]
 *     }
 */
export interface OrgSchedulesEvaluateRequest {
    /** Organization schedule ID. */
    id: string;
    /** Time instants to evaluate the organization schedule for. */
    instants: Date[];
}
