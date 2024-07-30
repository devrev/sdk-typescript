/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Account } from "./Account";

export const AccountsExportResponse: core.serialization.ObjectSchema<
    serializers.AccountsExportResponse.Raw,
    DevRev.AccountsExportResponse
> = core.serialization.object({
    accounts: core.serialization.list(Account),
});

export declare namespace AccountsExportResponse {
    interface Raw {
        accounts: Account.Raw[];
    }
}
