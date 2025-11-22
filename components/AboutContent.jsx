"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CountUpAnimation from "./CountUpAnimation";

export const dynamic = "force-static";

export default function AboutContent() {
  const skills = [
    { name: "Next.js", level: 85, icon: "⚛️" },
    { name: "React", level: 80, icon: "⚛️" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "JavaScript", level: 75, icon: "💛" },
    { name: "UI/UX Design", level: 70, icon: "✨" },
    { name: "SEO Optimization", level: 65, icon: "🔍" },
  ];

  const journey = [
    {
      year: "2023",
      title: "Mulai Belajar Web Development",
      description:
        "Memulai perjalanan coding dari dasar HTML, CSS, dan JavaScript",
    },
    {
      year: "2024",
      title: "Menguasai React & Next.js",
      description:
        "Belajar framework modern dan mulai mengerjakan project client pertama",
    },
    {
      year: "2025",
      title: "Website Services Launch",
      description:
        "Membangun bisnis pembuatan website profesional untuk UMKM & startup",
    },
  ];

  const values = [
    {
      icon: "💡",
      title: "Inovasi",
      description:
        "Selalu menggunakan teknologi terkini dan trend design modern",
    },
    {
      icon: "⚡",
      title: "Kecepatan",
      description: "Pengerjaan cepat tanpa mengorbankan kualitas hasil",
    },
    {
      icon: "🤝",
      title: "Kolaborasi",
      description: "Komunikasi terbuka dan feedback yang konstruktif",
    },
    {
      icon: "🎯",
      title: "Fokus pada Hasil",
      description:
        "Website yang tidak hanya cantik, tapi juga menghasilkan konversi",
    },
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Tentang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Saya
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Developer muda yang passionate dalam menciptakan website modern
            untuk mengakselerasi bisnis digital Anda
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center overflow-hidden">
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <img src="/about-photo.jpg" alt="Gian-Developer Muda" />
                {/* <Image
                  src="/about-photo.jpg" // path file di folder /public
                  alt="Gian Christo Yuhendi — Developer"
                  fill // mengisi parent .relative .aspect-square
                  className="object-cover object-center"
                  priority // muat lebih cepat (opsional)
                /> */}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🎓</div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    Siswa SMP
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Kelas 8
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">
              Halo! Saya Developer Muda 👋
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Nama saya{" "}
                <strong className="text-gray-900 dark:text-white">
                  Gian Christo Yuhendi
                </strong>
                , seorang siswa SMP kelas 8 yang memiliki passion besar dalam
                dunia web development dan teknologi.
              </p>
              <p>
                Meskipun masih muda, saya sudah mengerjakan berbagai project
                website untuk klien dari berbagai industri. Saya percaya bahwa{" "}
                <strong className="text-purple-600 dark:text-purple-400">
                  usia bukan penghalang untuk menciptakan karya berkualitas
                </strong>
                .
              </p>
              <p>
                Dengan kombinasi kreativitas muda dan dedikasi tinggi, saya siap
                membantu bisnis Anda berkembang melalui website yang modern,
                responsif, dan SEO-friendly.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
                  <CountUpAnimation end={150} suffix="+" duration={2} />
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Projects
                </div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                <div className="text-2xl font-black text-purple-600 dark:text-purple-400">
                  <CountUpAnimation end={100} suffix="%" duration={2} />
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Satisfaction
                </div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                <div className="text-2xl font-black text-pink-600 dark:text-pink-400">
                  <CountUpAnimation end={2} suffix="+" duration={2} />
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Years Exp
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black text-gray-900 dark:text-white text-center mb-12">
            Keahlian & Skills 🛠️
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                    <CountUpAnimation
                      end={skill.level}
                      suffix="%"
                      duration={2}
                    />
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black text-gray-900 dark:text-white text-center mb-12">
            Perjalanan Saya 🚀
          </h2>
          <div className="space-y-8">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg">
                  {item.year}
                </div>
                <div className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black text-gray-900 dark:text-white text-center mb-12">
            Nilai-Nilai Kami 💎
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Siap Memulai Project Bersama? 🚀
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Mari wujudkan website impian Anda bersama kami!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Lihat Paket Harga
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Hubungi Kami
              <svg
                className="w-5 h-5"
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
