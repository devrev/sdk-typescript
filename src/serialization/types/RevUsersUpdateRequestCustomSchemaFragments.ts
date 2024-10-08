/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const RevUsersUpdateRequestCustomSchemaFragments: core.serialization.ObjectSchema<
    serializers.RevUsersUpdateRequestCustomSchemaFragments.Raw,
    DevRev.RevUsersUpdateRequestCustomSchemaFragments
> = core.serialization.object({
    set: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace RevUsersUpdateRequestCustomSchemaFragments {
    interface Raw {
        set?: string[] | null;
    }
}
