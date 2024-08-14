/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const AuthTokenSubjectTokenType: core.serialization.Schema<
    serializers.AuthTokenSubjectTokenType.Raw,
    DevRev.AuthTokenSubjectTokenType
> = core.serialization.enum_([
    "urn:devrev:params:oauth:token-type:jwt:auth0",
    "urn:devrev:params:oauth:token-type:jwt:dev",
    "urn:devrev:params:oauth:token-type:rat",
    "urn:devrev:params:oauth:token-type:rev",
    "urn:devrev:params:oauth:token-type:revinfo",
    "urn:devrev:params:oauth:token-type:session",
    "urn:devrev:params:oauth:token-type:sysu",
    "urn:devrev:params:oauth:token-type:userinfo",
    "urn:ietf:params:oauth:token-type:jwt",
]);

export declare namespace AuthTokenSubjectTokenType {
    type Raw =
        | "urn:devrev:params:oauth:token-type:jwt:auth0"
        | "urn:devrev:params:oauth:token-type:jwt:dev"
        | "urn:devrev:params:oauth:token-type:rat"
        | "urn:devrev:params:oauth:token-type:rev"
        | "urn:devrev:params:oauth:token-type:revinfo"
        | "urn:devrev:params:oauth:token-type:session"
        | "urn:devrev:params:oauth:token-type:sysu"
        | "urn:devrev:params:oauth:token-type:userinfo"
        | "urn:ietf:params:oauth:token-type:jwt";
}