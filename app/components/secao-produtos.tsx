
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Package, Zap, Construction, CheckCircle } from 'lucide-react'
import { Button } from './ui/button'

export default function SecaoProdutos() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const produtos = [
    {
      nome: 'Filito',
      categoria: 'Produto Principal',
      descricao: 'Rocha metamórfica de granulação fina, maior produção do Brasil',
      imagem: 'https://images.pexels.com/photos/30176533/pexels-photo-30176533/free-photo-of-closeup-of-textured-metamorphic-rock-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      aplicacoes: [
        'Indústria Cerâmica',
        'Construção Civil',
        'Agropecuária',
        'Materiais Sintéticos'
      ],
      caracteristicas: [
        'Umidade ≤ 10%',
        'Boa homogeneidade',
        'Baixa higroscopia',
        'Sinterização a baixa temperatura'
      ],
      icon: Package,
      cor: 'text-blue-500'
    },
    {
      nome: 'Ligamil',
      categoria: 'Plastificante',
      descricao: 'Plastificante para argamassa, substitui cal no preparo',
      imagem: 'https://www.mesquitao.com.br/wp-content/uploads/2022/09/96613824-5dcb-46d5-9744-dbace6a99f4d__989129.jpg',
      aplicacoes: [
        'Grandes Construtoras',
        'Argamassas Prontas',
        'Massa de Assentamento',
        'Revestimentos'
      ],
      caracteristicas: [
        'Teor de Ar: 8%',
        'Densidade: 1,96%',
        'Retenção de Água: 87%',
        'pH neutro'
      ],
      icon: Construction,
      cor: 'text-green-500'
    }
  ]

  const especificacoesTecnicas = [
    {
      propriedade: 'Umidade',
      filito: '≤ 10%',
      ligamil: 'Controlada'
    },
    {
      propriedade: 'Resíduo Natural',
      filito: '≤ 80%',
      ligamil: 'Beneficiado'
    },
    {
      propriedade: 'Densidade',
      filito: 'Variável',
      ligamil: '1,96%'
    },
    {
      propriedade: 'Retenção de Água',
      filito: 'Natural',
      ligamil: '87%'
    }
  ]

  return (
    <section id="produtos" className="py-20 bg-cinza-claro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cinza-escuro mb-6">
            Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Filito e Ligamil de alta qualidade para indústria cerâmica e construção civil
          </p>
        </motion.div>

        {/* Produtos principais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {produtos.map((produto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover h-full flex flex-col"
            >
              <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                <img
                  src={produto.imagem}
                  alt={`Produto ${produto.nome}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center mb-4">
                  <produto.icon className={`w-8 h-8 ${produto.cor} mr-3`} />
                  <div>
                    <h3 className="text-2xl font-bold text-cinza-escuro">
                      {produto.nome}
                    </h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">
                      {produto.categoria}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {produto.descricao}
                </p>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6 flex-1">
                  <div>
                    <h4 className="font-semibold text-cinza-escuro mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Aplicações:
                    </h4>
                    <ul className="space-y-2">
                      {produto.aplicacoes.map((aplicacao, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-vermelho-principal rounded-full mr-3 flex-shrink-0"></div>
                          {aplicacao}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cinza-escuro mb-3 flex items-center">
                      <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                      Características:
                    </h4>
                    <ul className="space-y-2">
                      {produto.caracteristicas.map((caracteristica, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-vermelho-principal rounded-full mr-3 flex-shrink-0"></div>
                          {caracteristica}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button className="w-full bg-vermelho-principal hover:bg-red-700 text-white transition-all duration-300 hover:shadow-lg">
                  Solicitar Informações
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabela de especificações técnicas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-cinza-escuro mb-6 text-center">
            Especificações Técnicas
          </h3>
          <div className="overflow-x-auto">
            <table className="tabela-especificacoes">
              <thead>
                <tr>
                  <th>Propriedade</th>
                  <th>Filito</th>
                  <th>Ligamil</th>
                </tr>
              </thead>
              <tbody>
                {especificacoesTecnicas.map((spec, index) => (
                  <tr key={index}>
                    <td className="font-medium">{spec.propriedade}</td>
                    <td>{spec.filito}</td>
                    <td>{spec.ligamil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
