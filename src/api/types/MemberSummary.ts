/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export type MemberSummary = DevRev.MemberSummary.DevUser | DevRev.MemberSummary.RevUser | DevRev.MemberSummary.SysUser;

export declare namespace MemberSummary {
    interface DevUser extends DevRev.UserBaseSummary {
        type: "dev_user";
    }

    interface RevUser extends DevRev.RevUserSummary {
        type: "rev_user";
    }

    interface SysUser extends DevRev.UserBaseSummary {
        type: "sys_user";
    }
}
