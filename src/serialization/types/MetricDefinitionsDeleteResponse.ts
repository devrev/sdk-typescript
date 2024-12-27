/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const MetricDefinitionsDeleteResponse: core.serialization.Schema<
    serializers.MetricDefinitionsDeleteResponse.Raw,
    DevRev.MetricDefinitionsDeleteResponse
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace MetricDefinitionsDeleteResponse {
    type Raw = Record<string, unknown>;
}
