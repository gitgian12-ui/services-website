import ContactContent from '@/components/ContactContent'

export const metadata = {
  title: 'Kontak Kami - Website Services',
  description: 'Hubungi kami untuk konsultasi gratis pembuatan website profesional untuk bisnis Anda.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] transition-colors duration-700">
      <ContactContent />
    </div>
  )
}