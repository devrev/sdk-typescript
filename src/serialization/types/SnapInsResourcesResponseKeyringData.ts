/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const SnapInsResourcesResponseKeyringData: core.serialization.ObjectSchema<
    serializers.SnapInsResourcesResponseKeyringData.Raw,
    DevRev.SnapInsResourcesResponseKeyringData
> = core.serialization.object({
    id: core.serialization.string(),
    secret: core.serialization.string(),
});

export declare namespace SnapInsResourcesResponseKeyringData {
    interface Raw {
        id: string;
        secret: string;
    }
}