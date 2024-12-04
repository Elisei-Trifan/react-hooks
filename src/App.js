/* eslint-disable no-unused-vars */
import Hover from './components/Hover'
import useHover from './hooks/useHover'
import useInput from './hooks/useInput'
import { useRef, useState } from 'react'

function App() {
  const userName = useInput('')
  const password = useInput('')
  const refer = useRef()
  const isHovering2 = useHover(refer)

  return (
    <div className="App">
      <input {...userName} type="text" placeholder="userName"></input>
      <input {...password} type="text" placeholder="password"></input>
      <button onClick={() => console.log(userName.value, password.value)}>
        Click
      </button>
      <hr />
      <Hover />
      <div
        ref={refer}
        style={{
          width: 300,
          height: 300,
          background: isHovering2 ? 'yellow' : 'black',
        }}
      ></div>
    </div>
  )
}

export default App
