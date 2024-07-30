/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AtomBaseSummary } from "./AtomBaseSummary";

export const CustomSchemaFragmentSummary: core.serialization.Schema<
    serializers.CustomSchemaFragmentSummary.Raw,
    DevRev.CustomSchemaFragmentSummary
> = core.serialization
    .union("type", {
        app_fragment: AtomBaseSummary,
        custom_type_fragment: AtomBaseSummary,
        tenant_fragment: AtomBaseSummary,
    })
    .transform<DevRev.CustomSchemaFragmentSummary>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace CustomSchemaFragmentSummary {
    type Raw =
        | CustomSchemaFragmentSummary.AppFragment
        | CustomSchemaFragmentSummary.CustomTypeFragment
        | CustomSchemaFragmentSummary.TenantFragment;

    interface AppFragment extends AtomBaseSummary.Raw {
        type: "app_fragment";
    }

    interface CustomTypeFragment extends AtomBaseSummary.Raw {
        type: "custom_type_fragment";
    }

    interface TenantFragment extends AtomBaseSummary.Raw {
        type: "tenant_fragment";
    }
}
