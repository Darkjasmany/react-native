import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  // Custom Hooks
  const { count, increaseBy } = useCounter();
  return (
    <>
      <h3 className=" text-2xl mb-5">
        Contador: <small className="font-bold">{count}</small>
      </h3>

      <div>
        <button
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-800 transition-colors"
          onClick={() => increaseBy(1)}
        >
          +1
        </button>
        <button
          className="p-2 bg-red-500 rounded-xl w-10 mx-2 text-white hover:bg-red-800 transition-colors"
          onClick={() => increaseBy(-1)}
        >
          -1
        </button>
      </div>
    </>
  );
};

export default Counter;
