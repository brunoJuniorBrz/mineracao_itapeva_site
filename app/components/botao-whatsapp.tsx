
'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BotaoWhatsApp() {
  const numeroWhatsApp = '5515999999999' // Número fictício para protótipo
  const mensagemPadrao = encodeURIComponent('Olá! Gostaria de saber mais sobre os produtos da Mineração Itapeva.')

  const abrirWhatsApp = () => {
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemPadrao}`
    window.open(url, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={abrirWhatsApp}
        className="whatsapp-float bg-green-500 hover:bg-green-600 text-white shadow-lg"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </motion.div>
  )
}
