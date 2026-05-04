import { useEffect, useState } from 'react'

const STORAGE_KEY = 'farooq-portfolio-theme'

const getSystemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light'
  return localStorage.getItem(STORAGE_KEY) || getSystemTheme()
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement

    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const syncSystemTheme = () => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(media.matches ? 'dark' : 'light')
      }
    }

    media.addEventListener('change', syncSystemTheme)
    return () => media.removeEventListener('change', syncSystemTheme)
  }, [])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
