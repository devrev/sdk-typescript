/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { LinkType } from "../../../../types/LinkType";

export const LinksCreateRequest: core.serialization.Schema<
    serializers.LinksCreateRequest.Raw,
    DevRev.LinksCreateRequest
> = core.serialization.object({
    linkType: core.serialization.property("link_type", LinkType),
    source: core.serialization.string(),
    target: core.serialization.string(),
});

export declare namespace LinksCreateRequest {
    interface Raw {
        link_type: LinkType.Raw;
        source: string;
        target: string;
    }
}