import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/shared/Button';
import { completeTodo, deleteTodo, updateTodo } from 'redux/actionCreators';

interface TodoProps {
	todo: {
		taskId: string;
		task: string;
		completed: boolean;
	};
}

const TodoItem: React.FC<TodoProps> = ({ todo }) => {
	const { taskId, task } = todo;
	const dispatch = useDispatch();

	function handleDeleteTodo(id: string) {
		return dispatch(deleteTodo(id));
	}

	function handleCompleteTodo(id: string) {
		return dispatch(completeTodo(id));
	}

	function handleUpdateTodo(id: string, text: string) {
		return dispatch(updateTodo(id, text));
	}

	return (
		<li>
			<p className="">{task}</p>
			<div className="flex gap-2">
				<Button title="Delete" onClick={() => handleDeleteTodo(taskId)} />
				<Button title="Update" onClick={() => handleUpdateTodo(taskId, task)} />
				<Button title="Complete" onClick={() => handleCompleteTodo(taskId)} />
			</div>
		</li>
	);
};

export default TodoItem;
