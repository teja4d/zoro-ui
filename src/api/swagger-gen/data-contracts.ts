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

export interface ApiErrorResponse {
  success: false;
  error: string;
  data?: null;
  [key: string]: any;
}

export interface ApiSuccessResponseString {
  success: true;
  data?: string;
  [key: string]: any;
}

export interface UserLoginRequest {
  username: string;
  password: string;
  [key: string]: any;
}

export interface UserRegisterRequest {
  email: string;
  username: string;
  password: string;
  [key: string]: any;
}

export interface IUser {
  email: string;
  username: string;
  password: string;
  [key: string]: any;
}

export interface ApiSuccessResponseIUser {
  success: true;
  data?: IUser;
  [key: string]: any;
}
