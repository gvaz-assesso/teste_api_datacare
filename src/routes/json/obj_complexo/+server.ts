import { json } from '@sveltejs/kit';

type Post = {
	id: string;
	titulo: string;
	date: string;
	coments: {
		id: string;
		autor: string;
		text: string;
		date: string;
		id_post: string;
	}[];
};

const dados: Post[] = [
	{
		id: '1',
		titulo: 'olar',
		date: '01-12-2023',
		coments: [
			{
				id: '1',
				autor: 'carlos',
				text: 'muito bom',
				date: '01-12-2024',
				id_post: '1'
			},
			{
				id: '2',
				autor: 'maria',
				text: 'muito bom',
				date: '01-12-2024',
				id_post: '1'
			}
		]
	}
];

export const GET = async () => {
	return json(dados, { status: 200 });
};

// Função de checagem
// function isMeuObjeto(obj: any): obj is Post {
// 	return (
// 		typeof obj === 'object' &&
// 		obj !== null &&
// 		typeof obj.msg === 'string' &&
// 		typeof obj.id === 'number' &&
// 		typeof obj.item === 'object' &&
// 		obj.item !== null &&
// 		typeof obj.item.nome === 'string' &&
// 		typeof obj.item.preco === 'number' &&
// 		Array.isArray(obj.item.cat) &&
// 		obj.item.cat.every((c: any) => typeof c === 'string')
// 	);
// }

// Checagem para array de objetos
// function isMeuObjetoArray(arr: any): arr is MeuObjeto[] {
// 	return Array.isArray(arr) && arr.every(isMeuObjeto);
// }

export async function POST({ request }) {
	const body = await request.json();
	console.log(body);

	if (Array.isArray(body)) {
		// if (isMeuObjetoArray(body)) {
		return json(
			{ msg: 'array postado corretamente', obj_og: JSON.stringify(body) },
			{ status: 201 }
		);
		// }
	} else {
		// if (isMeuObjeto(body)) {

		return json(
			{ msg: 'array postado corretamente', obj_og: JSON.stringify(body) },
			{ status: 201 }
		);
		// }
	}

	return json({ msg: 'post com erros' }, { status: 403 });
}
