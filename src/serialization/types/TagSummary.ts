/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AtomBaseSummary } from "./AtomBaseSummary";

export const TagSummary: core.serialization.ObjectSchema<serializers.TagSummary.Raw, DevRev.TagSummary> =
    core.serialization
        .object({
            name: core.serialization.string(),
        })
        .extend(AtomBaseSummary);

export declare namespace TagSummary {
    interface Raw extends AtomBaseSummary.Raw {
        name: string;
    }
}
