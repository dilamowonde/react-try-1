import React, { useContext, useRef } from "react";

import { DispachContext } from "./../context/TaskProvider";
import { TaskContext } from "./../context/TaskProvider";
import Todolist from "./todolist";

function Todolists() {
	const todo = useContext(TaskContext);
	const dispatch = React.useContext(DispachContext);
	const dragItem = useRef();
	const dragOverItem = useRef();

	const dragStart = (e, position) => {
		dragItem.current = position;
		e.target.classList.add('bg-red-800')
		// console.log(e.target.innerHTML);
	};
	const dragEnter = (e, position) => {
		dragOverItem.current = position;
		const copyListItems = [...todo];
		const dragItemContent = copyListItems[dragItem.current];
		copyListItems.splice(dragItem.current, 1);
		copyListItems.splice(dragOverItem.current, 0, dragItemContent);
		dragItem.current = dragOverItem.current;
		dragOverItem.current = position;
		dispatch({ type: "REORDER", copyListItems });
	};
	
	return (
		<div className='w-96 '>
			<div className='transition-all  duration-1000'>
				{todo &&
					todo.map((Task, i) => {
						return (
							<React.Fragment key={i}>
								<div
									key={Task.id}
									draggable
									className='draggable transition-all  duration-1000'
									onDragStart={(e) => dragStart(e, i)}
									onDragEnter={(e) => dragEnter(e, i)}
								>
									<Todolist {...Task} />
								</div>
							</React.Fragment>
						);
					})}
			</div>
		</div>
	);
}

export default React.memo(Todolists);
