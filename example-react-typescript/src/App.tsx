import { useEffect, useState } from 'react';
import { TodoType, TodosResponseType } from './types/types';
import TodoItem from './components/TodoItem';
import AddNewTodo from './components/AddNewTodo';

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

  function addNewTodo(todoText : string) : void {
    const newTodo : TodoType = {
      completed : false,
      userId: todos.length + 1,
      id: todos.length + 1,
      todo : todoText
    }

    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  return (
    <div className="app">
      <ul>
        {
          todos.map(todo => {
            return <TodoItem todo={ todo } />
          })
        }
      </ul>
      <AddNewTodo addNewTodo={ addNewTodo } />
    </div>
  )
}

export default App
