/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         revOrgs: ["REV-AbCdEfGh"]
 *     }
 */
export interface SlasAssignRequest {
    /**
     * The SLA which would be assigned to the Rev organizations. If
     * omitted, the SLA of all the rev organizations referenced will be
     * unset.
     *
     */
    id?: string;
    /** The Rev organizations to apply the SLA to. */
    revOrgs: string[];
}
