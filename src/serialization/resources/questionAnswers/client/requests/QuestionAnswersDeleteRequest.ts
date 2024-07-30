/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const QuestionAnswersDeleteRequest: core.serialization.Schema<
    serializers.QuestionAnswersDeleteRequest.Raw,
    DevRev.QuestionAnswersDeleteRequest
> = core.serialization.object({
    id: core.serialization.string(),
    questionAnswerId: core.serialization.property("question_answer_id", core.serialization.string().optional()),
});

export declare namespace QuestionAnswersDeleteRequest {
    interface Raw {
        id: string;
        question_answer_id?: string | null;
    }
}
