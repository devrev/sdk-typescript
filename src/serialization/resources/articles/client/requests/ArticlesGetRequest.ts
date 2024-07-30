/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const ArticlesGetRequest: core.serialization.Schema<
    serializers.ArticlesGetRequest.Raw,
    DevRev.ArticlesGetRequest
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace ArticlesGetRequest {
    interface Raw {
        id: string;
    }
}