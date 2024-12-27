/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const AuthConnectionOptionsAzureAd: core.serialization.ObjectSchema<
    serializers.AuthConnectionOptionsAzureAd.Raw,
    DevRev.AuthConnectionOptionsAzureAd
> = core.serialization.object({
    clientId: core.serialization.property("client_id", core.serialization.string()),
    domain: core.serialization.string(),
});

export declare namespace AuthConnectionOptionsAzureAd {
    interface Raw {
        client_id: string;
        domain: string;
    }
}
