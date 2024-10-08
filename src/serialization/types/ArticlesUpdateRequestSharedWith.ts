/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { SetSharedWithMembership } from "./SetSharedWithMembership";

export const ArticlesUpdateRequestSharedWith: core.serialization.ObjectSchema<
    serializers.ArticlesUpdateRequestSharedWith.Raw,
    DevRev.ArticlesUpdateRequestSharedWith
> = core.serialization.object({
    set: core.serialization.list(SetSharedWithMembership).optional(),
});

export declare namespace ArticlesUpdateRequestSharedWith {
    interface Raw {
        set?: SetSharedWithMembership.Raw[] | null;
    }
}
