/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { GroupedVistaFlavor } from "./GroupedVistaFlavor";
import { VistaBaseSummary } from "./VistaBaseSummary";

export const GroupedVistaSummary: core.serialization.ObjectSchema<
    serializers.GroupedVistaSummary.Raw,
    DevRev.GroupedVistaSummary
> = core.serialization
    .object({
        flavor: GroupedVistaFlavor.optional(),
    })
    .extend(VistaBaseSummary);

export declare namespace GroupedVistaSummary {
    interface Raw extends VistaBaseSummary.Raw {
        flavor?: GroupedVistaFlavor.Raw | null;
    }
}
