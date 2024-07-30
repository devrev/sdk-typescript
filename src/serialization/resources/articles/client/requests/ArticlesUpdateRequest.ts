/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { AccessLevel } from "../../../../types/AccessLevel";
import { ArticlesUpdateRequestAppliesToParts } from "../../../../types/ArticlesUpdateRequestAppliesToParts";
import { ArticlesUpdateRequestArtifacts } from "../../../../types/ArticlesUpdateRequestArtifacts";
import { ArticlesUpdateRequestAuthoredBy } from "../../../../types/ArticlesUpdateRequestAuthoredBy";
import { ArticlesUpdateRequestExtractedContent } from "../../../../types/ArticlesUpdateRequestExtractedContent";
import { ArticlesUpdateRequestOwnedBy } from "../../../../types/ArticlesUpdateRequestOwnedBy";
import { ArticlesUpdateRequestReorder } from "../../../../types/ArticlesUpdateRequestReorder";
import { ArticlesUpdateRequestSharedWith } from "../../../../types/ArticlesUpdateRequestSharedWith";
import { ArticleStatus } from "../../../../types/ArticleStatus";
import { ArticlesUpdateRequestTags } from "../../../../types/ArticlesUpdateRequestTags";

export const ArticlesUpdateRequest: core.serialization.Schema<
    serializers.ArticlesUpdateRequest.Raw,
    DevRev.ArticlesUpdateRequest
> = core.serialization.object({
    accessLevel: core.serialization.property("access_level", AccessLevel.optional()),
    appliesToParts: core.serialization.property("applies_to_parts", ArticlesUpdateRequestAppliesToParts.optional()),
    artifacts: ArticlesUpdateRequestArtifacts.optional(),
    authoredBy: core.serialization.property("authored_by", ArticlesUpdateRequestAuthoredBy.optional()),
    description: core.serialization.string().optional(),
    extractedContent: core.serialization.property(
        "extracted_content",
        ArticlesUpdateRequestExtractedContent.optional()
    ),
    id: core.serialization.string(),
    language: core.serialization.string().optional(),
    ownedBy: core.serialization.property("owned_by", ArticlesUpdateRequestOwnedBy.optional()),
    parent: core.serialization.string().optional(),
    publishedVersion: core.serialization.property("published_version", core.serialization.string().optional()),
    reorder: ArticlesUpdateRequestReorder.optional(),
    sharedWith: core.serialization.property("shared_with", ArticlesUpdateRequestSharedWith.optional()),
    status: ArticleStatus.optional(),
    tags: ArticlesUpdateRequestTags.optional(),
    title: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
});

export declare namespace ArticlesUpdateRequest {
    interface Raw {
        access_level?: AccessLevel.Raw | null;
        applies_to_parts?: ArticlesUpdateRequestAppliesToParts.Raw | null;
        artifacts?: ArticlesUpdateRequestArtifacts.Raw | null;
        authored_by?: ArticlesUpdateRequestAuthoredBy.Raw | null;
        description?: string | null;
        extracted_content?: ArticlesUpdateRequestExtractedContent.Raw | null;
        id: string;
        language?: string | null;
        owned_by?: ArticlesUpdateRequestOwnedBy.Raw | null;
        parent?: string | null;
        published_version?: string | null;
        reorder?: ArticlesUpdateRequestReorder.Raw | null;
        shared_with?: ArticlesUpdateRequestSharedWith.Raw | null;
        status?: ArticleStatus.Raw | null;
        tags?: ArticlesUpdateRequestTags.Raw | null;
        title?: string | null;
        url?: string | null;
    }
}