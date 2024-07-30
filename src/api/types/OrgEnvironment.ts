/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The environment of the Org. Defaults to 'production' if not specified.
 */
export type OrgEnvironment = "production" | "staging" | "test";

export const OrgEnvironment = {
    Production: "production",
    Staging: "staging",
    Test: "test",
} as const;