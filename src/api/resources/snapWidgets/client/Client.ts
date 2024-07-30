/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as DevRev from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace SnapWidgets {
    interface Options {
        environment?: core.Supplier<environments.DevRevEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

/**
 * SnapWidget APIs
 */
export class SnapWidgets {
    constructor(protected readonly _options: SnapWidgets.Options = {}) {}

    /**
     * Create a snap widget object.
     *
     * @param {DevRev.SnapWidgetsCreateRequest} request
     * @param {SnapWidgets.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link DevRev.BadRequestError}
     * @throws {@link DevRev.UnauthorizedError}
     * @throws {@link DevRev.ForbiddenError}
     * @throws {@link DevRev.TooManyRequestsError}
     * @throws {@link DevRev.InternalServerError}
     * @throws {@link DevRev.ServiceUnavailableError}
     *
     * @example
     *     await client.snapWidgets.create({
     *         type: "email_preview",
     *         name: "string",
     *         namespace: DevRev.SnapWidgetNamespace.CommentSuggestionReplies,
     *         status: DevRev.SnapWidgetStatus.Draft,
     *         bcc: [{
     *                 address: "string",
     *                 name: "string",
     *                 user: "string"
     *             }],
     *         cc: [{
     *                 address: "string",
     *                 name: "string",
     *                 user: "string"
     *             }],
     *         from: [{
     *                 address: "string",
     *                 name: "string",
     *                 user: "string"
     *             }],
     *         htmlBody: "string",
     *         inReplyTo: "string",
     *         inlines: [{
     *                 artifact: "string",
     *                 contentId: "string"
     *             }],
     *         isSpam: true,
     *         messageId: "string",
     *         rawEmailArtifact: "string",
     *         references: ["string"],
     *         replyTo: [{
     *                 address: "string",
     *                 name: "string",
     *                 user: "string"
     *             }],
     *         sentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
     *         subject: "string",
     *         textBody: "string",
     *         to: [{
     *                 address: "string",
     *                 name: "string",
     *                 user: "string"
     *             }]
     *     })
     */
    public async create(
        request: DevRev.SnapWidgetsCreateRequest,
        requestOptions?: SnapWidgets.RequestOptions
    ): Promise<DevRev.SnapWidgetsCreateResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.DevRevEnvironment.Default,
                "snap-widgets.create"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@devrev/api",
                "X-Fern-SDK-Version": "0.0.14",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SnapWidgetsCreateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SnapWidgetsCreateResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRev.BadRequestError(
                        serializers.ErrorBadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new DevRev.UnauthorizedError(
                        serializers.ErrorUnauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new DevRev.ForbiddenError(
                        serializers.ErrorForbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new DevRev.TooManyRequestsError(
                        serializers.ErrorTooManyRequests.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new DevRev.InternalServerError(
                        serializers.ErrorInternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 503:
                    throw new DevRev.ServiceUnavailableError(
                        serializers.ErrorServiceUnavailable.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.DevRevError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DevRevError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DevRevTimeoutError();
            case "unknown":
                throw new errors.DevRevError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        const bearer = (await core.Supplier.get(this._options.token)) ?? process?.env["DEVREV_TOKEN"];
        if (bearer == null) {
            throw new errors.DevRevError({
                message: "Please specify DEVREV_TOKEN when instantiating the client.",
            });
        }

        return `Bearer ${bearer}`;
    }
}