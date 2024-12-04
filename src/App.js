import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" value={value} onChange={handleChange}></input>
      <button onClick={() => console.log(value)}> Click </button>
    </div>
  )
}

export default App
