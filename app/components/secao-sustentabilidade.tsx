
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Leaf, Recycle, Shield, Users, Target, Globe } from 'lucide-react'

export default function SecaoSustentabilidade() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const iniciativas = [
    {
      icon: Leaf,
      titulo: 'Impacto Ambiental Reduzido',
      descricao: 'Produção com tecnologias que minimizam o impacto ambiental',
      cor: 'text-green-500',
      detalhes: [
        'Tecnologias de baixo impacto',
        'Monitoramento ambiental',
        'Práticas sustentáveis',
        'Referência no setor'
      ]
    },
    {
      icon: Recycle,
      titulo: 'Recuperação de Áreas',
      descricao: 'Compromisso com a recuperação das áreas mineradas',
      cor: 'text-blue-500',
      detalhes: [
        'Plano de recuperação',
        'Revegetação nativa',
        'Monitoramento pós-lavra',
        'Responsabilidade ambiental'
      ]
    },
    {
      icon: Shield,
      titulo: 'Práticas Ecológicas',
      descricao: 'Medidas que servem como referência para outros empreendedores',
      cor: 'text-purple-500',
      detalhes: [
        'Certificações ambientais',
        'Controle de qualidade',
        'Educação ambiental',
        'Inovação sustentável'
      ]
    },
    {
      icon: Users,
      titulo: 'Responsabilidade Social',
      descricao: 'Geração de empregos e apoio à comunidade local',
      cor: 'text-orange-500',
      detalhes: [
        '100+ empregos diretos',
        '400+ empregos indiretos',
        'Apoio a ONGs',
        'Desenvolvimento local'
      ]
    },
    {
      icon: Target,
      titulo: 'Objetivos Sustentáveis',
      descricao: 'Alinhamento com os Objetivos de Desenvolvimento Sustentável',
      cor: 'text-red-500',
      detalhes: [
        'ODS 8: Trabalho decente',
        'ODS 9: Indústria e inovação',
        'ODS 15: Vida terrestre',
        'ODS 17: Parcerias'
      ]
    },
    {
      icon: Globe,
      titulo: 'Consciência Ambiental',
      descricao: 'Consciência clara da responsabilidade ambiental',
      cor: 'text-indigo-500',
      detalhes: [
        'Políticas ambientais',
        'Treinamento de equipes',
        'Auditoria interna',
        'Melhoria contínua'
      ]
    }
  ]

  return (
    <section id="sustentabilidade" className="py-20 bg-branco-gelo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cinza-escuro mb-6">
            Sustentabilidade
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compromisso com a produção responsável e o desenvolvimento sustentável
          </p>
        </motion.div>

        {/* Seção principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-cinza-escuro mb-6">
              Compromisso Ambiental
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A Mineração Itapeva tem como prioridade a produção com reduzido impacto 
              ambiental, adotando tecnologias que minimizam os efeitos da mineração e 
              servem como referência para outros empreendedores do setor.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Nossa filosofia baseia-se em práticas ecologicamente corretas, 
              com consciência clara da responsabilidade ambiental em todas as 
              operações de mineração.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="font-semibold text-cinza-escuro mb-4">
                Nossos Pilares
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Tecnologia de baixo impacto</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Recuperação de áreas mineradas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Responsabilidade social</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Inovação sustentável</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://www.wfpa.org/wp-content/uploads/2020/01/Sustainable-Forestry-Carbon-Cycle.jpg"
                alt="Práticas sustentáveis na mineração"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Cards de iniciativas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {iniciativas.map((iniciativa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-center justify-center mb-4">
                <iniciativa.icon className={`w-10 h-10 ${iniciativa.cor}`} />
              </div>
              <h4 className="text-xl font-semibold text-cinza-escuro mb-3 text-center">
                {iniciativa.titulo}
              </h4>
              <p className="text-gray-600 text-center mb-4">
                {iniciativa.descricao}
              </p>
              <div className="space-y-2">
                {iniciativa.detalhes.map((detalhe, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-600">
                    <div className={`w-2 h-2 rounded-full mr-2 ${iniciativa.cor.replace('text-', 'bg-')}`}></div>
                    {detalhe}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seção de responsabilidade social */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-cinza-escuro rounded-xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Responsabilidade Social
            </h3>
            <p className="text-gray-300 text-lg">
              "Com o trabalho, dignificamos o Homem"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-vermelho-principal mb-2">
                500+
              </div>
              <p className="text-gray-300">Empregos Gerados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vermelho-principal mb-2">
                5+
              </div>
              <p className="text-gray-300">Organizações Apoiadas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vermelho-principal mb-2">
                1
              </div>
              <p className="text-gray-300">Hospital Madrinha</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-300 text-lg">
              Apoiamos APAE, ACDC, creches, igrejas, Fundação Orsa e Hospital Amaral Carvalho
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
