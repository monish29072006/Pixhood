import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/Portfolio.css'

const portfolioItems = [
  { img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600', title: 'Elegant Wedding', subtitle: 'Chennai', category: 'weddings' },
  { img: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600', title: 'Romantic Moments', subtitle: 'Destination Wedding', category: 'weddings' },
  { img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600', title: 'Birthday Celebration', subtitle: 'Family Function', category: 'events' },
  { img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600', title: 'Product Showcase', subtitle: 'E-commerce', category: 'products' },
  { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600', title: 'Corporate Summit', subtitle: 'Chennai Tech Park', category: 'corporate' },
  { img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600', title: 'Fashion Portfolio', subtitle: 'Model Shoot', category: 'creative' },
  { img: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=600', title: 'Luxury Products', subtitle: 'Studio Shoot', category: 'products' },
  { img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600', title: 'Traditional Wedding', subtitle: 'South Indian Style', category: 'weddings' },
]

const filters = ['all', 'weddings', 'events', 'products', 'corporate', 'creative']

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const ref = useScrollAnimation()

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <div className="container-fluid">
        <div className="section-header aos-elem">
          <span className="section-subtitle">Our Work</span>
          <h2 className="section-title">Portfolio Gallery</h2>
          <div className="title-underline"></div>
        </div>
        <div className="portfolio-filter">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filteredItems.map(({ img, title, subtitle }, idx) => (
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
