import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import VideoShowcase from './components/VideoShowcase'
import WhyChoose from './components/WhyChoose'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollTop from './components/ScrollTop'

function App() {
  return (
    <>
      <header role="banner">
        <Navbar />
      </header>
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <VideoShowcase />
        <WhyChoose />
        <Stats />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <footer role="contentinfo">
        <Footer />
      </footer>
      <FloatingWhatsApp />
      <ScrollTop />
    </>
  )
}

export default App
