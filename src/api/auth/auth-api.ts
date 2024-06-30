'use server';

import { Auth } from '../swagger-gen/Auth';
import {
  UserLoginRequest,
  ApiErrorResponse,
  ApiSuccessResponseUserLoginResponse,
} from '../swagger-gen/data-contracts';

const auth = new Auth({
  baseUrl: 'http://localhost:5000',
});

export async function authenticate(
  loginData: UserLoginRequest,
): Promise<ApiSuccessResponseUserLoginResponse | ApiErrorResponse> {
  try {
    const result = await auth.login(loginData);
    return result.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error.error as ApiErrorResponse;
  }
}

export default authenticate;
