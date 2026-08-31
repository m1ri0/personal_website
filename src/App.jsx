import { useState, useEffect } from 'react'
import About from './components/about/about.jsx'
import MatrixHero from './components/MatrixHero/MatrixHero.jsx'
import Certificates from './components/Certificates/certificates.jsx'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <section id="center" className="App">
        <MatrixHero />
      </section>

      <section className="content-section">
        <div className="content-wrapper">
          <About />
        </div>
      </section>

      <div 
        className="scroll-gradient-overlay"
        style={{ opacity: Math.min(scrollY / 600, 1) }}
      />
    </>
  )
}

export default App