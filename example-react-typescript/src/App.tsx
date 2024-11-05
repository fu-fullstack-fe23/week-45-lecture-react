import { useEffect, useState } from 'react';
import { TodoType, TodosResponseType } from './types/types';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    async function fetchTodos() : Promise<void> {
      const response : Response = await fetch('https://dummyjson.com/todos');
      const data : TodosResponseType = await response.json();

      setTodos(data.todos);
    }
    fetchTodos();
  }, []);


  return (
    <ul>
      {
        todos.map(todo => {
          return <TodoItem todo={ todo } />
        })
      }
    </ul>
  )
}

export default App
