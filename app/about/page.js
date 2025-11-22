import AboutContent from '@/components/AboutContent'

export const metadata = {
  title: 'Tentang Kami - Website Services',
  description: 'Kenalan dengan developer muda yang passionate dalam membuat website modern dan profesional untuk bisnis Anda.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] transition-colors duration-700">
      <AboutContent />
    </div>
  )
}