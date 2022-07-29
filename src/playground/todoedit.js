import React from "react";

import { DispachContext } from "./../context/TaskProvider";
import useForm from "./../state/useForm";

function Toedit(props) {
	const [Input, changehandler, , setValue] = useForm(props.task);
	const dispatch = React.useContext(DispachContext);
	const handlesubmit = (e) => {
		e.preventDefault();
		if (Input.trim() !== "") {
			// editTask(e, props.id, Input)
			// console.log({ type: "EDIT", id: props.id, task: Input });
			dispatch({ type: "EDIT", id: props.id, task: Input });
		} else {
			setValue(props.task);
			e.target.value = props.task;
		}
		props.editingdone(false);
	};
	return (
		<li className='w-full flex items-center justify-between px-4 rounded-lg bg-blue-600/75 shadow-2xl my-2'>
			<form
				onSubmit={handlesubmit}
				className='flex w-full p-1 font-medium justify-between items-center'>
				<input
					autoFocus
					onBlur={handlesubmit}
					type='text'
					className='w-full mr-10 rounded-lg p-1 focus:outline-none border focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
					onChange={(e) => changehandler(e)}
					value={Input}
				/>
				<button
					type='submit'
					className='bg-sky-600 border p-1 text-xs text-white rounded-lg text-center w-16'>
					<span>Save</span>
				</button>
			</form>
		</li>
	);
}
 
export default React.memo(Toedit)