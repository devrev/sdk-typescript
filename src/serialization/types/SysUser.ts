/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { UserBase } from "./UserBase";

export const SysUser: core.serialization.ObjectSchema<serializers.SysUser.Raw, DevRev.SysUser> = UserBase;

export declare namespace SysUser {
    type Raw = UserBase.Raw;
}
