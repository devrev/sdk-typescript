/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as DevRev from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace SysUsers {
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
 * System user interactions
 */
export class SysUsers {
    constructor(protected readonly _options: SysUsers.Options = {}) {}

    /**
     * Lists system users within your organization.
     *
     * @param {DevRev.SysUsersListQuery} request
     * @param {SysUsers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link DevRev.BadRequestError}
     * @throws {@link DevRev.UnauthorizedError}
     * @throws {@link DevRev.ForbiddenError}
     * @throws {@link DevRev.TooManyRequestsError}
     * @throws {@link DevRev.InternalServerError}
     * @throws {@link DevRev.ServiceUnavailableError}
     *
     * @example
     *     await client.sysUsers.list()
     */
    public async list(
        request: DevRev.SysUsersListQuery = {},
        requestOptions?: SysUsers.RequestOptions
    ): Promise<DevRev.SysUsersListResponse> {
        const { cursor, limit, mode, sortBy } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (mode != null) {
            _queryParams["mode"] = mode;
        }

        if (sortBy != null) {
            if (Array.isArray(sortBy)) {
                _queryParams["sort_by"] = sortBy.map((item) => item);
            } else {
                _queryParams["sort_by"] = sortBy;
            }
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.DevRevEnvironment.Default,
                "sys-users.list"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@devrev/api",
                "X-Fern-SDK-Version": "0.0.15",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SysUsersListResponse.parseOrThrow(_response.body, {
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

    /**
     * Lists system users within your organization.
     *
     * @param {DevRev.SysUsersListRequest} request
     * @param {SysUsers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link DevRev.BadRequestError}
     * @throws {@link DevRev.UnauthorizedError}
     * @throws {@link DevRev.ForbiddenError}
     * @throws {@link DevRev.TooManyRequestsError}
     * @throws {@link DevRev.InternalServerError}
     * @throws {@link DevRev.ServiceUnavailableError}
     *
     * @example
     *     await client.sysUsers.listPost()
     */
    public async listPost(
        request: DevRev.SysUsersListRequest = {},
        requestOptions?: SysUsers.RequestOptions
    ): Promise<DevRev.SysUsersListResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.DevRevEnvironment.Default,
                "sys-users.list"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@devrev/api",
                "X-Fern-SDK-Version": "0.0.15",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SysUsersListRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SysUsersListResponse.parseOrThrow(_response.body, {
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

    /**
     * Updates the system user.
     *
     * @param {DevRev.SysUsersUpdateRequest} request
     * @param {SysUsers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link DevRev.BadRequestError}
     * @throws {@link DevRev.UnauthorizedError}
     * @throws {@link DevRev.ForbiddenError}
     * @throws {@link DevRev.NotFoundError}
     * @throws {@link DevRev.TooManyRequestsError}
     * @throws {@link DevRev.InternalServerError}
     * @throws {@link DevRev.ServiceUnavailableError}
     *
     * @example
     *     await client.sysUsers.update({
     *         id: "id"
     *     })
     */
    public async update(
        request: DevRev.SysUsersUpdateRequest,
        requestOptions?: SysUsers.RequestOptions
    ): Promise<DevRev.SysUsersUpdateResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.DevRevEnvironment.Default,
                "sys-users.update"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@devrev/api",
                "X-Fern-SDK-Version": "0.0.15",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SysUsersUpdateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SysUsersUpdateResponse.parseOrThrow(_response.body, {
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
                case 404:
                    throw new DevRev.NotFoundError(
                        serializers.ErrorNotFound.parseOrThrow(_response.error.body, {
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
