/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const WorksDeleteRequest: core.serialization.Schema<
    serializers.WorksDeleteRequest.Raw,
    DevRev.WorksDeleteRequest
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace WorksDeleteRequest {
    interface Raw {
        id: string;
    }
}
