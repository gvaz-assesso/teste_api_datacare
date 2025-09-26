import { json } from '@sveltejs/kit';

export async function GET() {
	const obj = [
		{
			id: 1,
			nome: 'João Silva',
			email: 'joao.silva@example.com',
			idade: 28,
			ativo: true
		},
		{
			id: 2,
			nome: 'Maria Souza',
			email: 'maria.souza@example.com',
			idade: 32,
			ativo: false
		},
		{
			id: 3,
			nome: 'Carlos Oliveira',
			email: 'carlos.oliveira@example.com',
			idade: 25,
			ativo: true
		}
	];

	return json(obj);
}
