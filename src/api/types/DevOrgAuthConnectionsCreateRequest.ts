/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

/**
 * Request to create a new enterprise authentication connection.
 */
export type DevOrgAuthConnectionsCreateRequest =
    | DevRev.DevOrgAuthConnectionsCreateRequest.GoogleApps
    | DevRev.DevOrgAuthConnectionsCreateRequest.Oidc
    | DevRev.DevOrgAuthConnectionsCreateRequest.Samlp
    | DevRev.DevOrgAuthConnectionsCreateRequest.Waad;

export declare namespace DevOrgAuthConnectionsCreateRequest {
    interface GoogleApps extends DevRev.AuthConnectionOptionsGoogleApps, _Base {
        type: "google_apps";
    }

    interface Oidc extends DevRev.AuthConnectionOptionsOidc, _Base {
        type: "oidc";
    }

    interface Samlp extends DevRev.AuthConnectionOptionsSaml, _Base {
        type: "samlp";
    }

    interface Waad extends DevRev.AuthConnectionOptionsAzureAd, _Base {
        type: "waad";
    }

    interface _Base {
        /**
         * Display name of the authentication connection. This name will be
         * visible to all the users when they sign in to this Dev
         * organization. For example, if the display_name is 'abclogin', then
         * it would appear on the login button as 'Log in to abclogin'.
         */
        displayName?: string;
    }
}
