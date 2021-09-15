import Image from 'next/image';

const EmptyTodoList: React.FC = () => (
	<div className="flex flex-col gap-2">
		<p className="text-xl font-bold text-gray-600">No Tasks Listed</p>
		<Image src="/illustrations/no-records.svg" layout="fill" alt="Empty list" />
	</div>
);

export default EmptyTodoList;
