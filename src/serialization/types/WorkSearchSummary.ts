/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { CommentSearchSummary } from "./CommentSearchSummary";
import { WorkSummary } from "./WorkSummary";
import { SearchSummaryBase } from "./SearchSummaryBase";

export const WorkSearchSummary: core.serialization.ObjectSchema<
    serializers.WorkSearchSummary.Raw,
    DevRev.WorkSearchSummary
> = core.serialization
    .object({
        comments: core.serialization.list(CommentSearchSummary).optional(),
        work: WorkSummary,
    })
    .extend(SearchSummaryBase);

export declare namespace WorkSearchSummary {
    interface Raw extends SearchSummaryBase.Raw {
        comments?: CommentSearchSummary.Raw[] | null;
        work: WorkSummary.Raw;
    }
}