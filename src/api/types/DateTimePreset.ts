/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

/**
 * Provides preset types for date filter.
 */
export type DateTimePreset = DevRev.DateTimePreset.LastNDays | DevRev.DateTimePreset.NextNDays;

export declare namespace DateTimePreset {
    interface LastNDays extends DevRev.DateTimePresetLastNDays {
        presetType: "last_n_days";
    }

    interface NextNDays extends DevRev.DateTimePresetNextNDays {
        presetType: "next_n_days";
    }
}