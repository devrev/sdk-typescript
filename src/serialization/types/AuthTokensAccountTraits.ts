/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const AuthTokensAccountTraits: core.serialization.ObjectSchema<
    serializers.AuthTokensAccountTraits.Raw,
    DevRev.AuthTokensAccountTraits
> = core.serialization.object({
    displayName: core.serialization.property("display_name", core.serialization.string().optional()),
    domains: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace AuthTokensAccountTraits {
    interface Raw {
        display_name?: string | null;
        domains?: string[] | null;
    }
}
