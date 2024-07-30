/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { TaskPriority } from "./TaskPriority";

export const WorksCreateRequestTask: core.serialization.ObjectSchema<
    serializers.WorksCreateRequestTask.Raw,
    DevRev.WorksCreateRequestTask
> = core.serialization.object({
    embedded: core.serialization.boolean().optional(),
    priority: TaskPriority.optional(),
    startDate: core.serialization.property("start_date", core.serialization.date().optional()),
});

export declare namespace WorksCreateRequestTask {
    interface Raw {
        embedded?: boolean | null;
        priority?: TaskPriority.Raw | null;
        start_date?: string | null;
    }
}
