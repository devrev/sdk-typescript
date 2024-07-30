/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface SlasUpdateRequest {
    accountSelector?: DevRev.AccountsFilters;
    /** Description of the purpose and capabilities of the SLA. */
    description?: string;
    evaluationPeriod?: DevRev.SlaEvaluationPeriod;
    /** The SLA's ID. */
    id: string;
    /** Human-readable name. */
    name?: string;
    /**
     * The policies encompassed by this SLA, ordered in decreasing
     * priority, the whole array will be overwritten by the contents of
     * this array.
     *
     */
    policies?: DevRev.SetSlaPolicy[];
}