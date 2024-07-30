/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Enum Value defines the structure for an enum.
 */
export interface EnumValue {
    /** Unique ID of the enum value. This is immutable. */
    id: number;
    /** Display label of the enum value. This is mutable. */
    label: string;
    /** Order number of the enum value. This is mutable. */
    ordinal: number;
}