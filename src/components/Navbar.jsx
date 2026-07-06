import React, { useState, useEffect } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)

      // Update active link based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact']
      const scrollPos = window.scrollY + 120

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveLink(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (section) => {
    setMobileMenuOpen(false)
    setActiveLink(section)
    document.body.style.overflow = ''

    const element = document.getElementById(section)
    if (element) {
      const navbarHeight = 80
      const targetTop = element.offsetTop - navbarHeight
      window.scrollTo({ top: targetTop, behavior: 'smooth' })
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : ''
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <img src="/pixhood-logo.png" alt="Pixhood" className="logo-img" />
        </div>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'].map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={`nav-link ${activeLink === link ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link)
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
