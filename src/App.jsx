import { useState, useEffect } from 'react'
import About from './components/about/about.jsx'
//import Projects from './components/projects/projects.jsx'
import Contact from './components/contact/contact.jsx'
import MatrixHero from './components/MatrixHero/MatrixHero.jsx'
import ProjectsShowcase from './components/projects/ProjectShowcase.jsx';
//import ProjectsConstellation from './components/projects/ProjectsConstellation.jsx';
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
          <ProjectsShowcase />
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