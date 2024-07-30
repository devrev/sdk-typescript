/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export type LinkEndpointSummary =
    | DevRev.LinkEndpointSummary.Capability
    | DevRev.LinkEndpointSummary.Conversation
    | DevRev.LinkEndpointSummary.Enhancement
    | DevRev.LinkEndpointSummary.Feature
    | DevRev.LinkEndpointSummary.Issue
    | DevRev.LinkEndpointSummary.Opportunity
    | DevRev.LinkEndpointSummary.Product
    | DevRev.LinkEndpointSummary.Task
    | DevRev.LinkEndpointSummary.Ticket;

export declare namespace LinkEndpointSummary {
    interface Capability extends DevRev.PartBaseSummary {
        type: "capability";
    }

    interface Conversation extends DevRev.ConversationSummary {
        type: "conversation";
    }

    interface Enhancement extends DevRev.PartBaseSummary {
        type: "enhancement";
    }

    interface Feature extends DevRev.PartBaseSummary {
        type: "feature";
    }

    interface Issue extends DevRev.IssueSummary {
        type: "issue";
    }

    interface Opportunity extends DevRev.WorkBaseSummary {
        type: "opportunity";
    }

    interface Product extends DevRev.PartBaseSummary {
        type: "product";
    }

    interface Task extends DevRev.WorkBaseSummary {
        type: "task";
    }

    interface Ticket extends DevRev.TicketSummary {
        type: "ticket";
    }
}
