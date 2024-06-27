import LoginForm from "../../components/login-page/login-page";
import LoginLayout from "./layout";

const LoginPage = () => {
  return (
    <LoginLayout>
      <div className="flex flex-col justify-center items-center">
        <div className="lg:max-w-md w-full max-w-xs mx-auto p-6 bg-white shadow-md rounded-lg">
          <div className="mb-6">
            <h2 className="text-4xl text-gray-700  font-medium">Log in</h2>
            <h3 className="text-3xl text-gray-700 font-light">
              to start shopping
            </h3>
          </div>
          <LoginForm />
        </div>
      </div>
    </LoginLayout>
  );
};

export default LoginPage;
