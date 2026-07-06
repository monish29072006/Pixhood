import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/About.css'

const About = () => {
  const ref = useScrollAnimation()

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="section-header aos-elem">
          <span className="section-subtitle">Who We Are</span>
          <h2 className="section-title">About Pixhood</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro aos-elem">
              Based in the heart of Chennai, Pixhood is a premier creative media and digital marketing
              company that transforms ordinary moments into extraordinary memories and brands into powerful stories.
            </p>
            <div className="about-details">
              {[
                {
                  icon: 'fa-bullseye',
                  title: 'Our Mission',
                  text: 'To deliver unparalleled creative excellence through innovative photography, videography, and digital marketing solutions that exceed client expectations.',
                },
                {
                  icon: 'fa-eye',
                  title: 'Our Vision',
                  text: "To be the most trusted and sought-after creative agency, known for our cinematic approach and commitment to storytelling excellence.",
                },
                {
                  icon: 'fa-heart',
                  title: 'Our Approach',
                  text: 'We believe every moment tells a story. Through our creative lens, we capture emotions, create connections, and build brands that resonate with audiences.',
                },
              ].map(({ icon, title, text }) => (
                <div className="about-block aos-elem" key={title}>
                  <h3>
                    <i className={`fas ${icon}`}></i> {title}
                  </h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image aos-elem">
            <div className="image-wrapper">
              <img
                src="/about-photo.jpg"
                alt="Pixhood Team"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
