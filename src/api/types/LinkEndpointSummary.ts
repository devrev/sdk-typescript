/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export type LinkEndpointSummary =
    | DevRev.LinkEndpointSummary.Account
    | DevRev.LinkEndpointSummary.Capability
    | DevRev.LinkEndpointSummary.Conversation
    | DevRev.LinkEndpointSummary.DevUser
    | DevRev.LinkEndpointSummary.Enhancement
    | DevRev.LinkEndpointSummary.Feature
    | DevRev.LinkEndpointSummary.Incident
    | DevRev.LinkEndpointSummary.Issue
    | DevRev.LinkEndpointSummary.Opportunity
    | DevRev.LinkEndpointSummary.Product
    | DevRev.LinkEndpointSummary.RevOrg
    | DevRev.LinkEndpointSummary.RevUser
    | DevRev.LinkEndpointSummary.Task
    | DevRev.LinkEndpointSummary.Ticket;

export declare namespace LinkEndpointSummary {
    interface Account extends DevRev.OrgBaseSummary {
        type: "account";
    }

    interface Capability extends DevRev.PartBaseSummary {
        type: "capability";
    }

    interface Conversation extends DevRev.ConversationSummary {
        type: "conversation";
    }

    interface DevUser extends DevRev.UserBaseSummary {
        type: "dev_user";
    }

    interface Enhancement extends DevRev.PartBaseSummary {
        type: "enhancement";
    }

    interface Feature extends DevRev.PartBaseSummary {
        type: "feature";
    }

    interface Incident extends DevRev.IncidentSummary {
        type: "incident";
    }

    interface Issue extends DevRev.IssueSummary {
        type: "issue";
    }

    interface Opportunity extends DevRev.OpportunitySummary {
        type: "opportunity";
    }

    interface Product extends DevRev.PartBaseSummary {
        type: "product";
    }

    interface RevOrg extends DevRev.OrgBaseSummary {
        type: "rev_org";
    }

    interface RevUser extends DevRev.RevUserSummary {
        type: "rev_user";
    }

    interface Task extends DevRev.WorkBaseSummary {
        type: "task";
    }

    interface Ticket extends DevRev.TicketSummary {
        type: "ticket";
    }
}
