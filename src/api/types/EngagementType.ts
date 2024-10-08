/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Type of engagement.
 */
export type EngagementType =
    | "call"
    | "conversation"
    | "custom"
    | "default"
    | "email"
    | "linked_in"
    | "meeting"
    | "offline"
    | "survey";

export const EngagementType = {
    Call: "call",
    Conversation: "conversation",
    Custom: "custom",
    Default: "default",
    Email: "email",
    LinkedIn: "linked_in",
    Meeting: "meeting",
    Offline: "offline",
    Survey: "survey",
} as const;
