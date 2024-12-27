/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export type CustomSchemaFragment =
    | DevRev.CustomSchemaFragment.AppFragment
    | DevRev.CustomSchemaFragment.CustomTypeFragment
    | DevRev.CustomSchemaFragment.TenantFragment;

export declare namespace CustomSchemaFragment {
    interface AppFragment extends DevRev.AppFragment {
        type: "app_fragment";
    }

    interface CustomTypeFragment extends DevRev.CustomTypeFragment {
        type: "custom_type_fragment";
    }

    interface TenantFragment extends DevRev.TenantFragment {
        type: "tenant_fragment";
    }
}
