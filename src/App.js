/* eslint-disable no-unused-vars */
import Hover from './components/Hover'
import List from './components/List'
import useDebounce from './hooks/useDebounce'
import useHover from './hooks/useHover'
import useInput from './hooks/useInput'
import { useRef, useState } from 'react'

function App() {
  const userName = useInput('')
  const password = useInput('')
  const [value, setValue] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?_query=` + query)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
      })
  }

  function handleChange(e) {
    setValue(e.target.value)
    debouncedSearch(e.target.value)
  }

  return (
    <div className="App" style={{ minHeight: '200vh' }}>
      <input {...userName} type="text" placeholder="userName"></input>
      <input {...password} type="text" placeholder="password"></input>
      <button onClick={() => console.log(userName.value, password.value)}>
        Click
      </button>
      <hr />
      <Hover />
      <hr />
      <List />
      <hr />
      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}

export default App
