/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { PartBaseSummary } from "./PartBaseSummary";

export const PartSummary: core.serialization.Schema<serializers.PartSummary.Raw, DevRev.PartSummary> =
    core.serialization
        .union("type", {
            capability: PartBaseSummary,
            enhancement: PartBaseSummary,
            feature: PartBaseSummary,
            product: PartBaseSummary,
        })
        .transform<DevRev.PartSummary>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace PartSummary {
    type Raw = PartSummary.Capability | PartSummary.Enhancement | PartSummary.Feature | PartSummary.Product;

    interface Capability extends PartBaseSummary.Raw {
        type: "capability";
    }

    interface Enhancement extends PartBaseSummary.Raw {
        type: "enhancement";
    }

    interface Feature extends PartBaseSummary.Raw {
        type: "feature";
    }

    interface Product extends PartBaseSummary.Raw {
        type: "product";
    }
}
