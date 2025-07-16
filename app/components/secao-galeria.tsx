
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Eye, Download, ZoomIn } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'

interface ImagemGaleria {
  id: string
  titulo: string
  descricao: string
  imagem_url: string
  categoria: string
}

export default function SecaoGaleria() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [imagens, setImagens] = useState<ImagemGaleria[]>([])
  const [carregando, setCarregando] = useState(true)
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas')
  const [imagemSelecionada, setImagemSelecionada] = useState<ImagemGaleria | null>(null)

  useEffect(() => {
    const buscarImagens = async () => {
      try {
        const response = await fetch('/api/galeria')
        if (response.ok) {
          const dados = await response.json()
          setImagens(dados)
        }
      } catch (error) {
        console.error('Erro ao buscar imagens:', error)
      } finally {
        setCarregando(false)
      }
    }

    buscarImagens()
  }, [])

  const categorias = ['Todas', ...new Set(imagens.map(img => img.categoria))]
  
  const imagensFiltradas = categoriaFiltro === 'Todas' 
    ? imagens 
    : imagens.filter(img => img.categoria === categoriaFiltro)

  return (
    <section id="galeria" className="py-20 bg-cinza-claro scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cinza-escuro mb-6">
            Galeria de Imagens
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossas operações, equipamentos e instalações
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categorias.map((categoria) => (
            <Button
              key={categoria}
              variant={categoriaFiltro === categoria ? 'default' : 'outline'}
              onClick={() => setCategoriaFiltro(categoria)}
              className={`${
                categoriaFiltro === categoria 
                  ? 'bg-vermelho-principal hover:bg-red-700' 
                  : 'border-vermelho-principal text-vermelho-principal hover:bg-vermelho-principal hover:text-white'
              }`}
            >
              {categoria}
            </Button>
          ))}
        </motion.div>

        {carregando ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vermelho-principal mx-auto"></div>
            <p className="mt-4 text-gray-600">Carregando galeria...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {imagensFiltradas.map((imagem, index) => (
              <motion.div
                key={imagem.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg card-hover"
              >
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img
                    src={imagem.imagem_url}
                    alt={imagem.titulo}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <Button
                      onClick={() => setImagemSelecionada(imagem)}
                      size="sm"
                      className="bg-white text-cinza-escuro hover:bg-gray-100"
                    >
                      <ZoomIn className="w-4 h-4 mr-2" />
                      Visualizar
                    </Button>
                  </div>
                </div>

                {/* Informações */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-cinza-escuro mb-2">
                    {imagem.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {imagem.descricao}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {imagem.categoria}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setImagemSelecionada(imagem)}
                      className="border-vermelho-principal text-vermelho-principal hover:bg-vermelho-principal hover:text-white"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Modal de visualização */}
        {imagemSelecionada && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-cinza-escuro">
                    {imagemSelecionada.titulo}
                  </h3>
                  <Button
                    onClick={() => setImagemSelecionada(null)}
                    variant="outline"
                    size="sm"
                  >
                    ✕
                  </Button>
                </div>
                <div className="aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img
                    src={imagemSelecionada.imagem_url}
                    alt={imagemSelecionada.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  {imagemSelecionada.descricao}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                    {imagemSelecionada.categoria}
                  </span>
                  <Button className="bg-vermelho-principal hover:bg-red-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
