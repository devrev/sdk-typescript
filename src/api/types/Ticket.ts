/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface Ticket extends DevRev.WorkBase {
    /** Channels of the ticket. */
    channels?: DevRev.TicketChannels[];
    group?: DevRev.GroupSummary;
    /** Whether the ticket needs a response. */
    needsResponse?: boolean;
    revOrg?: DevRev.OrgSummary;
    sentiment?: DevRev.EnumValue;
    /** Timestamp when the sentiment was last modified. */
    sentimentModifiedDate?: Date;
    /** Summary justifying the sentiment. */
    sentimentSummary?: string;
    severity?: DevRev.TicketSeverity;
    slaTracker?: DevRev.SlaTrackerSummary;
    /** Source channel of the ticket. */
    sourceChannel?: string;
}
