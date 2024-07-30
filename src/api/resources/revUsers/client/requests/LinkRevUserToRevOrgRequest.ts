/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface LinkRevUserToRevOrgRequest {
    /** The ID of the Rev user. */
    id?: string;
    /** The ID of the Rev organization to link the Rev user to. */
    revOrg?: string;
    /**
     * The don of the rev org to link the rev user to. This is deprecated,
     * use rev_org instead.
     *
     */
    revOrgDon?: string;
    /**
     * The don of the rev user to link. This is deprecated, use id
     * instead.
     *
     */
    userDon?: string;
}