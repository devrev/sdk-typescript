/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { UserBase } from "./UserBase";

export const ServiceAccount: core.serialization.ObjectSchema<serializers.ServiceAccount.Raw, DevRev.ServiceAccount> =
    UserBase;

export declare namespace ServiceAccount {
    type Raw = UserBase.Raw;
}