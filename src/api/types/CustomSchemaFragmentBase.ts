/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface CustomSchemaFragmentBase extends DevRev.AtomBase {
    /** The conditions associated with the fields. */
    conditions?: DevRev.CustomSchemaFragmentCondition[];
    /**
     * Indicates if the fragment has been deprecated. Modifications to
     * this field are done in-place and don't result in creation of a new
     * fragment in chain.
     */
    deprecated?: boolean;
    /** Description of the custom schema fragment. */
    description?: string;
    /** List of all fields in this custom schema fragment. */
    fields?: DevRev.SchemaFieldDescriptor[];
    fragmentType?: DevRev.CustomSchemaFragmentFragmentType;
    /** Leaf type this fragment applies to. */
    leafType?: string;
    newFragmentRef?: DevRev.CustomSchemaFragmentSummary;
    oldFragmentRef?: DevRev.CustomSchemaFragmentSummary;
}
