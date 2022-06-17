import { knex } from '../config/db.js';

export const addGestor = async (req, res) => {
	const { body } = req;
	await knex.insert(body).from('gestor');
	res.status(200).send(
		'<script type="text/javascript">alert("Gestor agregado");window.location.href = "http://localhost:8080/menu/gestor.html";</script>',
	);
};

export const renderaddGestor = async (req, res) => {
	res.render('gestor/addGestor', {});
};

export const editGestor = async (req, res) => {
	const { body } = req;
	const {
		id_gestor,
		cod_entrada,
		nombre_gestor,
		numero_ss,
		telefono,
		sueldo,
	} = body;
	const obj = {
		cod_entrada,
		nombre_gestor,
		numero_ss,
		telefono,
		sueldo,
	};
	await knex.from('gestor').update(obj).where('id_gestor', id_gestor);
	res.status(200).send(
		'<script type="text/javascript">alert("Gestor editado");window.location.href = "http://localhost:8080/menu/gestor.html";</script>',
	);
};

export const renderEditGestor = async (req, res) => {
	const response = await knex.select().from('gestor');

	res.render('gestor/editGestor', { response });
};

export const deleteGestor = async (req, res) => {
	const { body } = req;
	const { id_gestor } = body;

	await knex.del().from('parque').where('id_gestor1', id_gestor);
	await knex.del().from('gestor').where('id_gestor', id_gestor);

	res.status(200).send(
		'<script type="text/javascript">alert("Gestor editado");window.location.href = "http://localhost:8080/menu/gestor.html";</script>',
	);
};

export const renderDeleteGestor = async (req, res) => {
	const response = await knex.select().from('gestor');

	res.render('gestor/deleteGestor', { response });
};

export const renderReadGestor = async (req, res) => {
	const response = await knex.select().from('gestor');

	res.render('gestor/readGestor', { response });
};
