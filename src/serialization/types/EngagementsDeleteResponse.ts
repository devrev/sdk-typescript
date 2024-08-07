/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const EngagementsDeleteResponse: core.serialization.Schema<
    serializers.EngagementsDeleteResponse.Raw,
    DevRev.EngagementsDeleteResponse
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace EngagementsDeleteResponse {
    type Raw = Record<string, unknown>;
}
