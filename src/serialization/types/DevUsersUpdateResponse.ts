/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { DevUser } from "./DevUser";

export const DevUsersUpdateResponse: core.serialization.ObjectSchema<
    serializers.DevUsersUpdateResponse.Raw,
    DevRev.DevUsersUpdateResponse
> = core.serialization.object({
    devUser: core.serialization.property("dev_user", DevUser),
});

export declare namespace DevUsersUpdateResponse {
    interface Raw {
        dev_user: DevUser.Raw;
    }
}