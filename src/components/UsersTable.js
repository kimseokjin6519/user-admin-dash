import React, { useState, useRef, useEffect } from 'react';
import Users from './UsersList.js';

function UsersTable() {

   const [contextMenuVisible, setContextMenuVisible] = useState(false);
   const [position, setPosition] = useState({ top: 0, left: 0 });
   const contextMenuRef = useRef(null);

   /* Right Click Function */
   
   const handleContext = (event) => {
      event.preventDefault();
      const { clientX: x, clientY: y } = event;
      setPosition({ top: y, left: x });
      setContextMenuVisible(true);
   };

   /* Close Context Menu Hook */

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (contextMenuRef.current && !contextMenuRef.current.contains(event.target))
            setContextMenuVisible(false);
      };   
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [setContextMenuVisible]);

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

         { /* Context Menu */ }
         
         { contextMenuVisible && (
            
            <div ref={contextMenuRef} className="absolute flex flex-col w-64 justify-center border border-gray-400 shadow bg-white rounded-sm text-gray-400 cursor-pointer" style={{ top: position.top, left: position.left, fontFamily: 'Google Sans' }}>   
               
               <div className="flex h-6 items-center hover:bg-gray-200 hover:text-gray-800 rounded-t-sm">
                  <div className="ml-4 text-sm">Add to Groups</div>
               </div>
               
               <div className="flex h-6 items-center hover:bg-gray-200 hover:text-gray-800">
                  <div className="ml-4 text-sm">Email User</div>
               </div>

               <div className="flex h-2 items-center">
                  <div className="w-96 h-[1px] items-center border-b border-gray-200"></div>
               </div>
               
               <div className="flex h-6 items-center hover:bg-gray-200 hover:text-gray-800">
                  <div className="ml-4 text-sm">Suspend User</div>
               </div>

               <div className="flex h-6 items-center hover:bg-gray-200 hover:text-gray-800">
                  <div className="ml-4 text-sm">Restore Data</div>
               </div>

               <div className="flex h-6 items-center hover:bg-gray-200 hover:text-gray-800">
                  <div className="ml-4 text-sm">Delete User</div>
               </div>

               <div className="flex h-6 items-center hover:bg-gray-200 hover:text-gray-800 rounded-b-sm">
                  <div className="ml-4 text-sm">Change Organizational Unit</div>
               </div> 

               
            </div>
         
         )}

      </div>
   );
}

export default UsersTable;
