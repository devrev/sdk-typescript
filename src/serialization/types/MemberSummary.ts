/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { UserBaseSummary } from "./UserBaseSummary";
import { RevUserSummary } from "./RevUserSummary";

export const MemberSummary: core.serialization.Schema<serializers.MemberSummary.Raw, DevRev.MemberSummary> =
    core.serialization
        .union("type", {
            dev_user: UserBaseSummary,
            rev_user: RevUserSummary,
            sys_user: UserBaseSummary,
        })
        .transform<DevRev.MemberSummary>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace MemberSummary {
    type Raw = MemberSummary.DevUser | MemberSummary.RevUser | MemberSummary.SysUser;

    interface DevUser extends UserBaseSummary.Raw {
        type: "dev_user";
    }

    interface RevUser extends RevUserSummary.Raw {
        type: "rev_user";
    }

    interface SysUser extends UserBaseSummary.Raw {
        type: "sys_user";
    }
}