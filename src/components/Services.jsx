import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/Services.css'

const services = [
  { icon: 'fa-ring', title: 'Wedding Photography & Videography', desc: 'Cinematic coverage of your most special day, capturing every emotion and moment with artistry and care.' },
  { icon: 'fa-users', title: 'Family Functions & Celebrations', desc: "From birthdays to engagements, we document your family's joyful milestones with warmth and creativity." },
  { icon: 'fa-briefcase', title: 'Corporate Events', desc: 'Professional coverage of conferences, product launches, and corporate gatherings that elevate your brand image.' },
  { icon: 'fa-camera', title: 'Product Photography', desc: 'Studio-quality product shots that showcase your offerings in the most compelling and commercial light.' },
  { icon: 'fa-film', title: 'Promotional Shoots', desc: 'Brand-aligned promotional content that drives engagement and communicates your unique value proposition.' },
  { icon: 'fa-person', title: 'Model & Portfolio Shoots', desc: 'High-fashion model photography and professional portfolio shoots tailored to launch or elevate careers.' },
  { icon: 'fa-mobile-alt', title: 'Social Media Content Creation', desc: 'Scroll-stopping content designed specifically for Instagram, Facebook, YouTube, and all digital platforms.' },
  { icon: 'fa-chart-line', title: 'Digital Marketing', desc: 'SEO, social media marketing, paid campaigns, and brand strategy solutions to grow your digital presence.' },
]

const Services = () => {
  const ref = useScrollAnimation()

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className="section-header aos-elem">
          <span className="section-subtitle">What We Offer</span>
          <h2 className="section-title">Our Services</h2>
          <div className="title-underline"></div>
        </div>
        <div className="services-grid">
          {services.map(({ icon, title, desc }) => (
            <div className="service-card aos-elem" key={title}>
              <div className="service-icon"><i className={`fas ${icon}`}></i></div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="service-hover">
                <button className="service-cta" onClick={scrollToContact}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
