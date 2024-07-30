/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ErrorInternalServerErrorType: core.serialization.Schema<
    serializers.ErrorInternalServerErrorType.Raw,
    DevRev.ErrorInternalServerErrorType
> = core.serialization.stringLiteral("internal_error");

export declare namespace ErrorInternalServerErrorType {
    type Raw = "internal_error";
}