// src/app/user/[username]/page.tsx

import { getUserDetails } from "../../../api/auth/auth-api";
import UserPage from "../../../components/user-page/user-page";


interface UserPageProps {
  params: {
    username: string;
  };
}

const User = async ({ params }: UserPageProps) => {
  const { username } = params;
  const userDataJson = await getUserDetails(username);

  if (!userDataJson?.success) {
    return <div className="md:text-4xl xs:text-2xl  font-bold text-center uppercase">User not found</div>;
  }

  return <UserPage userData={userDataJson.data} username={username} />;
};

export default User;
