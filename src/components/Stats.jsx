import React, { useEffect, useRef, useState } from 'react'
import '../styles/Stats.css'

const statsData = [
  { target: 500, label: 'Happy Clients' },
  { target: 1200, label: 'Projects Completed' },
  { target: 3, label: 'Years Experience' },
]

const Stats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0))
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true)
          statsData.forEach((stat, idx) => {
            const duration = 2000
            const start = performance.now()
            const step = (now) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCounts((prev) => {
                const newCounts = [...prev]
                newCounts[idx] = Math.floor(eased * stat.target)
                return newCounts
              })
              if (progress < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
          })
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [animated])

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, idx) => (
            <div className="stat-item" key={idx}>
              <h3>{counts[idx]}</h3>
              <span>+</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
