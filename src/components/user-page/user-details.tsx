import React from 'react';

import userDetails from '../../data/user-details.json';

interface UserDetailsProps {
  title: string;
  value?: string | number;
}

interface SectionData {
  title: string;
  items: UserDetailsProps[];
}

async function UserDetails() {
  const userData: SectionData[] = userDetails;
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userData.map((section) => (
          <div
            key={section.title}
            className="bg-white shadow-md rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {section.title}
            </h2>
            <hr className="my-2" />
            <ul className="text-gray-700">
              {section.items.map((item) => (
                <li key={item.title}>
                  {item.value ? (
                    <>
                      <strong>{item.title}:</strong> {item.value}
                    </>
                  ) : (
                    <div>{item.title}</div>
                  )}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-4 text-blue-500 hover:underline focus:outline-none"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
