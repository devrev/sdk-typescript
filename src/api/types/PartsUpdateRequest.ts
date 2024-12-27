/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export type PartsUpdateRequest =
    | DevRev.PartsUpdateRequest.Capability
    | DevRev.PartsUpdateRequest.Enhancement
    | DevRev.PartsUpdateRequest.Feature
    | DevRev.PartsUpdateRequest.None
    | DevRev.PartsUpdateRequest.Product;

export declare namespace PartsUpdateRequest {
    interface Capability extends _Base {
        type: "capability";
        value: DevRev.PartsUpdateRequestCapability;
    }

    interface Enhancement extends DevRev.PartsUpdateRequestEnhancement, _Base {
        type: "enhancement";
    }

    interface Feature extends _Base {
        type: "feature";
        value: DevRev.PartsUpdateRequestFeature;
    }

    interface None extends _Base {
        type: "none";
        value: DevRev.Empty;
    }

    interface Product extends _Base {
        type: "product";
        value: DevRev.PartsUpdateRequestProduct;
    }

    interface _Base {
        artifacts?: DevRev.PartsUpdateRequestArtifacts;
        /** Custom fields. */
        customFields?: Record<string, unknown>;
        /** The custom schema fragments to use. */
        customSchemaFragments?: string[];
        customSchemaSpec?: DevRev.CustomSchemaSpec;
        /** The updated description of the part. */
        description?: string;
        /** The ID of the part to update. */
        id: string;
        /** The updated name of the part. */
        name?: string;
        ownedBy?: DevRev.PartsUpdateRequestOwnedBy;
    }
}
