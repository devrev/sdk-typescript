/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface WorksUpdateRequestOpportunity {
    /** Updates the account that the opportunity is associated with. */
    account?: string;
    /** Updates the total opportunity amount. */
    amount?: number;
    contacts?: DevRev.WorksUpdateRequestOpportunityContacts;
    /** Updates the customer budget. */
    customerBudget?: number;
    /**
     * Updates the probability of winning the deal, lies between 0.0 and
     * 1.0.
     */
    probability?: number;
}