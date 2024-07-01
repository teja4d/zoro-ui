'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { authenticate } from '../../api/auth/auth-api';
import InputField from '../elements/input-fields/input-field';
import Button from '../elements/button/button';
import Banner from '../elements/banner/banner';
import { signJWTAndSetCookie } from '../../utils/jwt-auth';

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const result = await authenticate({ username, password });
      if (result && 'error' in result) {
        setError(result.error);
      }
      if (result.success) {
        signJWTAndSetCookie(username);
        router.push(`/user/${username}`);
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto">
      <div className="h-10 mb-2">
      {error && (
        <Banner
          message={error}
          showBanner
          setShowBanner={() => setError(null)}
        />
      )}
      </div>
      <form
        onSubmit={handleSubmit}
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
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="***********"
          className="mb-1"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="mb-6">
          <Link href="/forgot-password" className="text-sm text-indigo-600">
            Forgot password?
          </Link>
        </div>
        <Button
          label="Login"
          type="submit"
          isLoading={isLoading}
          isDisabled={username === '' || password === ''}
        />
        <hr className="my-4 border-gray-200" />
        <div className="">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-indigo-600 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
