/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { GeneralPreferencesGroup } from "./GeneralPreferencesGroup";
import { PreferencesBase } from "./PreferencesBase";

export const UserPreferences: core.serialization.ObjectSchema<serializers.UserPreferences.Raw, DevRev.UserPreferences> =
    core.serialization
        .object({
            generalPreferences: core.serialization.property("general_preferences", GeneralPreferencesGroup.optional()),
        })
        .extend(PreferencesBase);

export declare namespace UserPreferences {
    interface Raw extends PreferencesBase.Raw {
        general_preferences?: GeneralPreferencesGroup.Raw | null;
    }
}
