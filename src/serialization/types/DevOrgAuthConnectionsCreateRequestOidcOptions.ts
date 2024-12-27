/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const DevOrgAuthConnectionsCreateRequestOidcOptions: core.serialization.ObjectSchema<
    serializers.DevOrgAuthConnectionsCreateRequestOidcOptions.Raw,
    DevRev.DevOrgAuthConnectionsCreateRequestOidcOptions
> = core.serialization.object({
    clientId: core.serialization.property("client_id", core.serialization.string()),
    clientSecret: core.serialization.property("client_secret", core.serialization.string()),
    issuer: core.serialization.string(),
});

export declare namespace DevOrgAuthConnectionsCreateRequestOidcOptions {
    interface Raw {
        client_id: string;
        client_secret: string;
        issuer: string;
    }
}
