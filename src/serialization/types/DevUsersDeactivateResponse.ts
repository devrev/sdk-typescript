/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const DevUsersDeactivateResponse: core.serialization.Schema<
    serializers.DevUsersDeactivateResponse.Raw,
    DevRev.DevUsersDeactivateResponse
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace DevUsersDeactivateResponse {
    type Raw = Record<string, unknown>;
}
