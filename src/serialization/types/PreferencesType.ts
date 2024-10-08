/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const PreferencesType: core.serialization.Schema<serializers.PreferencesType.Raw, DevRev.PreferencesType> =
    core.serialization.stringLiteral("user_preferences");

export declare namespace PreferencesType {
    type Raw = "user_preferences";
}
