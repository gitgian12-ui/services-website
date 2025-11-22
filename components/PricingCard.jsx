"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  generateWhatsAppLink,
  generateCustomWhatsAppLink,
} from "@/lib/whatsappHelper";

export default function PricingCard({ package: pkg, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    pink: "from-pink-500 to-pink-600",
    cyan: "from-cyan-500 to-cyan-600",
    gradient: "from-blue-600 via-purple-600 to-pink-600",
  };

  const borderClasses = {
    blue: "border-blue-500/30 hover:border-blue-500/60",
    purple: "border-purple-500/30 hover:border-purple-500/60",
    pink: "border-pink-500/30 hover:border-pink-500/60",
    cyan: "border-cyan-500/30 hover:border-cyan-500/60",
    gradient: "border-purple-500/30 hover:border-purple-500/60",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-2 ${
        borderClasses[pkg.color]
      } rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${
        pkg.popular ? "lg:scale-105" : ""
      }`}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg">
            ⭐ PALING POPULER
          </span>
        </div>
      )}

      {/* Package Name */}
      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
        {pkg.name}
      </h3>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-gray-500 dark:text-gray-400 line-through text-lg">
            Rp{pkg.originalPrice.toLocaleString("id-ID")}
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold rounded-full">
            -{pkg.discount}%
          </span>
        </div>
        <div
          className={`text-4xl font-black bg-gradient-to-r ${
            colorClasses[pkg.color]
          } bg-clip-text text-transparent`}
        >
          Rp{pkg.discountedPrice.toLocaleString("id-ID")}
        </div>
      </div>

      {/* Estimated Time */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700/50 rounded-full mb-6">
        <svg
          className="w-4 h-4 text-gray-600 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {pkg.estimatedDays}
        </span>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-6">
        {pkg.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {/* Limitations */}
      {pkg.limitations.length > 0 && (
        <div className="mb-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800/30">
          <p className="text-xs font-bold text-orange-700 dark:text-orange-400 mb-2">
            ⚠️ Kekurangan:
          </p>
          <ul className="space-y-1">
            {pkg.limitations.map((limitation, i) => (
              <li
                key={i}
                className="text-xs text-orange-600 dark:text-orange-300"
              >
                • {limitation}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Button */}
      <motion.a
        href={
          pkg.isCustom
            ? generateCustomWhatsAppLink()
            : generateWhatsAppLink(pkg)
        }
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          const link = pkg.isCustom
            ? generateCustomWhatsAppLink()
            : generateWhatsAppLink(pkg);
          console.log("WhatsApp Link:", link); // Debug di console
          console.log("Decoded:", decodeURIComponent(link)); // Lihat pesan asli
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`block w-full py-4 rounded-xl font-bold text-white text-center bg-gradient-to-r ${
          colorClasses[pkg.color]
        } shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
      >
        <span className="flex items-center justify-center gap-2">
          {pkg.cta}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
      </motion.a>
    </motion.div>
  );
}
