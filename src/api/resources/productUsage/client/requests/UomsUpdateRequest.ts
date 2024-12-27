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
export interface UomsUpdateRequest {
    aggregationType?: DevRev.AggregationDetailAggregationType;
    /** Description of the Unit of Measurement (UOM). */
    description?: string;
    dimensions?: DevRev.UomsUpdateRequestDimensions;
    /** The Unit of Measurement (UOM)'s DON. */
    id: string;
    /**
     * Flag used to enable/disable the Unit of Measurement (UOM). When
     * disabled, any metricsrecords ingested against this UOM will be
     * dropped.
     *
     */
    isEnabled?: boolean;
    /** Human readable name of the Unit of Measurement (UOM). */
    name?: string;
    /**
     * The part ID such as feature or capability for which the Unit of
     * Measurement (UOM) is defined.
     *
     */
    partId?: string;
    /**
     * The product ID for which the Unit of Measurement (UOM) is defined.
     *
     */
    productId?: string;
    /** Unit name of the Unit of Measurement (UOM). */
    unit?: string;
}
