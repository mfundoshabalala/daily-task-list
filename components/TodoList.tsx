import _ from 'lodash';
import { RootState } from 'redux/reducer';
import { useSelector } from 'react-redux';
// hooks
import useMounted from 'hooks/useMounted';
// components
import TodoItem from 'components/TodoItem';
import EmptyTodoList from './EmptyTodoList';

const TodoList: React.FunctionComponent = () => {
	const mounted = useMounted();
	const todos = useSelector((state: RootState) => state.todos);

	return (
		<ul className="relative flex flex-col items-center w-full h-full gap-4 px-4">
			{mounted &&
				todos &&
				_.map(todos, (todo) => <TodoItem key={todo?.taskId} todo={todo} />)}
			{mounted && !todos.toString() && <EmptyTodoList />}
		</ul>
	);
};

export default TodoList;
