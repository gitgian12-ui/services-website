'use client'
import { motion } from 'framer-motion'

export default function ShimmerEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* Shimmer Layer 1 - Main (NO BLUR) */}
      <motion.div
        className="absolute inset-0"
        style={{ willChange: 'transform, opacity' }}
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ 
          x: ['-100%', '150%'],
          opacity: [0, 0.15, 0.08, 0.15, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
      >
        <div 
          className="w-[40%] h-full opacity-100 dark:opacity-60"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(147, 197, 253, 0.2) 50%, transparent 100%)',
            transform: 'skewX(-15deg) translateZ(0)',
          }}
        />
      </motion.div>

      {/* Shimmer Layer 2 - Delayed (NO BLUR) */}
      <motion.div
        className="absolute inset-0"
        style={{ willChange: 'transform, opacity' }}
        initial={{ x: '-120%', opacity: 0 }}
        animate={{ 
          x: ['-120%', '150%'],
          opacity: [0, 0.12, 0.06, 0.12, 0]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'linear',
          delay: 4,
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
      >
        <div 
          className="w-[35%] h-full opacity-100 dark:opacity-50"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(196, 181, 253, 0.15) 50%, transparent 100%)',
            transform: 'skewX(-20deg) translateZ(0)',
          }}
        />
      </motion.div>

    </div>
  )
}