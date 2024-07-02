import { getAllUsers } from '../../actions/users/user-actions';
import AdminUserList from './admin-users-list';

export const dynamic = 'force-dynamic';

async function AdminPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const usersInfo = await getAllUsers('admin');
  const { data } = usersInfo;

  return (
    <div>
      <h1>Admin Page</h1>
      {data && data.length > 0 ? (
        <AdminUserList initialUsers={data} />
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default AdminPage;
