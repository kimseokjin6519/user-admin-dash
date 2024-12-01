import React from 'react';
import { Link } from 'react-router-dom';
import defaultProfileImage from '../assets/images/default_profile.png';
import defaultAppsImage from '../assets/images/grid.png';
import defaultTasksImage from '../assets/images/hourglass.png';

function Header () {
   return (
      <div>      
         <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
            
            {/* Left-aligned Flexbox (Menu, Google Admin, and Search) */}
            <div className="flex items-center space-x-4">
               <button className="text-white text-lg" style={{ fontFamily: 'Google Sans' }}>☰</button>
               <Link to="/" className="text-lg font-light pr-4 text-gray-100" style={{ fontFamily: 'Google Sans' }}>Google Admin</Link>
               
               <div className="flex items-center">
                  <input
                     type="text"
                     placeholder="Search for users, groups or settings"
                     className="text-xs p-2 rounded-l-lg text-gray-700 w-96 border-0 border-black"
                     style={{ fontFamily: 'Google Sans' }}
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
         </div>
      </div>
   );
}

export default Header;
