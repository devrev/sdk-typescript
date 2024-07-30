/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface RevUser extends DevRev.UserBase {
    /** The artifacts attached to the Rev user. */
    artifacts?: DevRev.ArtifactSummary[];
    /** Custom fields. */
    customFields?: Record<string, unknown>;
    /** Custom schema fragments. */
    customSchemaFragments?: string[];
    /** Description of the Rev user. */
    description?: string;
    /**
     * External ref is a mutable unique identifier for a user within the
     * Rev organization from your primary customer record. If none is
     * available, a good alternative is the email address/phone number
     * which could uniquely identify the user. If none is specified, a
     * system-generated identifier will be assigned to the user.
     */
    externalRef?: string;
    /** Whether the Rev user is verified or not. */
    isVerified?: boolean;
    revOrg?: DevRev.OrgSummary;
    /** Stock schema fragment. */
    stockSchemaFragment?: string;
    /** Subtype corresponding to the custom type fragment. */
    subtype?: string;
    /** Tags associated with the object. */
    tags?: DevRev.TagWithValue[];
}
