import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <Increase  setCount={setCount} />
      <Decrease  setCount={setCount} />
    </div>
  )
}
function Increase({setCount}) {
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
    </div>
  )
}

function Decrease({setCount}) {
  return (
    <div>
      <button onClick={() => setCount(c => c -1)}>Decrease</button>
    </div>
  )
}

export default App
