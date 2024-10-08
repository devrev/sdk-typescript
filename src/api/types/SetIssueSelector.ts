/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SetIssueSelector {
    /**
     * Custom fields on the issue with their fully qualified names and the
     * associated with their exact allowed values. The SLA policy applies
     * to issues where all named custom fields have exactly the specified
     * values.
     */
    customFields?: Record<string, unknown>;
    /** The SLA policy applies to the issues of these owners. */
    owners?: string[];
    /** The SLA policy applies to the issues of these parts. */
    parts?: string[];
    /** The SLA policy applies to the issues of these revorgs. */
    revOrgs?: string[];
    /** The SLA policy applies to issues with these stages. */
    stageName?: string[];
    /** The issue subtype for which the SLA policy applies. */
    subtype?: string[];
    /**
     * The SLA policy applies to issues with these tags. If empty, the tag
     * filter isn't applied.
     */
    tags?: string[];
}
