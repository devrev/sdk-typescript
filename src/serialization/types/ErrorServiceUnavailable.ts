/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { ErrorBase } from "./ErrorBase";

export const ErrorServiceUnavailable: core.serialization.ObjectSchema<
    serializers.ErrorServiceUnavailable.Raw,
    DevRev.ErrorServiceUnavailable
> = core.serialization.object({}).extend(ErrorBase);

export declare namespace ErrorServiceUnavailable {
    interface Raw extends ErrorBase.Raw {}
}
