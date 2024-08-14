/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { WebhookHeader } from "./WebhookHeader";

export const WebhooksUpdateRequestHeaders: core.serialization.ObjectSchema<
    serializers.WebhooksUpdateRequestHeaders.Raw,
    DevRev.WebhooksUpdateRequestHeaders
> = core.serialization.object({
    add: core.serialization.list(WebhookHeader).optional(),
    remove: core.serialization.list(core.serialization.string()).optional(),
    set: core.serialization.list(WebhookHeader).optional(),
});

export declare namespace WebhooksUpdateRequestHeaders {
    interface Raw {
        add?: WebhookHeader.Raw[] | null;
        remove?: string[] | null;
        set?: WebhookHeader.Raw[] | null;
    }
}