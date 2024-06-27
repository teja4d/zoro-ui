/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  ApiErrorResponse,
  ApiSuccessResponseIUser,
  ApiSuccessResponseString,
  UserLoginRequest,
  UserRegisterRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name Login
   * @request POST:/auth/login
   */
  login = (data: UserLoginRequest, params: RequestParams = {}) =>
    this.request<ApiErrorResponse | ApiSuccessResponseString, void>({
      path: `/auth/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name Register
   * @request POST:/auth/register
   */
  register = (data: UserRegisterRequest, params: RequestParams = {}) =>
    this.request<ApiErrorResponse | Record<string, any>, void>({
      path: `/auth/register`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name UserDetails
   * @request GET:/auth/user/{username}
   */
  userDetails = (username: string, params: RequestParams = {}) =>
    this.request<ApiSuccessResponseIUser | ApiErrorResponse, void>({
      path: `/auth/user/${username}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
