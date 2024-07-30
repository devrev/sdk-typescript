/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface TagSummary extends DevRev.AtomBaseSummary {
    /**
     * The name of the tag, which denotes the logical concept by which all
     * tagged objects will be associated. The name is guaranteed to be
     * unique.
     */
    name: string;
}
