/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const AuthTokenGrantType: core.serialization.Schema<
    serializers.AuthTokenGrantType.Raw,
    DevRev.AuthTokenGrantType
> = core.serialization.enum_([
    "urn:devrev:params:oauth:grant-type:token-issue",
    "urn:ietf:params:oauth:grant-type:token-exchange",
]);

export declare namespace AuthTokenGrantType {
    type Raw = "urn:devrev:params:oauth:grant-type:token-issue" | "urn:ietf:params:oauth:grant-type:token-exchange";
}
