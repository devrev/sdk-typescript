/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface WorkSearchSummary extends DevRev.SearchSummaryBase {
    /** Comments on the work. */
    comments?: DevRev.CommentSearchSummary[];
    work: DevRev.WorkSummary;
}
