/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { IssuePriority } from "./IssuePriority";
import { WorkBaseSummary } from "./WorkBaseSummary";

export const IssueSummary: core.serialization.ObjectSchema<serializers.IssueSummary.Raw, DevRev.IssueSummary> =
    core.serialization
        .object({
            priority: IssuePriority.optional(),
        })
        .extend(WorkBaseSummary);

export declare namespace IssueSummary {
    interface Raw extends WorkBaseSummary.Raw {
        priority?: IssuePriority.Raw | null;
    }
}
