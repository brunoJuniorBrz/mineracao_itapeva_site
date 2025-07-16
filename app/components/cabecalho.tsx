
'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion'

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const itensMenu = [
    { nome: 'Início', href: '#inicio' },
    { nome: 'Sobre', href: '#sobre' },
    { nome: 'Produtos', href: '#produtos' },
    { nome: 'Sustentabilidade', href: '#sustentabilidade' },
    { nome: 'Notícias', href: '#noticias' },
    { nome: 'Galeria', href: '#galeria' },
    { nome: 'Contato', href: '#contato' }
  ]

  const scrollParaSecao = (href: string) => {
    const elemento = document.querySelector(href)
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' })
      setMenuAberto(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-vermelho-principal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MI</span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-xl font-bold ${scrolled ? 'text-cinza-escuro' : 'text-white'}`}>
                  Mineração Itapeva
                </h1>
                <p className={`text-sm ${scrolled ? 'text-gray-600' : 'text-gray-300'}`}>
                  Desde 1959
                </p>
              </div>
            </motion.div>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            {itensMenu.map((item) => (
              <button
                key={item.nome}
                onClick={() => scrollParaSecao(item.href)}
                className={`text-sm font-medium transition-colors hover:text-vermelho-principal ${
                  scrolled ? 'text-cinza-escuro' : 'text-white'
                }`}
              >
                {item.nome}
              </button>
            ))}
          </nav>

          {/* Botão de Contato */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={() => scrollParaSecao('#contato')}
              className="bg-vermelho-principal hover:bg-red-700 text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contato
            </Button>
          </div>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-cinza-escuro' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-cinza-escuro' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {itensMenu.map((item) => (
                <button
                  key={item.nome}
                  onClick={() => scrollParaSecao(item.href)}
                  className="block w-full text-left text-cinza-escuro hover:text-vermelho-principal transition-colors"
                >
                  {item.nome}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  onClick={() => scrollParaSecao('#contato')}
                  className="w-full bg-vermelho-principal hover:bg-red-700 text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contato
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
