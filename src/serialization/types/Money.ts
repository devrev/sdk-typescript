/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const Money: core.serialization.ObjectSchema<serializers.Money.Raw, DevRev.Money> = core.serialization.object({
    amount: core.serialization.string().optional(),
    currency: core.serialization.string().optional(),
});

export declare namespace Money {
    interface Raw {
        amount?: string | null;
        currency?: string | null;
    }
}
