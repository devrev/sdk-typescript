/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const GetReplyRequest: core.serialization.Schema<serializers.GetReplyRequest.Raw, DevRev.GetReplyRequest> =
    core.serialization.object({
        query: core.serialization.string(),
    });

export declare namespace GetReplyRequest {
    interface Raw {
        query: string;
    }
}
