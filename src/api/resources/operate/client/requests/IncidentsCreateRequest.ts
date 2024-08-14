/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {
 *         title: "title"
 *     }
 */
export interface IncidentsCreateRequest {
    /** Parts to which the incident is applicable to. */
    appliesToParts?: string[];
    /** Artifacts attached to the incident. */
    artifacts?: string[];
    /** Body of the incident. */
    body?: string;
    /** Application-defined custom fields. */
    customFields?: Record<string, unknown>;
    customSchemaSpec?: DevRev.CustomSchemaSpec;
    /** Time when the incident was identified/reported. */
    identifiedAt?: Date;
    /** List of customers impacted due to the incident. */
    impactedCustomers?: string[];
    /** User IDs of the users that own the incident. */
    ownedBy?: string[];
    /** Timestamp when the incident was resolved. */
    resolvedAt?: Date;
    /** Severity of the incident. */
    severity?: number;
    stage?: DevRev.CreateStage;
    /**
     * Users, along with the incident commander, involved in resolving
     * incidents and handling communication.
     *
     */
    stakeholders?: string[];
    /** Tags associated with the object. */
    tags?: DevRev.CreateTagWithValue[];
    /** Timestamp when the incident is expected to be resolved. */
    targetCloseDate?: Date;
    /** Title of the incident. */
    title: string;
}