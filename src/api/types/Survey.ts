/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface Survey extends DevRev.AtomBase {
    /** Description of the survey. */
    description?: string;
    /** Header of the survey. */
    header?: string;
    /** Text posted when introducing the survey to the responder. */
    introductoryText?: string;
    /**
     * Survey name associated with schema. This name would be unique per
     * dev org.
     */
    name?: string;
    /** Text posted after the response is collected. */
    responseText?: string;
    /** List of all fields in the schema. */
    schema?: DevRev.SchemaFieldDescriptor[];
    /** List of all the fields and their respective metadata in the schema. */
    schemaWithMetadata?: DevRev.SurveyFieldWithMetadata[];
    /** Title of the survey. */
    title?: string;
}
