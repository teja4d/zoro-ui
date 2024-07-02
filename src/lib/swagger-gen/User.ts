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
  ApiSuccessResponseUserDto,
  ApiSuccessResponseUserDtoArray,
  ApiSuccessResponseUserRegisterResponse,
  UserRegisterRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name Register
   * @request POST:/user/register
   */
  register = (data: UserRegisterRequest, params: RequestParams = {}) =>
    this.request<ApiErrorResponse | ApiSuccessResponseUserRegisterResponse, void>({
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
    this.request<ApiSuccessResponseUserDto | ApiErrorResponse, void>({
      path: `/user/${username}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name AllUsers
   * @request GET:/user/allUsers/{req}
   */
  allUsers = (req: string, params: RequestParams = {}) =>
    this.request<ApiSuccessResponseUserDtoArray | ApiErrorResponse, void>({
      path: `/user/allUsers/${req}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
