/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const RevOrgsGetRequest: core.serialization.Schema<serializers.RevOrgsGetRequest.Raw, DevRev.RevOrgsGetRequest> =
    core.serialization.object({
        account: core.serialization.string().optional(),
        id: core.serialization.string().optional(),
    });

export declare namespace RevOrgsGetRequest {
    interface Raw {
        account?: string | null;
        id?: string | null;
    }
}
