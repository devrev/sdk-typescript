/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { CustomSchemaFragment } from "./CustomSchemaFragment";

export const CustomSchemaFragmentsGetResponse: core.serialization.ObjectSchema<
    serializers.CustomSchemaFragmentsGetResponse.Raw,
    DevRev.CustomSchemaFragmentsGetResponse
> = core.serialization.object({
    fragment: CustomSchemaFragment,
});

export declare namespace CustomSchemaFragmentsGetResponse {
    interface Raw {
        fragment: CustomSchemaFragment.Raw;
    }
}