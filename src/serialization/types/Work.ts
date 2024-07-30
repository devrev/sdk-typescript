/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Issue } from "./Issue";
import { WorkBase } from "./WorkBase";
import { Ticket } from "./Ticket";

export const Work: core.serialization.Schema<serializers.Work.Raw, DevRev.Work> = core.serialization
    .union("type", {
        issue: Issue,
        opportunity: WorkBase,
        task: WorkBase,
        ticket: Ticket,
    })
    .transform<DevRev.Work>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Work {
    type Raw = Work.Issue | Work.Opportunity | Work.Task | Work.Ticket;

    interface Issue extends Issue.Raw {
        type: "issue";
    }

    interface Opportunity extends WorkBase.Raw {
        type: "opportunity";
    }

    interface Task extends WorkBase.Raw {
        type: "task";
    }

    interface Ticket extends Ticket.Raw {
        type: "ticket";
    }
}