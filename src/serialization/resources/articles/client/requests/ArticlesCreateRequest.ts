/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { AccessLevel } from "../../../../types/AccessLevel";
import { ArticleType } from "../../../../types/ArticleType";
import { ArticlesCreateRequestResource } from "../../../../types/ArticlesCreateRequestResource";
import { SetSharedWithMembership } from "../../../../types/SetSharedWithMembership";
import { ArticleStatus } from "../../../../types/ArticleStatus";
import { SetTagWithValue } from "../../../../types/SetTagWithValue";

export const ArticlesCreateRequest: core.serialization.Schema<
    serializers.ArticlesCreateRequest.Raw,
    DevRev.ArticlesCreateRequest
> = core.serialization.object({
    accessLevel: core.serialization.property("access_level", AccessLevel.optional()),
    appliesToParts: core.serialization.property(
        "applies_to_parts",
        core.serialization.list(core.serialization.string())
    ),
    articleType: core.serialization.property("article_type", ArticleType.optional()),
    authoredBy: core.serialization.property(
        "authored_by",
        core.serialization.list(core.serialization.string()).optional()
    ),
    description: core.serialization.string().optional(),
    extractedContent: core.serialization.property(
        "extracted_content",
        core.serialization.list(core.serialization.string()).optional()
    ),
    language: core.serialization.string().optional(),
    ownedBy: core.serialization.property("owned_by", core.serialization.list(core.serialization.string())),
    parent: core.serialization.string().optional(),
    publishedAt: core.serialization.property("published_at", core.serialization.date().optional()),
    resource: ArticlesCreateRequestResource,
    scope: core.serialization.number().optional(),
    sharedWith: core.serialization.property("shared_with", core.serialization.list(SetSharedWithMembership).optional()),
    status: ArticleStatus.optional(),
    tags: core.serialization.list(SetTagWithValue).optional(),
    title: core.serialization.string(),
});

export declare namespace ArticlesCreateRequest {
    interface Raw {
        access_level?: AccessLevel.Raw | null;
        applies_to_parts: string[];
        article_type?: ArticleType.Raw | null;
        authored_by?: string[] | null;
        description?: string | null;
        extracted_content?: string[] | null;
        language?: string | null;
        owned_by: string[];
        parent?: string | null;
        published_at?: string | null;
        resource: ArticlesCreateRequestResource.Raw;
        scope?: number | null;
        shared_with?: SetSharedWithMembership.Raw[] | null;
        status?: ArticleStatus.Raw | null;
        tags?: SetTagWithValue.Raw[] | null;
        title: string;
    }
}