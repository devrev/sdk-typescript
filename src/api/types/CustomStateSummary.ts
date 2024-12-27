/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface CustomStateSummary extends DevRev.AtomBaseSummary {
    /** True if this is a final state. */
    isFinal?: boolean;
    /** The human readable name of the state. */
    name?: string;
}
