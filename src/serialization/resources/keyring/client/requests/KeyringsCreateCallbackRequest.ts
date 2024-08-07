/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const KeyringsCreateCallbackRequest: core.serialization.Schema<
    serializers.KeyringsCreateCallbackRequest.Raw,
    DevRev.KeyringsCreateCallbackRequest
> = core.serialization.object({
    code: core.serialization.string(),
    state: core.serialization.string(),
});

export declare namespace KeyringsCreateCallbackRequest {
    interface Raw {
        code: string;
        state: string;
    }
}
