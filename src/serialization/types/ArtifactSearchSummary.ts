/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { ArtifactSummary } from "./ArtifactSummary";
import { SearchSummaryBase } from "./SearchSummaryBase";

export const ArtifactSearchSummary: core.serialization.ObjectSchema<
    serializers.ArtifactSearchSummary.Raw,
    DevRev.ArtifactSearchSummary
> = core.serialization
    .object({
        artifact: ArtifactSummary,
    })
    .extend(SearchSummaryBase);

export declare namespace ArtifactSearchSummary {
    interface Raw extends SearchSummaryBase.Raw {
        artifact: ArtifactSummary.Raw;
    }
}
