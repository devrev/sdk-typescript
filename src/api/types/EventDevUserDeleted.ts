/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface EventDevUserDeleted {
    /** The ID of the Dev user that was deleted. */
    id: string;
    oldDevUser?: DevRev.DevUser;
}
