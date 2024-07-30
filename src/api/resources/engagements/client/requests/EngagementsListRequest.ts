/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {}
 */
export interface EngagementsListRequest {
    /** Filters for engagement of the provided types. */
    type?: DevRev.EngagementType[];
    /**
     * The cursor to resume iteration from. If not provided, then
     * iteration starts from the beginning.
     *
     */
    cursor?: string;
    /** Filters for meetings with the provided external_refs. */
    externalRef?: string[];
    /** The maximum number of engagements to return. */
    limit?: number;
    /** Filters for engagement of the provided members. */
    members?: string[];
    mode?: DevRev.ListMode;
    /** Filters for engagements with the provided parent. */
    parent?: string[];
    /**
     * Fields to sort the engagements by and the direction to sort them.
     *
     */
    sortBy?: string[];
}