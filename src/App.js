import { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);
  let [step, setStep] = useState(0);
  const date = new Date("feb 6 2024");
  date.setDate(date.getDate() + count);

  function handleInputChange(e) {
    setStep(e.target.value);
  }

  function handleReset() {
    setStep(0);
    setCount(0);
  }

  return (
    <div>
      <div>
        <input
          onChange={handleInputChange}
          value={step}
          type="range"
          min="0"
          max="10"
        />
        <span>{step}</span>
        {/* <button onClick={() => setStep((currCount) => currCount - 1)}>-</button> */}
        {/* <button onClick={() => setStep((currCount) => currCount + 1)}>+</button> */}
      </div>
      <div>
        <button onClick={() => setCount((currCount) => currCount - step)}>
          -
        </button>
        <input
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button
          onClick={() => setCount((currCount) => currCount + Number(step))}
        >
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        {date.toDateString()}
      </p>

      {count !== 0 || step !== 0 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
