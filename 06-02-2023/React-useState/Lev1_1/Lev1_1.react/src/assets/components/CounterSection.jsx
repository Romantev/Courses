import { useState } from "react";
import "./CounterSection.css";

const CounterSection = () => {
  const [number, setNumber] = useState(0);
  return (
    <section>
      <h1>Counter {number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <button onClick={() => setNumber(number - number)}>Reset</button>
    </section>
  );
};

export default CounterSection;
