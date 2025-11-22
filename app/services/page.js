import ServicesList from '@/components/ServicesList'

export const metadata = {
  title: 'Paket Harga - Website Services',
  description: 'Pilih paket pembuatan website yang sesuai dengan kebutuhan bisnis Anda. Diskon 25% untuk semua paket!',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] transition-colors duration-700">
      <ServicesList />
    </div>
  )
}