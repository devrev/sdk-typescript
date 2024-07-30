/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const Subtype: core.serialization.ObjectSchema<serializers.Subtype.Raw, DevRev.Subtype> =
    core.serialization.object({
        displayName: core.serialization.property("display_name", core.serialization.string().optional()),
        fragmentId: core.serialization.property("fragment_id", core.serialization.string()),
        leafType: core.serialization.property("leaf_type", core.serialization.string()),
        value: core.serialization.string(),
    });

export declare namespace Subtype {
    interface Raw {
        display_name?: string | null;
        fragment_id: string;
        leaf_type: string;
        value: string;
    }
}
