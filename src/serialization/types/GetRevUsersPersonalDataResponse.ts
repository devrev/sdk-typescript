/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const GetRevUsersPersonalDataResponse: core.serialization.Schema<
    serializers.GetRevUsersPersonalDataResponse.Raw,
    DevRev.GetRevUsersPersonalDataResponse
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace GetRevUsersPersonalDataResponse {
    type Raw = Record<string, unknown>;
}
