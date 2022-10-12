function Counter(props) {
  const { counter, setCounter } = props;

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
