/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Information related to an email.
 */
export interface CreateEmailInfo {
    /** The address of the email address. */
    address: string;
    /** The name of the email address. */
    name?: string;
    /** The ID of the user associated with the email address. */
    user?: string;
}
