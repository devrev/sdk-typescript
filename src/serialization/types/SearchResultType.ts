/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const SearchResultType: core.serialization.Schema<serializers.SearchResultType.Raw, DevRev.SearchResultType> =
    core.serialization.enum_([
        "account",
        "article",
        "artifact",
        "conversation",
        "custom_object",
        "dashboard",
        "group",
        "link",
        "object_member",
        "org",
        "part",
        "question_answer",
        "tag",
        "user",
        "vista",
        "work",
    ]);

export declare namespace SearchResultType {
    type Raw =
        | "account"
        | "article"
        | "artifact"
        | "conversation"
        | "custom_object"
        | "dashboard"
        | "group"
        | "link"
        | "object_member"
        | "org"
        | "part"
        | "question_answer"
        | "tag"
        | "user"
        | "vista"
        | "work";
}