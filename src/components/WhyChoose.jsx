import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/WhyChoose.css'

const features = [
  { icon: 'fa-palette', title: 'Creative Excellence', desc: 'Award-winning creative team with artistic vision and technical mastery.' },
  { icon: 'fa-user-tie', title: 'Professional Team', desc: 'Experienced professionals dedicated to delivering exceptional results.' },
  { icon: 'fa-gem', title: 'High-Quality Editing', desc: 'State-of-the-art post-production and color grading for premium output.' },
  { icon: 'fa-clock', title: 'Timely Delivery', desc: 'Committed to meeting deadlines without compromising on quality.' },
  { icon: 'fa-box-open', title: 'Customized Packages', desc: 'Flexible pricing and tailored solutions to fit your specific needs and budget.' },
  { icon: 'fa-shield-alt', title: 'Trusted by 500+ Clients', desc: 'Proven track record of delivering excellence across Chennai and beyond.' },
]

const WhyChoose = () => {
  const ref = useScrollAnimation()

  return (
    <section className="why-choose" ref={ref}>
      <div className="container">
        <div className="section-header aos-elem">
          <span className="section-subtitle">What Sets Us Apart</span>
          <h2 className="section-title">Why Choose Pixhood</h2>
          <div className="title-underline"></div>
        </div>
        <div className="features-grid">
          {features.map(({ icon, title, desc }) => (
            <div className="feature-card aos-elem" key={title}>
              <div className="feature-icon"><i className={`fas ${icon}`}></i></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
