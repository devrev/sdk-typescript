/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Requested custom schemas described abstractly. Every provided schema's
 * custom field must be specified, otherwise a bad request error is
 * returned. If a new custom schema specifier is provided, then it will be
 * added to the work, otherwise if a custom schema is omitted from the
 * specifier, it remains unmodified.
 */
export interface CustomSchemaSpec {
    /** List of apps that are requested. */
    apps?: string[];
    /** Name of the subtype requested. */
    subtype?: string;
    /** Whether the tenant schema is requested. */
    tenantFragment?: boolean;
    /** Whether to enforce required fields validation. */
    validateRequiredFields?: boolean;
}
