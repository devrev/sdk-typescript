/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const CodeChangesDeleteRequest: core.serialization.Schema<
    serializers.CodeChangesDeleteRequest.Raw,
    DevRev.CodeChangesDeleteRequest
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace CodeChangesDeleteRequest {
    interface Raw {
        id: string;
    }
}
