import React from 'react';
import Users from './UsersList.js';

function UsersTable() {
  return (
    <div className="">
      <table className="min-w-full">
        <thead className="h-6 w-full text-xs bg-gray-200" style={{fontFamily:'Google Sans'}}>
          <tr>
            <th className="">Name</th>
            <th className="">Email</th>
            <th className="">Status</th>
            <th className="">Last Sign In</th>
            <th className="">Email Usage</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.status}</td>
              <td className="px-4 py-2">{user.last_sign_in}</td>
              <td className="px-4 py-2">{user.email_usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
