/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Group } from "./Group";

export const EventGroupCreated: core.serialization.ObjectSchema<
    serializers.EventGroupCreated.Raw,
    DevRev.EventGroupCreated
> = core.serialization.object({
    group: Group,
});

export declare namespace EventGroupCreated {
    interface Raw {
        group: Group.Raw;
    }
}
