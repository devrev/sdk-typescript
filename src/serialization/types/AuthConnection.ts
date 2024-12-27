/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../core";
import * as serializers from "../index";
import * as DevRev from "../../api/index";
import { AuthConnectionOptionsGoogleApps } from "./AuthConnectionOptionsGoogleApps";
import { AuthConnectionOptionsOidc } from "./AuthConnectionOptionsOidc";
import { AuthConnectionOptionsOkta } from "./AuthConnectionOptionsOkta";
import { AuthConnectionOptionsSaml } from "./AuthConnectionOptionsSaml";
import { AuthConnectionOptionsSocial } from "./AuthConnectionOptionsSocial";
import { AuthConnectionOptionsAzureAd } from "./AuthConnectionOptionsAzureAd";

const _Base = core.serialization.object({
    displayName: core.serialization.property("display_name", core.serialization.string()),
    enabled: core.serialization.boolean(),
    id: core.serialization.string(),
});
export const AuthConnection: core.serialization.Schema<serializers.AuthConnection.Raw, DevRev.AuthConnection> =
    core.serialization
        .union("type", {
            google_apps: AuthConnectionOptionsGoogleApps.extend(_Base),
            oidc: AuthConnectionOptionsOidc.extend(_Base),
            okta: AuthConnectionOptionsOkta.extend(_Base),
            samlp: AuthConnectionOptionsSaml.extend(_Base),
            social: core.serialization
                .object({
                    value: AuthConnectionOptionsSocial,
                })
                .extend(_Base),
            waad: AuthConnectionOptionsAzureAd.extend(_Base),
        })
        .transform<DevRev.AuthConnection>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace AuthConnection {
    type Raw =
        | AuthConnection.GoogleApps
        | AuthConnection.Oidc
        | AuthConnection.Okta
        | AuthConnection.Samlp
        | AuthConnection.Social
        | AuthConnection.Waad;

    interface GoogleApps extends _Base, AuthConnectionOptionsGoogleApps.Raw {
        type: "google_apps";
    }

    interface Oidc extends _Base, AuthConnectionOptionsOidc.Raw {
        type: "oidc";
    }

    interface Okta extends _Base, AuthConnectionOptionsOkta.Raw {
        type: "okta";
    }

    interface Samlp extends _Base, AuthConnectionOptionsSaml.Raw {
        type: "samlp";
    }

    interface Social extends _Base {
        type: "social";
        value: AuthConnectionOptionsSocial.Raw;
    }

    interface Waad extends _Base, AuthConnectionOptionsAzureAd.Raw {
        type: "waad";
    }

    interface _Base {
        display_name: string;
        enabled: boolean;
        id: string;
    }
}
