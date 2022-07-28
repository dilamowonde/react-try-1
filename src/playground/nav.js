import React from "react";


export default function Nav() {
   return (
      <nav className='w-full bg-sky-700 text-base font-medium mb-2'>
         <div className='flex justify-between px-20 p-2 items-center'>
            <div className='text-white whitespace-nowrap'>
               <p>TODO with Hooks</p>
            </div>
            <div>

               <input
                  type="text"
                  className="border w-64 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded focus:outline-none p-2"
                  placeholder="Search"
               />
            </div>
         </div>
      </nav>
   );
}
