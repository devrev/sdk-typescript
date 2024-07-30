/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const DynamicGroupInfo: core.serialization.Schema<serializers.DynamicGroupInfo.Raw, DevRev.DynamicGroupInfo> =
    core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace DynamicGroupInfo {
    type Raw = Record<string, unknown>;
}