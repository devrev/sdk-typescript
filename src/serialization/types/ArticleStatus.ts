/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ArticleStatus: core.serialization.Schema<serializers.ArticleStatus.Raw, DevRev.ArticleStatus> =
    core.serialization.enum_(["archived", "draft", "published", "review_needed"]);

export declare namespace ArticleStatus {
    type Raw = "archived" | "draft" | "published" | "review_needed";
}
