/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const SysUsersUpdateRequest: core.serialization.Schema<
    serializers.SysUsersUpdateRequest.Raw,
    DevRev.SysUsersUpdateRequest
> = core.serialization.object({
    displayName: core.serialization.property("display_name", core.serialization.string().optional()),
    displayPicture: core.serialization.property("display_picture", core.serialization.string().optional()),
    fullName: core.serialization.property("full_name", core.serialization.string().optional()),
    id: core.serialization.string(),
});

export declare namespace SysUsersUpdateRequest {
    interface Raw {
        display_name?: string | null;
        display_picture?: string | null;
        full_name?: string | null;
        id: string;
    }
}
