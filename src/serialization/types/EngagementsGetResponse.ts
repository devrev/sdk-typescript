/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Engagement } from "./Engagement";

export const EngagementsGetResponse: core.serialization.ObjectSchema<
    serializers.EngagementsGetResponse.Raw,
    DevRev.EngagementsGetResponse
> = core.serialization.object({
    engagement: Engagement,
});

export declare namespace EngagementsGetResponse {
    interface Raw {
        engagement: Engagement.Raw;
    }
}
