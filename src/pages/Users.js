import React from 'react';
import UsersTable from '../components/UsersTable';
import Header from '../components/Header';

function Users() {
   return (
      <div>         
         <Header />
         
         {/* Navigation Information */}
         <div className="bg-white p-2 pl-5 shadow-lg">
            <div className="text-sm font-normal text-gray-700 tracking-normal" style={{fontFamily:'Google Sans' }}>Users</div>
         </div>

         {/* Navigation Shadow */}
         <div className="flex w-full h-2"></div>

         {/* Content Start */}
         <div className="flex justify-between items-start bg-gray-100 min-h-screen py-6 px-12 space-x-8">

            {/* Organizations */}
            <div className="w-1/5 h-full bg-white rounded shadow-md p-4">
               <div className="text-sm font-normal text-gray-400" style ={{fontFamily:'Google Sans'}}>All organizations</div>
            </div>
           
            {/* Users */}
            <div className="flex flex-col w-4/5 h-full bg-white rounded shadow-md p-4">
               
               {/* Users Header */}
               <div className="flex w-full h-full bg-white rounded">
                  <div className="text-sm font-normal text-gray-800 mr-1" style ={{fontFamily:'Google Sans'}}>Users</div>
                  <div className="text-sm font-normal text-gray-800 mr-1" style ={{fontFamily:'Google Sans'}}>|</div>
                  <div className="text-sm font-normal text-gray-400" style ={{fontFamily:'Google Sans'}}>Showing users from all organizational units</div>
                  <div className="text-sm font-normal text-gray-400 ml-auto" style ={{fontFamily:'Google Sans'}}>Dropdown</div>
                  <div className="text-sm font-normal text-gray-400 ml-1" style ={{fontFamily:'Google Sans'}}>Download</div>
               </div>

               {/* Gray Line */}
               <div className="border-b border-gray-300 my-4"></div>

               {/* Add a filter button */}
               <div className="flex pb-4">
                  <div className="text-xs text-gray-400 border-2 border-dotted border-gray-400 rounded-full px-6 py-2" style ={{fontFamily:'Google Sans'}}>
                     + Add a filter
                  </div>
               </div>  

               {/* Users Table Component*/}
               <div className="">            
                  <UsersTable />
               </div>
            </div>
         </div>
      </div>
   );
}  

export default Users;
