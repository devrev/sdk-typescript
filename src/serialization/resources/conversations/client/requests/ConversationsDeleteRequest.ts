/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const ConversationsDeleteRequest: core.serialization.Schema<
    serializers.ConversationsDeleteRequest.Raw,
    DevRev.ConversationsDeleteRequest
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace ConversationsDeleteRequest {
    interface Raw {
        id: string;
    }
}
