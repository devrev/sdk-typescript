/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { SamlConnectionFieldsMap } from "./SamlConnectionFieldsMap";

export const DevOrgAuthConnectionsCreateRequestSamlOptions: core.serialization.ObjectSchema<
    serializers.DevOrgAuthConnectionsCreateRequestSamlOptions.Raw,
    DevRev.DevOrgAuthConnectionsCreateRequestSamlOptions
> = core.serialization.object({
    connectionName: core.serialization.property("connection_name", core.serialization.string().optional()),
    fieldsMap: core.serialization.property("fields_map", SamlConnectionFieldsMap.optional()),
    signInEndpoint: core.serialization.property("sign_in_endpoint", core.serialization.string()),
    signingCert: core.serialization.property("signing_cert", core.serialization.string()),
});

export declare namespace DevOrgAuthConnectionsCreateRequestSamlOptions {
    interface Raw {
        connection_name?: string | null;
        fields_map?: SamlConnectionFieldsMap.Raw | null;
        sign_in_endpoint: string;
        signing_cert: string;
    }
}
