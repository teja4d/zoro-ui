'use server';

import { redirect } from 'next/navigation';
import {
  UserLoginRequest,
  ApiErrorResponse
} from '../../lib/swagger-gen/data-contracts';
import { signJWTAndSetCookie } from '../../utils/jwt-auth';
import { cookies } from 'next/headers';
import { apiClient } from '../../lib/config/api-client';

export async function authenticate(
  prevState: ApiErrorResponse | undefined,
  formData: FormData,
): Promise<ApiErrorResponse> {
  const username = formData.get('username');
  const password = formData.get('password');
  if (!username || !password || typeof username !== 'string'
    || typeof password !== 'string' ||
    username.trim() === '' || password.trim() === '') {
    return { success: false, error: 'Please enter all the fields' };
  }
  try {
    await apiClient.auth.login({ username, password } as UserLoginRequest);
  } catch (error: any) {
    return error.error as ApiErrorResponse;
  }
  try {
    const token = await signJWTAndSetCookie(username);
    cookies().set('token', token);
  } catch (error) {
    console.error('Error handling login form:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
  if (username === 'admin') {
    redirect('/admin');
  }
  redirect('/user/' + username);
}

export default authenticate;
