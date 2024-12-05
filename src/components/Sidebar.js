import { useEffect, useState } from 'react';
import './Sidebar.css';

function SideBar({ headerHeight }) {   
   const [visibleItems, setVisibleItems] = useState([]);
   const items = ['Dashboard', 'Users', 'Groups', 'Settings', 'Reports'];

   useEffect(() => {
      const delays = [0, 250, 500, 750, 1000, 1250];
      delays.forEach((delay, index) => {
         setTimeout(() => {
            setVisibleItems((prev) => [...prev, index]);
         }, delay);
      });
   }, []);
   
   return (
      <div className="fixed w-[250px] top-0 left-0 bg-white">
         <div className="flex w-[250px] bg-blue-800 mb-4">
            <div className={`absolute top-0 left-0 w-0 h-0 border-l-[15px] border-b-[15px] border-l-transparent border-b-white fadeInOutTriangle`}></div>
            <div className="flex ml-8 text-sm text-white bg-blue-800 items-center" style={{ height: `${headerHeight}px`, fontFamily: 'Google Sans' }}>Home</div>
            <div className="flex ml-auto mr-4 flex text-xs text-white bg-blue-800 items-center">▼</div>
         </div>
         {items.map((item, index) => (
            <div key={index} className={`ml-14 mb-2 text-sm transition-transform duration-750 ${visibleItems.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{ fontFamily: 'Google Sans' }}>
               {item}
            </div>
         ))}
      </div>
   );
}

export default SideBar;
