/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

/**
 * Resource details.
 */
export interface ResourceSummary {
    /** Artifacts of the resource (relevant only for type artifact). */
    artifacts?: DevRev.ArtifactSummary[];
    /** URL of the resource (relevant only for type url). */
    url?: string;
}
