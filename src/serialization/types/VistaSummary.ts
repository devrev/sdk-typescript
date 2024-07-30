/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { VistaBaseSummary } from "./VistaBaseSummary";
import { GroupedVistaSummary } from "./GroupedVistaSummary";

export const VistaSummary: core.serialization.Schema<serializers.VistaSummary.Raw, DevRev.VistaSummary> =
    core.serialization
        .union("type", {
            curated: VistaBaseSummary,
            dynamic: VistaBaseSummary,
            grouped: GroupedVistaSummary,
        })
        .transform<DevRev.VistaSummary>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace VistaSummary {
    type Raw = VistaSummary.Curated | VistaSummary.Dynamic | VistaSummary.Grouped;

    interface Curated extends VistaBaseSummary.Raw {
        type: "curated";
    }

    interface Dynamic extends VistaBaseSummary.Raw {
        type: "dynamic";
    }

    interface Grouped extends GroupedVistaSummary.Raw {
        type: "grouped";
    }
}