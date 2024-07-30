/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

/**
 * The response to listing the links.
 */
export interface LinksListResponse {
    /** The list of links. */
    links: DevRev.Link[];
    /**
     * The cursor used to iterate subsequent results in accordance to the
     * sort order. If not set, then no later elements exist.
     */
    nextCursor?: string;
    /**
     * The cursor used to iterate preceding results in accordance to the
     * sort order. If not set, then no prior elements exist.
     */
    prevCursor?: string;
}