import { FC } from 'react';

import UserPage from '../../components/user-page/user-page';

interface UserProps {
  params: {
    username: string;
  };
}

const User: FC<UserProps> = () => (
  <div>
    <UserPage username="" userData={undefined} />
  </div>
);

export default User;
