import React from 'react';

import defaultProfileImage from './assets/images/default_profile.png';
import defaultAppsImage from './assets/images/grid.png';
import defaultTasksImage from './assets/images/hourglass.png';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
        
        {/* Left-aligned Flexbox (Menu, Google Admin, and Search) */}

        <div className="flex items-center space-x-4">
          <button className="text-white text-lg" style={{ fontFamily: 'Google Sans' }}>☰</button>
          <h1 className="text-lg font-light pr-4 text-gray-100" style={{ fontFamily: 'Google Sans' }}>Google Admin</h1>
          
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for users, groups or settings"
              className="text-xs p-2 rounded-l-lg text-gray-700 w-96 border-0 border-black"
              style = {{fontFamily: 'Google Sans'}}
            />
            <button className="text-xs bg-white text-blue-600 p-2 rounded-r-lg border-0 border-black border-l-0">
              🔍
            </button>
          </div>
        </div>
        
        {/* Right-aligned Flexbox (Default Tasks, Help Icon, Default Apps, Profile Picture) */}

        <div className="flex items-center">

         {/* Default Tasks */}
         
         <button className="text-white">
            <img
               src={defaultTasksImage}
               alt="Default Tasks"
               className="w-4 h-4 mr-6 rounded-full"
               />
          </button> 

          {/* Help Icon */} 
          
          <button className="text-white">
            <div className="flex w-4 h-4 items-center justify-center bg-white mr-10 text-blue-700 rounded-full"
               style={{ fontFamily: 'Product Sans' }}>?</div>
          </button> 

          {/* Default Apps */}
         
          <button className="text-white">
            <img
               src={defaultAppsImage}
               alt="Default Apps"
               className="w-4 h-4 bg-blue-700 mr-4"
               />
          </button> 
        
          {/* Default Profile Picture */}

          <button className="text-white">
            <img
               src={defaultProfileImage}
               alt="Profile"
               className="w-6 h-6 rounded-full"
               />
          </button>
         </div>


      </header>
      
      {/* Navigation Information */}
      <div className="bg-white p-2 pl-5 shadow-md">
        <h2 className="text-sm font-normal text-gray-700 tracking-normal" style = {{fontFamily:'Google Sans'}}>Admin Console</h2>
      </div>
      
      <div className="w-full h-2 shadow-md"></div>

      {/* Content Section with Icons and Descriptions */}
      <div className="flex flex-wrap p-4 px-16 space-x-8 bg-white">
        
        {/* Dashboard */}

        <div className="flex flex-col items-center justify-start bg-white p-0 w-36">
          <div className="bg-white p-2">
            <span className="text-2xl">📊</span> {/* Dashboard Icon */}
          </div>
          <span className="mt-0 text-center font-normal text-black" style = {{fontFamily:'Product Sans'}}>Dashboard</span>
          <p className="mt-1 text-xs text-center font-light tracking-wide">See relevant insights about your organization</p>
        </div>

        {/* Users */}

        <div className="flex flex-col items-center justify-start bg-white p-0 w-36">
          <div className="bg-white p-2">
            <span className="text-2xl">👥</span> {/* Users Icon */}
          </div>
          <span className="mt-0 text-center font-normal text-black" style = {{fontFamily:'Product Sans'}}>Users</span>
          <p className="mt-1 text-xs text-center font-light tracking-wide">Add or manage users</p>
        </div>

        {/* Groups */}

        <div className="flex flex-col items-center justify-start bg-white p-0 w-36">
          <div className="bg-white p-2">
            <span className="text-2xl">👨‍👨‍👧‍👦</span> {/* Groups Icon */}
          </div>
          <span className="mt-0 text-center font-normal text-black" style = {{fontFamily:'Product Sans'}}>Groups</span>
          <p className="mt-1 text-xs text-center font-light tracking-wide">Create groups and mailing lists</p>
        </div>

        {/* Settings */}

        <div className="flex flex-col items-center justify-start bg-white p-0 w-36">
          <div className="bg-white p-2">
            <span className="text-2xl">⚙️</span> {/* Settings Icon */}
          </div>
          <span className="mt-0 text-center font-normal text-black" style = {{fontFamily:'Product Sans'}}>Settings</span>
          <p className="mt-1 text-xs text-center font-light tracking-wide">Update information about your company</p>
        </div>

        {/* Reports */}

        <div className="flex flex-col items-center justify-start bg-white p-0 w-36">
          <div className="bg-white p-2">
            <span className="text-2xl">📈</span> {/* Reports Icon */}
          </div>
          <span className="mt-0 text-center font-normal text-black" style = {{fontFamily:'Product Sans'}}>Reports</span>
          <p className="mt-1 text-xs text-center font-light tracking-wide">Monitor usage across your organization</p>
        </div>

      </div>
    </div>
  );
}

export default App;
