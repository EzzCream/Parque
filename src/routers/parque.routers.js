import express from 'express';
import * as Parque from '../controllers/parque.controllers.js';

const router = express.Router();

router.post('/deleteParque', Parque.deleteParque);

router.post('/addParque', Parque.addParque);

router.post('/updateParque', Parque.editParque);

router.get('/crear', Parque.renderAddParque);

router.get('/actualizar', Parque.renderEditParque);

router.get('/eliminar', Parque.renderDeleteParque);

router.get('/consultar', Parque.renderReadParque);

export default router;
