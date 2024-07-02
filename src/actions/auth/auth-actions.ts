'use server';

import { redirect } from 'next/navigation';
import { Auth } from '../../lib/swagger-gen/Auth';
import {
  UserLoginRequest,
  ApiErrorResponse
} from '../../lib/swagger-gen/data-contracts';
import { signJWTAndSetCookie } from '../../utils/jwt-auth';
import { cookies } from 'next/headers';

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
    cookies().set('token', token);
  } catch (error) {
    console.error('Error handling login form:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
  redirect('/user/' + username);
}

export default authenticate;
