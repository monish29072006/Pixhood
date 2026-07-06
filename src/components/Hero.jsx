import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-video">
        <video autoPlay muted loop playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title animate-fade-up">
          Turning Visions into Visuals.
        </h1>
        <p className="hero-subtitle animate-fade-up delay-1">
          Photography, Videography, Content Creation, and Digital Marketing Solutions.
        </p>
        <div className="hero-buttons animate-fade-up delay-2">
          <button className="btn btn-primary" onClick={() => scrollTo('portfolio')}>
            View Portfolio
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('contact')}>
            Get a Quote
          </button>
        </div>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  )
}

export default Hero
