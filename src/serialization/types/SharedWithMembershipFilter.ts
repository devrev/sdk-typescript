/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const SharedWithMembershipFilter: core.serialization.ObjectSchema<
    serializers.SharedWithMembershipFilter.Raw,
    DevRev.SharedWithMembershipFilter
> = core.serialization.object({
    member: core.serialization.string().optional(),
    role: core.serialization.string().optional(),
});

export declare namespace SharedWithMembershipFilter {
    interface Raw {
        member?: string | null;
        role?: string | null;
    }
}
