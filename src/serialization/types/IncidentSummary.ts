/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { UserSummary } from "./UserSummary";
import { EnumValueSummary } from "./EnumValueSummary";
import { StageSummary } from "./StageSummary";
import { AtomBaseSummary } from "./AtomBaseSummary";

export const IncidentSummary: core.serialization.ObjectSchema<serializers.IncidentSummary.Raw, DevRev.IncidentSummary> =
    core.serialization
        .object({
            ownedBy: core.serialization.property("owned_by", core.serialization.list(UserSummary).optional()),
            severity: EnumValueSummary.optional(),
            stage: StageSummary.optional(),
            title: core.serialization.string(),
        })
        .extend(AtomBaseSummary);

export declare namespace IncidentSummary {
    interface Raw extends AtomBaseSummary.Raw {
        owned_by?: UserSummary.Raw[] | null;
        severity?: EnumValueSummary.Raw | null;
        stage?: StageSummary.Raw | null;
        title: string;
    }
}
