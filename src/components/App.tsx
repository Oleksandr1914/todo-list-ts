import { useEffect, useRef, useState } from "react";
import { ITodo } from "../types/data";
import TodoList from "./TodoList";

const App: React.FC = () => {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter')addTodo();
        
    }

    const addTodo = () => {
       if (value) {
         setTodos([...todos, {
            id: Date.now(),
            title: value,
            complete:false,
         }])
           setValue("")
       }
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo=>todo.id !==id))
    }
    
    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) {
                return todo;
            }
            return {...todo,complete:!todo.complete}
        }))
    }

    useEffect(() => {
        
        if (inputRef.current) inputRef.current.focus();
    },[])

  return (
      <div className="w-full h-screen bg-slate-300 flex flex-col gap-3">
          <div className="p-5 pt-20 flex justify-center gap-2"  >
              <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              <button type="button" onClick={addTodo} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add</button>

          </div>
          <TodoList items={todos} removeTodo={removeTodo } toggleTodo={toggleTodo }/>
    </div>
  )
}

export default App