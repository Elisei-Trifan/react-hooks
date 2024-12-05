/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

const useHover = (ref) => {
  const [isHovering, setIsHovering] = useState(false)

  function on() {
    setIsHovering(true)
  }
  function off() {
    setIsHovering(false)
  }

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const node = ref.current
    node.addEventListener('mouseenter', on)
    node.addEventListener('mouseleave', off)

    return function () {
      node.removeEventListener('mouseenter', on)
      node.removeEventListener('mouseleave', off)
    }
  }, [])

  return isHovering
}

export default useHover
