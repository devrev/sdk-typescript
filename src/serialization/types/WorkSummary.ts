/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { IssueSummary } from "./IssueSummary";
import { WorkBaseSummary } from "./WorkBaseSummary";
import { TicketSummary } from "./TicketSummary";

export const WorkSummary: core.serialization.Schema<serializers.WorkSummary.Raw, DevRev.WorkSummary> =
    core.serialization
        .union("type", {
            issue: IssueSummary,
            opportunity: WorkBaseSummary,
            task: WorkBaseSummary,
            ticket: TicketSummary,
        })
        .transform<DevRev.WorkSummary>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace WorkSummary {
    type Raw = WorkSummary.Issue | WorkSummary.Opportunity | WorkSummary.Task | WorkSummary.Ticket;

    interface Issue extends IssueSummary.Raw {
        type: "issue";
    }

    interface Opportunity extends WorkBaseSummary.Raw {
        type: "opportunity";
    }

    interface Task extends WorkBaseSummary.Raw {
        type: "task";
    }

    interface Ticket extends TicketSummary.Raw {
        type: "ticket";
    }
}