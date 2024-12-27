/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const DeleteRevUsersPersonalDataRequest: core.serialization.Schema<
    serializers.DeleteRevUsersPersonalDataRequest.Raw,
    DevRev.DeleteRevUsersPersonalDataRequest
> = core.serialization.object({
    email: core.serialization.string(),
});

export declare namespace DeleteRevUsersPersonalDataRequest {
    interface Raw {
        email: string;
    }
}
