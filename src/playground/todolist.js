import React from "react";

import { DispachContext } from "./../context/TaskProvider";
import Toedit from './todoedit';

function Todolist(props) {
	const [edit, setedit] = React.useState(false);
	const dispatch  = React.useContext(DispachContext);
	
	const editing = () => {
		return (
			<Toedit editingdone={setedit} id={props.id} task={props.task}/>
		);
	};
	
	const listTask = () => {
		return (
			<div  className=' w-full flex items-center justify-between px-4 rounded-lg bg-blue-600/75 shadow-2xl my-2'>
				<div
					onClick={() => dispatch({type:"TOGGLE",id:props.id})}
					className={`flex w-full p-2 font-medium transition-all  duration-1000 ${
						props.done ? "line-through text-red-800 whitespace-pre" : "text-white"
					}`} >
					<p> {props.task} </p>
				</div>
				<div className='flex space-x-2 items-center justify-center'>
					{!props.done && (
						<button
							
							onClick={()=>setedit(true)}
							className='bg-sky-600 border p-1 text-xs text-white rounded-lg text-center w-12 '>
							<span>Edit</span>
						</button>
					)}
					<button
						onClick={(e) => dispatch({type:"REMOVE",id:props.id})}
						className='bg-sky-600 border p-1 text-xs text-white rounded-lg text-center w-12 '>
						<span>Delete</span>
					</button>
				</div>
			</div>
		);
	};

	if (edit) return editing();
	return listTask();
}

export default React.memo(Todolist)