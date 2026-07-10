import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/Portfolio.css'

const portfolioItems = [
  { img: '/portfolio/Photo1.jpg', title: 'Moment 1', subtitle: 'Pixhood' },
  { img: '/portfolio/Photo2.jpg', title: 'Moment 2', subtitle: 'Pixhood' },
  { img: '/portfolio/Photo3.jpg', title: 'Moment 3', subtitle: 'Pixhood' },
  { img: '/portfolio/Photo4.jpg', title: 'Moment 4', subtitle: 'Pixhood' },
  { img: '/portfolio/Photo5.jpg', title: 'Moment 5', subtitle: 'Pixhood' },
  { img: '/portfolio/Photo6.jpg', title: 'Moment 6', subtitle: 'Pixhood' },
  { img: '/portfolio/Photo7.jpg', title: 'Moment 7', subtitle: 'Pixhood' },
  { img: '/portfolio/Photo8.jpg', title: 'Moment 8', subtitle: 'Pixhood' },
  { img: '/portfolio/Photo9.jpg', title: 'Moment 9', subtitle: 'Pixhood' },
]

const Portfolio = () => {
  const ref = useScrollAnimation()
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (idx) => {
    setLightbox(idx)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox(null)
    document.body.style.overflow = ''
  }

  const prev = (e) => {
    e.stopPropagation()
    setLightbox((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  const next = (e) => {
    e.stopPropagation()
    setLightbox((prev) => (prev + 1) % portfolioItems.length)
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (lightbox === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') setLightbox((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
      if (e.key === 'ArrowRight') setLightbox((prev) => (prev + 1) % portfolioItems.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox])

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <div className="container-fluid">
        <div className="section-header aos-elem">
          <span className="section-subtitle">Our Work</span>
          <h2 className="section-title">Portfolio Gallery</h2>
          <div className="title-underline"></div>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map(({ img, title, subtitle }, idx) => (
            <div
              className="portfolio-item aos-elem"
              key={idx}
              style={{ transitionDelay: `${(idx % 8) * 0.06}s` }}
              onClick={() => openLightbox(idx)}
            >
              <img src={img} alt={title} loading="lazy" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>{title}</h3>
                  <p>{subtitle}</p>
                  <span className="view-icon"><i className="fas fa-expand"></i></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox rendered via Portal at body level */}
      {lightbox !== null && createPortal(
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <i className="fas fa-times"></i>
          </button>
          <button className="lightbox-prev" onClick={prev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={portfolioItems[lightbox].img} alt={portfolioItems[lightbox].title} />
            <div className="lightbox-caption">
              <h3>{portfolioItems[lightbox].title}</h3>
              <p>{portfolioItems[lightbox].subtitle}</p>
            </div>
          </div>
          <button className="lightbox-next" onClick={next}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="lightbox-counter">
            {lightbox + 1} / {portfolioItems.length}
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}

export default Portfolio
