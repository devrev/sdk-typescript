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
    /** Timestamp when the incident was acknowledged. */
    acknowledgedDate?: Date;
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
    identifiedDate?: Date;
    impact?: DevRev.CreateImpactedCustomerDetails;
    /** List of customers impacted due to the incident. */
    impactedCustomers?: string[];
    /** Timestamp when the incident was mitigated. */
    mitigatedDate?: Date;
    /** User IDs of the users that own the incident. */
    ownedBy?: string[];
    /**
     * The article ids of the Post-Incident Analysis(PIA) of the incident.
     *
     */
    pia?: string[];
    /**
     * The article ids of the playbook(s) associated with the incident.
     *
     */
    playbooks?: string[];
    /**
     * The article ids of other documents associated with the incident.
     *
     */
    relatedDocs?: string[];
    /** The entity that first reported the incident. */
    reportedBy?: number;
    /** Severity of the incident. */
    severity?: number;
    /**
     * Source of where the incident was created. Only sys users and
     * service accounts are supposed to set this field.
     *
     */
    source?: number;
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
