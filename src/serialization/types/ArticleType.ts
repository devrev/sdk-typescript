/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ArticleType: core.serialization.Schema<serializers.ArticleType.Raw, DevRev.ArticleType> =
    core.serialization.enum_(["article", "content_block"]);

export declare namespace ArticleType {
    type Raw = "article" | "content_block";
}
