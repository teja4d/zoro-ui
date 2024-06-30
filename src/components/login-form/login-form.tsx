"use client";
import { useState } from "react";
import { authenticate } from "../../api/auth/auth-api";
import InputField from "../../components/elements/input-fields/input-field";
import Button from "../../components/elements/button/button";
import Banner from "../../components/elements/banner/banner";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await authenticate(formData);
      if (result && "error" in result) {
        setError(result.error);
      }
      if (result && !("error" in result)) {
        router.push(`/user/${username}`);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      {error && (
        <Banner
          message={error}
          showBanner={true}
          setShowBanner={() => setError(null)}
        />
      )}
      <form
        action={handleSubmit}
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
        <Button label="Login" type="submit" isLoading={isLoading} />
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
    </div>
  );
}
