/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const SnapInsResourcesRequest: core.serialization.Schema<
    serializers.SnapInsResourcesRequest.Raw,
    DevRev.SnapInsResourcesRequest
> = core.serialization.object({
    id: core.serialization.string(),
    user: core.serialization.string(),
});

export declare namespace SnapInsResourcesRequest {
    interface Raw {
        id: string;
        user: string;
    }
}
