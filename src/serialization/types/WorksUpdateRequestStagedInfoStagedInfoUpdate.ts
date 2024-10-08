/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const WorksUpdateRequestStagedInfoStagedInfoUpdate: core.serialization.ObjectSchema<
    serializers.WorksUpdateRequestStagedInfoStagedInfoUpdate.Raw,
    DevRev.WorksUpdateRequestStagedInfoStagedInfoUpdate
> = core.serialization.object({
    unresolvedFields: core.serialization.property(
        "unresolved_fields",
        core.serialization.list(core.serialization.string())
    ),
});

export declare namespace WorksUpdateRequestStagedInfoStagedInfoUpdate {
    interface Raw {
        unresolved_fields: string[];
    }
}
