/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const CreateStage: core.serialization.ObjectSchema<serializers.CreateStage.Raw, DevRev.CreateStage> =
    core.serialization.object({
        notes: core.serialization.string().optional(),
        stage: core.serialization.string(),
    });

export declare namespace CreateStage {
    interface Raw {
        notes?: string | null;
        stage: string;
    }
}
