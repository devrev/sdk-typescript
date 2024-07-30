/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Sla } from "./Sla";

export const SlasListResponse: core.serialization.ObjectSchema<
    serializers.SlasListResponse.Raw,
    DevRev.SlasListResponse
> = core.serialization.object({
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
    prevCursor: core.serialization.property("prev_cursor", core.serialization.string().optional()),
    slas: core.serialization.list(Sla),
});

export declare namespace SlasListResponse {
    interface Raw {
        next_cursor?: string | null;
        prev_cursor?: string | null;
        slas: Sla.Raw[];
    }
}