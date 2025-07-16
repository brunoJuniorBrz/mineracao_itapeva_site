
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'

export default function SecaoContato() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  })

  const [enviando, setEnviando] = useState(false)
  const [sucesso, setSucesso] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formulario),
      })

      if (response.ok) {
        setSucesso(true)
        setFormulario({
          nome: '',
          email: '',
          telefone: '',
          empresa: '',
          mensagem: ''
        })
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    } finally {
      setEnviando(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const informacoesContato = [
    {
      icon: Phone,
      titulo: 'Telefone',
      info: '+55 (15) 3521-9550',
      extra: '0800 770 45 49',
      cor: 'text-green-500'
    },
    {
      icon: Mail,
      titulo: 'E-mail',
      info: 'contato@mineracaoitapeva.com.br',
      extra: 'comercial@mineracaoitapeva.com.br',
      cor: 'text-blue-500'
    },
    {
      icon: MapPin,
      titulo: 'Endereço',
      info: 'Estrada Municipal Luis José Sguario, Km 5',
      extra: 'Bairro do Rosário - Itapeva/SP',
      cor: 'text-purple-500'
    },
    {
      icon: Clock,
      titulo: 'Horário',
      info: 'Segunda a Sexta: 8h às 18h',
      extra: 'Sábado: 8h às 12h',
      cor: 'text-orange-500'
    }
  ]

  return (
    <section id="contato" className="py-20 bg-branco-gelo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cinza-escuro mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades com qualidade e agilidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-cinza-escuro mb-6">
              Solicite um Orçamento
            </h3>
            
            {sucesso ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-green-600 mb-2">
                  Mensagem Enviada!
                </h4>
                <p className="text-gray-600">
                  Obrigado pelo contato. Retornaremos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formulario.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vermelho-principal focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formulario.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vermelho-principal focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formulario.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vermelho-principal focus:border-transparent"
                      placeholder="(15) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formulario.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vermelho-principal focus:border-transparent"
                      placeholder="Sua empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formulario.mensagem}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vermelho-principal focus:border-transparent"
                    placeholder="Conte-nos sobre sua necessidade..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={enviando}
                  className="w-full bg-vermelho-principal hover:bg-red-700 text-white py-3 text-lg"
                >
                  {enviando ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-cinza-escuro mb-6">
              Informações de Contato
            </h3>
            
            {informacoesContato.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center`}>
                  <info.icon className={`w-6 h-6 ${info.cor}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-cinza-escuro mb-1">
                    {info.titulo}
                  </h4>
                  <p className="text-gray-600">{info.info}</p>
                  {info.extra && (
                    <p className="text-gray-500 text-sm">{info.extra}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Mapa */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold text-cinza-escuro mb-4">
                Nossa Localização
              </h4>
              <div className="aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4!2d-48.8765!3d-23.9876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU5JzE1LjQiUyA0OMKwNTInMzUuNCJX!5e0!3m2!1spt-BR!2sbr!4v1642123456789!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Mineração Itapeva"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
