import {ITodo} from "../types/data"

interface ITodoItem extends ITodo {
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id,title, complete, toggleTodo, removeTodo } = props;

  return (
      <div className="flex gap-5 justify-center items-center">
          <input type="checkbox" checked={complete} onChange={()=> toggleTodo(id)} />
         <span className="text-lg"> {title}</span>
          <button onClick={()=>removeTodo(id)} className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-full text-sm px-2.5 py-1  text-center inline-flex items-center justify-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500">x</button>
    </div>
  )
}

export default TodoItem;