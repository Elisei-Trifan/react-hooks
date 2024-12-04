import { useRef } from 'react'
import useHover from '../hooks/useHover'

const Hover = () => {
  const referens = useRef()
  const isHovering = useHover(referens)

  return (
    <div
      ref={referens}
      style={{
        width: 300,
        height: 300,
        background: isHovering ? 'red' : 'green',
      }}
    ></div>
  )
}

export default Hover
