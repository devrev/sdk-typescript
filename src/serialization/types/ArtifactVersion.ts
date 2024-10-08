/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { UserSummary } from "./UserSummary";

export const ArtifactVersion: core.serialization.ObjectSchema<serializers.ArtifactVersion.Raw, DevRev.ArtifactVersion> =
    core.serialization.object({
        modifiedBy: core.serialization.property("modified_by", UserSummary.optional()),
        timestamp: core.serialization.date(),
        version: core.serialization.string(),
    });

export declare namespace ArtifactVersion {
    interface Raw {
        modified_by?: UserSummary.Raw | null;
        timestamp: string;
        version: string;
    }
}
