/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ExternalIdentity: core.serialization.ObjectSchema<
    serializers.ExternalIdentity.Raw,
    DevRev.ExternalIdentity
> = core.serialization.object({
    displayName: core.serialization.property("display_name", core.serialization.string().optional()),
    id: core.serialization.string().optional(),
    isVerified: core.serialization.property("is_verified", core.serialization.boolean().optional()),
    issuer: core.serialization.string().optional(),
});

export declare namespace ExternalIdentity {
    interface Raw {
        display_name?: string | null;
        id?: string | null;
        is_verified?: boolean | null;
        issuer?: string | null;
    }
}
