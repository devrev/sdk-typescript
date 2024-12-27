/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Status of the sync for the object.
 */
export type SyncInStatus = "failed" | "modified" | "staged" | "succeeded";

export const SyncInStatus = {
    Failed: "failed",
    Modified: "modified",
    Staged: "staged",
    Succeeded: "succeeded",
} as const;
