/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { EmailPreviewWidget } from "./EmailPreviewWidget";

export const SnapWidget: core.serialization.Schema<serializers.SnapWidget.Raw, DevRev.SnapWidget> = core.serialization
    .union("type", {
        email_preview: EmailPreviewWidget,
    })
    .transform<DevRev.SnapWidget>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace SnapWidget {
    type Raw = SnapWidget.EmailPreview;

    interface EmailPreview extends EmailPreviewWidget.Raw {
        type: "email_preview";
    }
}
