/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { StageDiagramSummary } from "./StageDiagramSummary";
import { CustomSchemaFragmentBase } from "./CustomSchemaFragmentBase";

export const CustomTypeFragment: core.serialization.ObjectSchema<
    serializers.CustomTypeFragment.Raw,
    DevRev.CustomTypeFragment
> = core.serialization
    .object({
        stageDiagram: core.serialization.property("stage_diagram", StageDiagramSummary.optional()),
        subtype: core.serialization.string().optional(),
        subtypeDisplayName: core.serialization.property("subtype_display_name", core.serialization.string().optional()),
    })
    .extend(CustomSchemaFragmentBase);

export declare namespace CustomTypeFragment {
    interface Raw extends CustomSchemaFragmentBase.Raw {
        stage_diagram?: StageDiagramSummary.Raw | null;
        subtype?: string | null;
        subtype_display_name?: string | null;
    }
}
