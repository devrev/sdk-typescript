/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Object encapsulating the configuration parameters for an Azure AD
 * authentication connection.
 */
export interface DevOrgAuthConnectionsUpdateRequestAzureAdOptions {
    /** Client ID for the Azure authentication connection. */
    clientId?: string;
    /** Client secret for the Azure authentication connection. */
    clientSecret?: string;
    /** Domain URL of the Azure authentication connection. */
    domain?: string;
}
