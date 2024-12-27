/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {
 *         id: "ARTICLE-12345"
 *     }
 */
export interface ArticlesUpdateRequest {
    accessLevel?: DevRev.AccessLevel;
    aliases?: DevRev.ArticlesUpdateRequestAliases;
    appliesToParts?: DevRev.ArticlesUpdateRequestAppliesToParts;
    artifacts?: DevRev.ArticlesUpdateRequestArtifacts;
    authoredBy?: DevRev.ArticlesUpdateRequestAuthoredBy;
    contentBlocks?: DevRev.ArticlesUpdateRequestContentBlocks;
    /** Application-defined custom fields. */
    customFields?: Record<string, unknown>;
    customSchemaSpec?: DevRev.CustomSchemaSpec;
    /**
     * Updated description of the article object, or unchanged if not
     * provided.
     *
     */
    description?: string;
    extractedContent?: DevRev.ArticlesUpdateRequestExtractedContent;
    /** The article's ID. */
    id: string;
    /** Updates the language of the article. */
    language?: string;
    ownedBy?: DevRev.ArticlesUpdateRequestOwnedBy;
    /** The updated parent directory for the article. */
    parent?: string;
    /** Updates the the latest published version. */
    publishedVersion?: string;
    reorder?: DevRev.ArticlesUpdateRequestReorder;
    sharedWith?: DevRev.ArticlesUpdateRequestSharedWith;
    status?: DevRev.ArticleStatus;
    tags?: DevRev.ArticlesUpdateRequestTags;
    /**
     * Updated title of the article object, or unchanged if not provided.
     *
     */
    title?: string;
    /** Updates the URL of the external article. */
    url?: string;
}
