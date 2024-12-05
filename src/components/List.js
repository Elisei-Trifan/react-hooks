/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const List = () => {
  const [todo, setTodo] = useState([])
  return (
    <div>
      {todo.map((item) => (
        <div style={{ padding: 30, border: '1px solid black' }}>
          {todo.title}
        </div>
      ))}
    </div>
  )
}

export default List
