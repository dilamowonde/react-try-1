import React from "react";

import TaskProvider from "./../context/TaskProvider";
import Todoform from "./todoform";
import Todolists from "./todolists";

export default function Todo() {
   return (
      <TaskProvider>
         <div className="flex flex-col  items-center h-full w-full overflow-hidden ">
            <div>
               <Todoform />
            </div>
            <div className='h-full my-2 overflow-auto '>
               <Todolists />
            </div>
         </div>
      </TaskProvider>
   );
}
