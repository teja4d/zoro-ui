/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from 'next/link';
import { registerUser } from '../../actions/users/user-actions';
import Banner from '../elements/banner/banner';
import InputField from '../elements/input-fields/input-field';
import { useFormState } from 'react-dom';
import SignUpButton from './signup-button';

function SignUpForm() {
  const [formState, formAction] = useFormState(registerUser, undefined);

  return (
    <div className="mx-auto">
      <div className="h-10 mb-2 ">
      {formState?.error && (
        <Banner
          setShowBanner={() => {}}
          showBanner
          message={formState.error}
        />
      )}
      </div>
      <form action={formAction} data-testid="signup-form" className="" role="form">
        <InputField
          label="Username"
          type="text"
          name="username"
          id="username"placeholder="John Doe"
          className="mb-4"
          required
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          id="emailname"
          placeholder="John Doe"
          className="mb-4"
          required
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          id="password"
          placeholder="***********"
          className="mb-4"
          required
        />
        <InputField
          label="Confirm password"
          name="password2"
          type="password"
          id="password2"
          placeholder="***********"
          className="mb-4"
          required
        />
        <SignUpButton/>
        <hr className="my-4 border-gray-200" />
        <div className="">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
