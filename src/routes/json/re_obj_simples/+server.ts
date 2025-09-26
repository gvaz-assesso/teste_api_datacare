import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

type ObjSimples = {
	id: number;
	msg: string;
};

export const POST: RequestHandler = async ({ request }) => {
	const { id } = await request.json();

	// retorna objeto simples baseado no id
	const obj: ObjSimples = {
		id,
		msg: `Objeto simples com id=${id}`
	};

	return json(obj, { status: 200 });
};
