import { useState } from "react";

function Counter() {
  const [count, setCount] = useState("Friday 31 Oct");

   const increaseCount = () => {
    setCount("Saturday 1 Nov");
  };

  return (
    <div>
        <h3>{count}</h3>
      <h2>Counter Component</h2>
      <button onClick={increaseCount}>Change Date</button>
    </div>
  );
}

export default Counter;
