import { useState } from "react";

function Todo () {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState("");

    const addTodo = () => {
        setTodos([...todos, todoText]);
        setTodoText("");
    }

    const handleInputChange = (e) => {
        setTodoText(e.target.value);
    }

    return (
        <>
        <input id="todo" value={todoText} onChange={handleInputChange}></input>
        <button onClick={addTodo}>Add</button>
        
        {todos.map((todo) => {
            return <h3>{todo}</h3>
        })}
        </>
    )
}

export default Todo