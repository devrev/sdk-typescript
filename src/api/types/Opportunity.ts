/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface Opportunity extends DevRev.WorkBase {
    account?: DevRev.AccountSummary;
    annualContractValue?: DevRev.Money;
    forecastCategoryV2?: DevRev.EnumValue;
    value?: DevRev.Money;
}
