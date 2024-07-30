/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const LinesOfCode: core.serialization.ObjectSchema<serializers.LinesOfCode.Raw, DevRev.LinesOfCode> =
    core.serialization.object({
        fileCount: core.serialization.property("file_count", core.serialization.number().optional()),
        linesAdded: core.serialization.property("lines_added", core.serialization.number().optional()),
        linesDeleted: core.serialization.property("lines_deleted", core.serialization.number().optional()),
        linesModified: core.serialization.property("lines_modified", core.serialization.number().optional()),
    });

export declare namespace LinesOfCode {
    interface Raw {
        file_count?: number | null;
        lines_added?: number | null;
        lines_deleted?: number | null;
        lines_modified?: number | null;
    }
}
