/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const DevUserJobTitle: core.serialization.Schema<serializers.DevUserJobTitle.Raw, DevRev.DevUserJobTitle> =
    core.serialization.enum_([
        "customer_success_manager",
        "cxo",
        "designer",
        "developer",
        "head_of_support",
        "operations",
        "others",
        "product_manager",
        "qa",
        "revenue_leader",
        "support",
        "tech_lead",
    ]);

export declare namespace DevUserJobTitle {
    type Raw =
        | "customer_success_manager"
        | "cxo"
        | "designer"
        | "developer"
        | "head_of_support"
        | "operations"
        | "others"
        | "product_manager"
        | "qa"
        | "revenue_leader"
        | "support"
        | "tech_lead";
}