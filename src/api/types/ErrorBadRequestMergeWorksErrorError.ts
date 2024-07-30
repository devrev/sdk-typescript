/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface ErrorBadRequestMergeWorksErrorError {
    alreadyMerged?: DevRev.ErrorBadRequestMergeWorksErrorErrorAlreadyMerged;
    closed?: DevRev.ErrorBadRequestMergeWorksErrorErrorClosed;
    /** The details of the error. */
    details: string;
    differentWorkspace?: DevRev.ErrorBadRequestMergeWorksErrorErrorDifferentWorkspace;
    invalidStageTransition?: DevRev.ErrorBadRequestMergeWorksErrorErrorInvalidStageTransition;
    subtype?: DevRev.ErrorBadRequestMergeWorksErrorErrorSubtype;
    /** The ID of the work which failed the validation. */
    work: string;
}