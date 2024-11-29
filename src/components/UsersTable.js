import React from 'react';
import Users from './UsersList.js';

function UsersTable() {
  return (
    <div className="">
      <table className="min-w-full">
        <thead className="h-8 w-full text-xs bg-gray-200 text-left" style={{fontFamily:'Google Sans'}}>
          <tr>
            <th className="pl-2"><div className="flex"><div className="mr-4">☐</div><div className="mr-4">Name</div><div className="mr-2">↑</div></div></th>
            <th className="text-gray-400">Email</th>
            <th className="text-gray-400">Status</th>
            <th className="text-gray-400">Last Sign In</th>
            <th className="text-gray-400">Email Usage</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user, index) => (
            <tr key={index} className="border-b h-10 w-full text-xs text-left" style={{fontFamily:'Google Sans'}}>
              <td className="py-2 pl-2"><div className="flex"><div className="mr-4">☐</div><div className="mr-4">{user.name}</div></div></td>
              <td className="">{user.email}</td>
              <td className="">{user.status}</td>
              <td className="">{user.last_sign_in}</td>
              <td className="">{user.email_usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
