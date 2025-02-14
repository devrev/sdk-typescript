/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export type AtomSummary =
    | DevRev.AtomSummary.Account
    | DevRev.AtomSummary.AppFragment
    | DevRev.AtomSummary.Capability
    | DevRev.AtomSummary.Conversation
    | DevRev.AtomSummary.CustomTypeFragment
    | DevRev.AtomSummary.DevUser
    | DevRev.AtomSummary.Engagement
    | DevRev.AtomSummary.Enhancement
    | DevRev.AtomSummary.Feature
    | DevRev.AtomSummary.Incident
    | DevRev.AtomSummary.Issue
    | DevRev.AtomSummary.Meeting
    | DevRev.AtomSummary.Opportunity
    | DevRev.AtomSummary.Product
    | DevRev.AtomSummary.RevOrg
    | DevRev.AtomSummary.RevUser
    | DevRev.AtomSummary.ServiceAccount
    | DevRev.AtomSummary.SysUser
    | DevRev.AtomSummary.Tag
    | DevRev.AtomSummary.Task
    | DevRev.AtomSummary.TenantFragment
    | DevRev.AtomSummary.Ticket
    | DevRev.AtomSummary.TimelineChangeEvent
    | DevRev.AtomSummary.TimelineComment
    | DevRev.AtomSummary.UserPreferences
    | DevRev.AtomSummary.Webhook;

export declare namespace AtomSummary {
    interface Account extends DevRev.OrgBaseSummary {
        type: "account";
    }

    interface AppFragment extends DevRev.AtomBaseSummary {
        type: "app_fragment";
    }

    interface Capability extends DevRev.PartBaseSummary {
        type: "capability";
    }

    interface Conversation extends DevRev.ConversationSummary {
        type: "conversation";
    }

    interface CustomTypeFragment extends DevRev.AtomBaseSummary {
        type: "custom_type_fragment";
    }

    interface DevUser extends DevRev.UserBaseSummary {
        type: "dev_user";
    }

    interface Engagement extends DevRev.AtomBaseSummary {
        type: "engagement";
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

    interface Meeting extends DevRev.AtomBaseSummary {
        type: "meeting";
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

    interface ServiceAccount extends DevRev.UserBaseSummary {
        type: "service_account";
    }

    interface SysUser extends DevRev.UserBaseSummary {
        type: "sys_user";
    }

    interface Tag extends DevRev.TagSummary {
        type: "tag";
    }

    interface Task extends DevRev.WorkBaseSummary {
        type: "task";
    }

    interface TenantFragment extends DevRev.AtomBaseSummary {
        type: "tenant_fragment";
    }

    interface Ticket extends DevRev.TicketSummary {
        type: "ticket";
    }

    interface TimelineChangeEvent extends DevRev.AtomBaseSummary {
        type: "timeline_change_event";
    }

    interface TimelineComment extends DevRev.AtomBaseSummary {
        type: "timeline_comment";
    }

    interface UserPreferences extends DevRev.AtomBaseSummary {
        type: "user_preferences";
    }

    interface Webhook extends DevRev.AtomBaseSummary {
        type: "webhook";
    }
}
