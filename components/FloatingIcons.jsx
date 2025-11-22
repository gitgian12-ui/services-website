'use client'
import { motion } from 'framer-motion'

export default function FloatingIcons() {
  const icons = [
    { emoji: '💻', top: 'top-32', left: 'left-[10%]', size: 'text-5xl', opacity: 'opacity-15 dark:opacity-8', duration: 9, delay: 0 },
    { emoji: '🚀', top: 'top-1/4', left: 'right-[12%]', size: 'text-6xl', opacity: 'opacity-12 dark:opacity-8', duration: 11, delay: 1 },
    { emoji: '⚡', top: 'top-[45%]', left: 'left-[8%]', size: 'text-4xl', opacity: 'opacity-18 dark:opacity-10', duration: 8, delay: 2 },
    { emoji: '💎', top: 'bottom-1/3', left: 'right-[15%]', size: 'text-4xl', opacity: 'opacity-15 dark:opacity-8', duration: 13, delay: 3 },
    { emoji: '✨', top: 'top-[15%]', left: 'left-[25%]', size: 'text-3xl', opacity: 'opacity-18 dark:opacity-10', duration: 12, delay: 4 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: icon.delay
          }}
          className={`absolute ${icon.top} ${icon.left} ${icon.size} ${icon.opacity}`}
          style={{ willChange: 'transform' }}
        >
          {icon.emoji}
        </motion.div>
      ))}
    </div>
  )
}