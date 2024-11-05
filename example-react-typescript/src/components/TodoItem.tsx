import { TodoType } from "../types/types";

interface Props {
    todo : TodoType
}

function TodoItem({todo} : Props) {
  return (
    <li>{todo.todo}</li>
  )
}

export default TodoItem;
