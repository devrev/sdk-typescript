/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { SyncIn } from "./SyncIn";
import { SyncOut } from "./SyncOut";

export const SyncMetadata: core.serialization.ObjectSchema<serializers.SyncMetadata.Raw, DevRev.SyncMetadata> =
    core.serialization.object({
        externalReference: core.serialization.property("external_reference", core.serialization.string().optional()),
        lastSyncIn: core.serialization.property("last_sync_in", SyncIn.optional()),
        lastSyncOut: core.serialization.property("last_sync_out", SyncOut.optional()),
        originSystem: core.serialization.property("origin_system", core.serialization.string().optional()),
    });

export declare namespace SyncMetadata {
    interface Raw {
        external_reference?: string | null;
        last_sync_in?: SyncIn.Raw | null;
        last_sync_out?: SyncOut.Raw | null;
        origin_system?: string | null;
    }
}
