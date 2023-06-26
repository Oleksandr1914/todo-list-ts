import {useState} from 'react';

import { addTodo } from './store/todoSlice';
import { useAppDispatch } from './hook';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';


function App() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo(text));
      setText('');
    }
  }

  return (
    <div className="w-full h-screen bg-slate-300 flex flex-col gap-3">
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default App;