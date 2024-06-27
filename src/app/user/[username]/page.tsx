import { redirect } from "next/navigation";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { getUserDetails } from "../../../api/users/user-api";
import UserPage from "../../../components/user-page/user-page";
import { cookies } from "next/headers";
import { verifyJWT } from "@/utils/jwt-auth";

interface UserPageProps {
  params: {
    username: string;
  };
}

const User = async ({ params }: UserPageProps) => {
  const { username } = params;
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    redirect(`/login?returnUrl=/user/${username}`);
  }

  try {
    const decoded = verifyJWT(token);
    if ((decoded as JwtPayload).username !== username) {
      throw new Error("Invalid token");
    }
  } catch (error) {
    redirect(`/login?returnUrl=/user/${username}`);
  }

  const userDataJson = await getUserDetails(username);

  if (!userDataJson?.success) {
    return (
      <div className="md:text-4xl xs:text-2xl  font-bold text-center uppercase">
        User not found
      </div>
    );
  }

  return <UserPage userData={userDataJson.data} username={username} />;
};

export default User;
