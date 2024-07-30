/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {
 *         tagsV2Id: "TAG-12345"
 *     }
 */
export interface ConversationsListQuery {
    /**
     * Filters for conversations belonging to any of the provided parts.
     */
    appliesToParts?: string | string[];
    /**
     * The cursor to resume iteration from. If not provided, then iteration
     * starts from the beginning.
     */
    cursor?: string;
    /**
     * Filters for conversation that belong to the given groups.
     */
    group?: string | string[];
    /**
     * Filters for conversations that are created by verified users.
     */
    isCreatorVerified?: boolean;
    /**
     * Filters for conversations that are spam.
     */
    isSpam?: boolean;
    /**
     * The maximum number of conversations to return. The default is '50'.
     */
    limit?: number;
    /**
     * Filters for conversations where these users are participants.
     */
    members?: string | string[];
    /**
     * The iteration mode to use, otherwise if not set, then "after" is
     * used.
     */
    mode?: DevRev.ListMode;
    /**
     * Filters for conversations owned by any of these users.
     */
    ownedBy?: string | string[];
    /**
     * Filters for conversations that are associated with any of the
     * provided Rev organizations.
     */
    revOrg?: string | string[];
    /**
     * Filters for records with any of the provided SLA stages.
     */
    slaSummaryStage?: DevRev.SlaSummaryStage | DevRev.SlaSummaryStage[];
    /**
     * Filters for conversations with any of the provided source channels.
     */
    sourceChannels?: string | string[];
    /**
     * Filters for records in the provided stage(s) by name.
     */
    stageName?: string | string[];
    /**
     * Filters for conversations with any of the provided tags.
     */
    tags?: string | string[];
    /**
     * The ID of the tag.
     */
    tagsV2Id?: string;
    /**
     * The value for the object's association with the tag. If specified,
     * the value must be one that's specified in the tag's allowed values.
     */
    tagsV2Value?: string;
}
