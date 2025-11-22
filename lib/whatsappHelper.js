import { WHATSAPP_NUMBER } from './constants'

export function generateWhatsAppLink(packageData) {
  const { name, discountedPrice, features, estimatedDays } = packageData
  
  // Format harga
  const formattedPrice = `Rp${discountedPrice.toLocaleString('id-ID')}`
  
  // Buat daftar fitur (maksimal 5 fitur pertama)
  const featureList = features
    .slice(0, 5)
    .map(f => `- ${f.text}`)
    .join('\n')
  
  // Template pesan
  const message = `Halo! Saya tertarik dengan *${name}* 🚀

💰 Harga: ${formattedPrice}

📋 Fitur yang saya dapat:
${featureList}

⏱️ Estimasi pengerjaan: ${estimatedDays}

Mohon info lebih lanjut. Terima kasih! 😊`

  // Encode pesan untuk URL
  const encodedMessage = encodeURIComponent(message)
  
  // Return WhatsApp link
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}

// Alternative: Untuk paket custom
export function generateCustomWhatsAppLink() {
  const message = `Halo! Saya ingin konsultasi untuk *Paket Custom* 💎

Saya membutuhkan website dengan fitur khusus. Bisakah kita diskusi lebih lanjut?

Terima kasih! 😊`

  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}