/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const CreateImpactedCustomerDetails: core.serialization.ObjectSchema<
    serializers.CreateImpactedCustomerDetails.Raw,
    DevRev.CreateImpactedCustomerDetails
> = core.serialization.object({
    count: core.serialization.number().optional(),
    customerIds: core.serialization.property(
        "customer_ids",
        core.serialization.list(core.serialization.string()).optional()
    ),
});

export declare namespace CreateImpactedCustomerDetails {
    interface Raw {
        count?: number | null;
        customer_ids?: string[] | null;
    }
}
