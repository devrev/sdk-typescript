/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Artifact } from "./Artifact";
import { ArtifactVersion } from "./ArtifactVersion";

export const ArtifactsGetResponse: core.serialization.ObjectSchema<
    serializers.ArtifactsGetResponse.Raw,
    DevRev.ArtifactsGetResponse
> = core.serialization.object({
    artifact: Artifact,
    version: ArtifactVersion,
});

export declare namespace ArtifactsGetResponse {
    interface Raw {
        artifact: Artifact.Raw;
        version: ArtifactVersion.Raw;
    }
}