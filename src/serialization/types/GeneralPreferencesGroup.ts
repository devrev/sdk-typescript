/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AvailabilityPreferencesGroup } from "./AvailabilityPreferencesGroup";
import { GeneralPreferencesGroupPreferredLocale } from "./GeneralPreferencesGroupPreferredLocale";

export const GeneralPreferencesGroup: core.serialization.ObjectSchema<
    serializers.GeneralPreferencesGroup.Raw,
    DevRev.GeneralPreferencesGroup
> = core.serialization.object({
    availability: AvailabilityPreferencesGroup.optional(),
    preferredLocale: core.serialization.property("preferred_locale", GeneralPreferencesGroupPreferredLocale.optional()),
});

export declare namespace GeneralPreferencesGroup {
    interface Raw {
        availability?: AvailabilityPreferencesGroup.Raw | null;
        preferred_locale?: GeneralPreferencesGroupPreferredLocale.Raw | null;
    }
}