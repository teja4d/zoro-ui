import SignUpForm from "../../components/signup-form/signup-form";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="lg:max-w-md w-full max-w-xs mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className="mb-6">
          <h2 className="text-4xl text-gray-700  font-medium">Sign up</h2>
          <h3 className="text-3xl text-gray-700 font-light">
            to start shopping
          </h3>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignupPage;
