import { json } from '@sveltejs/kit';

export function GET({ request }) {
	const chaveApi = request.headers.get('x-api-key');

	const obj = {
		msg: 'autenticado'
	};

	if (chaveApi != 'chave_da_api') {
		obj.msg = 'nao autenticado';
		return json(obj, { status: 401 });
	}

	return json(obj, { status: 200 });
}
