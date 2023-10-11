import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  //updates the 'setInput" state variable whenever the input field value changes
  function handleInputChange(event) {
    setInput(event.target.value);
  }

  //adds todo item to the array when the button is clicked
  function handleSubmit() {
    setTodos([...todos, input]);
    setInput("");
  }

  return (
    <>
      <header>
        <h1>Todo Input</h1>
      </header>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="New Todo"
          value={input}
          onChange={handleInputChange}
        ></input>
        <button onClick={handleSubmit}>Add new task</button>
        <p></p>
      </div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, id) => (
          <li key={id}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
