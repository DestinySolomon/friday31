import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <>
      <h2>Greet Component</h2>

      <form action="">
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
          <button type="submit" onClick={handleSubmit}>
            Greet
          </button>
        </label>
        {greeting && <p>{greeting}</p>}
      </form>
    </>
  );
}

export default Form;
