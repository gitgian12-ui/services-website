"use client";
import Link from "next/link";
import { motion, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AnimatedGradientText from "./AnimatedGradientText";
import CountUpAnimation from "./CountUpAnimation";

export default function HeroContent({ mouseX, mouseY }) {
  return (
    <section className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40">
      <div className="text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="inline-flex items-center gap-3 px-6 py-3 mb-12 backdrop-blur-xl bg-gradient-to-r from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 border border-purple-200/50 dark:border-purple-500/30 rounded-full shadow-xl shadow-purple-500/10 dark:shadow-purple-500/20"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-lg shadow-emerald-500/50"></span>
          </span>

          <AnimatedGradientText className="font-medium text-gray-900 dark:text-white">
            AVAIBLE FOR A NEW PROJECT
          </AnimatedGradientText>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            <span className="block text-gray-900 dark:text-white mb-3">
              Build Your
            </span>
            <span className="block">
              <TypeAnimation
                sequence={[
                  "Dream Website",
                  2500,
                  "Digital Empire",
                  2500,
                  "Online Business",
                  2500,
                  "Brand Identity",
                  2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ display: "inline-block" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 drop-shadow-lg"
              />
            </span>
            <span className="block text-gray-900 dark:text-white mt-3">
              With Us
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-14 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Transformasi digital untuk bisnis modern. Website{" "}
          <AnimatedGradientText className="font-semibold">
            profesional, responsif, dan SEO-optimized
          </AnimatedGradientText>{" "}
          dengan teknologi terkini.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
        >
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/50 hover:scale-105 transition-all duration-500"
          >
            <span className="relative z-10">Explore Packages</span>
            <motion.svg
              className="w-5 h-5 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
          </Link>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-10 py-5 backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-2 border-gray-300/50 dark:border-gray-600/50 text-gray-900 dark:text-white font-bold text-lg rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <span className="relative z-10">Get in Touch</span>
            <svg
              className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Trust Badges - Modern AI Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: "🚀", end: 150, suffix: "+", label: "Projects" },
            { icon: "⭐", end: 5.0, decimals: 1, label: "Rating" },
            { icon: "⚡", start: 3, end: 5, label: "Days Delivery" },
            { icon: "💎", end: 100, suffix: "%", label: "Satisfaction" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                {item.start ? (
                  // For range (3-5)
                  <>
                    <CountUpAnimation end={item.start} duration={1.5} />
                    -
                    <CountUpAnimation end={item.end} duration={2} />
                  </>
                ) : (
                  // For single number
                  <CountUpAnimation
                    end={item.end}
                    suffix={item.suffix || ""}
                    decimals={item.decimals || 0}
                    duration={2}
                  />
                )}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
