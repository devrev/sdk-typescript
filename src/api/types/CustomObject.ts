/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface CustomObject extends DevRev.AtomBase {
    /** Custom fields. */
    customFields?: Record<string, unknown>;
    /** Custom schema fragments. */
    customSchemaFragments?: string[];
    /** Stock schema fragment. */
    stockSchemaFragment?: string;
    /** Subtype corresponding to the custom type fragment. */
    subtype?: string;
}
