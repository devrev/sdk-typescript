/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {
 *         customSchemaFragmentIds: ["custom_schema_fragment_ids"]
 *     }
 */
export interface AggregatedSchemaGetRequest {
    /**
     * The list of custom schema fragment DONs which are to be aggregated.
     *
     */
    customSchemaFragmentIds: string[];
    /**
     * The leaf type. Used for inferring the default stage diagram and
     * tenant fragment ID.
     *
     */
    leafType?: string;
    /** Per object schema, if associated with the leaf type. */
    perObjectSchema?: DevRev.FieldDescriptor[];
    /** The stock schema fragment which is to be aggregated. */
    stockSchemaFragmentId?: string;
}
