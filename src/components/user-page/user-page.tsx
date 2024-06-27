import { FC } from "react";
import { IUser } from "../../api/swagger-gen/data-contracts";
import UserDetails from "./user-details";

interface UserPageProps {
  username: string;
  userData?: IUser;
}

const UserPage: FC<UserPageProps> = ({ username, userData }) => {
  //page not found
  if (!userData) {
    return <div className="md:text-6xl xs:text-5xl  font-bold text-center uppercase">User not found</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <div className="md:text-6xl xs:text-5xl  font-bold text-center uppercase">{username}</div>
        <hr className="my-8"></hr>
        <UserDetails />
      </div>
    </div>
  );
};

export default UserPage;
