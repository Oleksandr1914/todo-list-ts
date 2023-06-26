import { useAppDispatch } from '../hook';
import {toggleComplete, removeTodo} from '../store/todoSlice';

interface TodoItemProps {
    id: string,
    title: string,
    completed: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li className="flex gap-5 justify-center items-center">
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete( id))}
      />
      <span  className="text-lg">{title}</span>
      <button type="button" onClick={() => dispatch(removeTodo(id))} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">delete</button>

    </li>
  );
};

export default TodoItem;