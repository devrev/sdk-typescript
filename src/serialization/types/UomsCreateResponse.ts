/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Uom } from "./Uom";

export const UomsCreateResponse: core.serialization.ObjectSchema<
    serializers.UomsCreateResponse.Raw,
    DevRev.UomsCreateResponse
> = core.serialization.object({
    uom: Uom,
});

export declare namespace UomsCreateResponse {
    interface Raw {
        uom: Uom.Raw;
    }
}