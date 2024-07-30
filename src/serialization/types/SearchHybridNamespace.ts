/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const SearchHybridNamespace: core.serialization.Schema<
    serializers.SearchHybridNamespace.Raw,
    DevRev.SearchHybridNamespace
> = core.serialization.enum_([
    "article",
    "conversation",
    "dataset",
    "incident",
    "issue",
    "part",
    "question_answer",
    "ticket",
    "widget",
    "work",
]);

export declare namespace SearchHybridNamespace {
    type Raw =
        | "article"
        | "conversation"
        | "dataset"
        | "incident"
        | "issue"
        | "part"
        | "question_answer"
        | "ticket"
        | "widget"
        | "work";
}