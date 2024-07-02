'use client';

import { useState } from 'react';
import { UserDto } from '../../lib/swagger-gen/data-contracts';
import { deleteUser } from '../../actions/users/user-actions';

interface AdminUserListProps {
  initialUsers: UserDto[];
}

export default function AdminUserList({ initialUsers }: AdminUserListProps) {
  const handleDelete = async (username: string) => {
    try {
      await deleteUser(username);
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  return (
    <div className="flex flex-col">
      {initialUsers.map((user: UserDto) => (
        <div
          key={user.username}
          className="flex py-2 m-2"
        >
          <span className="text-blue-500 hover:cursor-not-allowed">
            {user.username} - {user.email}
          </span>
          <button
            onClick={() => handleDelete(user.username)}
            className="bg-red-500 hover:bg-red-700 mx-4 px-4 text-white font-bold rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
