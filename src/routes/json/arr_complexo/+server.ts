import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	const obj = [
		{
			id: 1,
			nome: 'João Silva',
			email: 'joao.silva@example.com',
			idade: 28,
			ativo: true,
			endereco: {
				rua: 'Rua das Flores',
				numero: 123,
				cidade: 'São Paulo',
				estado: 'SP',
				cep: '01000-000'
			},
			telefones: [
				{ tipo: 'celular', numero: '+55 11 91234-5678' },
				{ tipo: 'residencial', numero: '+55 11 4002-8922' }
			],
			preferencias: {
				linguagem: 'pt-BR',
				tema: 'escuro',
				notificacoes: { email: true, sms: false, push: true }
			},
			historico_compras: [
				{
					id_pedido: 1001,
					data: '2025-09-20',
					valor: 199.9,
					itens: [
						{ produto: 'Teclado Mecânico', quantidade: 1 },
						{ produto: 'Mouse Gamer', quantidade: 1 }
					]
				}
			]
		},
		{
			id: 2,
			nome: 'Maria Souza',
			email: 'maria.souza@example.com',
			idade: 32,
			ativo: false,
			endereco: {
				rua: 'Av. Paulista',
				numero: 900,
				cidade: 'São Paulo',
				estado: 'SP',
				cep: '01310-000'
			},
			telefones: [{ tipo: 'celular', numero: '+55 11 98888-7777' }],
			preferencias: {
				linguagem: 'en-US',
				tema: 'claro',
				notificacoes: { email: true, sms: true, push: false }
			},
			historico_compras: [
				{
					id_pedido: 2001,
					data: '2025-08-15',
					valor: 349.5,
					itens: [{ produto: 'Notebook', quantidade: 1 }]
				}
			]
		},
		{
			id: 3,
			nome: 'Carlos Oliveira',
			email: 'carlos.oliveira@example.com',
			idade: 25,
			ativo: true,
			endereco: {
				rua: 'Rua do Comércio',
				numero: 45,
				cidade: 'Rio de Janeiro',
				estado: 'RJ',
				cep: '20000-000'
			},
			telefones: [{ tipo: 'celular', numero: '+55 21 97777-6666' }],
			preferencias: {
				linguagem: 'pt-BR',
				tema: 'escuro',
				notificacoes: { email: false, sms: false, push: true }
			},
			historico_compras: [
				{
					id_pedido: 3001,
					data: '2025-09-01',
					valor: 59.9,
					itens: [{ produto: 'Fone Bluetooth', quantidade: 1 }]
				},
				{
					id_pedido: 3002,
					data: '2025-09-10',
					valor: 120.0,
					itens: [{ produto: 'Cadeira Gamer', quantidade: 1 }]
				}
			]
		}
	];
	return json(obj);
}
