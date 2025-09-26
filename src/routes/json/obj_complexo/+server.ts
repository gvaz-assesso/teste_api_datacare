import { json } from '@sveltejs/kit';

type MeuObjeto = {
	msg: string;
	id: number;
	item: {
		nome: string;
		preco: number;
		cat: string[];
	};
};

const dados: MeuObjeto[] = [
	{
		msg: 'Objeto 1',
		id: 1,
		item: {
			nome: 'Teclado Mecânico',
			preco: 199.9,
			cat: ['periférico', 'gaming']
		}
	},
	{
		msg: 'Objeto 2',
		id: 2,
		item: {
			nome: 'Mouse Gamer',
			preco: 89.9,
			cat: ['periférico', 'gaming']
		}
	},
	{
		msg: 'Objeto 3',
		id: 3,
		item: {
			nome: 'Headset USB',
			preco: 129.5,
			cat: ['periférico', 'audio']
		}
	}
];

export const GET = async () => {
	return json(dados, { status: 200 });
};

// Função de checagem
function isMeuObjeto(obj: any): obj is MeuObjeto {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		typeof obj.msg === 'string' &&
		typeof obj.id === 'number' &&
		typeof obj.item === 'object' &&
		obj.item !== null &&
		typeof obj.item.nome === 'string' &&
		typeof obj.item.preco === 'number' &&
		Array.isArray(obj.item.cat) &&
		obj.item.cat.every((c: any) => typeof c === 'string')
	);
}

// Checagem para array de objetos
function isMeuObjetoArray(arr: any): arr is MeuObjeto[] {
	return Array.isArray(arr) && arr.every(isMeuObjeto);
}

export async function POST({ request }) {
	const body = await request.json();
	console.log(body);

	if (Array.isArray(body)) {
		if (isMeuObjetoArray(body)) {
			return json({ msg: 'array postado corretamente' }, { status: 201 });
		}
	} else {
		if (isMeuObjeto(body)) {
			return json({ msg: 'objeto postado corretamente' }, { status: 201 });
		}
	}

	return json({ msg: 'post com erros' }, { status: 403 });
}
