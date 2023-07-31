import { useState } from 'react'
import './App.css'

function App() {
  const [numbers, setNumbers] = useState([0, 1, 2]);

  function addByReplacing() {
    // creates a new - derived - state object
    setNumbers([...numbers, numbers.length]);
  }

  function addByMutating() {
    // changes (mutates) the old state entry
    numbers.push(numbers.length);
    setNumbers(numbers);
  }

  return (
    <div>
      <div style={{ marginBottom: "15px" }}>{JSON.stringify(numbers)}</div>
      <button onClick={() => addByReplacing()}>add (replace)</button>
      <button onClick={() => addByMutating()}>add (mutate)</button>
    </div>
  );
}

export default App
