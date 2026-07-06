import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/VideoShowcase.css'

const videos = [
  { img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800', title: 'Cinematic Wedding Film' },
  { img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800', title: 'Corporate Brand Story' },
  { img: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?w=800', title: 'Product Commercial' },
]

const VideoShowcase = () => {
  const ref = useScrollAnimation()

  return (
    <section className="video-showcase" ref={ref}>
      <div className="container">
        <div className="section-header aos-elem">
          <span className="section-subtitle">Motion Picture</span>
          <h2 className="section-title">Video Showcase</h2>
          <div className="title-underline"></div>
        </div>
        <div className="video-grid">
          {videos.map(({ img, title }) => (
            <div className="video-item aos-elem" key={title}>
              <div className="video-thumbnail">
                <img src={img} alt={title} loading="lazy" />
                <div className="play-button">
                  <i className="fas fa-play"></i>
                </div>
              </div>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase
