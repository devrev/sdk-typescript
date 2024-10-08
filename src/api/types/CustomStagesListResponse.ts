/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface CustomStagesListResponse {
    /**
     * The cursor to resume iteration from, otherwise if not provided,
     * then iteration starts from the beginning.
     */
    cursor?: string;
    /** The custom stages. */
    result: DevRev.CustomStage[];
}
