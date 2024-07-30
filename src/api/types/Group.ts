/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface Group extends DevRev.AtomBase {
    /** Description of the group. */
    description?: string;
    /** Whether it is a default group. */
    isDefault: boolean;
    memberType?: DevRev.GroupMemberType;
    /** Name of the group. */
    name?: string;
    owner?: DevRev.UserSummary;
}