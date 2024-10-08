/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Updates an object's stage.
 */
export interface StageUpdate {
    /** The updated name of the stage, otherwise unchanged if not set. */
    name?: string;
    /**
     * The ID of the updated custom stage, otherwise unchanged if not set.
     * If this is set, the name field is ignored.
     */
    stage?: string;
}
