import { useEffect, useRef } from 'react'

/**
 * Observes elements with className 'aos-elem' inside the ref container
 * and adds 'in-view' when they enter the viewport.
 */
export function useScrollAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const elements = ref.current
      ? ref.current.querySelectorAll('.aos-elem')
      : document.querySelectorAll('.aos-elem')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    elements.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 0.08}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return ref
}
