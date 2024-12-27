/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { WorksUpdateRequestStagedInfoUpdateUnresolvedField } from "./WorksUpdateRequestStagedInfoUpdateUnresolvedField";

export const WorksUpdateRequestStagedInfoUpdate: core.serialization.ObjectSchema<
    serializers.WorksUpdateRequestStagedInfoUpdate.Raw,
    DevRev.WorksUpdateRequestStagedInfoUpdate
> = core.serialization.object({
    syncInUnresolvedFields: core.serialization.property(
        "sync_in_unresolved_fields",
        core.serialization.list(WorksUpdateRequestStagedInfoUpdateUnresolvedField).optional()
    ),
    syncOutUnresolvedFields: core.serialization.property(
        "sync_out_unresolved_fields",
        core.serialization.list(WorksUpdateRequestStagedInfoUpdateUnresolvedField).optional()
    ),
    unresolvedFields: core.serialization.property(
        "unresolved_fields",
        core.serialization.list(core.serialization.string()).optional()
    ),
});

export declare namespace WorksUpdateRequestStagedInfoUpdate {
    interface Raw {
        sync_in_unresolved_fields?: WorksUpdateRequestStagedInfoUpdateUnresolvedField.Raw[] | null;
        sync_out_unresolved_fields?: WorksUpdateRequestStagedInfoUpdateUnresolvedField.Raw[] | null;
        unresolved_fields?: string[] | null;
    }
}
