/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { RevOrg } from "./RevOrg";

export const RevOrgsUpdateResponse: core.serialization.ObjectSchema<
    serializers.RevOrgsUpdateResponse.Raw,
    DevRev.RevOrgsUpdateResponse
> = core.serialization.object({
    revOrg: core.serialization.property("rev_org", RevOrg),
});

export declare namespace RevOrgsUpdateResponse {
    interface Raw {
        rev_org: RevOrg.Raw;
    }
}