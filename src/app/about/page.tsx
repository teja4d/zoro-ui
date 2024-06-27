const AboutPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="lg:max-w-md w-full max-w-xs mx-auto p-6 shadow-md rounded-lg">
          <div className="mb-6">
            <h2 className="text-4xl text-white  font-medium">About Us</h2>
            <h3 className="text-3xl text-white font-light">
              to start shopping
            </h3>
          </div>
          <p className="text-2xl text-white font-light">
            This is a simple e-commerce app built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
