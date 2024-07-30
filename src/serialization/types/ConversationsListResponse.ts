/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Conversation } from "./Conversation";

export const ConversationsListResponse: core.serialization.ObjectSchema<
    serializers.ConversationsListResponse.Raw,
    DevRev.ConversationsListResponse
> = core.serialization.object({
    conversations: core.serialization.list(Conversation),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
    prevCursor: core.serialization.property("prev_cursor", core.serialization.string().optional()),
});

export declare namespace ConversationsListResponse {
    interface Raw {
        conversations: Conversation.Raw[];
        next_cursor?: string | null;
        prev_cursor?: string | null;
    }
}