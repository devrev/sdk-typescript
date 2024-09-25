/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { EnumValue } from "./EnumValue";
import { AccountSummary } from "./AccountSummary";

export const ImpactedCustomerDetails: core.serialization.ObjectSchema<
    serializers.ImpactedCustomerDetails.Raw,
    DevRev.ImpactedCustomerDetails
> = core.serialization.object({
    count: EnumValue.optional(),
    customerIds: core.serialization.property("customer_ids", core.serialization.list(AccountSummary).optional()),
});

export declare namespace ImpactedCustomerDetails {
    interface Raw {
        count?: EnumValue.Raw | null;
        customer_ids?: AccountSummary.Raw[] | null;
    }
}
