/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const EngagementsCreateRequestEngagementType: core.serialization.Schema<
    serializers.EngagementsCreateRequestEngagementType.Raw,
    DevRev.EngagementsCreateRequestEngagementType
> = core.serialization.enum_(["call", "default", "email", "linked_in", "offline"]);

export declare namespace EngagementsCreateRequestEngagementType {
    type Raw = "call" | "default" | "email" | "linked_in" | "offline";
}