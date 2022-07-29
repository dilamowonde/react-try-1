import React from "react";

import useLocalStorageReducer from './../reducer/localstorage.reducer';
// import useTask from "./../state/useTask";
import useTodoReducer from "./../reducer/Task.reducer";

const defaultTodos =[
	{id:1, task: "eat that",done:false}
] 

export const TaskContext = React.createContext();
export const DispachContext = React.createContext();
export default function TaskProvider(props) {
	// const [todo, dispatch] = React.useReducer(useTodoReducer, []);
	const [todo, dispatch] = useLocalStorageReducer("todo",defaultTodos,useTodoReducer);
	// const [Tasks,addTask,editTask,resetTask,deleteTask,doneTask] = useTask();
	return (
		// <TaskContext.Provider value={{Tasks,addTask,editTask,resetTask,deleteTask,doneTask}}>
		<TaskContext.Provider value={todo}>
			<DispachContext.Provider value={dispatch}>
				{props.children}
			</DispachContext.Provider>
		</TaskContext.Provider>
	);
}
