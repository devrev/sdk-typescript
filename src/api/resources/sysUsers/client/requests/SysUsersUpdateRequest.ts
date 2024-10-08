/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface SysUsersUpdateRequest {
    /** Updated display name for the system user. */
    displayName?: string;
    /** Artifact ID of the system user's new display picture. */
    displayPicture?: string;
    /** Updated full name for the system user. */
    fullName?: string;
    /** The ID of system user to update. */
    id: string;
}
