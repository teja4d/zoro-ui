/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useEffect } from "react";
import { loginUser } from "../../api/users/user-api";
import { UserLoginRequest } from "../../api/swagger-gen/data-contracts";
import Banner from "../elements/banner/banner";
import Button from "../elements/button/button";
import InputField from "../elements/input-fields/input-field";
import Link from "next/link";
import { signJWTAndSetCookie } from "../../utils/jwt-auth";

const LoginForm = () => {
  const [username, setUsername] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [error, setError] = useState<string>();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(undefined);
    setShow(false);
    if (!username || !password) {
      setError("Please enter both username and password");
      setShow(true);
      return;
    }
    const loginData: UserLoginRequest = {
      username,
      password,
    };
    setLoading(true);

    const loggedInUser = await loginUser(loginData);
    if (loggedInUser && loggedInUser.success) {
      setLoading(false);
      signJWTAndSetCookie(username);
      router.push(`/user/${username}`);
    } else {
      setError(loggedInUser?.error || "Something went wrong");
      setShow(true);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="" role="form">
      {error && show && (
        <Banner
          setShowBanner={() => setShow(false)}
          showBanner={show}
          message={error}
        />
      )}
      <InputField
        label="Username"
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="John Doe"
        className="mb-4"
      />
      <InputField
        label="Password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="***********"
        className="mb-1"
      />
      <div className="mb-6">
        <a href="/forgot-password" className="text-sm text-indigo-600">
          Forgot password?
        </a>
      </div>
      <Button
        label="Login"
        onClick={() => {}}
        type={"submit"}
        isLoading={loading}
      />
      <hr className="my-4 border-gray-200" />
      <div className="">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
