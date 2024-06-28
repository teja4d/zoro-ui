/* eslint-disable react/no-unescaped-entities */
"use client";
import { redirect } from "next/navigation";
import { useState, FormEvent } from "react";
import { registerUser } from "../../api/users/user-api";
import { UserRegisterRequest } from "../../api/swagger-gen/data-contracts";
import Banner from "../elements/banner/banner";
import Button from "../elements/button/button";
import InputField from "../elements/input-fields/input-field";
import Link from "next/link";
import { signJWTAndSetCookie } from "@/utils/jwt-auth";

const SignUpForm = () => {
  const [username, setUsername] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [password2, setPassword2] = useState<string | undefined>();
  const [error, setError] = useState<string>();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(undefined);
    setShow(false);
    if (!username || !password || !password2) {
      setError("Please enter all the fields");
      setShow(true);
      return;
    }
    //valid email
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email");
      setShow(true);
      return;
    }
    if (password !== password2) {
      setError("Passwords do not match.");
      setShow(true);
      return;
    }
    const signupData: UserRegisterRequest = {
      username,
      email,
      password,
    };
    setLoading(true);
    const isSignedUp = await registerUser(signupData);

    if (isSignedUp) {
      setLoading(false);
      signJWTAndSetCookie(username);
      redirect(`/user/${username}`);
    } else {
      setError("Something went wrong");
      setShow(true);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="" role="form">
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
        label="Email"
        type="email"
        id="emailname"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        className="mb-4"
      />
      <InputField
        label="Confirm password"
        type="password"
        id="password2"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        placeholder="***********"
        className="mb-4"
      />
      <Button
        label="Signup"
        onClick={() => {}}
        type={"submit"}
        isLoading={loading}
      />
      <hr className="my-4 border-gray-200" />
      <div className="">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
