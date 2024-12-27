/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {}
 */
export interface MetricDefinitionsListRequest {
    /** The type of metric definitions sought. */
    type?: DevRev.MetricDefinitionMetricType[];
    /** The type of objects the metric definition applies to. */
    appliesToType?: DevRev.MetricDefinitionAppliesTo[];
    /**
     * The cursor to resume iteration from. If not provided, then
     * iteration starts from the beginning.
     *
     */
    cursor?: string;
    /**
     * Whether to include custom metrics in the response. If not set, then
     * custom metrics are excluded.
     *
     */
    includeCustomMetrics?: boolean;
    /**
     * The maximum number of records to return. The default is '50'.
     *
     */
    limit?: number;
    mode?: DevRev.ListMode;
    /**
     * Fields to sort the records by and the direction to sort them.
     *
     */
    sortBy?: string[];
    /** The status of the metric definition. */
    status?: DevRev.MetricDefinitionStatus[];
}
