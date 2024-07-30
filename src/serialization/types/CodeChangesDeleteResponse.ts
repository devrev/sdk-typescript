/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const CodeChangesDeleteResponse: core.serialization.Schema<
    serializers.CodeChangesDeleteResponse.Raw,
    DevRev.CodeChangesDeleteResponse
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace CodeChangesDeleteResponse {
    type Raw = Record<string, unknown>;
}