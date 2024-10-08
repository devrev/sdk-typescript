/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { CustomStage } from "./CustomStage";

export const CustomStagesGetResponse: core.serialization.ObjectSchema<
    serializers.CustomStagesGetResponse.Raw,
    DevRev.CustomStagesGetResponse
> = core.serialization.object({
    customStage: core.serialization.property("custom_stage", CustomStage),
});

export declare namespace CustomStagesGetResponse {
    interface Raw {
        custom_stage: CustomStage.Raw;
    }
}
