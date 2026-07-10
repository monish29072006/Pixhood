import React from 'react'
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
            <div className="portfolio-item aos-elem" key={idx} style={{ transitionDelay: `${(idx % 8) * 0.06}s` }}>
              <img src={img} alt={title} loading="lazy" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>{title}</h3>
                  <p>{subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
