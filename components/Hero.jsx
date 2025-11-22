'use client'
import { motion } from 'framer-motion'
import { useDarkMode } from '@/lib/useDarkMode'
import ParticleCanvas from './ParticleCanvas'
import FloatingIcons from './FloatingIcons'
import HeroContent from './HeroContent'
import ShimmerEffect from './ShimmerEffect'

export default function Hero() {
  const { isDark } = useDarkMode()

  return (
    <div className="min-h-screen relative overflow-hidden bg-white dark:bg-[#0a0a0f] transition-colors duration-700">
      
      <ParticleCanvas isDark={isDark} />
      
      <ShimmerEffect />

      {/* Mouse Glow - MINIMAL (hanya 1, opacity rendah) */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10 opacity-20 dark:opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(147,197,253,0.3) 0%, transparent 70%)',
          top: '20%',
          right: '10%',
          filter: 'blur(60px)',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
      />

      <FloatingIcons />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>
      
      {/* 3D Orbs - NO PARALLAX, SIMPLIFIED */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
        }}
        transition={{ 
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/25 to-purple-600/25 dark:from-blue-500/15 dark:to-purple-700/15 rounded-full blur-3xl pointer-events-none"
        style={{ willChange: 'transform' }}
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute top-1/4 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/25 to-pink-600/25 dark:from-purple-500/15 dark:to-pink-700/15 rounded-full blur-3xl pointer-events-none"
        style={{ willChange: 'transform' }}
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
        className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/25 to-blue-600/25 dark:from-cyan-500/15 dark:to-blue-700/15 rounded-full blur-3xl pointer-events-none"
        style={{ willChange: 'transform' }}
      />

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.08]"></div>
      
      <HeroContent />

    </div>
  )
}