import React from 'react';
import defaultProfileImage from './assets/images/default_profile.png';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        
        {/* Left-aligned Flexbox (Menu, Google Admin, and Search) */}

        <div className="flex items-center space-x-4">
          <button className="text-white text-lg" style={{ fontFamily: 'Google Sans' }}>☰</button>
          <h1 className="text-xl font-light pr-4 text-gray-100" style={{ fontFamily: 'Google Sans' }}>Google Admin</h1>
          
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for users, groups or settings"
              className="text-sm p-2 rounded-l-lg text-gray-700 w-96 border-0 border-black"
              style = {{fontFamily: 'Google Sans'}}
            />
            <button className="text-sm bg-white text-blue-600 p-2 rounded-r-lg border-0 border-black border-l-0">
              🔍
            </button>
          </div>
        </div>
        
        {/* Right-aligned Flexbox (Profile Picture) */}

        <div className="flex items-center">
          <button className="text-white">
            <img
               src={defaultProfileImage}
               alt="Profile"
               className="w-8 h-8 rounded-full"
               />
          </button> {/* Profile Picture or Icon */}
        </div>
      </header>
      
      {/* Navigation Information */}
      <div className="bg-white p-2 pl-5 shadow-md">
        <h2 className="text-sm font-normal text-gray-900 tracking-normal" style = {{fontFamily:'Google Sans'}}>Admin Console</h2>
      </div>
      
      <div className="w-full h-2 shadow-md"></div>

      {/* Content Section with Icons and Descriptions */}
      <div className="flex flex-wrap p-4 px-16 space-x-8 bg-white">
        
        {/* Dashboard */}

        <div className="flex flex-col items-center justify-start bg-white p-0 w-36">
          <div className="bg-white p-4">
            <span className="text-2xl">📊</span> {/* Dashboard Icon */}
          </div>
          <span className="mt-0 text-center font-semibold text-gray-900">Dashboard</span>
          <p className="text-xs text-center font-light">See relevant insights about your organization</p>
        </div>

        {/* Users */}

        <div className="flex flex-col items-center justify-start bg-white p-0 w-36">
          <div className="bg-white p-4">
            <span className="text-2xl">👥</span> {/* Users Icon */}
          </div>
          <span className="mt-0 text-center font-semibold text-gray-900">Users</span>
          <p className="text-xs text-center font-light">Add or manage users</p>
        </div>

        {/* Groups */}

        <div className="flex flex-col items-center justify-start bg-white p-0 w-36">
          <div className="bg-white p-4">
            <span className="text-2xl">👨‍👨‍👧‍👦</span> {/* Groups Icon */}
          </div>
          <span className="mt-0 text-center font-semibold text-gray-900">Groups</span>
          <p className="text-xs text-center font-light">Create groups and mailing lists</p>
        </div>

        {/* Settings */}

        <div className="flex flex-col items-center justify-start bg-white p-0 w-36">
          <div className="bg-white p-4">
            <span className="text-2xl">⚙️</span> {/* Settings Icon */}
          </div>
          <span className="mt-0 text-center font-semibold text-gray-900">Settings</span>
          <p className="text-xs text-center font-light">Update information about your company</p>
        </div>

        {/* Reports */}

        <div className="flex flex-col items-center justify-start bg-white p-0 w-36">
          <div className="bg-white p-4">
            <span className="text-2xl">📈</span> {/* Reports Icon */}
          </div>
          <span className="mt-0 text-center font-semibold text-gray-900">Reports</span>
          <p className="text-xs text-center font-light">Monitor usage across your organization</p>
        </div>

      </div>
    </div>
  );
}

export default App;
