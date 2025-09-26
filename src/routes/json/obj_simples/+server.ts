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

type MeuObjeto = {
	msg: string;
	id: number;
	// data: Date;
};

function isMeuObjeto(obj: any): obj is MeuObjeto {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		typeof obj.msg === 'string' &&
		typeof obj.id === 'number'
	);
}

export async function POST({ request }) {
	const body = await request.json();
	console.log(body);

	if (isMeuObjeto(body)) {
		return json({ msg: 'post feito corretamente' }, { status: 201 });
	}
	return json({ msg: 'post com erros' }, { status: 403 });
}
