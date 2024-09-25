/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ContentTemplateCreateRequestNotificationContentTemplateDefaultNotificationContentTemplate: core.serialization.ObjectSchema<
    serializers.ContentTemplateCreateRequestNotificationContentTemplateDefaultNotificationContentTemplate.Raw,
    DevRev.ContentTemplateCreateRequestNotificationContentTemplateDefaultNotificationContentTemplate
> = core.serialization.object({
    body: core.serialization.string(),
    title: core.serialization.string(),
});

export declare namespace ContentTemplateCreateRequestNotificationContentTemplateDefaultNotificationContentTemplate {
    interface Raw {
        body: string;
        title: string;
    }
}
