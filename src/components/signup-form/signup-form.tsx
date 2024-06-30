/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { registerUser } from '../../api/users/user-api';
import { UserRegisterRequest } from '../../api/swagger-gen/data-contracts';
import Banner from '../elements/banner/banner';
import Button from '../elements/button/button';
import InputField from '../elements/input-fields/input-field';
import { signJWTAndSetCookie } from '../../utils/jwt-auth';

function SignUpForm() {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const signupData: UserRegisterRequest = {
      username,
      email,
      password,
      password2,
    };
    setLoading(true);
    try {
      const result = await registerUser(signupData);
      if (result && 'error' in result) {
        setError(result.error);
      }
      if (result.success) {
        setLoading(false);
        signJWTAndSetCookie(username);
        router.push(`/user/${username}`);
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-8">
      {error && (
        <Banner
          setShowBanner={() => setError(null)}
          showBanner
          message={error}
        />
      )}
      <form onSubmit={handleSignUp} className="" role="form">
        <InputField
          label="Username"
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="John Doe"
          className="mb-4"
          required
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          id="emailname"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="John Doe"
          className="mb-4"
          required
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="***********"
          className="mb-4"
          required
        />
        <InputField
          label="Confirm password"
          name="password2"
          type="password"
          id="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="***********"
          className="mb-4"
          required
        />
        <Button
          label="Signup"
          onClick={() => {}}
          type="submit"
          isLoading={loading}
          isDisabled={!username || !email || !password || !password2}
        />
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
