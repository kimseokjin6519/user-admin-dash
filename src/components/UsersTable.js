import React, { useState } from 'react';
import Users from './UsersList.js';

function UsersTable() {

   const [contextMenuVisible, setContextMenuVisible] = useState(false);
   const [position, setPosition] = useState({ top: 0, left: 0 });

   const handleContext = (event) => {
      event.preventDefault();
      const { clientX: x, clientY: y } = event;
      setPosition({ top: y, left: x });
      setContextMenuVisible(true);
   };

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
               <tr key={index} onContextMenu={handleContext} className="border-b h-10 w-full text-xs text-left hover:bg-gray-100 cursor-pointer" style={{fontFamily:'Google Sans'}}>
               <td className="py-2 pl-2"><div className="flex"><div className="mr-4">☐</div><div className="mr-4">{user.name}</div></div></td>
               <td className="">{user.email}</td>
               <td className="">{user.status}</td>
               <td className="">{user.last_sign_in}</td>
               <td className="">{user.email_usage}</td>
               </tr>
            ))}
         </tbody>
         </table>

         { contextMenuVisible && (
            
            <div className="absolute flex flex-col w-64 justify-center border border-gray-200 bg-white rounded-lg cursor-pointer" style={{ top: position.top, left: position.left }}>   
               
               <div className="flex h-6 mt-2 items-center hover:bg-gray-200">
                  <div className="ml-4 text-sm">Add to Groups</div>
               </div>
               
               <div className="flex h-6 mt-4 items-center hover:bg-gray-200">
                  <div className="ml-4 text-sm">Email User</div>
               </div>
               
               <div className="w-64 h-4 items-center border-b border-gray-200"></div>

               <div className="flex h-6 mt-4 items-center hover:bg-gray-200">
                  <div className="ml-4 text-sm">Suspend User</div>
               </div>

               <div className="flex h-6 mt-4 items-center hover:bg-gray-200">
                  <div className="ml-4 text-sm">Restore Data</div>
               </div>

               <div className="flex h-6 mt-4 items-center hover:bg-gray-200">
                  <div className="ml-4 text-sm">Delete User</div>
               </div>

               <div className="flex h-6 mt-4 items-center hover:bg-gray-200">
                  <div className="ml-4 text-sm">Change Organizational Unit</div>
               </div> 

               <div className="mt-2"></div>
               
            </div>
         
         )}

      </div>
   );
}

export default UsersTable;
