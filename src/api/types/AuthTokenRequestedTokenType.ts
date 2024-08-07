/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of the requested token.
 */
export type AuthTokenRequestedTokenType =
    | "urn:devrev:params:oauth:token-type:aat"
    | "urn:devrev:params:oauth:token-type:aat:act-as"
    | "urn:devrev:params:oauth:token-type:aat:public"
    | "urn:devrev:params:oauth:token-type:dev"
    | "urn:devrev:params:oauth:token-type:dev:connect"
    | "urn:devrev:params:oauth:token-type:gat"
    | "urn:devrev:params:oauth:token-type:pat"
    | "urn:devrev:params:oauth:token-type:pat:act-as"
    | "urn:devrev:params:oauth:token-type:rat"
    | "urn:devrev:params:oauth:token-type:rev"
    | "urn:devrev:params:oauth:token-type:session"
    | "urn:devrev:params:oauth:token-type:session:dev0"
    | "urn:devrev:params:oauth:token-type:session:onetime"
    | "urn:devrev:params:oauth:token-type:session:rev:act-as"
    | "urn:devrev:params:oauth:token-type:super"
    | "urn:devrev:params:oauth:token-type:sys"
    | "urn:ietf:params:oauth:token-type:jwt";

export const AuthTokenRequestedTokenType = {
    UrnDevrevParamsOauthTokenTypeAat: "urn:devrev:params:oauth:token-type:aat",
    UrnDevrevParamsOauthTokenTypeAatActAs: "urn:devrev:params:oauth:token-type:aat:act-as",
    UrnDevrevParamsOauthTokenTypeAatPublic: "urn:devrev:params:oauth:token-type:aat:public",
    UrnDevrevParamsOauthTokenTypeDev: "urn:devrev:params:oauth:token-type:dev",
    UrnDevrevParamsOauthTokenTypeDevConnect: "urn:devrev:params:oauth:token-type:dev:connect",
    UrnDevrevParamsOauthTokenTypeGat: "urn:devrev:params:oauth:token-type:gat",
    UrnDevrevParamsOauthTokenTypePat: "urn:devrev:params:oauth:token-type:pat",
    UrnDevrevParamsOauthTokenTypePatActAs: "urn:devrev:params:oauth:token-type:pat:act-as",
    UrnDevrevParamsOauthTokenTypeRat: "urn:devrev:params:oauth:token-type:rat",
    UrnDevrevParamsOauthTokenTypeRev: "urn:devrev:params:oauth:token-type:rev",
    UrnDevrevParamsOauthTokenTypeSession: "urn:devrev:params:oauth:token-type:session",
    UrnDevrevParamsOauthTokenTypeSessionDev0: "urn:devrev:params:oauth:token-type:session:dev0",
    UrnDevrevParamsOauthTokenTypeSessionOnetime: "urn:devrev:params:oauth:token-type:session:onetime",
    UrnDevrevParamsOauthTokenTypeSessionRevActAs: "urn:devrev:params:oauth:token-type:session:rev:act-as",
    UrnDevrevParamsOauthTokenTypeSuper: "urn:devrev:params:oauth:token-type:super",
    UrnDevrevParamsOauthTokenTypeSys: "urn:devrev:params:oauth:token-type:sys",
    UrnIetfParamsOauthTokenTypeJwt: "urn:ietf:params:oauth:token-type:jwt",
} as const;
