import { json } from '@sveltejs/kit';

type MeuObjeto = {
	nome: string;
	id: string;
	item: {
		categoria: string;
		preco: string;
	};
};

const dados: MeuObjeto = {
	nome: 'Objeto 1',
	id: '1',
	item: {
		categoria: 'Teclado Mecânico',
		preco: '199.9'
	}
};

export const GET = async () => {
	return json(dados, { status: 200 });
};

// Função de checagem
function isMeuObjeto(obj: any): obj is MeuObjeto {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		typeof obj.nome === 'string' &&
		typeof obj.id === 'string' &&
		typeof obj.item === 'object' &&
		obj.item !== null &&
		typeof obj.item.categoria === 'string' &&
		typeof obj.item.preco === 'string' &&
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
