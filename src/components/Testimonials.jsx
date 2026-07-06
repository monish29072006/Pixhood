import React, { useState, useEffect, useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/Testimonials.css'

const testimonials = [
  {
    quote: 'Pixhood captured our wedding day beyond our imagination. Every frame tells a story — pure magic. We still get emotional watching the video!',
    name: 'Priya & Arjun',
    role: 'Wedding Clients, Chennai',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
  {
    quote: "Our product photography campaign saw 3x engagement after Pixhood's shoot. Their eye for detail and brand understanding is remarkable.",
    name: 'Rahul Sharma',
    role: 'CEO, StyleCraft India',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
  },
  {
    quote: 'Professional, punctual, and incredibly talented. Our corporate event was documented flawlessly. Highly recommend Pixhood for any business event.',
    name: 'Kavitha Menon',
    role: 'HR Director, TechVision Corp',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
  {
    quote: 'My portfolio shoot with Pixhood opened doors to major brand collaborations. The team understood my vision perfectly and delivered stunning results.',
    name: 'Sneha Krishnan',
    role: 'Fashion Model',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [perView, setPerView] = useState(3)
  const autoRef = useRef(null)
  const ref = useScrollAnimation()

  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth <= 768) setPerView(1)
      else if (window.innerWidth <= 1024) setPerView(2)
      else setPerView(3)
    }
    updatePerView()
    window.addEventListener('resize', updatePerView)
    return () => window.removeEventListener('resize', updatePerView)
  }, [])

  const total = Math.ceil(testimonials.length / perView)

  const go = (idx) => setCurrent(Math.max(0, Math.min(idx, total - 1)))
  const next = () => setCurrent((c) => (c >= total - 1 ? 0 : c + 1))
  const prev = () => setCurrent((c) => (c <= 0 ? total - 1 : c - 1))

  // Auto-play
  useEffect(() => {
    autoRef.current = setInterval(next, 5000)
    return () => clearInterval(autoRef.current)
  }, [total])

  const offset = current * (100 / perView) * perView

  return (
    <section className="testimonials" id="testimonials" ref={ref}>
      <div className="container">
        <div className="section-header aos-elem">
          <span className="section-subtitle">Client Love</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="title-underline"></div>
        </div>
        <div
          className="testimonials-slider"
          onMouseEnter={() => clearInterval(autoRef.current)}
          onMouseLeave={() => { autoRef.current = setInterval(next, 5000) }}
        >
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${offset}%)` }}
          >
            {testimonials.map(({ quote, name, role, img }, idx) => (
              <div
                className="testimonial-card"
                key={idx}
                style={{ minWidth: `calc(${100 / perView}% - 1.5rem)` }}
              >
                <div className="stars">
                  {[...Array(5)].map((_, i) => <i className="fas fa-star" key={i}></i>)}
                </div>
                <p>"{quote}"</p>
                <div className="client-info">
                  <img src={img} alt={name} loading="lazy" />
                  <div>
                    <h4>{name}</h4>
                    <span>{role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-controls">
            <button className="slider-btn" onClick={prev} aria-label="Previous">
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="slider-dots">
              {[...Array(total)].map((_, i) => (
                <span key={i} className={`slider-dot ${i === current ? 'active' : ''}`} onClick={() => go(i)} />
              ))}
            </div>
            <button className="slider-btn" onClick={next} aria-label="Next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
