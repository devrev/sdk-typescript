/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Uom } from "./Uom";

export const UomsUpdateResponse: core.serialization.ObjectSchema<
    serializers.UomsUpdateResponse.Raw,
    DevRev.UomsUpdateResponse
> = core.serialization.object({
    uom: Uom,
});

export declare namespace UomsUpdateResponse {
    interface Raw {
        uom: Uom.Raw;
    }
}