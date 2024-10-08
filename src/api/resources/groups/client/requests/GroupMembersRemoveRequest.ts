/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         group: "group",
 *         member: "DEVU-12345"
 *     }
 */
export interface GroupMembersRemoveRequest {
    /** ID of the group where the member is being removed. */
    group: string;
    /** ID of the member to be removed. */
    member: string;
}
