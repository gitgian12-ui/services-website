'use client'
import { useEffect, useState } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Cek localStorage saat pertama load
    const savedTheme = localStorage.getItem('theme')
    console.log('Initial theme from localStorage:', savedTheme)
    
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
      console.log('Applied DARK mode on mount')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
      console.log('Applied LIGHT mode on mount')
    }
  }, [])

  const toggleDarkMode = () => {
    console.log('🔄 Toggle clicked! Current isDark:', isDark)
    
    if (isDark) {
      // Pindah ke light mode
      console.log('➡️ Switching to LIGHT mode...')
      setIsDark(false)
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
      console.log('✅ LIGHT mode applied. HTML classes:', document.documentElement.className)
    } else {
      // Pindah ke dark mode
      console.log('➡️ Switching to DARK mode...')
      setIsDark(true)
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
      console.log('✅ DARK mode applied. HTML classes:', document.documentElement.className)
    }
  }

  return { isDark, toggleDarkMode, mounted }
}