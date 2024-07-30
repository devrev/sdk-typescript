/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const AccountsUpdateRequestArtifacts: core.serialization.ObjectSchema<
    serializers.AccountsUpdateRequestArtifacts.Raw,
    DevRev.AccountsUpdateRequestArtifacts
> = core.serialization.object({
    set: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace AccountsUpdateRequestArtifacts {
    interface Raw {
        set?: string[] | null;
    }
}
