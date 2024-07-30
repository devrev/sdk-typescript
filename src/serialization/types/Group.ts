/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { GroupMemberType } from "./GroupMemberType";
import { UserSummary } from "./UserSummary";
import { AtomBase } from "./AtomBase";

export const Group: core.serialization.ObjectSchema<serializers.Group.Raw, DevRev.Group> = core.serialization
    .object({
        description: core.serialization.string().optional(),
        isDefault: core.serialization.property("is_default", core.serialization.boolean()),
        memberType: core.serialization.property("member_type", GroupMemberType.optional()),
        name: core.serialization.string().optional(),
        owner: UserSummary.optional(),
    })
    .extend(AtomBase);

export declare namespace Group {
    interface Raw extends AtomBase.Raw {
        description?: string | null;
        is_default: boolean;
        member_type?: GroupMemberType.Raw | null;
        name?: string | null;
        owner?: UserSummary.Raw | null;
    }
}
