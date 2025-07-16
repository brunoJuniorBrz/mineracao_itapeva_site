
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Award, Calendar, Users } from 'lucide-react'
import { Button } from './ui/button'
import { useState, useEffect } from 'react'

export default function SecaoHero() {
  const [numeroAnimado, setNumeroAnimado] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0
      const target = 300
      const increment = target / 100
      
      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          setNumeroAnimado(target)
          clearInterval(interval)
        } else {
          setNumeroAnimado(Math.floor(current))
        }
      }, 20)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const scrollParaContato = () => {
    const elemento = document.querySelector('#contato')
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background com overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://www.cpaaustralia.com.au/-/media/project/cpa/intheblack/images/magazine-2022/09-september/open-cut-mine-bulga.jpg?h=720&iar=0&w=1280&rev=ae56c55307914c2a8bc65300af9147c7&hash=97B1F69A17BF707865A376CACA8DF45C')`
        }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Mineração Itapeva
          </h1>
          <div className="relative z-30 mb-6">
            <span className="block text-2xl md:text-4xl text-yellow-400 font-bold drop-shadow-lg">
              Maior produtora de filito do Brasil
            </span>
          </div>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
            Desde 1959, produzindo com excelência e sustentabilidade
          </p>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold animate-count-up">
              {numeroAnimado}k
            </div>
            <p className="text-gray-300">Toneladas/Ano</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-3xl font-bold">65+</div>
            <p className="text-gray-300">Anos de História</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-3xl font-bold">500+</div>
            <p className="text-gray-300">Empregos Gerados</p>
          </div>
        </motion.div>

        {/* Botão CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            onClick={scrollParaContato}
            size="lg"
            className="bg-vermelho-principal hover:bg-red-700 text-white text-lg px-8 py-6 shadow-xl"
          >
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>

      {/* Seta para rolar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
