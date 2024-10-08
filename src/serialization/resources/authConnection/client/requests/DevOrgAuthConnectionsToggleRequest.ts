/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { AuthConnectionToggle } from "../../../../types/AuthConnectionToggle";

export const DevOrgAuthConnectionsToggleRequest: core.serialization.Schema<
    serializers.DevOrgAuthConnectionsToggleRequest.Raw,
    DevRev.DevOrgAuthConnectionsToggleRequest
> = core.serialization.object({
    id: core.serialization.string(),
    toggle: AuthConnectionToggle.optional(),
});

export declare namespace DevOrgAuthConnectionsToggleRequest {
    interface Raw {
        id: string;
        toggle?: AuthConnectionToggle.Raw | null;
    }
}
