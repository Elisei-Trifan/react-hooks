/* eslint-disable no-unused-vars */
import Debounce from './components/Debounce'
import Hover from './components/Hover'
import List from './components/List'
import Login from './components/Login'
import Request from './components/Request'
import useDebounce from './hooks/useDebounce'
import { useRef, useState } from 'react'

function App() {
  return (
    <div className="App" style={{ minHeight: '200vh' }}>
      <Login />
      <hr />
      <Hover />
      <hr />
      <List />
      <hr />
      <Debounce />
      <hr />
      <Request />
    </div>
  )
}

export default App
