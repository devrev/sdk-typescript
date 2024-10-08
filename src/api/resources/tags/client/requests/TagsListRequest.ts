/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {}
 */
export interface TagsListRequest {
    /**
     * The cursor to resume iteration from. If not provided, then
     * iteration starts from the beginning.
     *
     */
    cursor?: string;
    /**
     * The maximum number of tags to return. The default is '50'.
     *
     */
    limit?: number;
    mode?: DevRev.ListMode;
    /** Filters for tags with the provided names. */
    name?: string[];
    /** Fields to sort tags by and the direction to sort them. */
    sortBy?: string[];
}
