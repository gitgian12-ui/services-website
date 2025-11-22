'use client'
import { motion } from 'framer-motion'
import PricingCard from './PricingCard'
import ShimmerEffect from './ShimmerEffect'

export default function ServicesList() {
  const packages = [
    {
      name: 'Paket Starter',
      originalPrice: 450000,
      discountedPrice: 337500,
      discount: 25,
      color: 'blue',
      popular: false,
      features: [
        { text: '3 Halaman (Home, Tentang, Kontak)', included: true },
        { text: 'Maintenance 1 bulan gratis', included: true },
        { text: 'Garansi uang kembali (trial kecil)', included: true },
        { text: 'SEO Basic (indexing)', included: true },
        { text: 'Revisi 2x/tahun', included: true },
      ],
      limitations: [
        'No gallery',
        'No custom layout',
      ],
      estimatedDays: '3-5 hari',
      cta: 'Pilih Starter',
    },
    {
      name: 'Paket Professional',
      originalPrice: 2500000,
      discountedPrice: 1875000,
      discount: 25,
      color: 'purple',
      popular: true,
      features: [
        { text: '5 Halaman (Home, Tentang, Layanan, Galeri, Kontak)', included: true },
        { text: 'Maintenance 3 bulan gratis', included: true },
        { text: 'SEO: meta tags + speed check', included: true },
        { text: 'Revisi 4x/tahun', included: true },
        { text: 'Responsive design', included: true },
      ],
      limitations: [
        'No login/dashboard',
        'No payment gateway',
      ],
      estimatedDays: '5-10 hari',
      cta: 'Pilih Professional',
    },
    {
      name: 'Paket Business',
      originalPrice: 3500000,
      discountedPrice: 2625000,
      discount: 25,
      color: 'pink',
      popular: false,
      features: [
        { text: '7-10 halaman custom', included: true },
        { text: 'Maintenance 6 bulan gratis', included: true },
        { text: 'SEO: advanced (heading, keyword basic)', included: true },
        { text: 'Revisi 6x/tahun', included: true },
        { text: 'Custom animations', included: true },
      ],
      limitations: [
        'Domain premium tidak termasuk',
      ],
      estimatedDays: '10-14 hari',
      cta: 'Pilih Business',
    },
    {
      name: 'Paket Enterprise',
      originalPrice: 4500000,
      discountedPrice: 3375000,
      discount: 25,
      color: 'cyan',
      popular: false,
      features: [
        { text: 'Unlimited halaman custom', included: true },
        { text: 'Maintenance 12 bulan gratis', included: true },
        { text: 'SEO: premium (audit + internasional basic)', included: true },
        { text: 'Revisi 12x/tahun', included: true },
        { text: 'Priority support', included: true },
      ],
      limitations: [
        'Pengerjaan lebih lama',
      ],
      estimatedDays: '14-28 hari',
      cta: 'Pilih Enterprise',
    },
    {
      name: 'Paket Custom',
      originalPrice: 8500000,
      discountedPrice: 6375000,
      discount: 25,
      color: 'gradient',
      popular: false,
      features: [
        { text: 'Full system: login, dashboard, payment gateway', included: true },
        { text: 'API integration', included: true },
        { text: 'Maintenance sampai 24 bulan (nego)', included: true },
        { text: 'Custom features sesuai kebutuhan', included: true },
        { text: 'Dedicated developer', included: true },
      ],
      limitations: [
        'Harga bisa sampai Rp10.000.000 (nego)',
      ],
      estimatedDays: 'Diskusi dulu',
      cta: 'Hubungi Kami',
      isCustom: true,
    },
  ]

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"></div>

        <ShimmerEffect />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Paket <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">Harga</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. <br/>
            <span className="font-bold text-purple-600 dark:text-purple-400">Diskon 25% untuk semua paket!</span>
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PricingCard key={index} package={pkg} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Tidak menemukan paket yang cocok?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Konsultasi Gratis
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>

      </div>
    </div>
  )
}