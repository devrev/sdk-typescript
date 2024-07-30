/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { SlaType } from "./SlaType";
import { SlaStatus } from "./SlaStatus";
import { AtomBaseSummary } from "./AtomBaseSummary";

export const SlaSummary: core.serialization.ObjectSchema<serializers.SlaSummary.Raw, DevRev.SlaSummary> =
    core.serialization
        .object({
            name: core.serialization.string(),
            slaType: core.serialization.property("sla_type", SlaType.optional()),
            status: SlaStatus,
        })
        .extend(AtomBaseSummary);

export declare namespace SlaSummary {
    interface Raw extends AtomBaseSummary.Raw {
        name: string;
        sla_type?: SlaType.Raw | null;
        status: SlaStatus.Raw;
    }
}
