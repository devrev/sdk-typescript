/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

/**
 * Properties of client to be used in track API.
 */
export interface ClientContext {
    browser?: DevRev.ClientContextBrowser;
    cpu?: DevRev.ClientContextCpu;
    device?: DevRev.ClientContextDevice;
    engine?: DevRev.ClientContextEngine;
    /** IP address of the client. */
    ip?: string;
    /** The client's locale, example: en-US. */
    locale?: string;
    os?: DevRev.ClientContextOs;
    page?: DevRev.ClientContextPage;
    /** The client's timezone, example: Asia/Kolkata. */
    timezone?: string;
    /**
     * User agent of the client, example: Mozilla/5.0 (Macintosh; Intel
     * Mac OS X.
     */
    userAgent?: string;
}