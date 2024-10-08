/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { ErrorBase } from "./ErrorBase";

export const ErrorInternalServerError: core.serialization.ObjectSchema<
    serializers.ErrorInternalServerError.Raw,
    DevRev.ErrorInternalServerError
> = core.serialization.object({}).extend(ErrorBase);

export declare namespace ErrorInternalServerError {
    interface Raw extends ErrorBase.Raw {}
}
