/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as DevRev from "../index";

export class ServiceUnavailableError extends errors.DevRevError {
    constructor(body: DevRev.ErrorServiceUnavailable) {
        super({
            message: "ServiceUnavailableError",
            statusCode: 503,
            body: body,
        });
        Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
    }
}
