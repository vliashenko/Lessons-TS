import {useState, useEffect} from 'react';
import { useAppDispatch } from './hooks';

import { fetchTodos, addNewTodo, getPosts } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';


function App() {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if(title.trim().length) {
      dispatch(addNewTodo(title));
      setTitle('');
    }
  }

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(fetchTodos())
  // }, [dispatch])

  return (
    <div className='App'>
      <NewTodoForm
        value={title}
        updateText={setTitle}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default App;