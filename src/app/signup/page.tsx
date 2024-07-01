import { Metadata } from 'next';

import SignUpForm from '../../components/signup-form/signup-form';

export const metadata: Metadata = {
  title: 'Signup - ZORO UK',
  description: 'ZORO Uk Take Home Test',
};

function SignupPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="mx-auto p-6 bg-white shadow-md rounded-lg max-w-xs w-full sm:w-full xs:w-auto">
        <div className="mb-4">
          <div className="flex items-center">
            <h1 className="text-6xl p-2 mr-4 bg-gray-100 rounded-full">🛍️</h1>
            <div className="">
              <h2 className="text-4xl text-gray-700  font-medium mt-2">
                Signup
              </h2>
              <h3 className="text-2xl text-gray-700 font-thin">
                to start shopping
              </h3>
            </div>
          </div>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignupPage;
