/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const UomsGetRequest: core.serialization.Schema<serializers.UomsGetRequest.Raw, DevRev.UomsGetRequest> =
    core.serialization.object({
        id: core.serialization.string(),
    });

export declare namespace UomsGetRequest {
    interface Raw {
        id: string;
    }
}
