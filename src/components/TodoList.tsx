import  TodoItem  from "./TodoItem";
import { ITodo } from "../types/data";

interface ITodoListProps {
    items: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    const {items, toggleTodo, removeTodo } = props;
  return (
      <div className="flex flex-col gap-2 min-h-[calc(100vh-10rem)]" >
          {
              items.map(todo => (
                  <TodoItem
                  key={todo.id}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                  {...todo} />))
          }
    </div>
  )
}

export default TodoList