/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {}
 */
export interface QuestionAnswersListRequest {
    /**
     * Filters for question-answer belonging to any of the provided
     * articles.
     *
     */
    appliesToArticles?: string[];
    /**
     * Filters for question-answer belonging to any of the provided parts.
     *
     */
    appliesToParts?: string[];
    /**
     * Filters for question-answers created by any of the provided users.
     *
     */
    createdBy?: string[];
    /**
     * The cursor to resume iteration from. If not provided, then
     * iteration starts from the beginning.
     *
     */
    cursor?: string;
    /**
     * The maximum number of question-answers to return. The default is
     * '50'.
     *
     */
    limit?: number;
    mode?: DevRev.ListMode;
    /**
     * Filters for question-answers owned by any of the provided users.
     *
     */
    ownedBy?: string[];
}
