
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const dados = await request.json()
    
    const novoContato = await prisma.contatos_formulario.create({
      data: {
        nome: dados.nome,
        email: dados.email,
        telefone: dados.telefone || null,
        empresa: dados.empresa || null,
        mensagem: dados.mensagem,
      },
    })

    return NextResponse.json(
      { 
        sucesso: true, 
        mensagem: 'Contato salvo com sucesso!',
        id: novoContato.id 
      }, 
      { status: 201 }
    )
  } catch (error) {
    console.error('Erro ao salvar contato:', error)
    return NextResponse.json(
      { 
        sucesso: false, 
        mensagem: 'Erro interno do servidor' 
      }, 
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const contatos = await prisma.contatos_formulario.findMany({
      orderBy: { criado_em: 'desc' },
      take: 10,
    })

    return NextResponse.json(contatos)
  } catch (error) {
    console.error('Erro ao buscar contatos:', error)
    return NextResponse.json(
      { 
        sucesso: false, 
        mensagem: 'Erro interno do servidor' 
      }, 
      { status: 500 }
    )
  }
}
