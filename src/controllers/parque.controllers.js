import { knex } from '../config/db.js';

export const deleteParque = async (req, res) => {
	const { body } = req;
	console.log(body);
	const { id_parque } = body;
	console.log(id_parque);
	await knex.del().from('parque').where('id_parque', id_parque);
	res.status(200).send(
		'<script type="text/javascript">alert("Parque eliminado");window.location.href = "http://localhost:8080/menu/parque.html";</script>',
	);
};

export const addParque = async (req, res) => {
	const { body } = req;
	await knex.insert(body).from('parque');
	res.status(200).send(
		'<script type="text/javascript">alert("Parque agregado");window.location.href = "http://localhost:8080/menu/parque.html";</script>',
	);
};

export const editParque = async (req, res) => {
	const { body } = req;
	const {
		id_parque,
		nombre_parque,
		organizacion_resposable,
		dir_parque,
		fecha_declaracion,
		id_gestor1,
	} = body;
	const obj = {
		nombre_parque,
		organizacion_resposable,
		dir_parque,
		fecha_declaracion,
		id_gestor1,
	};
	await knex.from('parque').update(obj).where('id_parque', id_parque);
	res.status(200).send(
		'<script type="text/javascript">alert("Parque agregado");window.location.href = "http://localhost:8080/menu/parque.html";</script>',
	);
};

export const renderAddParque = async (req, res) => {
	const response = await knex.select().from('gestor');

	res.render('parque/addParque', { response });
};

export const renderEditParque = async (req, res) => {
	const response = await knex.select().from('parque');
	const gestor = await knex.select().from('gestor');

	res.render('parque/updateParque', { response, gestor });
};

export const renderDeleteParque = async (req, res) => {
	const response = await knex.select().from('parque');

	res.render('parque/deleteParque', { response });
};

export const renderReadParque = async (req, res) => {
	const response = await knex.select().from('parque');

	res.render('parque/readParque', { response });
};

export const readParque = async (req, res) => {
	const response = await knex.select().from('parque');
	res.status(200).json(response);
};
