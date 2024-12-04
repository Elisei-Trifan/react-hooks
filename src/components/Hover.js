import { useRef } from 'react'

const Hover = () => {
  const referens = useRef()

  return (
    <div ref={referens} style={{ width: 300, height: 300, background: 'red' }}>
      <button onClick={() => console.log(referens.current)}>click</button>
    </div>
  )
}

export default Hover
