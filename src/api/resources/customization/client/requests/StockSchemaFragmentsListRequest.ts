/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {}
 */
export interface StockSchemaFragmentsListRequest {
    /**
     * The cursor to resume iteration from. If not provided, then
     * iteration starts from the beginning.
     *
     */
    cursor?: string;
    filterPreset?: DevRev.StockSchemaFragmentsListRequestFilterPreset;
    /** The list of leaf types. */
    leafType?: string[];
    /** The maximum number of items. */
    limit?: number;
    mode?: DevRev.ListMode;
    /**
     * List of fields which are not required in the payload and can be
     * pruned away.
     *
     */
    prune?: DevRev.StockSchemaFragmentsListRequestPrune[];
    /**
     * The list of fields to sort the items by and how to sort them.
     *
     */
    sortBy?: string[];
}
