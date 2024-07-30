/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const ArticlesDeleteRequest: core.serialization.Schema<
    serializers.ArticlesDeleteRequest.Raw,
    DevRev.ArticlesDeleteRequest
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace ArticlesDeleteRequest {
    interface Raw {
        id: string;
    }
}