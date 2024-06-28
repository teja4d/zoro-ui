import { redirect } from "next/navigation";
import { JwtPayload } from "jsonwebtoken";
import { getUserDetails } from "../../../api/users/user-api";
import UserPage from "../../../components/user-page/user-page";
import { cookies } from "next/headers";
import { Metadata } from "next";
import { verifyJWT } from "../../../utils/jwt-auth";

interface UserPageProps {
  params: {
    username: string;
  };
}

export const generateMetadata = async (
  { params }: UserPageProps
): Promise<Metadata> => {
  console.log("metadata", params);
  const username = params.username.toUpperCase() || "";
  return {
    title: `${username} - ZORO UK`,
    description: "ZORO Uk Take Home Test",
  };
};

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
