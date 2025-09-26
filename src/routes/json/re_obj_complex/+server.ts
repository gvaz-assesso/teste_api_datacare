import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

type ObjComplexo = {
	id: number;
	msg: string;
	item: {
		nome: string;
		preco: number;
		cat: string[];
	};
};

export const POST: RequestHandler = async ({ request }) => {
	const { id } = await request.json();

	// objeto complexo baseado no id
	const obj: ObjComplexo = {
		id,
		msg: `Objeto complexo com id=${id}`,
		item: {
			nome: 'Produto Exemplo',
			preco: 199.9 + id, // só pra variar com o id
			cat: ['categoria1', 'categoria2']
		}
	};

	return json(obj, { status: 200 });
};
