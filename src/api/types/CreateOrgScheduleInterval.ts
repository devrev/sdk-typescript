/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateOrgScheduleInterval {
    /** Date (inclusive) on which the interval begins. */
    from: Date;
    /**
     * If true, no organization schedule is looked up for these days and
     * they are marked as holidays.
     */
    isExcluded?: boolean;
    /**
     * The name of the period, for example the event or holiday it
     * represents.
     */
    name: string;
    /**
     * Date (exclusive) on which the interval ends. If omitted, it is a
     * single day interval.
     */
    to?: Date;
}