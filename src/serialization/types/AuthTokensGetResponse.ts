/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AuthToken } from "./AuthToken";

export const AuthTokensGetResponse: core.serialization.ObjectSchema<
    serializers.AuthTokensGetResponse.Raw,
    DevRev.AuthTokensGetResponse
> = core.serialization.object({
    token: AuthToken,
});

export declare namespace AuthTokensGetResponse {
    interface Raw {
        token: AuthToken.Raw;
    }
}