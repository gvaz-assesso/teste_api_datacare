import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	console.log(params);

	const obj = {
		id: parseInt(params.id),
		msg: `Vc acessou a pagina ${params.id}`
	};

	return json(obj);
}
