/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { SlaSelectorAppliesTo } from "./SlaSelectorAppliesTo";
import { SetIssueSelector } from "./SetIssueSelector";
import { SlaSelectorPriority } from "./SlaSelectorPriority";
import { SlaSelectorSeverity } from "./SlaSelectorSeverity";

export const SetSlaSelector: core.serialization.ObjectSchema<serializers.SetSlaSelector.Raw, DevRev.SetSlaSelector> =
    core.serialization.object({
        appliesTo: core.serialization.property("applies_to", SlaSelectorAppliesTo),
        customFields: core.serialization.property(
            "custom_fields",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        issueSelector: core.serialization.property("issue_selector", SetIssueSelector.optional()),
        parts: core.serialization.list(core.serialization.string()).optional(),
        priority: core.serialization.list(SlaSelectorPriority).optional(),
        severity: core.serialization.list(SlaSelectorSeverity).optional(),
        sourceChannel: core.serialization.property(
            "source_channel",
            core.serialization.list(core.serialization.string()).optional()
        ),
        subtype: core.serialization.list(core.serialization.string()).optional(),
        tags: core.serialization.list(core.serialization.string()).optional(),
    });

export declare namespace SetSlaSelector {
    interface Raw {
        applies_to: SlaSelectorAppliesTo.Raw;
        custom_fields?: Record<string, unknown> | null;
        issue_selector?: SetIssueSelector.Raw | null;
        parts?: string[] | null;
        priority?: SlaSelectorPriority.Raw[] | null;
        severity?: SlaSelectorSeverity.Raw[] | null;
        source_channel?: string[] | null;
        subtype?: string[] | null;
        tags?: string[] | null;
    }
}
