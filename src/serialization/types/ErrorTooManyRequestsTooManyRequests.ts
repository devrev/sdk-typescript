/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ErrorTooManyRequestsTooManyRequests: core.serialization.Schema<
    serializers.ErrorTooManyRequestsTooManyRequests.Raw,
    DevRev.ErrorTooManyRequestsTooManyRequests
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace ErrorTooManyRequestsTooManyRequests {
    type Raw = Record<string, unknown>;
}
