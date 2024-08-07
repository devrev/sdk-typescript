/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {}
 */
export interface UomsListRequest {
    /** List of aggregation types for filtering list of UOMs. */
    aggregationTypes?: DevRev.AggregationDetailAggregationType[];
    /**
     * The cursor to resume iteration from. If not provided, then
     * iteration starts from the beginning.
     *
     */
    cursor?: string;
    /**
     * List of Unit of Measurement (UOM) DONs to be used in filtering
     * complete list of UOMs defined in a Dev Org.
     *
     */
    ids?: string[];
    /**
     * The maximum number of UOMs to be returned in a response. The
     * default is '50'.
     *
     */
    limit?: number;
    /** List of metric names for filtering list of UOMs. */
    metricNames?: string[];
    mode?: DevRev.ListMode;
    /** List of part IDs for filtering list of UOMs. */
    partIds?: string[];
    /** List of product IDs for filtering list of UOMs. */
    productIds?: string[];
    /**
     * Fields to sort the Unit Of Measuments (UOMs) by and the direction
     * to sort them.
     *
     */
    sortBy?: string[];
    /** List of unit types for filtering list of UOMs. */
    unitTypes?: DevRev.UnitType[];
}
