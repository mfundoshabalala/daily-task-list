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
		<div className="flex flex-col items-center w-full gap-8 py-10 shadow-sm ">
			<h1 className="py-2 text-4xl font-black text-center text-transparent font-product-sans drop-shadow bg-gradient-to-r from-blue-500 to-blue-500 via-green-500 bg-clip-text">
				Daily Task List
			</h1>
			<form
				action=""
				className="relative flex items-center w-full max-w-lg gap-4 border border-gray-200 rounded drop-shadow-sm"
			>
				<input
					type="text"
					value={textValue}
					className="w-full pl-5 pr-12 text-base border-0 rounded"
					placeholder="What is your task?"
					onChange={handleInputChange}
				/>
				<button
					type="button"
					className="absolute grid w-8 h-8 text-white align-middle bg-blue-600 border rounded right-1 border-gray-50 hover:bg-blue-800 place-items-center"
					onClick={handleTodoSubmit}
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
