import {useState, useEffect} from 'react';

import { fetchTodos, addNewTodo } from './store/todoSlice';
import { useAppDispatch, useAppSelector } from './hook';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';


function App() {
  const [text, setText] = useState('');
  const{loading, error}= useAppSelector(state=> state.todos)
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addNewTodo(text));
      setText('');
    }
  }

  useEffect(() => {
    dispatch(fetchTodos())
  },[dispatch])

  return (
    <div className="w-full h-screen bg-slate-300 flex flex-col gap-3">
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
       {loading  && <h2>Loading...</h2>}
      {error &&  <h2>An error occured: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;