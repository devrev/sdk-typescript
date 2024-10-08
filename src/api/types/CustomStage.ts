/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface CustomStage extends DevRev.AtomBase {
    /** The human readable name of the state. */
    name?: string;
    /** Ordinal used to sort/group stages. */
    ordinal?: number;
    state?: DevRev.CustomStateSummary;
}
