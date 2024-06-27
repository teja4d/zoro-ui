import Link from "next/link";

const MainPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="lg:max-w-md w-full max-w-xs mx-auto p-6 shadow-md rounded-lg">
          <div className="mb-6">
            <h2 className="text-4xl text-white  font-medium">Main Page</h2>
            <h3 className="text-3xl text-white font-light">
              to start shopping
            </h3>
          </div>
          <p className="text-2xl text-white font-light">
            This is a Main page,Thankyou for using the page.
          </p>
        </div>
        <Link
          href="/login"
          className="bg-gray-200 text-black hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Login to see more
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
