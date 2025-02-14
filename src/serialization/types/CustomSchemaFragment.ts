/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AppFragment } from "./AppFragment";
import { CustomTypeFragment } from "./CustomTypeFragment";
import { TenantFragment } from "./TenantFragment";

export const CustomSchemaFragment: core.serialization.Schema<
    serializers.CustomSchemaFragment.Raw,
    DevRev.CustomSchemaFragment
> = core.serialization
    .union("type", {
        app_fragment: AppFragment,
        custom_type_fragment: CustomTypeFragment,
        tenant_fragment: TenantFragment,
    })
    .transform<DevRev.CustomSchemaFragment>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace CustomSchemaFragment {
    type Raw =
        | CustomSchemaFragment.AppFragment
        | CustomSchemaFragment.CustomTypeFragment
        | CustomSchemaFragment.TenantFragment;

    interface AppFragment extends AppFragment.Raw {
        type: "app_fragment";
    }

    interface CustomTypeFragment extends CustomTypeFragment.Raw {
        type: "custom_type_fragment";
    }

    interface TenantFragment extends TenantFragment.Raw {
        type: "tenant_fragment";
    }
}
