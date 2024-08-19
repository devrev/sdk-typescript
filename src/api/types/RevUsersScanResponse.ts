/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

/**
 * The response to scanning Rev users.
 */
export interface RevUsersScanResponse {
    /**
     * The cursor that should be used to resume iteration, otherwise if
     * not provided, then iteration has completed.
     */
    nextCursor?: string;
    /** The iterated Rev users. */
    revUsers: DevRev.RevUser[];
}