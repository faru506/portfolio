import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { useActiveSection } from './hooks/useActiveSection'
import { useTheme } from './hooks/useTheme'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

function App() {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(sectionIds)

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300">
      <Navbar activeSection={activeSection} theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
