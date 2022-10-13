import Counter from "./components/Counter";
import Todo from "./containers/Todo";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      {/* <Counter counter={counter} setCounter={setCounter} /> */}
      <Todo />
    </>
  );
}


export default App;
