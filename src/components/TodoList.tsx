import { useAppSelector } from '../hook';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list);

  return (
    <ul className="flex flex-col gap-2 min-h-[calc(100vh-10rem)]">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;