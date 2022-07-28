import React from "react";
import useTask from "./../state/useTask";

export const TaskContext = React.createContext();
export default function TaskProvider(props) {
   const [Tasks,addTask,editTask,resetTask,deleteTask,doneTask] = useTask();
   return (
      <TaskContext.Provider value={{ Tasks,addTask,editTask,resetTask,deleteTask,doneTask}}>
      
         {props.children}
      </TaskContext.Provider>
   );
}
