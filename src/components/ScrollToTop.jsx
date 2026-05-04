import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 520)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`focus-ring fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-500 text-white shadow-lg shadow-teal-900/20 transition duration-300 hover:bg-teal-600 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}

export default ScrollToTop
