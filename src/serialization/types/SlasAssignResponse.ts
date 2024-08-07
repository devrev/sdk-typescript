/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { SlaAssignResult } from "./SlaAssignResult";

export const SlasAssignResponse: core.serialization.ObjectSchema<
    serializers.SlasAssignResponse.Raw,
    DevRev.SlasAssignResponse
> = core.serialization.object({
    results: core.serialization.list(SlaAssignResult),
});

export declare namespace SlasAssignResponse {
    interface Raw {
        results: SlaAssignResult.Raw[];
    }
}
