
import { useEffect, useState, useRef } from 'react';
import './Sidebar.css';

function SideBar({ headerHeight , setSidebarOpen , sidebarOpen }) {   
   const [visibleItems, setVisibleItems] = useState([]);
   const items = ['Dashboard', 'Users', 'Groups', 'Settings', 'Reports'];
   const sidebarRef = useRef(null);

   /* Menu Delay Hook */

   useEffect(() => {
      const delays = [0, 250, 500, 750, 1000, 1250];
      delays.forEach((delay, index) => {
         setTimeout(() => {
            setVisibleItems((prev) => [...prev, index]);
         }, delay);
      });
   }, []);

   /* Close Sidebar Hook */
   
   useEffect(() => {
      const handleClickOutside = (event) => {
         if (sidebarRef.current && !sidebarRef.current.contains(event.target))
            setSidebarOpen(false);
      };   
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [setSidebarOpen]);

   return (
      <div ref={sidebarRef} className="fixed w-[250px] top-0 left-0 bg-white cursor-pointer">
         <div className="flex w-[250px] bg-blue-800 mb-4">
            <div className={`absolute top-0 left-0 w-0 h-0 border-l-[15px] border-b-[15px] border-l-transparent border-b-white fadeInOutTriangle`}></div>
            <div className="flex ml-8 text-sm text-white bg-blue-800 items-center" style={{ height: `${headerHeight}px`, fontFamily: 'Google Sans' }}>Home</div>
            <button onClick={() => setSidebarOpen(false)} className="flex ml-auto mr-4 flex text-xs text-white bg-blue-800 items-center">▼</button>
         </div>
         {items.map((item, index) => (
            <div key={index} className={`ml-14 mb-2 text-sm transition-transform duration-750 ${visibleItems.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{ fontFamily: 'Google Sans' }}>{item}</div>))}
      </div>
   );
}

export default SideBar;
