/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {}
 */
export interface GroupsListQuery {
    /**
     * The cursor to resume iteration from. If not provided, then iteration
     * starts from the beginning.
     */
    cursor?: string;
    /**
     * Filters the groups based on the group type.
     */
    groupType?: DevRev.GroupType | DevRev.GroupType[];
    /**
     * Whether to fetch default or custom groups.
     */
    isDefault?: boolean;
    /**
     * The maximum number of groups to return. The default is '50'.
     */
    limit?: number;
    /**
     * Filters the groups on basis of member type.
     */
    memberType?: DevRev.GroupMemberType | DevRev.GroupMemberType[];
    /**
     * The iteration mode to use, otherwise if not set, then "after" is
     * used.
     */
    mode?: DevRev.ListMode;
    /**
     * Comma-separated fields to sort the groups by.
     */
    sortBy?: string | string[];
}
