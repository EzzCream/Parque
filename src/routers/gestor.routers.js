import express from 'express';
import * as Gestor from '../controllers/gestor.controllers.js';

const router = express.Router();

router.post('/addGestor', Gestor.addGestor);

router.post('/editGestor', Gestor.editGestor);

router.post('/deleteGestor', Gestor.deleteGestor);

router.get('/crear', Gestor.renderaddGestor);

router.get('/actualizar', Gestor.renderEditGestor);

router.get('/eliminar', Gestor.renderDeleteGestor);

router.get('/consultar', Gestor.renderReadGestor);

export default router;
