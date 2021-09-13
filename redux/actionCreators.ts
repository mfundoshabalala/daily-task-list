import { uniqueId } from 'lodash';
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, UPDATE_TODO } from './actions';

/*
 * Action Types
 */

interface SaveAction {
	type: typeof ADD_TODO;
	payload: {
		taskId: string;
		task: string;
		completed: boolean;
	};
}

interface DeleteAction {
	type: typeof DELETE_TODO;
	payload: {
		taskId: string;
	};
}

interface CompleteAction {
	type: typeof COMPLETE_TODO;
	payload: {
		taskId: string;
	};
}

interface UpdateAction {
	type: typeof UPDATE_TODO;
	payload: {
		taskId: string;
		task: string;
	};
}

/*
 * Action Creators
 */

export const saveTodo = (task: string): SaveAction => ({
	type: ADD_TODO,
	payload: { taskId: uniqueId(), task, completed: false },
});

export const deleteTodo = (taskId: string): DeleteAction => ({
	type: DELETE_TODO,
	payload: { taskId },
});

export const completeTodo = (taskId: string): CompleteAction => ({
	type: COMPLETE_TODO,
	payload: { taskId },
});

export const updateTodo = (taskId: string, task: string): UpdateAction => ({
	type: UPDATE_TODO,
	payload: { taskId, task },
});
