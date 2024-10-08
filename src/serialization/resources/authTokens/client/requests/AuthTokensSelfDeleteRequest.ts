/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { AuthTokenRequestedTokenType } from "../../../../types/AuthTokenRequestedTokenType";

export const AuthTokensSelfDeleteRequest: core.serialization.Schema<
    serializers.AuthTokensSelfDeleteRequest.Raw,
    DevRev.AuthTokensSelfDeleteRequest
> = core.serialization.object({
    requestedTokenType: core.serialization.property("requested_token_type", AuthTokenRequestedTokenType.optional()),
});

export declare namespace AuthTokensSelfDeleteRequest {
    interface Raw {
        requested_token_type?: AuthTokenRequestedTokenType.Raw | null;
    }
}
