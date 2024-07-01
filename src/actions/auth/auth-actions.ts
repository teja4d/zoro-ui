'use server';

import { redirect } from 'next/navigation';
import { Auth } from '../../api/swagger-gen/Auth';
import {
  UserLoginRequest,
  ApiErrorResponse
} from '../../api/swagger-gen/data-contracts';
import { signJWTAndSetCookie } from '../../utils/jwt-auth';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const auth = new Auth({
  baseUrl: 'http://localhost:5000',
});

export async function authenticate(
  prevState: ApiErrorResponse | undefined,
  formData: FormData,
): Promise<ApiErrorResponse > {
  const username = formData.get('username');
  const password = formData.get('password');
  if (!username || !password || typeof username !== 'string'
    || typeof password !== 'string' ||
    username.trim() === '' || password.trim() === '') {
    return { success: false, error: 'Please enter all the fields' };
  }
  try {
    await auth.login({ username, password } as UserLoginRequest);
  } catch (error: any) {
    return error.error as ApiErrorResponse;
  }
  try {
    const token = await signJWTAndSetCookie(username);
    cookies().set('token', token, { expires: 1 });
  } catch (error) {
    console.error('Error handling login form:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
  redirect('/user/' + username);
}

export default authenticate;