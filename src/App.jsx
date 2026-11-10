import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Wings from './components/Wings'
import Projects from './components/Projects'
import Events from './components/Events'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    )

    const animatedElements = document.querySelectorAll('.section-animate')
    animatedElements.forEach((el) => {
      observer.observe(el)
    })

    // If navigated directly via hash (e.g. #contact), ensure target section is visible immediately
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash)
      if (target) {
        const animated = target.querySelector('.section-animate') || (target.classList.contains('section-animate') ? target : null)
        if (animated) animated.classList.add('visible')
      }
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-android-bg grid-pattern">
      <Navbar />
      <Hero />
      <About />
      <Wings />
      <Projects />
      <Events />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
