import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function useTask() {
	const [Tasks, setTasks] = useState([]);
	
	const addTask = (e, task) => {
		e.preventDefault();
  task.trim() && setTasks([{ id: uuid(), task, done: false }, ...Tasks]);
	};
	const resetTask = () => {
		setTasks([]);
	};
	const deleteTask = (e, id) => {
		e.preventDefault();
		setTasks((tasks) => {
			return Tasks.filter((Task) => {
				return Task.id !== id;
			});
		});
	};
	const editTask = (e, id, task) => {
		e.preventDefault();
		setTasks(
			Tasks.filter((Task) => {
				if (Task.id === id) {
					Task["task"] = task;
					return Task;
				}
				return Task;
			}),
		);
	};
	const doneTask = (id) => {
		setTasks(
			Tasks.filter((Task) => {
				if (Task.id === id) {
					console.log(Task);
					Task["done"] = !Task.done;
					return Task;
				}
				return Task;
			}),
		);
	};
	return [Tasks, addTask, editTask, resetTask, deleteTask, doneTask];
}
