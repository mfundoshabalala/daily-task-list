import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
//
import { saveTodo } from 'redux/actionCreators';
import TodoTitle from './TodoTitle';

const TodoHeader: React.FC = () => {
	const dispatch = useDispatch();
	const [textValue, setTextValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		setTextValue(event.target.value);
	}

	function handleTodoSubmit() {
		if (textValue) {
			dispatch(saveTodo(textValue));
			setTextValue('');

			if (inputRef.current) {
				inputRef.current.focus();
			}
		}
	}

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<div className="flex flex-col items-center w-full gap-8 px-4 py-10 shadow-sm">
			<TodoTitle />
			<form
				action=""
				className="relative flex items-center w-full max-w-lg gap-4 border border-gray-200 rounded drop-shadow-sm"
			>
				<input
					type="text"
					ref={inputRef}
					value={textValue}
					className="w-full pl-5 pr-12 text-base border-0 rounded"
					placeholder="What is your task?"
					onChange={handleInputChange}
				/>
				<button
					type="button"
					aria-label="Add Todo"
					onClick={handleTodoSubmit}
					className="absolute grid w-8 h-8 text-white align-middle bg-blue-600 border rounded right-1 border-gray-50 hover:bg-blue-800 place-items-center"
				>
					<svg className="w-6 h-6 transition-all duration-300 hover:scale-105 currentColor">
						<use xlinkHref="/sprite.svg#plus" />
					</svg>
				</button>
			</form>
		</div>
	);
};

export default TodoHeader;
