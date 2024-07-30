/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {
 *         displayName: "display_name"
 *     }
 */
export interface RevOrgsCreateRequest {
    /** Account Id to associate with this Rev organization. */
    account?: string;
    /**
     * The IDs of the artifacts to associate with the Rev organization.
     *
     */
    artifacts?: string[];
    /** Application-defined custom fields. */
    customFields?: Record<string, unknown>;
    /**
     * Schema fragment IDs associated with this Rev organization.
     *
     */
    customSchemaFragments?: string[];
    /** Description of the Rev organization. */
    description?: string;
    /** Name of the Rev organization. */
    displayName: string;
    /** Company's domain name. Example - 'devrev.ai'. */
    domain?: string;
    environment?: DevRev.OrgEnvironment;
    /**
     * External ref is a custom unique identifier which is a reference to
     * an unique id for this organization's data in some system of
     * records.
     *
     */
    externalRef?: string;
    /** Tags associated with the Rev organization. */
    tags?: DevRev.SetTagWithValue[];
    /** The tier of the RevOrg. */
    tier?: string;
}