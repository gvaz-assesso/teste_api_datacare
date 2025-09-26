import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

type ObjSimples = {
	id: number;
	msg: string;
};

export const POST: RequestHandler = async ({ request }) => {
	const { id } = await request.json();

	// array simples baseado no id
	const arr: ObjSimples[] = [
		{ id, msg: `Item A para id=${id}` },
		{ id, msg: `Item B para id=${id}` },
		{ id, msg: `Item C para id=${id}` }
	];

	return json(arr, { status: 200 });
};
