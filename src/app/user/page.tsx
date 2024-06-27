import UserPage from "../../components/user-page/user-page";
import { FC } from "react";
import { IUser } from "@/api/swagger-gen/data-contracts";

interface UserProps {
  params: {
    username: string;
  };
  userData: IUser;
}

const User: FC<UserProps> = () => {

  return (
    <div>
      <UserPage username={""} userData={undefined} />
    </div>
  );
};

export default User;
