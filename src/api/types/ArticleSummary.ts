/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface ArticleSummary extends DevRev.AtomBaseSummary {
    resource?: DevRev.ResourceSummary;
    /** Title of the article. */
    title?: string;
}