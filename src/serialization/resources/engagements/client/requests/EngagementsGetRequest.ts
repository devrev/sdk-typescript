/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const EngagementsGetRequest: core.serialization.Schema<
    serializers.EngagementsGetRequest.Raw,
    DevRev.EngagementsGetRequest
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace EngagementsGetRequest {
    interface Raw {
        id: string;
    }
}
