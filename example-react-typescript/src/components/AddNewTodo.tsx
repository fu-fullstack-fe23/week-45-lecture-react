import { FormEvent, useState } from "react";

interface Props {
    addNewTodo : (todoText : string) => void
}

function AddNewTodo({addNewTodo} : Props) {
    const [input, setInput] = useState<string>('');

    // function handleOnChange(e : React.ChangeEvent<HTMLInputElement>) {
    //     setInput(e.target.value)
    // }

    function handleClick(e  : FormEvent) : void {
        e.preventDefault();
        addNewTodo(input);
    }

  return (
    <form>
        <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="New Todo" />
        <button onClick={handleClick}>Add Todo</button>
    </form>
  )
}

export default AddNewTodo
