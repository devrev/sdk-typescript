/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { GroupMemberType } from "./GroupMemberType";
import { AtomBaseSummary } from "./AtomBaseSummary";

export const GroupSummary: core.serialization.ObjectSchema<serializers.GroupSummary.Raw, DevRev.GroupSummary> =
    core.serialization
        .object({
            memberType: core.serialization.property("member_type", GroupMemberType.optional()),
            name: core.serialization.string().optional(),
        })
        .extend(AtomBaseSummary);

export declare namespace GroupSummary {
    interface Raw extends AtomBaseSummary.Raw {
        member_type?: GroupMemberType.Raw | null;
        name?: string | null;
    }
}