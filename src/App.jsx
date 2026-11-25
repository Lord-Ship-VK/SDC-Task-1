import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WingsBento from './components/WingsBento'
import Projects from './components/Projects'
import Events from './components/Events'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <Hero />
      <About />
      <WingsBento />
      <Projects />
      <Events />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
