import useInput from './hooks/useInput'

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
    </div>
  )
}

export default App
