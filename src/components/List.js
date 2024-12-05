/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import useScroll from '../hooks/useScroll'

const List = () => {
  const [todo, setTodo] = useState([])
  const [page, setPage] = useState(1)
  const limit = 20
  const refParent = useRef()
  const refChild = useRef()
  const intersected = useScroll(refParent, refChild, () =>
    fetchTodos(page, limit)
  )

  function fetchTodos(page, limit) {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodo((prev) => [...prev, ...json])
        setPage((prev) => prev + 1)
      })
  }

  //   useEffect(() => {
  //     fetchTodos(page, limit)
  //   }, [page])

  return (
    <div ref={refParent} style={{ height: '80vh', overflow: 'auto' }}>
      {/* <button onClick={() => setPage(page - 1)}> Назад</button>
        <p style={{ display: 'inline' }}> {page} </p>
        <button onClick={() => setPage(page + 1)}> Вперед </button> */}

      {todo.map((item, ind) => (
        <div
          key={`${item.id}-${ind}`}
          style={{ padding: 30, border: '1px solid black' }}
        >
          {item.id}. {item.title}
        </div>
      ))}
      <div ref={refChild} style={{ borderTop: '1px dashed red' }}></div>
    </div>
  )
}

export default List
