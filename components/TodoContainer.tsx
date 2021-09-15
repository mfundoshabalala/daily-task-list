import TodoList from 'components/TodoList';
import TodoHeader from 'components/TodoHeader';
import Footer from './Footer';

const TodoContainer: React.FunctionComponent = () => (
	<div className="container flex flex-col items-center justify-start h-screen gap-6">
		<TodoHeader />
		<TodoList />
		<Footer />
	</div>
);

export default TodoContainer;
