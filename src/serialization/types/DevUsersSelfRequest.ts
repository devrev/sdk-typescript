/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const DevUsersSelfRequest: core.serialization.Schema<
    serializers.DevUsersSelfRequest.Raw,
    DevRev.DevUsersSelfRequest
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace DevUsersSelfRequest {
    type Raw = Record<string, unknown>;
}