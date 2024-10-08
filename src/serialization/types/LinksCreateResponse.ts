/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Link } from "./Link";

export const LinksCreateResponse: core.serialization.ObjectSchema<
    serializers.LinksCreateResponse.Raw,
    DevRev.LinksCreateResponse
> = core.serialization.object({
    link: Link,
});

export declare namespace LinksCreateResponse {
    interface Raw {
        link: Link.Raw;
    }
}
