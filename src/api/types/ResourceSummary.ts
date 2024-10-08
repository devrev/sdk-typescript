/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

/**
 * Resource details.
 */
export interface ResourceSummary {
    /** Ids of the artifacts. */
    artifacts?: DevRev.ArtifactSummary[];
    /** URL of the external article. */
    url?: string;
}
