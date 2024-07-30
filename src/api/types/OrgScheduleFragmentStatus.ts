/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Status determines how an item can be used. In 'draft' status an item
 * can be edited but can't be used. When 'published' the item can longer
 * be edited but can be used. 'Archived' is read-only.
 */
export type OrgScheduleFragmentStatus = "archived" | "draft" | "published";

export const OrgScheduleFragmentStatus = {
    Archived: "archived",
    Draft: "draft",
    Published: "published",
} as const;
