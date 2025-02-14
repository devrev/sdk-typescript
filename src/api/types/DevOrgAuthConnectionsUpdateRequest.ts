/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

/**
 * Request to update an enterprise authentication connection for a Dev
 * organization.
 */
export type DevOrgAuthConnectionsUpdateRequest =
    | DevRev.DevOrgAuthConnectionsUpdateRequest.GoogleApps
    | DevRev.DevOrgAuthConnectionsUpdateRequest.None
    | DevRev.DevOrgAuthConnectionsUpdateRequest.Oidc
    | DevRev.DevOrgAuthConnectionsUpdateRequest.Okta
    | DevRev.DevOrgAuthConnectionsUpdateRequest.Samlp
    | DevRev.DevOrgAuthConnectionsUpdateRequest.Waad;

export declare namespace DevOrgAuthConnectionsUpdateRequest {
    interface GoogleApps extends DevRev.DevOrgAuthConnectionsUpdateRequestGoogleAppsOptions, _Base {
        type: "google_apps";
    }

    interface None extends _Base {
        type: "none";
        value: DevRev.Empty;
    }

    interface Oidc extends DevRev.DevOrgAuthConnectionsUpdateRequestOidcOptions, _Base {
        type: "oidc";
    }

    interface Okta extends DevRev.DevOrgAuthConnectionsUpdateRequestOktaOptions, _Base {
        type: "okta";
    }

    interface Samlp extends DevRev.DevOrgAuthConnectionsUpdateRequestSamlOptions, _Base {
        type: "samlp";
    }

    interface Waad extends DevRev.DevOrgAuthConnectionsUpdateRequestAzureAdOptions, _Base {
        type: "waad";
    }

    interface _Base {
        /**
         * New display name of the authentication connection. This name will
         * be visible to all the users when they sign in to this Dev
         * organization. For example, if the display_name is 'abclogin', then
         * it would appear on the login button as 'Log in to abclogin'.
         */
        displayName?: string;
        /** ID of the authentication connection which is to be updated. */
        id: string;
    }
}
