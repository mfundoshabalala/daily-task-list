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
	const { taskId, task, completed } = todo;
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
		<li className="flex items-center justify-between w-full shadow-sm hover:shadow-none gap-2 min-h-[50px] max-w-md px-4 py-2 border rounded font-light">
			<p
				className={`flex-1 text-base text-gray-800 capitalize ${
					completed && 'line-through'
				}`}
			>
				{task}.
			</p>
			<div className="flex items-end gap-2 text-gray-600">
				<Button
					icon="trash"
					className="hover:bg-red-600 active:bg-red-800 active:text-white hover:text-white"
					onClick={() => handleDeleteTodo(taskId)}
				/>
				<Button
					icon="refresh"
					className="hover:bg-purple-600 active:bg-purple-800 active:text-white hover:text-white"
					onClick={() => handleUpdateTodo(taskId, task)}
				/>
				<Button
					icon="check"
					optionalIcon="x"
					optionalCriteria={completed}
					className="hover:bg-green-600 active:bg-green-800 active:text-white hover:text-white"
					onClick={() => handleCompleteTodo(taskId)}
				/>
			</div>
		</li>
	);
};

export default TodoItem;
