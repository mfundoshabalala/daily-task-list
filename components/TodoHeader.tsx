import { useState } from 'react';
import { useDispatch } from 'react-redux';
//
import { saveTodo } from 'redux/actionCreators';

const TodoHeader: React.FC = () => {
	const dispatch = useDispatch();
	const [textValue, setTextValue] = useState('');

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		setTextValue(event.target.value);
	}

	function handleTodoSubmit() {
		dispatch(saveTodo(textValue));
		setTextValue('');
	}

	return (
		<>
			<h1 className="text-4xl font-bold">Daily Task List</h1>
			<form action="" className="flex gap-2">
				<input type="text" value={textValue} onChange={handleInputChange} />
				<button
					type="button"
					className="px-3 py-0 text-white bg-gray-600 rounded-sm"
					onClick={handleTodoSubmit}
				>
					Add Todo
				</button>
			</form>
		</>
	);
};

export default TodoHeader;
