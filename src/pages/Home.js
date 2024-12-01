import React from 'react';
import Header from '../components/Header';

function Home() {
   return (
      <div>
         <Header />
         
         {/* Navigation Information */}
         <div className="bg-white p-2 pl-5 shadow-md">
            <h2 className="text-sm font-normal text-gray-700 tracking-normal" style={{fontFamily:'Google Sans'}}>Admin Console</h2>
         </div>

         {/* Navigation Shadow */}     
         <div className="w-full h-2 shadow-md"></div>         

         {/* Content Section with Icons and Descriptions */}
         <div className="flex flex-wrap p-4 px-16 space-x-8 bg-white">
            
            {/* Dashboard */}
            <div className="flex flex-col items-center justify-start bg-white p-0 w-36">
               <div className="bg-white p-2">
                  <span className="text-2xl">📊</span> {/* Dashboard Icon */}
               </div>
               <span className="mt-0 text-center font-normal text-black" style={{fontFamily:'Product Sans'}}>Dashboard</span>
               <p className="mt-1 text-xs text-center font-light tracking-wide">See relevant insights about your organization</p>
            </div>

            {/* Users */}
            <div className="flex flex-col items-center justify-start bg-white p-0 w-36">
               <div className="bg-white p-2">
                  <span className="text-2xl">👥</span> {/* Users Icon */}
               </div>
               <span className="mt-0 text-center font-normal text-black" style={{fontFamily:'Product Sans'}}>Users</span>
               <p className="mt-1 text-xs text-center font-light tracking-wide">Add or manage users</p>
            </div>

            {/* Groups */}
            <div className="flex flex-col items-center justify-start bg-white p-0 w-36">
               <div className="bg-white p-2">
                  <span className="text-2xl">👨‍👨‍👧‍👦</span> {/* Groups Icon */}
               </div>
               <span className="mt-0 text-center font-normal text-black" style={{fontFamily:'Product Sans'}}>Groups</span>
               <p className="mt-1 text-xs text-center font-light tracking-wide">Create groups and mailing lists</p>
            </div>

            {/* Settings */}
            <div className="flex flex-col items-center justify-start bg-white p-0 w-36">
               <div className="bg-white p-2">
                  <span className="text-2xl">⚙️</span> {/* Settings Icon */}
               </div>
               <span className="mt-0 text-center font-normal text-black" style={{fontFamily:'Product Sans'}}>Settings</span>
               <p className="mt-1 text-xs text-center font-light tracking-wide">Update information about your company</p>
            </div>

            {/* Reports */}
            <div className="flex flex-col items-center justify-start bg-white p-0 w-36">
               <div className="bg-white p-2">
                  <span className="text-2xl">📈</span> {/* Reports Icon */}
               </div>
               <span className="mt-0 text-center font-normal text-black" style={{fontFamily:'Product Sans'}}>Reports</span>
               <p className="mt-1 text-xs text-center font-light tracking-wide">Monitor usage across your organization</p>
            </div>

         </div>
      </div>
   );
}

export default Home;
