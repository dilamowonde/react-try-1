import { v4 as uuid } from "uuid";

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return [ ...state,{ id: uuid(), task: action.task, done: false }];
		case "REMOVE":
			return state.filter((Task) => Task.id !== action.id);
		case "EDIT":
			return state.map((Task) =>
				Task.id === action.id ? { ...Task, task: action.task } : Task,
			);
		case "TOGGLE":
			return state.map((Task) =>
				Task.id === action.id ? { ...Task, done: !Task.done } : Task,
			);
		case "REORDER":
			return action.copyListItems;
		default:
			return state;
	}
};

export default reducer