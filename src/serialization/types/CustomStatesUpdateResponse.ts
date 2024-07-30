/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { CustomState } from "./CustomState";

export const CustomStatesUpdateResponse: core.serialization.ObjectSchema<
    serializers.CustomStatesUpdateResponse.Raw,
    DevRev.CustomStatesUpdateResponse
> = core.serialization.object({
    customState: core.serialization.property("custom_state", CustomState),
});

export declare namespace CustomStatesUpdateResponse {
    interface Raw {
        custom_state: CustomState.Raw;
    }
}