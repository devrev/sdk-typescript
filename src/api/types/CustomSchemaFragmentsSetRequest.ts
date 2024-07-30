/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export type CustomSchemaFragmentsSetRequest =
    | DevRev.CustomSchemaFragmentsSetRequest.AppFragment
    | DevRev.CustomSchemaFragmentsSetRequest.CustomTypeFragment
    | DevRev.CustomSchemaFragmentsSetRequest.TenantFragment;

export declare namespace CustomSchemaFragmentsSetRequest {
    interface AppFragment extends DevRev.CustomSchemaFragmentsSetRequestAppFragment, _Base {
        type: "app_fragment";
    }

    interface CustomTypeFragment extends DevRev.CustomSchemaFragmentsSetRequestCustomTypeFragment, _Base {
        type: "custom_type_fragment";
    }

    interface TenantFragment extends DevRev.CustomSchemaFragmentsSetRequestTenantFragment, _Base {
        type: "tenant_fragment";
    }

    interface _Base {
        /** List of conditions for this fragment. */
        conditions?: DevRev.CustomSchemaFragmentCondition[];
        /** List of field names which are being dropped. */
        deletedFields?: string[];
        /** Whether this fragment has been deprecated. */
        deprecated?: boolean;
        /** The description of the custom schema fragment. */
        description: string;
        /** List of all fields in this fragment. */
        fields?: DevRev.SchemaFieldDescriptor[];
        /** Whether the leaf type corresponds to a custom object */
        isCustomLeafType?: boolean;
        /** The leaf type this fragment applies to. */
        leafType: string;
    }
}
