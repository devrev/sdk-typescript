/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {}
 */
export interface RevOrgsListRequest {
    /** Filters by account. */
    account?: string[];
    /** Filters by creator. */
    createdBy?: string[];
    createdDate?: DevRev.DateTimeFilter;
    /**
     * The cursor to resume iteration from. If not provided, then
     * iteration starts from the beginning.
     *
     */
    cursor?: string;
    /**
     * Filters on custom fields. Input will be of the format
     * (custom_field_filter=field_name1:val1,val2,val3&custom_field_filter=field_name2:val1,val2).
     *
     */
    customFieldFilter?: string[];
    /** Filters for custom fields. */
    customFields?: Record<string, unknown>;
    /** Array of display names of Rev orgs to be filtered. */
    displayName?: string[];
    /** List of external refs to filter Rev organizations for. */
    externalRef?: string[];
    /**
     * The maximum number of Rev organizations to be retrieved per page.
     *
     */
    limit?: number;
    mode?: DevRev.ListMode;
    modifiedDate?: DevRev.DateTimeFilter;
    /**
     * Fields to sort the Rev organizations by and the direction to sort
     * them.
     *
     */
    sortBy?: string[];
    /** List of tags to be filtered. */
    tags?: string[];
}
