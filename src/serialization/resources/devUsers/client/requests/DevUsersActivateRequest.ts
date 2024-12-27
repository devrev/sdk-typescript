/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const DevUsersActivateRequest: core.serialization.Schema<
    serializers.DevUsersActivateRequest.Raw,
    DevRev.DevUsersActivateRequest
> = core.serialization.object({
    groups: core.serialization.list(core.serialization.string()).optional(),
    id: core.serialization.string(),
});

export declare namespace DevUsersActivateRequest {
    interface Raw {
        groups?: string[] | null;
        id: string;
    }
}
