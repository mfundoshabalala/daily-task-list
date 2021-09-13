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
		if (textValue) {
			dispatch(saveTodo(textValue));
			setTextValue('');
		}
	}

	return (
		<>
			<h1 className="text-4xl font-bold">Daily Task List</h1>
			<form action="" className="relative flex items-center w-[400px] gap-4">
				<input
					type="text"
					value={textValue}
					className="w-full pl-5 pr-12 text-base border border-gray-400 rounded"
					placeholder="What is your task?"
					onChange={handleInputChange}
				/>
				<button
					type="button"
					className=" absolute right-[1px] grid w-10 h-10 top-[1px] text-white align-middle bg-blue-600 border rounded border-gray-50 hover:bg-blue-800 place-items-center"
					onClick={handleTodoSubmit}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 6v6m0 0v6m0-6h6m-6 0H6"
						/>
					</svg>
				</button>
			</form>
		</>
	);
};

export default TodoHeader;
