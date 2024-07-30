/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface Uom extends DevRev.AtomBase {
    aggregationDetails: DevRev.AggregationDetail;
    /** Description of the UOM. */
    description?: string;
    /**
     * The list of dimensions that can be emitted along with the metering
     * data.
     */
    dimensions?: string[];
    /**
     * If set to true, then the UOM can be configured as part of
     * entitlements in skus and metering data only for the enabled uoms
     * will be passed through the metering pipeline.
     */
    isEnabled: boolean;
    /** Human readable metric name of the UOM. */
    metricName: string;
    metricScope: DevRev.UomMetricScope;
    /** Human readable name of the UOM. */
    name: string;
    part?: DevRev.PartSummary;
    product: DevRev.PartSummary;
    unit: DevRev.Unit;
}