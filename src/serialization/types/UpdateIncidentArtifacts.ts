/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const UpdateIncidentArtifacts: core.serialization.ObjectSchema<
    serializers.UpdateIncidentArtifacts.Raw,
    DevRev.UpdateIncidentArtifacts
> = core.serialization.object({
    set: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace UpdateIncidentArtifacts {
    interface Raw {
        set?: string[] | null;
    }
}