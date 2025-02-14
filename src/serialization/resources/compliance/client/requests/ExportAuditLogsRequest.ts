/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const ExportAuditLogsRequest: core.serialization.Schema<
    serializers.ExportAuditLogsRequest.Raw,
    DevRev.ExportAuditLogsRequest
> = core.serialization.object({
    from: core.serialization.date(),
    to: core.serialization.date(),
});

export declare namespace ExportAuditLogsRequest {
    interface Raw {
        from: string;
        to: string;
    }
}
