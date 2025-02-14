/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const AuthTokensInfoRequest: core.serialization.Schema<
    serializers.AuthTokensInfoRequest.Raw,
    DevRev.AuthTokensInfoRequest
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace AuthTokensInfoRequest {
    type Raw = Record<string, unknown>;
}
