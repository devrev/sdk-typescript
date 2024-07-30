/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { ResourceSummary } from "./ResourceSummary";
import { AtomBaseSummary } from "./AtomBaseSummary";

export const ArticleSummary: core.serialization.ObjectSchema<serializers.ArticleSummary.Raw, DevRev.ArticleSummary> =
    core.serialization
        .object({
            resource: ResourceSummary.optional(),
            title: core.serialization.string().optional(),
        })
        .extend(AtomBaseSummary);

export declare namespace ArticleSummary {
    interface Raw extends AtomBaseSummary.Raw {
        resource?: ResourceSummary.Raw | null;
        title?: string | null;
    }
}