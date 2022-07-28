import React from "react";
import Todo from "./todo";
import Nav from "./nav";

export default function Page() {
   return (
      <div className="flex justify-center items-center flex-col h-full w-full ">
         <Nav />
         <Todo />
      </div>
   );
}
