import Link from 'next/link';
import { getAllUsers } from '../../actions/users/user-actions';
import { UserDto } from '../../lib/swagger-gen/data-contracts';

async function AdminPage() {
  await new Promise((reslove) => setTimeout(reslove, 2000));
  const usersInfo = await getAllUsers('admin');
  const { data } = usersInfo;
  return (
    <div>
      <h1>Admin Page</h1>
      {data && data.length > 0 ? (
        <div>
          <ul className="flex flex-col">
            {data.map((user: UserDto) => (
              <li
                key={user.username}
                className="text-blue-500 hover:cursor-not-allowed hover:underline hover:text-blue-700"
              >
                {user.username} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default AdminPage;
