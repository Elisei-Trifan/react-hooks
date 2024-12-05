import React, { useState } from 'react'
import useRequest from '../hooks/useRequest'
import axios from 'axios'

const Request = () => {
  const [todos, loading, error] = useRequest(fetchTodos)

  function fetchTodos(query) {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
  }

  if (loading) {
    return <p>Идет загрузка...</p>
  }

  if (error) {
    return <h1>Проиошла ошибка при загрузке данных</h1>
  }

  return (
    <div>
      {todos &&
        todos.map((item, ind) => (
          <div
            key={`${item.id}-${ind}`}
            style={{ padding: 30, border: '1px solid black' }}
          >
            {item.id}. {item.title}
          </div>
        ))}
    </div>
  )
}

export default Request
