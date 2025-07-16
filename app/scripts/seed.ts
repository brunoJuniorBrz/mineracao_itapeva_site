
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function popularBancoDados() {
  console.log('Iniciando população do banco de dados...')

  // Limpar dados existentes
  await prisma.galeria_imagens.deleteMany({})
  await prisma.produtos.deleteMany({})
  await prisma.noticias.deleteMany({})

  // Produtos
  const produtos = await prisma.produtos.createMany({
    data: [
      {
        nome: 'Filito',
        descricao: 'Rocha metamórfica de granulação fina, maior produção do Brasil com 300.000 toneladas anuais',
        categoria: 'Mineração',
        especificacoes: 'Umidade ≤10%, Resíduo natural ≤80%, Expansão de prensagem ≤1,3%',
        imagem_url: 'https://thumbs.dreamstime.com/b/quarry-mining-aerial-view-excavator-machine-quarrying-rock-industrial-transportation-drone-truck-quarry-mining-280374783.jpg',
        ativo: true
      },
      {
        nome: 'Ligamil',
        descricao: 'Plastificante para argamassa, substitui cal e outros plastificantes no preparo',
        categoria: 'Construção',
        especificacoes: 'Teor de Ar: 8%, Densidade: 1,96%, Retenção de Água: 87%',
        imagem_url: 'https://i.ytimg.com/vi/lGNgUGb6qdI/maxresdefault.jpg',
        ativo: true
      }
    ]
  })

  // Notícias
  const noticias = await prisma.noticias.createMany({
    data: [
      {
        titulo: 'Mineração Itapeva: 65 Anos de História e Inovação',
        resumo: 'Desde 1959, a Mineração Itapeva se consolidou como a maior produtora de filito do Brasil',
        conteudo: 'A Mineração Itapeva celebra 65 anos de tradição e excelência no setor de mineração. Fundada em 1959 como Takeyuti Ykeuti, a empresa evoluiu para se tornar a Mineração Itapeva em 1971, consolidando-se como líder nacional na produção de filito com 300.000 toneladas anuais.',
        imagem_url: 'https://i.ytimg.com/vi/MdooGxLgeRw/maxresdefault.jpg',
        publicado: true
      },
      {
        titulo: 'Compromisso com a Sustentabilidade Ambiental',
        resumo: 'Práticas sustentáveis e responsabilidade ambiental são pilares da nossa operação',
        conteudo: 'A Mineração Itapeva mantém o compromisso com a produção de baixo impacto ambiental, implementando tecnologias que minimizam os efeitos da mineração e servem como referência para o setor.',
        imagem_url: 'https://img.freepik.com/premium-photo/quotadvanced-technology-sustainable-practices-responsible-resource-extraction-innovative-minequot-concept-advanced-technology-sustainable-practices-resource-extraction-innovative-mine_864588-191627.jpg?w=2000',
        publicado: true
      },
      {
        titulo: 'Responsabilidade Social: Gerando Empregos e Apoiando a Comunidade',
        resumo: 'Mais de 500 empregos diretos e indiretos gerados, além de parcerias com ONGs',
        conteudo: 'A empresa gera aproximadamente 100 empregos diretos e mais de 400 indiretos, mantendo parcerias com APAE, ACDC, creches, igrejas e a Fundação Orsa, demonstrando seu compromisso social.',
        imagem_url: 'https://i.ytimg.com/vi/N84cPUNnDZU/maxresdefault.jpg',
        publicado: true
      }
    ]
  })

  // Galeria de imagens
  const galeria = await prisma.galeria_imagens.createMany({
    data: [
      {
        titulo: 'Operação de Mineração a Céu Aberto',
        descricao: 'Vista aérea da operação de extração de filito',
        imagem_url: 'https://thumbs.dreamstime.com/b/open-pit-mining-iron-ore-quarry-large-industrial-excavators-heavy-machinery-loading-dump-truck-224428920.jpg',
        categoria: 'Operações',
        ordem: 1
      },
      {
        titulo: 'Equipamentos de Alta Tecnologia',
        descricao: 'Tratores de esteira e equipamentos modernos',
        imagem_url: 'https://i.ytimg.com/vi/SzFK6tjkA1Q/maxresdefault.jpg',
        categoria: 'Equipamentos',
        ordem: 2
      },
      {
        titulo: 'Produto Filito Beneficiado',
        descricao: 'Filito após processo de beneficiamento',
        imagem_url: 'https://www.neviraminerals.com/images/sliders/masterslider/nevira%20slider%204.jpg',
        categoria: 'Produtos',
        ordem: 3
      },
      {
        titulo: 'Laboratório de Controle de Qualidade',
        descricao: 'Análises químicas e físicas dos produtos',
        imagem_url: 'https://i.ytimg.com/vi/t3-HPVPzWeY/maxresdefault.jpg',
        categoria: 'Qualidade',
        ordem: 4
      },
      {
        titulo: 'Unidade de Britagem e Peneiramento',
        descricao: 'Processamento com capacidade de 200 ton/hora',
        imagem_url: 'https://i.ytimg.com/vi/5VMakwAyxZM/maxresdefault.jpg',
        categoria: 'Processamento',
        ordem: 5
      },
      {
        titulo: 'Área de Armazenamento',
        descricao: 'Estoque de produtos prontos para expedição',
        imagem_url: 'https://www.build-review.com/wp-content/uploads/2021/03/Warehouse.jpg',
        categoria: 'Logística',
        ordem: 6
      }
    ]
  })

  console.log('Banco de dados populado com sucesso!')
  console.log(`Produtos criados: ${produtos.count}`)
  console.log(`Notícias criadas: ${noticias.count}`)
  console.log(`Imagens da galeria criadas: ${galeria.count}`)
}

popularBancoDados()
  .catch((e) => {
    console.error('Erro ao popular banco de dados:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
