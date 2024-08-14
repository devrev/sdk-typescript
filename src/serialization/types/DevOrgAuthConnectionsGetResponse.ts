/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AuthConnection } from "./AuthConnection";

export const DevOrgAuthConnectionsGetResponse: core.serialization.ObjectSchema<
    serializers.DevOrgAuthConnectionsGetResponse.Raw,
    DevRev.DevOrgAuthConnectionsGetResponse
> = core.serialization.object({
    authConnection: core.serialization.property("auth_connection", AuthConnection),
});

export declare namespace DevOrgAuthConnectionsGetResponse {
    interface Raw {
        auth_connection: AuthConnection.Raw;
    }
}