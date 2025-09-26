import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	const obj = {
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
			{
				tipo: 'celular',
				numero: '+55 11 91234-5678'
			},
			{
				tipo: 'residencial',
				numero: '+55 11 4002-8922'
			}
		],
		preferencias: {
			linguagem: 'pt-BR',
			tema: 'escuro',
			notificacoes: {
				email: true,
				sms: false,
				push: true
			}
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
			},
			{
				id_pedido: 1002,
				data: '2025-09-22',
				valor: 89.9,
				itens: [{ produto: 'Headset USB', quantidade: 1 }]
			}
		]
	};
	return json(obj);
}
