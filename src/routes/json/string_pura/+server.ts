import { json } from '@sveltejs/kit';

export async function GET() {
	const obj = {
		id: 1,
		nome: 'João Silva',
		email: 'joao.silva@example.com',
		idade: 28,
		ativo: true
	};

	return new Response(JSON.stringify(obj), { status: 200 });
}

type MeuObjeto = {
	msg: string;
	id: string;
	// data: Date;
};

function isMeuObjeto(obj: any): obj is MeuObjeto {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		typeof obj.msg === 'string' &&
		typeof obj.id === 'string'
	);
}
export async function POST({ request }) {
	const body = await request.json();
	console.log('Foi recebido a requisição', body);

	if (isMeuObjeto(body)) {
		return new Response(`post feito corretamente | id: ${body.id} | msg: ${body.msg}`, {
			status: 201
		});
	}

	return new Response('post com erros', { status: 401 });
}
