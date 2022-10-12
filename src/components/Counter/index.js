import {useEffect} from 'react';

function Counter(props) {
  const { counter, setCounter } = props;

  //Runs first time and everytime component re renders
  // useEffect(() => {
  //   console.log("Component renders")
  // })

  //Runs only first time when component mounts
  // useEffect(() => {
  //   console.log("Component renders")
  // }, [])

  // useEffect(() => {
  //   console.log("Component renders")
  // }, [counter]);

  const handleCounterUp = () => {
    setCounter((prev) => prev + 1);
  };

  const handleCounterDown = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <button onClick={handleCounterUp}>Increment</button>
      <h2>{counter}</h2>
      <button onClick={handleCounterDown}>Decrement</button>
    </>
  );
}

export default Counter;
