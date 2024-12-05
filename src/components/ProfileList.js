import React from 'react';
import defaultProfileImage from '../assets/images/default_profile.png';

function ProfileList() {

   return (
      <div className="flex h-1/8 w-64 ml-4 py-4 absolute right-2 top-12 z-10 rounded-lg border bg-white shadow-lg">
         <div className="mx-4 flex flex-col text-black text-sm font-extralight tracking-wide" style={{fontFamily:'Product Sans'}}>
            <div className="mb-1 flex items-center">
               <img className="h-10 w-10 border border-gray-800 rounded" src={defaultProfileImage} />
               <div className="h-10 flex flex-col justify-center">
                  <div className="ml-4 text-xs font-semibold tracking-wide" style={{fontFamily:'Google Sans'}}>Example User</div>
                  <div className="ml-4 text-xs font-light tracking-wide" style={{fontFamily:'Roboto'}}>user@example.com</div>
               </div>
            </div>

            {/* Line that spans the full width of the pop-up container */}
            <div className="h-px w-56 bg-gray-400 mt-2 mb-2"></div>
            
            <div className="mb-2 text-xs font-semibold text-black tracking-wide" style={{fontFamily:'Roboto'}}>Account Settings</div>
            <div className="mb-2 text-xs font-semibold text-black tracking-wide" style={{fontFamily:'Roboto'}}>Billing</div>
            <div className="mb-2 text-xs font-semibold text-black tracking-wide" style={{fontFamily:'Roboto'}}>Logout</div>
         </div>
      </div>
   )
}

export default ProfileList;
