/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const LinkEndpointType: core.serialization.Schema<serializers.LinkEndpointType.Raw, DevRev.LinkEndpointType> =
    core.serialization.enum_([
        "account",
        "capability",
        "conversation",
        "dev_user",
        "enhancement",
        "feature",
        "incident",
        "issue",
        "opportunity",
        "product",
        "rev_org",
        "rev_user",
        "task",
        "ticket",
    ]);

export declare namespace LinkEndpointType {
    type Raw =
        | "account"
        | "capability"
        | "conversation"
        | "dev_user"
        | "enhancement"
        | "feature"
        | "incident"
        | "issue"
        | "opportunity"
        | "product"
        | "rev_org"
        | "rev_user"
        | "task"
        | "ticket";
}
