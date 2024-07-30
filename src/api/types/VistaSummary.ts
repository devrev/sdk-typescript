/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

/**
 * Represents a collection of DevRev objects.
 */
export type VistaSummary = DevRev.VistaSummary.Curated | DevRev.VistaSummary.Dynamic | DevRev.VistaSummary.Grouped;

export declare namespace VistaSummary {
    interface Curated extends DevRev.VistaBaseSummary {
        type: "curated";
    }

    interface Dynamic extends DevRev.VistaBaseSummary {
        type: "dynamic";
    }

    interface Grouped extends DevRev.GroupedVistaSummary {
        type: "grouped";
    }
}