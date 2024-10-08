/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { WebhookEventType } from "./WebhookEventType";

export const WebhooksUpdateRequestEventTypes: core.serialization.ObjectSchema<
    serializers.WebhooksUpdateRequestEventTypes.Raw,
    DevRev.WebhooksUpdateRequestEventTypes
> = core.serialization.object({
    add: core.serialization.list(WebhookEventType).optional(),
    remove: core.serialization.list(WebhookEventType).optional(),
    set: core.serialization.list(WebhookEventType).optional(),
});

export declare namespace WebhooksUpdateRequestEventTypes {
    interface Raw {
        add?: WebhookEventType.Raw[] | null;
        remove?: WebhookEventType.Raw[] | null;
        set?: WebhookEventType.Raw[] | null;
    }
}
