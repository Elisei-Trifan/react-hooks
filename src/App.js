/* eslint-disable no-unused-vars */
import Hover from './components/Hover'
import List from './components/List'
import useHover from './hooks/useHover'
import useInput from './hooks/useInput'
import { useRef, useState } from 'react'

function App() {
  const userName = useInput('')
  const password = useInput('')

  return (
    <div className="App">
      <input {...userName} type="text" placeholder="userName"></input>
      <input {...password} type="text" placeholder="password"></input>
      <button onClick={() => console.log(userName.value, password.value)}>
        Click
      </button>
      <hr />
      <Hover />
      <hr />
      <List />
    </div>
  )
}

export default App
