import React from 'react'
import useInput from '../hooks/useInput'

const Login = () => {
  const userName = useInput('')
  const password = useInput('')
  return (
    <>
      <input {...userName} type="text" placeholder="userName"></input>
      <input {...password} type="text" placeholder="password"></input>
      <button onClick={() => console.log(userName.value, password.value)}>
        Click
      </button>
    </>
  )
}

export default Login
