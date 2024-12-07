import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import defaultProfileImage from '../assets/images/default_profile.png';
import GearSVG from '../assets/images/icons/gear.svg';
import EditProfileSVG from '../assets/images/icons/edit-profile.svg';
import LogoutSVG from '../assets/images/icons/logout.svg';
import HelpSVG from '../assets/images/icons/help.svg';

function ProfileList({ setProfileListActive }) {
   const profileListRef = useRef(null);
   const navigate = useNavigate();

   /* Close Profile List Hook */

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (profileListRef.current && !profileListRef.current.contains(event.target))
            setProfileListActive(false);
      };   
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [setProfileListActive]);

   return (
      <div ref={profileListRef} className="flex h-1/8 w-64 ml-4 py-4 absolute right-2 top-12 z-10 rounded-lg border bg-white shadow-lg">
         <div className="mx-4 flex flex-col text-black text-sm font-extralight tracking-wide" style={{fontFamily:'Product Sans'}}>
            <div className="mb-1 flex items-center">
               <img className="h-10 w-10 border border-gray-800 rounded" src={defaultProfileImage} />
               <div className="h-10 flex flex-col justify-center">
                  <div className="ml-4 text-xs font-semibold tracking-wide" style={{fontFamily:'Google Sans'}}>Example User</div>
                  <div className="ml-4 text-xs font-light tracking-wide" style={{fontFamily:'Roboto'}}>user@example.com</div>
               </div>
            </div>

            {/* Account Settings */}

            <div className="flex mt-2">
               <img className="h-4 w-4"src={GearSVG} />
               <div className="ml-2 mb-2 text-xs font-light text-gray-400 tracking-wide" style={{fontFamily:'Roboto'}}>Account Settings</div>
            </div>

            {/* Edit Profile */}

            <div className="flex">
               <img className="h-4 w-4"src={EditProfileSVG} />
               <div className="ml-2 mb-2 text-xs font-light text-gray-400 tracking-wide" style={{fontFamily:'Roboto'}}>Edit Profile</div>
            </div>
            
            {/* Help Profile */}

            <div className="flex">
               <img className="h-4 w-4"src={HelpSVG} />
               <div className="ml-2 mb-2 text-xs font-light text-gray-400 tracking-wide" style={{fontFamily:'Roboto'}}>Help</div>
            </div>
            
            {/* Gray Line */}

            <div className="w-56 border-t border-gray-400 mb-2"></div>
            
            {/* Logout */}

            <button onClick = {() => {sessionStorage.removeItem('authToken'); navigate('/login')}} className="flex hover:bg-gray-200 cursor-pointer text-gray-400 hover:text-gray-800 hover:font-normal font-light">
               <img className="h-4 w-4"src={LogoutSVG} />
               <div className="ml-2 mb-0 text-xs tracking-wide cursor-pointer" style={{fontFamily:'Roboto'}}>Log out</div>
            </button>
         </div>
      </div>
   )
}

export default ProfileList;
