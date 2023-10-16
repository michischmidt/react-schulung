import { useState } from 'react'
import './App.css'

function App() {
  const [numbers, setNumbers] = useState([0, 1, 2]);
  console.log("TCL -> App -> numbers:", numbers);

  function addByMutating() {
    // changes (mutates) the old state entry
    numbers.push(numbers.length);
    setNumbers(numbers);
  }

  function addByReplacing() {
    // creates a new - derived - state object
    setNumbers([...numbers, numbers.length]);
  }

  return (
    <div>
      <div style={{ marginBottom: "15px", fontSize: "40px" }}>{JSON.stringify(numbers)}</div>
      <button style={{ marginRight: "10px" }} onClick={() => addByMutating()}>add (mutate)</button>
      <button onClick={() => addByReplacing()}>add (replace)</button>
    </div>
  );
}

export default App
