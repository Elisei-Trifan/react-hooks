import { useEffect, useRef } from 'react'

const useScroll = (refParent, refChild, callback) => {
  const observer = useRef(null)

  useEffect(() => {
    const options = {
      root: refParent.current,
      rootMargin: '0px',
      threshold: 0,
    }

    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log('intersect')
        callback()
      }
    }, options)

    observer.current.observe(refChild.current)

    return function () {
      observer.current.unobserve(refChild.current)
    }
  }, [callback])
}

export default useScroll
