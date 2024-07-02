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

export interface UserRegisterResponse {
  message: string;
  [key: string]: any;
}

export interface ApiSuccessResponseUserRegisterResponse {
  success: true;
  data?: UserRegisterResponse;
  [key: string]: any;
}

export interface UserRegisterRequest {
  email: string;
  username: string;
  password: string;
  [key: string]: any;
}

export interface UserDto {
  email: string;
  username: string;
  [key: string]: any;
}

export interface ApiSuccessResponseUserDto {
  success: true;
  data?: UserDto;
  [key: string]: any;
}

export interface UserLoginResponse {
  token: string;
  message: string;
  [key: string]: any;
}

export interface ApiSuccessResponseUserLoginResponse {
  success: true;
  data?: UserLoginResponse;
  [key: string]: any;
}

export interface UserLoginRequest {
  username: string;
  password: string;
  [key: string]: any;
}
