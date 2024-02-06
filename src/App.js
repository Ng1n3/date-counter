import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const date = new Date("feb 6 2024");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((currCount) => currCount - 1)}>
          -
        </button>
        <span>step: {step}</span>
        <button onClick={() => setStep((currCount) => currCount + 1)}>
          +
        </button>
      </div>
      <div>
        <button onClick={() => setCount((currCount) => currCount - step)}>
          -
        </button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((currCount) => currCount + step)}>
          +
        </button>
      </div>

      <p>{date.toDateString()}</p>
    </div>
  );
}
