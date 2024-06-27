const UserDetails = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 ">
            Personal Information
          </h2>
          <hr className="my-2" />
          <ul className="text-gray-700">
            <li>
              <strong>Age:</strong> 36
            </li>
            <li>
              <strong>Profession:</strong> Entrepreneur, Former Founder
            </li>
            <li>
              <strong>Location:</strong> California, USA
            </li>
          </ul>
          <button className="mt-4 text-blue-500 hover:underline focus:outline-none">
            Read More
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 ">
            Personality Traits
          </h2>
          <hr className="my-2" />
          <ul className="text-gray-700">
            <li>Introverted</li>
            <li>Detail-oriented</li>
            <li>Adventurous</li>
          </ul>
          <button className="mt-4 text-blue-500 hover:underline focus:outline-none">
            Read More
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 ">Skills</h2>
          <hr className="my-2" />
          <ul className="text-gray-700">
            <li>Business & Digital Strategy</li>
            <li>eCommerce</li>
            <li>Marketing</li>
          </ul>
          <button className="mt-4 text-blue-500 hover:underline focus:outline-none">
            Read More
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 ">
            Interests and Hobbies
          </h2>
          <hr className="my-2" />
          <ul className="text-gray-700">
            <li>Yoga</li>
            <li>Reading Non-fiction</li>
            <li>Listening to Jazz Music</li>
          </ul>
          <button className="mt-4 text-blue-500 hover:underline focus:outline-none">
            Read More
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 ">
            Health and Wellness
          </h2>
          <hr className="my-2" />
          <ul className="text-gray-700">
            <li>Practices yoga and meditation</li>
            <li>Follows a plant-based diet</li>
          </ul>
          <button className="mt-4 text-blue-500 hover:underline focus:outline-none">
            Read More
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 ">
            Personal Achievements
          </h2>
          <hr className="my-2" />
          <ul className="text-gray-700">
            <li>Launched two successful startups</li>
            <li>Published a book on leadership</li>
          </ul>
          <button className="mt-4 text-blue-500 hover:underline focus:outline-none">
            Read More
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 ">
            Important Relationships
          </h2>
          <hr className="my-2" />
          <ul className="text-gray-700">
            <li>Close-knit family</li>
            <li>Few but very close friends</li>
          </ul>
          <button className="mt-4 text-blue-500 hover:underline focus:outline-none">
            Read More
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 ">
            Values in Interactions
          </h2>
          <hr className="my-2" />
          <ul className="text-gray-700">
            <li>Honesty</li>
            <li>Loyalty</li>
            <li>Creativity</li>
          </ul>
          <button className="mt-4 text-blue-500 hover:underline focus:outline-none">
            Read More
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 ">
            Specific Requirements
          </h2>
          <hr className="my-2" />
          <ul className="text-gray-700">
            <li>
              <strong>Avoid Slang:</strong> Yes
            </li>
            <li>
              <strong>Prefer Active Voice:</strong> Yes
            </li>
            <li>
              <strong>Use Technical Jargon:</strong> No
            </li>
          </ul>
          <button className="mt-4 text-blue-500 hover:underline focus:outline-none">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
