import { TodoType } from "../types/types";

interface Props {
    todo : TodoType
}

function TodoItem({todo} : Props) {
  return (
    <li className={todo.completed ? 'done' : ''}>{todo.todo}</li>
  )
}

export default TodoItem;
