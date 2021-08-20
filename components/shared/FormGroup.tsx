import CloseIcon from "components/shared/CloseIcon";

const FormGroup: React.FC = () => (
	<div className="flex items-center pl-4 border border-gray-300 rounded flex-nowrap dark:border-gray-700">
		<input
			type="checkbox"
			name="todoCheckBox"
			id="todoCheckBox"
			className="w-6 h-6 mr-4 border border-gray-300 rounded-full focus:ring-0 dark:bg-gray-800 dark:border-gray-700"
		/>
		<input
			type="text"
			name="todoText"
			id="todoText"
			className="flex-1 border-t-0 border-b-0 border-gray-300 dark:caret-blue-500 dark:text-gray-400 focus:border-gray-300 dark:focus:border-gray-700 dark:border-gray-700 focus:ring-0 dark:bg-gray-800"
		/>
		<button
			type="button"
			className="relative grid self-stretch w-16 text-gray-500 dark:text-gray-600 hover:bg-red-500 hover:text-red-100 place-items-center"
		>
			<CloseIcon />
		</button>
	</div>
);

export default FormGroup;
