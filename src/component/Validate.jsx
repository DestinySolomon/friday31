import { useState } from "react";

function Validate() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2>Validate Component</h2>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>This is a validation message.</p>}
    </div>
  );
}


export default Validate;