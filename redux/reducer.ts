import { combineReducers } from 'redux';
import { UPDATE_TODO, ADD_TODO, COMPLETE_TODO, DELETE_TODO } from './actions';

/*
Todo list initial state
*/

interface Todo {
	taskId: string;
	task: string;
	completed: boolean;
}

export const initialState = {
	todos: [] as Todo[],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const todosReducer = (state = initialState.todos, action: any): Todo[] => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, action.payload];

		case DELETE_TODO:
			return state.filter((todo) => todo.taskId !== action.payload.taskId);

		case UPDATE_TODO:
			return state.map((todo) =>
				todo.taskId === action.payload.taskId
					? { ...todo, task: action.payload.task }
					: todo
			);

		case COMPLETE_TODO:
			return state.map((todo) =>
				todo.taskId === action.payload.taskId
					? { ...todo, completed: !todo.completed }
					: todo
			);

		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
