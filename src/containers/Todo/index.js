import { useState, useEffect } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import List from "../../components/List";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    console.log("Component renders")
    //API Call
    return () => {
      console.log("Unmounts")
    }
  }, [todoText]);

  const addTodo = () => {
    setTodos([...todos, todoText]);
    setTodoText("");
  };

  return (
    <>
      <TextField inputText={todoText} setInputText={setTodoText} />
      <Button clickHandler={addTodo} label={"Add"} />
      <List listItems={todos} />
    </>
  );
}

export default Todo;
