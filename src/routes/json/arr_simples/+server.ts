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

type MeuObjeto = {
	msg: string;
	id: number;
};

function isMeuObjeto(obj: any): obj is MeuObjeto {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		typeof obj.msg === 'string' &&
		typeof obj.id === 'number' &&
		obj.data instanceof Date
	);
}

// 🔍 checagem para array de objetos
function isMeuObjetoArray(arr: any): arr is MeuObjeto[] {
	return (
		Array.isArray(arr) && arr.every((item) => isMeuObjeto({ ...item, data: new Date(item.data) }))
	);
}

export async function POST({ request }) {
	const body = await request.json();
	console.log(body);

	// ✅ transforma `data` em Date para cada item do array
	if (isMeuObjetoArray(body)) {
		return json({ msg: 'array postado corretamente' }, { status: 201 });
	}

	return json({ msg: 'post com erros' }, { status: 403 });
}
