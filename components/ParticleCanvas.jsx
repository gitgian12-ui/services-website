'use client'
import { useEffect, useRef } from 'react'

export default function ParticleCanvas({ isDark }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true, // Better performance
      willReadFrequently: false
    })
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 25 // Reduced to 25 (from 40)

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5 // Smaller particles
        this.speedX = Math.random() * 0.2 - 0.1 // Slower
        this.speedY = Math.random() * 0.2 - 0.1
        this.opacity = Math.random() * 0.4 + 0.2 // Less opacity
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = isDark 
          ? `rgba(147, 197, 253, ${this.opacity})` 
          : `rgba(99, 102, 241, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    let lastTime = 0
    const fps = 24 // Reduced to 24fps (cinema frame rate)
    const interval = 1000 / fps

    function animate(currentTime) {
      requestAnimationFrame(animate)

      const deltaTime = currentTime - lastTime
      if (deltaTime < interval) return

      lastTime = currentTime - (deltaTime % interval)

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Batch drawing for performance
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })
    }

    animate(0)

    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }, 250) // Debounce resize
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
    }
  }, [isDark])

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        willChange: 'transform',
        transform: 'translateZ(0)' // Force GPU
      }}
    />
  )
}