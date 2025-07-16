
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
              className="bg-vermelho-principal hover:bg-red-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className={`w-4 h-4 mr-2 ${scrolled ? 'text-white' : 'text-white'}`} />
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

      {/* Overlay Mobile */}
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setMenuAberto(false)}
          />
        )}
      </AnimatePresence>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-0 right-0 h-full w-1/2 min-w-[280px] bg-white/95 backdrop-blur-md shadow-2xl z-50"
          >
            <div className="h-full flex flex-col">
              {/* Header do Menu */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-vermelho-principal rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MI</span>
                  </div>
                  <div>
                    <h1 className="text-sm font-bold text-cinza-escuro">
                      Mineração Itapeva
                    </h1>
                    <p className="text-xs text-gray-600">
                      Desde 1959
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMenuAberto(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navegação */}
              <nav className="flex-1 px-6 py-4 space-y-2">
                {itensMenu.map((item) => (
                  <button
                    key={item.nome}
                    onClick={() => scrollParaSecao(item.href)}
                    className="block w-full text-left px-4 py-3 text-cinza-escuro hover:text-vermelho-principal hover:bg-gray-50 rounded-lg transition-all duration-200"
                  >
                    {item.nome}
                  </button>
                ))}
              </nav>

              {/* Footer do Menu */}
              <div className="p-6 border-t border-gray-200">
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
