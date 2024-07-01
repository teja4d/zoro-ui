import { Metadata } from 'next';

import { getUserDetails } from '../../../actions/users/user-actions';
import UserPage from '../../../components/user-page/user-page';

interface UserPageProps {
  params: {
    username: string;
  };
}

export const generateMetadata = async ({
  params,
}: UserPageProps): Promise<Metadata> => {
  const username = params.username.toUpperCase() || '';
  return {
    title: `${username} - ZORO UK`,
    description: 'ZORO Uk Take Home Test',
  };
};

async function User({ params }: UserPageProps) {
  const { username } = params;
  const userDataJson = await getUserDetails(username);

  if (!userDataJson?.success) {
    return (
      <div className="md:text-4xl xs:text-2xl  font-bold text-center uppercase">
        User not found
      </div>
    );
  }

  return <UserPage userData={userDataJson.data} username={username} />;
}

export default User;
