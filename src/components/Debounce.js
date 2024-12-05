import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce'

const Debounce = () => {
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

  return <input type="text" value={value} onChange={handleChange} />
}

export default Debounce
