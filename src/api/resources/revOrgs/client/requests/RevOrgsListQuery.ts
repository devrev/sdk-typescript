/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {
 *         createdDateAfter: new Date("2023-01-01T12:00:00.000Z"),
 *         createdDateBefore: new Date("2023-01-01T12:00:00.000Z"),
 *         modifiedDateAfter: new Date("2023-01-01T12:00:00.000Z"),
 *         modifiedDateBefore: new Date("2023-01-01T12:00:00.000Z")
 *     }
 */
export interface RevOrgsListQuery {
    /**
     * Filters by account.
     */
    account?: string | string[];
    /**
     * Filters by creator.
     */
    createdBy?: string | string[];
    /**
     * Filters for objects created after the provided timestamp (inclusive).
     */
    createdDateAfter?: Date;
    /**
     * Filters for objects created before the provided timestamp
     * (inclusive).
     */
    createdDateBefore?: Date;
    /**
     * The cursor to resume iteration from. If not provided, then iteration
     * starts from the beginning.
     */
    cursor?: string;
    /**
     * Filters on custom fields. Input will be of the format
     * (custom_field_filter=field_name1:val1,val2,val3&custom_field_filter=field_name2:val1,val2).
     */
    customFieldFilter?: string | string[];
    /**
     * Filters for custom fields.
     */
    customFields?: Record<string, unknown>;
    /**
     * Array of display names of Rev orgs to be filtered.
     */
    displayName?: string | string[];
    /**
     * List of external refs to filter Rev organizations for.
     */
    externalRef?: string | string[];
    /**
     * The maximum number of Rev organizations to be retrieved per page.
     */
    limit?: number;
    /**
     * The iteration mode to use, otherwise if not set, then "after" is
     * used.
     */
    mode?: DevRev.ListMode;
    /**
     * Filters for objects created after the provided timestamp (inclusive).
     */
    modifiedDateAfter?: Date;
    /**
     * Filters for objects created before the provided timestamp
     * (inclusive).
     */
    modifiedDateBefore?: Date;
    /**
     * Fields to sort the Rev organizations by and the direction to sort
     * them.
     */
    sortBy?: string | string[];
    /**
     * List of tags to be filtered.
     */
    tags?: string | string[];
}
