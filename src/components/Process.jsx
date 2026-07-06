import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/Process.css'

const steps = [
  { number: '01', icon: 'fa-comments', title: 'Consultation', desc: 'Understanding your vision, requirements, and expectations through a detailed discussion.' },
  { number: '02', icon: 'fa-map-marked-alt', title: 'Planning', desc: 'Crafting a detailed shot list, timeline, and creative strategy tailored to your project.' },
  { number: '03', icon: 'fa-camera-retro', title: 'Shoot Day', desc: 'Professional execution with our expert crew, state-of-the-art equipment, and artistic direction.' },
  { number: '04', icon: 'fa-magic', title: 'Editing', desc: 'Meticulous post-production, color grading, and retouching to achieve cinematic perfection.' },
  { number: '05', icon: 'fa-cloud-download-alt', title: 'Final Delivery', desc: 'Timely delivery of your beautifully edited content in high-resolution digital formats.' },
]

const Process = () => {
  const ref = useScrollAnimation()

  return (
    <section className="process" ref={ref}>
      <div className="container">
        <div className="section-header aos-elem">
          <span className="section-subtitle">How We Work</span>
          <h2 className="section-title">Our Process</h2>
          <div className="title-underline"></div>
        </div>
        <div className="process-steps">
          {steps.map(({ number, icon, title, desc }, idx) => (
            <React.Fragment key={title}>
              <div className="process-step aos-elem">
                <div className="step-number">{number}</div>
                <div className="step-icon"><i className={`fas ${icon}`}></i></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="step-arrow"><i className="fas fa-arrow-right"></i></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
