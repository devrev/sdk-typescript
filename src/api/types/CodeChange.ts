/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface CodeChange extends DevRev.AtomBase {
    /** Name of the code branch in the repo. */
    branch?: string;
    /**
     * Time at which the code change corresponding to this object reached
     * a closed or merged stage. For example, the time at which a Pull
     * Request was either closed without merging or successfully merged.
     */
    closedDate?: Date;
    /** Commit ID of the merged commit in the target branch. */
    commitId?: string;
    /** Detailed description of the contents of this change. */
    description?: string;
    /** Unique external identifier for this change.e.g Pull Request URL. */
    externalIdentifier?: string;
    filteredLoc?: DevRev.LinesOfCode;
    /** URL pointing to the repo this change was on. */
    repoUrl?: string;
    source?: DevRev.CodeChangeSource;
    /** Name of the target branch in the repo. */
    targetBranch?: string;
    /** Title describing in brief the contents of this change. */
    title?: string;
    totalLoc?: DevRev.LinesOfCode;
}