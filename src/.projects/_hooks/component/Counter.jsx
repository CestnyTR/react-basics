import useCounter from "../hooks/useCounter";
const Counter = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <button onClick={decrement}>-</button>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};
export default Counter;
