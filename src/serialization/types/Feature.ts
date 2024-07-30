/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { PartBase } from "./PartBase";

export const Feature: core.serialization.ObjectSchema<serializers.Feature.Raw, DevRev.Feature> = PartBase;

export declare namespace Feature {
    type Raw = PartBase.Raw;
}
