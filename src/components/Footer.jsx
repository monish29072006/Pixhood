import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/pixhood-logo.png" alt="Pixhood" className="footer-logo-img" />
            </div>
            <p>Chennai's premier creative media and digital marketing company, dedicated to visual storytelling excellence.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {['about', 'services', 'portfolio', 'testimonials'].map(link => (
                <li key={link}>
                  <a href={`#${link}`} onClick={(e) => { e.preventDefault(); scrollTo(link) }}>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Wedding Photography</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Corporate Events</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Product Photography</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Digital Marketing</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <div className="footer-social">
              {[
                { icon: 'fa-instagram', label: 'Instagram', href: 'https://www.instagram.com/pixhood_?igsh=MTR5NXg1OWk1bDQ3bg==' },
                { icon: 'fa-linkedin-in', label: 'LinkedIn', href: '#' },
              ].map(({ icon, label, href }) => (
                <a href={href} aria-label={label} key={label} target="_blank" rel="noopener noreferrer"><i className={`fab ${icon}`}></i></a>
              ))}
            </div>
            <p>pixhood26@gmail.com<br />+91 95000 34743</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Pixhood. All Rights Reserved. | Designed with <i className="fas fa-heart"></i> in Chennai</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
