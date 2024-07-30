/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AtomBase } from "./AtomBase";

export const Engagement: core.serialization.ObjectSchema<serializers.Engagement.Raw, DevRev.Engagement> =
    core.serialization
        .object({
            description: core.serialization.string().optional(),
        })
        .extend(AtomBase);

export declare namespace Engagement {
    interface Raw extends AtomBase.Raw {
        description?: string | null;
    }
}
