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
  ApiSuccessResponseUserLoginResponse,
  UserLoginRequest,
  UserRegisterRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name Login
   * @request POST:/user/login
   */
  login = (data: UserLoginRequest, params: RequestParams = {}) =>
    this.request<ApiErrorResponse | ApiSuccessResponseUserLoginResponse, void>({
      path: `/user/login`,
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
   * @request POST:/user/register
   */
  register = (data: UserRegisterRequest, params: RequestParams = {}) =>
    this.request<ApiErrorResponse | Record<string, any>, void>({
      path: `/user/register`,
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
   * @request GET:/user/{username}
   */
  userDetails = (username: string, params: RequestParams = {}) =>
    this.request<ApiSuccessResponseIUser | ApiErrorResponse, void>({
      path: `/user/${username}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
