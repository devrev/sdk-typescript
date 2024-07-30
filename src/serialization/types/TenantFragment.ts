/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { CustomSchemaFragmentBase } from "./CustomSchemaFragmentBase";

export const TenantFragment: core.serialization.ObjectSchema<serializers.TenantFragment.Raw, DevRev.TenantFragment> =
    CustomSchemaFragmentBase;

export declare namespace TenantFragment {
    type Raw = CustomSchemaFragmentBase.Raw;
}