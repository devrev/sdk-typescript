/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { SlaCompensation } from "./SlaCompensation";
import { SlaEvaluationPeriod } from "./SlaEvaluationPeriod";
import { SlaPolicy } from "./SlaPolicy";
import { SlaType } from "./SlaType";
import { SlaStatus } from "./SlaStatus";
import { AtomBase } from "./AtomBase";

export const Sla: core.serialization.ObjectSchema<serializers.Sla.Raw, DevRev.Sla> = core.serialization
    .object({
        compensation: SlaCompensation.optional(),
        description: core.serialization.string().optional(),
        evaluationPeriod: core.serialization.property("evaluation_period", SlaEvaluationPeriod.optional()),
        name: core.serialization.string(),
        policies: core.serialization.list(SlaPolicy).optional(),
        slaType: core.serialization.property("sla_type", SlaType.optional()),
        status: SlaStatus,
    })
    .extend(AtomBase);

export declare namespace Sla {
    interface Raw extends AtomBase.Raw {
        compensation?: SlaCompensation.Raw | null;
        description?: string | null;
        evaluation_period?: SlaEvaluationPeriod.Raw | null;
        name: string;
        policies?: SlaPolicy.Raw[] | null;
        sla_type?: SlaType.Raw | null;
        status: SlaStatus.Raw;
    }
}