/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export type WorkSummary =
    | DevRev.WorkSummary.Issue
    | DevRev.WorkSummary.Opportunity
    | DevRev.WorkSummary.Task
    | DevRev.WorkSummary.Ticket;

export declare namespace WorkSummary {
    interface Issue extends DevRev.IssueSummary {
        type: "issue";
    }

    interface Opportunity extends DevRev.OpportunitySummary {
        type: "opportunity";
    }

    interface Task extends DevRev.WorkBaseSummary {
        type: "task";
    }

    interface Ticket extends DevRev.TicketSummary {
        type: "ticket";
    }
}
