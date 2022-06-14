import { knex } from '../config/db.js';

export const deleteParque = async (req, res) => {
	const { body } = req;
	const { id } = body;
	await knex.del().from('parque').where('id_parque', id);
	res.status(200).send('Borrado');
};

export const readParque = async (req, res) => {
	const response = await knex.select().from('parque');
	res.status(200).json(response);
};

export const addParque = async (req, res) => {
	const { body } = req;
	await knex.insert(body).from('parque');
	res.status(200).send('Producto agregado');
};

export const editParque = async (req, res) => {
	const { body } = req;
	const {
		id_parque,
		nombre_parque,
		organizacion_resposable,
		fecha_declaracion,
		id_gestor1,
	} = body;
	const obj = {
		nombre_parque,
		organizacion_resposable,
		fecha_declaracion,
		id_gestor1,
	};
	await knex.from('parque').update(obj).where('id_parque', id_parque);
	res.status(200).send('Parque actualizado');
};
