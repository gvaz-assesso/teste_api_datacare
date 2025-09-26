import { json } from '@sveltejs/kit';

export async function GET() {
	const obj = {
		id: 1,
		nome: 'João Silva',
		email: 'joao.silva@example.com',
		idade: 28,
		ativo: true
	};

	return json(obj);
}
