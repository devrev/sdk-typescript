/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface SlaSummary extends DevRev.AtomBaseSummary {
    /** Human-readable name. */
    name: string;
    slaType?: DevRev.SlaType;
    status: DevRev.SlaStatus;
}