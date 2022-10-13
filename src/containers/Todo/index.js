import { useState, useEffect } from "react";
// import TextField from "../../components/TextField";
// import Button from "../../components/Button";
// import List from "../../components/List";

import { TextField, Box, Typography } from "@mui/material";

import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    console.log("Component renders");
    //API Call
    return () => {
      console.log("Unmounts");
    };
  }, [todoText]);

  const addTodo = () => {
    setTodos([...todos, todoText]);
    setTodoText("");
  };

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleEnter = (e) => {
    if(e.keyCode === 13) {
      addTodo()
    }
  }

  return (
    <>
    <Typography variant="h3" textAlign={"center"}>Todo App</Typography>
      <Box display={"flex"} gap={2} p={2}>
        <TextField
          id="outlined-todo"
          label="What do you want to do today?"
          value={todoText}
          onChange={handleInputChange}
          onKeyDown={handleEnter}
          fullWidth
          size="small"
        />
        {/* <TextField inputText={todoText} setInputText={setTodoText} /> */}

        <Button variant="contained" onClick={addTodo}>
          Add
        </Button>
      </Box>
      {/* <Button clickHandler={addTodo}>Add</Button> */}
      {/* <List listItems={todos} /> */}

      <List>
        {todos.map((todo) => {
          return (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={todo} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default Todo;
