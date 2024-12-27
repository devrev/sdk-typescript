/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { SyncRunMode } from "./SyncRunMode";
import { SyncProgress } from "./SyncProgress";

export const SyncRun: core.serialization.ObjectSchema<serializers.SyncRun.Raw, DevRev.SyncRun> =
    core.serialization.object({
        endedAt: core.serialization.property("ended_at", core.serialization.date().optional()),
        mode: SyncRunMode.optional(),
        progress: SyncProgress.optional(),
        startedAt: core.serialization.property("started_at", core.serialization.date().optional()),
    });

export declare namespace SyncRun {
    interface Raw {
        ended_at?: string | null;
        mode?: SyncRunMode.Raw | null;
        progress?: SyncProgress.Raw | null;
        started_at?: string | null;
    }
}
