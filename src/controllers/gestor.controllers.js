import { knex } from '../config/db.js';

export const readGestor = async (req, res) => {
	try {
		const response = await knex.select().from('gestor');
		res.status(200).json(response);
	} catch (error) {
		console.log(error);
	}
};
