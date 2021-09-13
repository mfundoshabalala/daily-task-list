import _ from 'lodash';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducer';
//
import TodoItem from 'components/TodoItem';
import useMounted from 'hooks/useMounted';

const TodoList: React.FunctionComponent = () => {
	const mounted = useMounted();
	const todos = useSelector((state: RootState) => state.todos);

	return (
		<ul className="flex flex-col items-center w-full gap-4 px-4">
			{mounted && _.map(todos, (todo) => <TodoItem key={todo.taskId} todo={todo} />)}
		</ul>
	);
};

export default TodoList;
