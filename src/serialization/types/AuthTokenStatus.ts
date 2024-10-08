/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const AuthTokenStatus: core.serialization.Schema<serializers.AuthTokenStatus.Raw, DevRev.AuthTokenStatus> =
    core.serialization.enum_(["active", "expired", "revoked"]);

export declare namespace AuthTokenStatus {
    type Raw = "active" | "expired" | "revoked";
}
