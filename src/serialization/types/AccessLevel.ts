/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const AccessLevel: core.serialization.Schema<serializers.AccessLevel.Raw, DevRev.AccessLevel> =
    core.serialization.enum_(["external", "internal", "private", "public", "restricted"]);

export declare namespace AccessLevel {
    type Raw = "external" | "internal" | "private" | "public" | "restricted";
}