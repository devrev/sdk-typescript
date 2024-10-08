/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The iteration mode to use. If "after", then entries after the provided
 * cursor will be returned, or if no cursor is provided, then from the
 * beginning. If "before", then entries before the provided cursor will be
 * returned, or if no cursor is provided, then from the end. Entries will
 * always be returned in the specified sort-by order.
 */
export type ListMode = "after" | "before";

export const ListMode = {
    After: "after",
    Before: "before",
} as const;
