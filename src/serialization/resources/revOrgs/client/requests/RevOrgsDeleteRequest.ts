/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const RevOrgsDeleteRequest: core.serialization.Schema<
    serializers.RevOrgsDeleteRequest.Raw,
    DevRev.RevOrgsDeleteRequest
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace RevOrgsDeleteRequest {
    interface Raw {
        id: string;
    }
}
