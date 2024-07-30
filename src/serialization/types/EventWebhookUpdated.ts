/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Webhook } from "./Webhook";

export const EventWebhookUpdated: core.serialization.ObjectSchema<
    serializers.EventWebhookUpdated.Raw,
    DevRev.EventWebhookUpdated
> = core.serialization.object({
    webhook: Webhook,
});

export declare namespace EventWebhookUpdated {
    interface Raw {
        webhook: Webhook.Raw;
    }
}