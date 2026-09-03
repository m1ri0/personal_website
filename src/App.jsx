import { useState, useEffect } from 'react'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import MatrixHero from './components/matrix/matrix.jsx'
import ProjectsShowcase from './components/projects/projects.jsx';
import Certificates from './components/certificates/certificates.jsx';
// import Stacks from './components/stacks/stacks.jsx';
import Footer from './components/footer/footer.jsx'
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
          <Contact />
        </div>
      </section>
      <Footer />

      <div 
        className="scroll-gradient-overlay"
        style={{ opacity: Math.min(scrollY / 600, 1) }}
      />
    </>
  )
}

export default App