'use server';

import { cookies } from 'next/headers';
import {
  ApiErrorResponse,
  UserRegisterRequest,
  ApiSuccessResponseUserDto,
  ApiSuccessResponseUserRegisterResponse,
} from '../../api/swagger-gen/data-contracts';
import { User } from '../../api/swagger-gen/User';
import { redirect } from 'next/navigation';
import { signJWTAndSetCookie } from '../../utils/jwt-auth';

const auth = new User({
  baseUrl: 'http://localhost:5000',
});

export const registerUser = async (
  prevState: ApiErrorResponse | undefined,
  formData: FormData,
): Promise<ApiErrorResponse | undefined> => {
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');
  const password2 = formData.get('password2');
  const registerData: UserRegisterRequest = {
    username: username as string,
    email: email as string,
    password: password as string,
  };

  if (!username || !email || !password || !password2
    || typeof username !== 'string' || typeof email !== 'string'
    || typeof password !== 'string' || typeof password2 !== 'string'
    || username.trim() === '' || email.trim() === ''
    || password.trim() === '' || password2.trim() === ''
  ) {
    return { success: false, error: 'Please enter all the fields' };
  }

  if (password !== password2) {
    return { success: false, error: 'Passwords do not match' };
  }
  try {
    await auth.register(registerData);
  } catch (error: any) {
    return error.error as ApiErrorResponse;
  }

  try {
    const token = await signJWTAndSetCookie(username);
    cookies().set('token', token, { expires: 1 });
  }
  catch (error) {
    console.error('Error handling login form:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
  redirect('/user/' + username);
};

export const getUserDetails = async (
  username: string,
): Promise<ApiSuccessResponseUserDto | ApiErrorResponse | null> => {
  try {
    // verify if user is logged in
    if (!username) {
      return { success: false, error: 'Please login to view this page' };
    }

    const response = await auth.userDetails(username);
    if (response.ok) {
      return response.data;
    }
    return null;
  } catch (error: any) {
    return error;
  }
};
