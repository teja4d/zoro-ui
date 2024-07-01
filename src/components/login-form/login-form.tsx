'use client';
import { useFormState } from 'react-dom';
import Link from 'next/link';

import { authenticate } from '../../actions/auth/auth-actions';

import InputField from '../elements/input-fields/input-field';
import Banner from '../elements/banner/banner';
import LoginButton from './login-button';

export default function LoginForm() {
  const [formState, formAction] = useFormState(authenticate, undefined);

  return (
    <div className="mx-auto">
      <div className="h-10 mb-2">
        {formState && formState.error && (
          <Banner
            message={formState.error}
            showBanner={true}
            setShowBanner={() => {}}
          />
        )}
      </div>
      <form
        action={formAction}
        className=""
        role="form"
        data-testid="login-form"
      >
        <InputField
          label="Username"
          type="text"
          id="username"
          name="username"
          placeholder="John Doe"
          className="mb-4"
          required
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="***********"
          className="mb-1"
          required
        />
        <div className="mb-6">
          <Link
            data-testid="forgot-password"
            href="/forgot-password"
            className="text-sm text-indigo-600"
          >
            Forgot password?
          </Link>
        </div>
        <LoginButton />
        <hr className="my-4 border-gray-200" />
        <div className="">
          <p className="text-sm text-gray-600">
            {"Don't have an account?"}
            <Link
              href="/signup"
              className="text-indigo-600 hover:underline"
            >
              Signup
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
