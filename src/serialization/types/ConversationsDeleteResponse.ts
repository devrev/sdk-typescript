/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ConversationsDeleteResponse: core.serialization.Schema<
    serializers.ConversationsDeleteResponse.Raw,
    DevRev.ConversationsDeleteResponse
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace ConversationsDeleteResponse {
    type Raw = Record<string, unknown>;
}
