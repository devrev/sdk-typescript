/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface CustomSchemaFragmentsSetRequestTenantFragment {
    /** The display ID prefix for the custom object. */
    idPrefix?: string;
    /** List of Per-DevOrg stock field overrides. */
    stockFieldOverrides?: DevRev.StockFieldOverride[];
}
